/**
 * @overview ccm component for rendering a quiz
 * @author André Kless <andre.kless@web.de> 2016-2017
 * @license The MIT License (MIT)
 */

( function () {

  var ccm_version = '8.0.0';
  var ccm_url     = '../js/ccm.js';

  var component_name = 'quiz';
  var component_obj  = {

    name: component_name,

    config: {
      questions: {},
      html_templates: {
        start: {
          id: 'start',
          inner: {
            tag: 'button',
            inner: '%caption%',
            onclick: '%click%'
          }
        },
        main: {
          id: 'main',
          inner: [
            { id: 'questions' },
            {
              id: 'nav',
              inner: [
                { id: 'prev' },
                { id: 'next' },
                { id: 'finish' },
                { id: 'timer' }
              ]
            }
          ]
        },
        question: {
          id: '%id%',
          class: 'question',
          inner: [
            {
              class: 'title',
              inner: [
                { inner: '%question%' },
                { inner: '%nr%' },
                { inner: '%text%' }
              ]
            },
            {
              class: 'description',
              inner: '%description%'
            },
            { class: 'answers' }
          ]
        },
        answer: {
          id: '%id%',
          class: 'answer %class%',
          inner: [
            {
              class: 'entry',
              inner: {
                class: 'text',
                inner: {
                  tag: 'label',
                  inner: '%text%',
                  for: '%id%-input'
                }
              }
            },
            { class: 'comment' }
          ]
        },
        timer: {
          tag: 'span',
          inner: '%%'
        }
      },
      css_layout: [ 'ccm.load', '../css/quiz.css' ],
      placeholder: {
        start: 'Start',
        question: 'Question',
        prev: 'Previous',
        submit: 'Submit',
        next: 'Next',
        finish: 'Finish'
      }

  //  answers: [],
  //  correct: [],
  //  encode: true,
  //  shuffle: true,
  //  random: true,
  //  input: 'radio',
  //  attributes: {},
  //  feedback: true,
  //  swap: true,
  //  anytime_finish: true,
  //  start_button: true,
  //  time: 60,
  //  user: [ 'ccm.instance', './../../ccm-components/user/ccm.user.js' ],
  //  logger: [ 'ccm.instance', './../../ccm-components/log/ccm.log.js', [ 'ccm.get', './../../ccm-components/log/configs.json', 'greedy' ] ],
  //  onchange: function ( instance, data ) { console.log( data ); },
  //  oninput: function ( instance, data ) { console.log( data ); },
  //  onprev: function ( instance, data ) { console.log( data ); },
  //  onvalidation: function ( instance, data ) { console.log( data ); return true; },
  //  onfeedback: function ( instance, data ) { console.log( data ); },
  //  onnext: function ( instance, data ) { console.log( data ); },
  //  onfinish: function ( instance, results ) { console.log( results ); }

    },

    Instance: function () {

      var self = this;
      var my;           // contains privatized instance members

      this.init = function ( callback ) {

        // support declarative way for defining a quiz via inner HTML
        convertInnerHTML();

        callback();

        /** converts inner HTML to instance configuration data */
        function convertInnerHTML() {

          if ( !self.node ) return;
          var questions = [];
          self.ccm.helper.makeIterable( self.node.children ).map( function ( question_tag ) {
            if ( question_tag.tagName !== 'CCM-QUIZ-QUESTION' ) return;
            var question = self.ccm.helper.generateConfig( question_tag );
            question.answers = [];
            question.correct = [];
            self.ccm.helper.makeIterable( question.node.children ).map( function ( answer_tag ) {
              if ( answer_tag.tagName !== 'CCM-QUIZ-ANSWER' ) return;
              var answer = self.ccm.helper.generateConfig( answer_tag );
              if ( answer.correct !== undefined )
                if ( question.input === 'radio' )
                  question.correct = question.answers.length;
                else
                  question.correct[ question.answers.length ] = question.input === 'number' ? parseInt( answer.correct ) : answer.correct;
              delete answer.node; delete answer.correct;
              question.answers.push( answer );
            } );
            delete question.node;
            questions.push( question );
          } );
          if ( questions.length > 0 ) self.questions = questions;

        }

      };

      this.ready = function ( callback ) {

        // privatize all possible instance members
        my = self.ccm.helper.privatize( self );

        // support different forms of data structure
        uniformData();

        callback();

        /** brings given data to uniform data structure */
        function uniformData() {

          // questions could be given without array as single object if quiz has only one question
          if ( !Array.isArray( my.questions ) ) my.questions = [ my.questions ];

          // iterate over all questions
          my.questions.map( function ( question ) {

            // consider default question values from config
            self.ccm.helper.integrate( self.ccm.helper.filterProperties( my, 'text', 'description', 'answers', 'input', 'attributes', 'swap', 'encode', 'random', 'feedback', 'correct' ), question, true );

            // default input type is checkbox
            if ( !question.input ) question.input = 'checkbox';

            // question answers could be given without array as single value if question has only one answer
            if ( !Array.isArray( question.answers ) ) question.answers = [ question.answers ];

            // answers could be given as single string instead of object
            for ( var i = 0; i < question.answers.length; i++ )
              if ( !self.ccm.helper.isObject( question.answers[ i ] ) )
                question.answers[ i ] = { text: question.answers[ i ] };

            // information about correct answer with only one answer could be given without array as single value
            if ( question.input !== 'radio' && !Array.isArray( question.correct ) ) question.correct = [ question.correct ];

            // informations about correct answers of a multiple choice question could be given as integer array instead of boolean array
            if ( question.input === 'checkbox' && typeof question.correct[ 0 ] === 'number' ) {
              var correct = [];
              for ( var i = 0; i < question.answers.length; i++ )
                correct.push( question.correct.indexOf( i ) >= 0 );
              question.correct = correct;
            }

            // fill up array of informations about correct answers with default values
            if ( Array.isArray( question.correct ) )
              for ( var i = 0; i < question.answers.length; i++ )
                if ( question.correct[ i ] === undefined )
                  question.correct[ i ] = question.input === 'checkbox' ? false : '';

            // iterate over all answers (find data that must be converted to uniform data structure)
            question.answers.map( function ( answer ) {

              // consider default answer values from question data
              self.ccm.helper.integrate( self.ccm.helper.filterProperties( question, 'attributes', 'swap', 'encode' ), answer, true );

            } );

            // remove no more needed question properties
            delete question.attributes; delete question.swap;

          } );

          // remove no more needed instance configuration properties
          delete my.text; delete my.description; delete my.answers; delete my.input; delete my.attributes; delete my.swap; delete my.encode; delete my.random; delete my.feedback; delete my.correct;

        }

      };

      this.start = function ( callback ) {

        // no start button? => start quiz
        if ( !my.start_button ) return start();

        // has logger instance? => log 'render' event
        if ( self.logger ) self.logger.log( 'render' );

        // render start button (start quiz when button is clicked)
        self.ccm.helper.setContent( self.element, self.ccm.helper.protect( self.ccm.helper.html( my.html_templates.start, {
          caption: my.placeholder.start,
          click: start
        } ) ) );

        /** starts the quiz */
        function start() {

          /**
           * index of current question
           * @type {number}
           */
          var current_question = 0;

          /**
           * which questions are already evaluated?
           * @type {Object.<number,boolean>}
           */
          var evaluated = {};

          /**
           * is quiz already finished?
           * @type {boolean}
           */
          var finished = false;

          /**
           * result data
           * @type {object}
           */
          var results = { details: [] };

          // has logger instance? => log 'start' event
          if ( self.logger ) self.logger.log( 'start', self.ccm.helper.clone( my ) );

          // prepare main HTML structure
          var main_elem = self.ccm.helper.html( my.html_templates.main );

          var   prev_elem = main_elem.querySelector( '#prev'   );
          var   next_elem = main_elem.querySelector( '#next'   );
          var finish_elem = main_elem.querySelector( '#finish' );
          var  timer_elem = main_elem.querySelector( '#timer'  );

          // only one question? => remove containers for 'prev' and 'next' button
          if ( my.questions.length === 1 ) {
            self.ccm.helper.removeElement( prev_elem );
            self.ccm.helper.removeElement( next_elem );
          }

          // each question knows her original number and HTML ID
          my.questions.map( function ( question, i ) { question.nr = i + 1; question.id = 'question-' + question.nr; } );

          // want random order for the questions? => shuffle questions
          if ( my.shuffle ) self.ccm.helper.shuffleArray( my.questions );

          // render all questions and show only first one
          my.questions.map( renderQuestion );
          showQuestion();

          // render timer in case of time limited quiz
          renderTimer();

          // set content of own website area
          self.ccm.helper.setContent( self.element, self.ccm.helper.protect( main_elem ) );

          if ( callback ) callback();

          /**
           * renders a specific question
           * @param {object} question - question data
           * @param {number} i - question index
           */
          function renderQuestion( question, i ) {

            // prepare question HTML structure
            question.elem = self.ccm.helper.html( my.html_templates.question, {
              question:    my.placeholder.question,
              id:          question.id,
              nr:          i + 1,
              text:        question.encode ? self.ccm.helper.htmlEncode( question.text ) : question.text,
              description: question.description
            } );

            // no description? => remove description container
            if ( !question.description ) self.ccm.helper.removeElement( question.elem.querySelector( '.description' ) );

            // each answer knows her original number, HTML class and HTML ID
            question.answers.map( function ( answer, i ) { answer.nr = i + 1; answer.class = 'answer-' + answer.nr; answer.id = question.id + '-' + answer.class; } );

            // want random order for the answers? => shuffle answers
            if ( question.random ) self.ccm.helper.shuffleArray( question.answers );

            // render question answers
            question.answers.map( renderAnswer );

            // add question to main HTML structure
            main_elem.querySelector( '#questions' ).appendChild( question.elem );

            /**
             * renders a specific answer
             * @param {object} answer - answer data
             */
            function renderAnswer( answer ) {

              // prepare answer HTML structure
              answer.elem = self.ccm.helper.html( my.html_templates.answer, {
                id: answer.id,
                class: answer.class,
                text: answer.encode ? self.ccm.helper.htmlEncode( answer.text ) : answer.text
              } );
              addInput();

              // add answer to main HTML structure
              question.elem.querySelector( '.answers' ).appendChild( answer.elem );

              /** adds the input field */
              function addInput() {

                // prepare ccm HTML data of the input field
                var input_html = {
                  tag: 'input',
                  type: question.input,
                  name: answer.id,
                  id: answer.id + '-input',
                  oninput: function () {

                    // prepare event data
                    var event_data = { question: question.nr, answer: answer.nr, value: this.value };

                    // has logger instance? => log 'input' event
                    if ( self.logger ) self.logger.log( 'input', event_data );

                    // has individual 'input' callback? => perform it
                    if ( self.oninput ) self.oninput( self, event_data );

                  },
                  onchange: function () {

                    // prepare event data
                    var event_data = { question: question.nr, answer: answer.nr, value: this.value };

                    // has logger instance? => log 'change' event
                    if ( self.logger ) self.logger.log( 'change', event_data );

                    // has individual 'change' callback? => perform it
                    if ( self.onchange ) self.onchange( self, event_data );

                  }
                };

                // radio buttons? => set same name and different value
                if ( question.input === 'radio' ) { input_html.name = question.id; input_html.value = answer.nr - 1; }

                // add individual attributes to input field
                self.ccm.helper.integrate( answer.attributes, input_html );

                // add input field to HTML structure of the answer
                var entry_elem = answer.elem.querySelector( '.entry' );
                var input_elem = self.ccm.helper.html( { class: 'input', inner: input_html } );
                if ( answer.swap ) {
                  entry_elem.appendChild( input_elem );
                  entry_elem.classList.add( 'swap' );
                }
                else
                  entry_elem.insertBefore( input_elem, entry_elem.firstChild );

              }

            }

          }

          /** shows current question (and hides all others) */
          function showQuestion() {

            // hide all questions and show only current question
            self.ccm.helper.makeIterable( main_elem.querySelectorAll( '.question' ) ).map( function ( question_elem ) { question_elem.style.display = 'none'; } );
            my.questions[ current_question ].elem.style.display = 'block';

            // update navigation buttons
            updateNav();

          }

          /** (re)renders navigation buttons */
          function updateNav() {

            /**
             * current question data
             * @type {object}
             */
            var question = my.questions[ current_question ];

            // more than one question? => render 'prev' and 'next' button
            if ( my.questions.length > 1 ) {

              // render 'prev' button
              self.ccm.helper.setContent( prev_elem, self.ccm.helper.protect( self.ccm.helper.html( {
                tag: 'button',
                disabled: current_question === 0,
                inner: my.placeholder.prev,
                onclick: previousQuestion
              } ) ) );

              // render 'submit' or 'next' button
              self.ccm.helper.setContent( next_elem, self.ccm.helper.protect( self.ccm.helper.html( {
                tag: 'button',
                disabled: current_question === my.questions.length - 1 && ( !question.feedback || evaluated[ question.nr ] ),
                inner: my.placeholder[ question.feedback && !evaluated[ question.nr ] ? 'submit' : 'next' ],
                onclick: question.feedback && !evaluated[ question.nr ] ? function () { evaluate( question ) } : nextQuestion
              } ) ) );

            }

            // render 'finish' button
            if ( !finished ) self.ccm.helper.setContent( finish_elem, self.ccm.helper.protect( self.ccm.helper.html( {
              tag: 'button',
              disabled: !my.anytime_finish && ( current_question !== my.questions.length - 1 || question.feedback && !evaluated[ question.nr ] ),
              inner: my.placeholder.finish,
              onclick: onFinish
            } ) ) );

            /** switch to previous question */
            function previousQuestion() {

              // decrease current question number
              current_question--;

              // show previous question
              showQuestion();

              // has logger instance? => log 'prev' event
              if ( self.logger ) self.logger.log( 'prev', current_question );

              // has individual 'prev' callback? => perform it
              if ( self.onPrev ) self.onPrev( self, current_question );

            }

            /** switch to next question */
            function nextQuestion() {

              // increase current question number
              current_question++;

              // show next question
              showQuestion();

              // has logger instance? => log 'next' event
              if ( self.logger ) self.logger.log( 'next', current_question );

              // has individual 'next' callback? => perform it
              if ( self.onNext ) self.onNext( self, current_question );

            }

          }

          /**
           * evaluates a question
           * @param {object} [question] - question data (default: evaluate all questions)
           */
          function evaluate( question ) {

            // no specific question? => show feedback for all questions
            if ( !question ) return my.questions.map( evaluate );

            // question is already evaluated? => abort
            if ( results.details[ question.nr - 1 ] ) return;

            // prepare event data
            var event_data = { question: question.nr, input: getResult() };

            // has individual 'validation' callback? => perform it
            if ( self.onvalidation && !self.onvalidation( self, self.ccm.helper.clone( event_data ) ) ) return;

            // add solution information to event data
            event_data.correct = question.correct;

            // has logger instance? => log 'feedback' event
            if ( self.logger ) self.logger.log( 'feedback', event_data );

            // has individual 'feedback' callback? => perform it
            if ( self.onfeedback ) self.onfeedback( self, self.ccm.helper.clone( event_data ) );

            // add result data of this question to result data of hole quiz
            delete event_data.question;
            results.details[ question.nr - 1 ] = event_data;

            // disable evaluated input fields
            self.ccm.helper.makeIterable( question.elem.querySelectorAll( 'input' ) ).map( function ( input_field ) { input_field.disabled = true; } );

            // show visual feedback for this question
            showFeedback();

            // next time show next question instead of feedback
            evaluated[ question.nr ] = true;

            // update navigation buttons
            updateNav();

            /**
             * get input field values of this question
             * @returns {Array|number}
             */
            function getResult() {

              var values = self.ccm.helper.formData( question.elem );
              if ( question.input === 'radio' ) return parseInt( values[ Object.keys( values )[ 0 ] ] );
              var array = [];
              for ( var i in values )
                array.push( question.input === 'checkbox' ? !!values[ i ] : values[ i ] );
              return array;

            }

            /** gives the user a visual feedback */
            function showFeedback() {

              // iterate over all answers of this question
              question.answers.map( function ( answer ) {

                // render answer comment
                if ( answer.comment ) answer.elem.querySelector( '.comment' ).innerHTML = answer.comment;

                // no informations about correct answer? => abort
                if ( event_data.correct === undefined ) return;

                // is single choice? => abort
                if ( question.input === 'radio' ) return;

                /**
                 * correct value for this answer
                 * @type {boolean|number|string}
                 */
                var correct = event_data.correct[ answer.nr - 1 ];

                /**
                 * input value for this answer
                 * @type {boolean|number|string}
                 */
                var input = event_data.input[ answer.nr - 1 ];

                // user gives correct value for this answer? => mark answer as right
                if ( input !== '' && input !== false && input === correct ) answer.elem.classList.add( 'right' );

                // user gives wrong value for this answer? => mark answer as wrong
                if ( input !== '' && input !== false && input !== correct ) answer.elem.classList.add( 'wrong' );

                // user gives no value for a correct answer? => mark missed correct answer as correct
                if ( ( input === '' || input === false ) && correct !== '' && correct !== false ) answer.elem.classList.add( 'correct' );

                // number or text input field and user gives not correct value? => show user correct value (via placeholder attribute)
                if ( question.input !== 'checkbox' && correct !== '' && input !== correct ) {
                  var input_tag = answer.elem.querySelector( 'input' );
                  input_tag.value = '';
                  input_tag.setAttribute( 'placeholder', correct );
                }

              } );

              // no informations about correct answers? => abort
              if ( event_data.correct === undefined ) return;

              // is single choice?
              if ( question.input === 'radio' ) {

                /**
                 * correct value for this answer
                 * @type {number}
                 */
                var correct = event_data.correct;

                /**
                 * input value for this answer
                 * @type {number}
                 */
                var input = event_data.input;

                /**
                 * prefix of the HTML ID of an answer
                 * @type {string}
                 */
                var id_prefix = '#' + question.id + '-answer-';

                // user chooses correct answer? => mark as right
                if ( event_data.input === correct )
                  question.elem.querySelector( id_prefix + ( input + 1 ) ).classList.add( 'right' );
                else {
                  // user chooses wrong answer? => mark user answer as wrong
                  if ( !isNaN( event_data.input ) ) question.elem.querySelector( id_prefix + ( input + 1 ) ).classList.add( 'wrong' );
                  // mark missed correct answer as correct
                  question.elem.querySelector( id_prefix + ( correct + 1 ) ).classList.add( 'correct' );
                }

              }

            }

          }

          /** renders the timer */
          function renderTimer() {

            var timer_value = my.time;

            // no limited time? => remove timer button and abort
            if ( !my.time ) return self.ccm.helper.removeElement( timer_elem );

            // start timer
            timer();

            /** updates countdown timer */
            function timer() {

              // already finished? => stop timer
              if ( !timer_elem ) return;

              // (re)render timer value
              self.ccm.helper.setContent( timer_elem, self.ccm.helper.html( my.html_templates.timer, timer_value ) );

              // countdown
              if ( timer_value-- )
                self.ccm.helper.wait( 1000, timer );
              else if ( finish_elem )
                onFinish();           // perform finish callback at timeout

            }

          }

          /** onclick callback for finish button */
          function onFinish() {

            // has user instance? => login user
            if ( self.user ) self.user.login( proceed ); else proceed();

            function proceed() {

              // make sure that user could not use finish button again
              finished = true;
              self.ccm.helper.removeElement( finish_elem );
              self.ccm.helper.removeElement(  timer_elem );

              // evaluate all not already evaluated questions
              evaluate();

              // finalize result data
              if ( self.user ) results.user = self.user.data().key;

              // has logger instance? => log finish event
              if ( self.logger ) self.logger.log( 'finish', results );

              // provide result data
              self.ccm.helper.onFinish( self, results );

            }

          }

        }

      };

    }

  };

  var namespace = window.ccm && ccm.components[ component_name ]; if ( namespace ) { if ( namespace.ccm_version ) ccm_version = namespace.ccm_version; if ( namespace.ccm_url ) ccm_url = namespace.ccm_url; }
  if ( !window.ccm || !ccm[ ccm_version ] ) { var tag = document.createElement( 'script' ); document.head.appendChild( tag ); tag.onload = register; tag.src = ccm_url; } else register();
  function register() { ccm[ ccm_version ].component( component_obj ); }
}() );