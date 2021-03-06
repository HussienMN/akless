/**
 * @overview ccm instance configurations
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
ccm.files[ "configs.min.js" ] = {
  "le": {
    "topic": "HTML-Grundgerüst",
    "innerHTML": "<script src=https://akless.github.io/ccm-components/quiz/versions/ccm.quiz-1.0.0.min.js></script><script src=https://akless.github.io/ccm-components/cloze/versions/ccm.cloze-1.0.0.min.js></script><h2>1. Motivation, Lernziele und Voraussetzungen</h2><p>Eine <a href=https://de.wikipedia.org/wiki/Webseite>Webseite</a> besteht nicht nur allein aus ihrem Inhalt. Dies wird vor allem dann klar, wenn man sich das <a href=https://de.wikipedia.org/wiki/Hypertext_Markup_Language>HTML</a>-Grundgerüst einer Webseite anschaut. Neben dem Inhalt, gilt es zum Beispiel auch für eine Webseite den Titel und die Zeichenkodierung festzulegen, damit beispielsweise Umlaute auch korrekt dargestellt werden. In dieser Lerneinheit lernen Sie daher die Grundstruktur einer <a href=https://de.wikipedia.org/wiki/HTML5>HTML5</a>-basierten Webseite und deren einzelne Bestandteile kennen und auch welche davon optional sind und somit von uns nicht zwingend angegeben werden müssen. Anschließend lernen Sie dann, an welcher Stelle dieser Grundstruktur der Titel und die Zeichenkodierung festgelegt werden. Voraussetzung ist, dass Sie bereits mit dem Erstellen einer einfachen Webseite in HTML vertraut sind und wissen, was es mit der <a href=https://de.wikipedia.org/wiki/Dokumenttypdefinition>Dokumenttyp-Deklaration</a> in HTML auf sich hat. Zudem sollten Sie mit HTML-Tags vertraut sein, also wissen, was ein HTML-Tag ist, wofür man ihn nutzt und wie man ihn einsetzt.</p><ccm-le-audio src=https://akless.github.io/akless/we/html-grundgeruest/motivation.mp3></ccm-le-audio><h3>1.1 Lernziele</h3><ul><li>Ich kenne das HTML-Grundgerüst einer Webseite und die Bedeutung deren einzelner Bestandteile und weiß, welche davon optional sind.<li>Ich bin in der Lage Titel und Zeichenkodierung der Webseite in HTML festzulegen.<li>Ich kenne das minimale HTML5-Grundgerüst.</ul><h3>1.2 Voraussetzungen</h3><ul><li>Ich weiß grob, was ein Webbrowser und was eine Webseite ist.<li>Ich weiß, was HTML ist und wofür es eingesetzt wird.<li>Ich weiß, was ein HTML-Tag ist, wofür man ihn nutzt und wie man ihn einsetzt.<li>Ich weiß, was es mit der Dokumenttyp-Deklaration in HTML auf sich hat und wie diese für HTML5 konkret aussieht.<li>Ich bin in der Lage eine Webseite mit dem Inhalt \"Hallo Welt!\" in HTML zu erstellen.</ul><h2>2. Inhalt:<ccm-le-topic></ccm-le-topic></h2><ccm-le-video src=https://akless.github.io/akless/we/html-grundgeruest/screencast.mp4></ccm-le-video><h3>2.1 Dokumenttyp-Deklaration</h3><p>Jedes HTML-Dokument hat eine Grundstruktur, bei der die Webseite, egal ob wir dies angeben oder nicht, in drei fundamentale Bereiche aufgeteilt wird. Zwei dieser Bereiche kennen Sie bereits. Der erste Bereich enthält die Dokumenttyp-Deklaration, über die in der ersten Zeile des HTML-Dokuments angegeben wird, in welcher Sprache der <a href=https://de.wikipedia.org/wiki/Webbrowser>Webbrowser</a> die Webseite beim Aufrufen interpretiert.</p><ccm-le-img src=https://akless.github.io/akless/we/html-grundgeruest/image-1.jpg></ccm-le-img><h3>2.2 Kopf- und Körperbereich</h3><p>In den weiteren Zeilen des HTML-Dokuments wird über die HTML-Tags <a href=https://wiki.selfhtml.org/wiki/HTML/Dokumentstruktur_und_Aufbau/html>&lt;html></a>, <a href=https://wiki.selfhtml.org/wiki/HTML/Dokumentstruktur_und_Aufbau/head>&lt;head></a> und <a href=https://wiki.selfhtml.org/wiki/HTML/Dokumentstruktur_und_Aufbau/body>&lt;body></a> die Webseite in zwei weitere Bereiche unterteilt: Den sogenannten Kopf- und Körperbereich. Alle diese drei HTML-Tags sind in HTML5 optional und werden, sofern Sie nicht von uns im HTML-Dokument angegeben werden, automatisch vom Webbrowser beim Aufruf der Webseite ergänzt.</p><ccm-le-img src=https://akless.github.io/akless/we/html-grundgeruest/image-2.jpg></ccm-le-img><h3>2.3 \"head\" und \"body\"</h3><p>Der Körperbereich, auch \"body\" genannt, ist der zweite Bereich den Sie bereits kennen. Der \"body\" enthält die Inhalte, die vom Webbrowser innerhalb der Webseite dargestellt und von uns wie gewohnt über HTML-Tags strukturiert werden.</p><ccm-le-img src=https://akless.github.io/akless/we/html-grundgeruest/image-3.jpg></ccm-le-img><p>Dagegen sind alle im Kopfbereich, auch \"head\" genannt, angegebenen Daten unsichtbar und werden innerhalb der Webseite nicht angezeigt.<h3>2.4 &lt;html>, &lt;head> und &lt;body></h3><p>Gibt man die drei HTML-Tags &lt;html>, &lt;head> und &lt;body> im HTML-Dokument direkt selbst an, beginnt dies üblicherweise in der zweiten Zeile mit der Angabe des &lt;html>-Tags. Innerhalb des &lt;html>-Tags werden dann die beiden anderen HTML-Tags &lt;head> und &lt;body> angegeben. Der &lt;head>-Tag markiert dabei den Kopfbereich und der &lt;body>-Tag den Körperbereich. Der &lt;html>-Tag umschließt diese beiden Bereiche und enthält somit alle Daten des gesamten HTML-Dokuments.<h3>2.5 Titel der Webseite</h3><p>Das wichtigste was wir im \"head\" festlegen können und auch sollten, ist der Titel der Webseite. Diese Angabe erfolgt mit Hilfe des <a href=https://wiki.selfhtml.org/wiki/HTML/Kopfdaten/title>&lt;title></a>-Tags.</p><ccm-le-img src=https://akless.github.io/akless/we/html-grundgeruest/image-4.jpg></ccm-le-img><p>Der Titel wird zwar nicht innerhalb der Webseite dargestellt, legt dafür aber fest,<ul><li>welcher Titel in der Titelleiste des Webbrowserfensters bzw. des Tabs,<li>welcher Standardname beim Setzen eines Lesezeichens,<li>welcher Titel im Verlauf des Webbrowser und<li>welche Überschrift in Einträgen von Suchmaschinen</ul>erscheint und ist daher eine wichtige Angabe.<h3>2.6 Angabe von Meta-Daten</h3><p>Eine weitere wichtige Angabe im \"head\" ist die Festlegung der Zeichenkodierung. Geben wir diese nicht an, kann es schnell passieren, dass beispielsweise Umlaute wie \"Ä\", \"Ö\" und \"Ü\" nicht richtig dargestellt werden. Die Festlegung der Zeichenkodierung erfolgt über den <a href=https://wiki.selfhtml.org/wiki/HTML/Kopfdaten/meta>&lt;meta></a>-Tag, der zur Angabe von Meta-Informationen dient.</p><ccm-le-img src=https://akless.github.io/akless/we/html-grundgeruest/image-5.jpg></ccm-le-img><p>Üblicherweise wird als Zeichenkodierung für Webseiten UTF-8 angegeben. Die Angabe der Zeichenkodierung wird innerhalb des &lt;meta>-Tags über ein HTML-Attribut angegeben. Auf HTML-Attribute und Zeichenkodierungen wird in dieser Lerneinheit aber nicht weiter eingegangen. Nun da wir als Zeichenkodierung für die Webseite UTF-8 festgelegt haben, sollten die Umlaute in allen Webbrowsern korrekt dargestellt werden.<h3>2.7 Minimales HTML5-Grundgerüst</h3><p>Da die Angabe der HTML-Tags &lt;html>, &lt;head> und &lt;body> optional ist, enthält das minimale HTML5-Grundgerüst einer Webseite lediglich die Dokumenttyp-Deklaration. Auch wenn man den Titel und die Zeichenkodierung über den &lt;title>- und den &lt;meta>-Tag hinzufügen möchte, können die HTML-Tags &lt;html>, &lt;head> und &lt;body> auch in diesem Fall weggelassen werden.</p><ccm-le-img src=https://akless.github.io/akless/we/html-grundgeruest/image-6.jpg></ccm-le-img><p>Der Webbrowser ergänzt diese dann automatisch beim Aufruf der Webseite und ordnet die beiden HTML-Tags &lt;title> und &lt;meta> dann automatisch dem \"head\" und die Inhalte dem \"body\" zu.<h2>3. Selbsttest</h2><h3>3.1 Quiz</h3><ccm-quiz-1-0-0 key='[\"ccm.get\",\"https://akless.github.io/akless/we/html-grundgeruest/configs.min.js\",\"quiz\"]'></ccm-quiz-1-0-0><h3>3.2 Lückentext</h3><ccm-cloze-1-0-0 key='[\"ccm.get\",\"https://akless.github.io/akless/we/html-grundgeruest/configs.min.js\",\"cloze\"]'></ccm-cloze-1-0-0><h2>4. Alternative Materialien</h2><h3>4.1 HTML/Tutorials/HTML5-Grundgerüst | SELFHTML-Wiki</h3><p>Eine Einführung in das HTML5-Grundgerüst aus der Internet-Dokumentation <a href=https://de.wikipedia.org/wiki/SELFHTML>SELFHTML</a>.</p><ccm-le-link href=https://wiki.selfhtml.org/wiki/HTML/Tutorials/HTML5-Grundgerüst#Das_HTML-Element></ccm-le-link><p>Bitte beachten Sie, dass hier das minimale HTML5-Grundgerüst anders definiert wird. Bei SELFHTML ist das minimale Grundgerüst das, was <b>nach</b> dem Aufruf der Webseite zwingend vorhanden sein muss und beinhaltet deshalb auch die optionalen HTML-Tags &lt;html>, &lt;head> und &lt;body>, die beim Aufruf der Webseite vom Webbrowser, sollten diese fehlen, automatisch ergänzt werden. In dieser Lerneinheit ist mit dem minimalem Grundgerüst dagegen das gemeint, was von uns in einem HTML5-Dokument minimal angeben werden muss, weswegen hier diese drei optionalen HTML-Tags nicht mit enthalten sind. Weitere Infos zu optionalen HTML-Tags gibt es bei SELFHTML <a href=https://wiki.selfhtml.org/wiki/HTML/optionale_Tags>hier</a>.<h3>4.2 HTML basics | Intro to HTML | Khan Academy</h3><p>Einführung in das HTML-Grundgerüst aus der <a href=https://de.wikipedia.org/wiki/Khan_Academy>Khan Academy</a> mit Video und Live-Editor. Empfehlenswert für alle, die die englische Sprache ausreichend beherrschen.</p><ccm-le-link href=https://www.khanacademy.org/computing/computer-programming/html-css/intro-to-html/p/html-basics></ccm-le-link>",
    "css_file": "https://akless.github.io/akless/we/le.css",
    "font": "https://akless.github.io/ccm-components/libs/weblysleekui/font.css",
    "logo_file": "https://akless.github.io/akless/we/logo.png",
    "poster_file": "https://akless.github.io/akless/we/poster.jpg",
    "content": [ "ccm.component", "https://akless.github.io/ccm-components/content/versions/ccm.content-1.0.0.min.js" ],
    "topic_prefix": "Lerneinheit:",
    "link_prefix": "Link: ",
    "author": "André Kless"
  },
  "quiz": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/quiz.css" ],
    "feedback": true,
    "start_button": true,
    "navigation": true,
    "anytime_finish": true,
    "random": true,
    "onfinish": { "restart": true },
    "placeholder": {
      "start": "Quiz starten",
      "question": "Frage",
      "prev": "Zurück",
      "submit": "Auflösung",
      "next": "Nächste Frage",
      "finish": "Beenden"
    },
    "questions": [
      {
        "text": "Welche der folgenden aufgelisteten HTML-Tags gehören zur HTML-Grundstruktur und sind in HTML5 optional?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "encode": true,
        "answers": [
          "<!DOCTYPE html>",
          "<html>",
          "<body>",
          "<head>",
          "<title>",
          "<meta>",
          "<h1>",
          "<p>",
          "<br>"
        ],
        "correct": [ 1, 2, 3 ]
      },
      {
        "text": "Wie lautet das minimale HTML5-Grundgerüst?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "encode": true,
        "answers": [
          {
            "text": "<!DOCTYPE html>",
            "comment": "Die andern Bereiche des Grundgerüsts ergänzt der Webbrowser automatisch beim Aufruf der Webseite."
          },
          "<!DOCTYPE html><html></html>",
          "<!DOCTYPE html><html><head></head></html>",
          "<!DOCTYPE html><html><body></body></html>",
          "<!DOCTYPE html><html><head></head><body></body></html>",
          "<html></html>",
          "<html><head></head></html>",
          "<html><body></body></html>",
          "<html><head></head><body></body></html>"
        ],
        "correct": 0
      },
      {
        "text": "Welche Bedeutung hat der <html>-Tag?",
        "description": "Der &lt;html>-Tag enthält...",
        "input": "radio",
        "encode": true,
        "answers": [
          "alle Daten des gesamten HTML-Dokuments.",
          "die Inhalte, die innerhalb der Webseite dargestellt werden.",
          "Daten zur Webseite, die innerhalb der Webseite nicht angezeigt werden.",
          "die Angabe, in welcher Sprache die Webseite zu interpretieren ist.",
          "die Angabe des Titels der Webseite.",
          "die Angabe der Zeichenkodierung.",
          "das minimale HTML5-Grundgerüst.",
          "die Dokumenttyp-Deklaration.",
          "die Titelleiste des Webbrowserfensters."
        ],
        "correct": 0
      },
      {
        "text": "Welche Bedeutung hat der <body>-Tag?",
        "description": "Der &lt;body>-Tag enthält...",
        "input": "radio",
        "encode": true,
        "answers": [
          "alle Daten des gesamten HTML-Dokuments.",
          "die Inhalte, die innerhalb der Webseite dargestellt werden.",
          "Daten zur Webseite, die innerhalb der Webseite nicht angezeigt werden.",
          "die Angabe, in welcher Sprache die Webseite zu interpretieren ist.",
          "die Angabe des Titels der Webseite.",
          "die Angabe der Zeichenkodierung.",
          "das minimale HTML5-Grundgerüst.",
          "die Dokumenttyp-Deklaration.",
          "die Titelleiste des Webbrowserfensters."
        ],
        "correct": 1
      },
      {
        "text": "Welche Bedeutung hat der <head>-Tag?",
        "description": "Der &lt;head>-Tag enthält...",
        "input": "radio",
        "encode": true,
        "answers": [
          "alle Daten des gesamten HTML-Dokuments.",
          "die Inhalte, die innerhalb der Webseite dargestellt werden.",
          "Daten zur Webseite, die innerhalb der Webseite nicht angezeigt werden.",
          "die Angabe, in welcher Sprache die Webseite zu interpretieren ist.",
          "die Angabe des Titels der Webseite.",
          "die Angabe der Zeichenkodierung.",
          "das minimale HTML5-Grundgerüst.",
          "die Dokumenttyp-Deklaration.",
          "die Titelleiste des Webbrowserfensters."
        ],
        "correct": 2
      }
    ]
  },
  "cloze": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/cloze.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie nun das HTML-Grundgerüst kennen und in der Lage sind darin den Titel und die Zeichenkodierung einer Webseite festzulegen. Ergänzen Sie hierzu die fehlenden HTML-Tags.</p><code>[[<!DOCTYPE html>]]<br>[[<html>]]<br>&nbsp;&nbsp;[[<head>]]<br>&nbsp;&nbsp;&nbsp;&nbsp;[[<title>]]Titel der Webseite[[</title>]]<br>&nbsp;&nbsp;&nbsp;&nbsp;[[<meta charset=\"UTF-8\">]]<br>&nbsp;&nbsp;[[</head>]]<br>&nbsp;&nbsp;[[<body>]]<br>&nbsp;&nbsp;&nbsp;&nbsp;Hallo Welt!<br>&nbsp;&nbsp;[[</body>]]<br>[[</html>]]</code><p>Klicken Sie, wenn Sie fertig sind, auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.</p>",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  }
};