( function () {

  const component = {

    name: 'home',

    ccm: 'https://ccmjs.github.io/ccm/ccm.js',

    config: {
      html: {
        main: {
          id: 'main',
          onclick: '%onclick%',
          inner: [
            {
              tag: 'h1',
              inner: '%topic%',
              title: '%topic'
            },
            { id: 'hello' },
            {
              tag: 'p',
              inner: '%text%'
            }
          ]
        }
      },
      css: [ 'ccm.load', 'resources/default.css' ],
      owners: [ 'John', 'Jane' ],
      hello: [ 'ccm.component', '../hello/versions/ccm.hello-1.0.0.js' ]
    },

    Instance: function () {

      let $;

      this.ready = async () => {

        $ = this.ccm.helper;

      };

      this.start = async () => {

        $.setContent( this.element, $.html( this.html.main, {
          topic: 'Home',
          text: 'Welcome home.',
          onclick: () => {
            this.owners.push( $.generateKey() );
            this.start();
          }
        } ) );

        await $.asyncForEach( this.owners, async owner => {

          const instance = await this.hello.start( { name: owner } );
          this.element.querySelector( '#hello' ).appendChild( instance.root );

        } );

      }

    }

  };

  let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();