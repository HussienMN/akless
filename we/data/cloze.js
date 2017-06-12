/**
 * @overview configurations for rendering a fill-in-the-blank text
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
ccm.files[ "cloze.min.js" ] = {
  "le03": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/cloze.css" ],
    "start_button": true,
    "feedback": true,
    "text": "Ergänzen Sie in dem folgenden HTML-Code die fehlenden HTML-Tags, so dass die daraus resultierende Webseite, so wie unten in der Vorschau gezeigt, aussieht. <code> [[<h1>]]Anwendung von HTML-Tags[[</h1>]]<br>[[<h2>]]Motivation[[</h2>]]<br>[[<p>]]Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind die HTML-Tags zum Markieren von Überschriften, Paragraphen, Zeilenumbrüchen und HTML-Kommentaren einzusetzen.[[</p>]]<br>[[<!--]]<br>&lt;h2>Auskommentierung von HTML-Code&lt;/h2><br>&lt;p>Dieser Abschnitt wurde auskommentiert.&lt;/p><br>[[-->]]<br>[[<h2>]]Auswertung[[</h2>]]<br>[[<p>]]Klicken Sie auf \"Abschicken\", wenn Sie alle fehlenden HTML-Tags ergänzt haben.[[<br>]] Sie erhalten dann ein unmittelbares Feedback.[[</p>]] </code> <fieldset> <legend>Vorschau</legend> <h1>Anwendung von HTML-Tags</h1> <h2>Motivation</h2> <p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind die HTML-Tags zum Markieren von Überschriften, Paragraphen, Zeilenumbrüchen und HTML-Kommentaren einzusetzen.</p><!-- <h2>Auskommentierung von HTML-Code</h2> <p>Dieser Abschnitt wurde auskommentiert.</p>--> <h2>Auswertung</h2> <p>Klicken Sie auf \"Abschicken\", wenn Sie alle fehlenden HTML-Tags ergänzt haben.<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.</p></fieldset>",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  },
  "le04": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/cloze.css" ],
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
  },
  "le05": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/cloze.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML für einen Hyperlink ein Verweisziel, einen Tooltip und ein Download festzulegen. Ergänzen Sie hiezu im Lückentext für den Hyperlink über die Eingabefelder die entsprechenden Attribute und Zeichen, so dass der Hyperlink auf das Bild mit der Webadresse \"https://akless.github.io/akless/we/image/logo.png\" verweist, über einen Tooltip mit dem Inhalt \"Bild herunterladen\" verfügt und das über den Hyperlink das Bild nicht geöffnet, sondern heruntergeladen wird.</p><code>&lt;!DOCTYPE html><br>Hyperlink: &lt;a [[href=]]\"https://akless.github.io/akless/we/image/logo.png\" [[title=]]\"Bild herunterladen\" [[download]]>Projektlogo&lt;/a></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  },
  "le06_2": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/cloze.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML ein Audio einzubetten. Ergänzen Sie hiezu im Lückentext die Namen der fehlenden HTML-Tags und Attribute, so dass das Audio mit der Webadresse <a href=https://akless.github.io/akless/we/audio/LE06.mp3 target=_blank>https://akless.github.io/akless/we/audio/LE06.mp3</a> eingebettet wird und der Webnutzer das Audio über Buttons wie \"Play\" und \"Pause\" selbst steuern kann.</p><code>&lt;!DOCTYPE html><br>Audio:<br>&lt;[[audio]] [[controls]]><br>  &lt;[[source]] [[src]]=\"https://akless.github.io/akless/we/audio/LE06.mp3\"><br>&lt;/[[audio]]></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  },
  "le06_3": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/cloze.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML ein Bild einzubetten. Ergänzen Sie hiezu im Lückentext die Namen der fehlenden HTML-Tags und Attribute, so dass das Bild mit der Webadresse <a href=https://akless.github.io/akless/we/image/poster.jpg target=_blank>https://akless.github.io/akless/we/image/poster.jpg</a> mit einer Breite von 320 und einer Höhe von 180 eingebettet wird.</p><code>&lt;!DOCTYPE html><br>Bild: &lt;[[img]] [[src]]=\"https://akless.github.io/akless/we/image/poster.jpg\" [[width]]=\"320\" [[height]]=\"180\"></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  },
  "le06_4": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/cloze.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML Listen umzusetzen. Ergänzen Sie hiezu im Lückentext die Namen der fehlenden HTML-Tags, so dass erst eine ungeordnete, dann eine geornete Liste umgesetzt wird.</p><code>&lt;!DOCTYPE html><br>Ungeordnete Liste:<br>&lt;[[ul]]><br>  &lt;[[li]]>Apfel<br>  &lt;[[li]]>Birne<br>  &lt;[[li]]>Orange<br>&lt;/[[ul]]><br><br>Geordnete Liste:<br>&lt;[[ol]]><br>  &lt;[[li]]>Einschalten<br>  &lt;[[li]]>Benutzen<br>  &lt;[[li]]>Ausschalten<br>&lt;/[[ol]]></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  },
  "le06_5": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/cloze.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML Tabellen umzusetzen. Ergänzen Sie hiezu im Lückentext die Namen der fehlenden HTML-Tags, so dass eine Tabelle mit 2 Zeilen und 2 Spalten umgesetzt wird, wobei die erste Zeile die Überschrift für jede Spalte enthält.</p><code>&lt;!DOCTYPE html><br>Tabelle:<br>&lt;[[table]]><br>  &lt;[[tr]]><br>    &lt;[[th]]>Obst&lt;/[[th]]><br>    &lt;[[th]]>Preis pro Stück&lt;/[[th]]><br>  &lt;/[[tr]]><br>  &lt;[[tr]]><br>    &lt;[[td]]>Apfel&lt;/[[td]]><br>    &lt;[[td]]>60 Cent&lt;/[[td]]><br>  &lt;/[[tr]]><br>&lt;/[[table]]></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  },
  "le06_6": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/cloze.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML ein Video einzubetten. Ergänzen Sie hiezu im Lückentext die Namen der fehlenden HTML-Tags und Attribute, so dass das Video mit der Webadresse <a href=https://akless.github.io/akless/we/video/LE06.mp4 target=_blank>https://akless.github.io/akless/we/video/LE06.mp4</a> mit einer Breite von 640 eingebettet wird und der Webnutzer das Video über Buttons wie \"Play\" und \"Pause\" selbst steuern kann.</p><code>&lt;!DOCTYPE html><br>Video:<br>&lt;[[video]] [[width]]=\"640\" [[controls]]><br>  &lt;[[source]] [[src]]=\"https://akless.github.io/akless/we/video/LE06.mp4\"><br>&lt;/[[video]]></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  }
};