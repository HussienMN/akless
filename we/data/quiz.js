/**
 * @overview configurations for rendering a quiz
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
ccm.files[ "quiz.min.js" ] = {
  "le01": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/quiz.css" ],
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
        "text": "Was ist HTML?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          "ein internetfähiges Gerät",
          "ein Programm",
          "ein Web-Service",
          "eine Auszeichnungssprache",
          "eine Forschungseinrichtung",
          "eine Programmiersprache",
          "eine Skriptspache",
          "eine Stylesheet-Sprache",
          "etwas essbares"
        ],
        "correct": 3
      },
      {
        "text": "Wofür steht HTML?",
        "input": "radio",
        "answers": [
          "High-level Technology Media Language",
          "Home Technology Media Language",
          "Home Tool Markup Language",
          "How To Miss Without Laugh",
          "Hyperlink Media Language",
          "Hyperlinks and Text Markup Language",
          "Hypertext Markup Language",
          "Hypertext Markup Level",
          "Hypertext Media Language"
        ],
        "correct": 6
      },
      {
        "text": "Wofür wird HTML eingesetzt?",
        "input": "radio",
        "answers": [
          {
            "text": "für den Aufruf von Webseiten",
            "comment": "Zum Aufrufen von Webseiten nutzt man einen <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Webbrowser\">Webbrowser</a>."
          },
          {
            "text": "für die Beschreibung zusätzlicher Element-Eigenschaften",
            "comment": "Zur Beschreibung zusätzlicher Eigenschaften von Elementen werden in Auszeichnungssprachen <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Attribut_(Auszeichnungssprache)\">Attribute</a> genutzt."
          },
          {
            "text": "für die dynamische Manipulation von Webseiten",
            "comment": "Zur dynamischen Manipulation von Webseiten nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>."
          },
          {
            "text": "für die elektronische Datenverwaltung",
            "comment": "Zur elektronischen Datenverwaltung nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Datenbank\">Datenbanken</a>."
          },
          {
            "text": "für die Gestaltung von Layout und Design von Webseiten",
            "comment": "Zur Gestaltung von Layout und Design einer Webseite nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Cascading_Style_Sheets\">Cascading Style Sheets (CSS)</a>."
          },
          {
            "text": "für die Programmierung von Webseiten",
            "comment": "HTML ist keine Programmiersprache, sondern eine reine <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Auszeichnungssprache\">Auszeichnungssprache</a>."
          },
          "für die Strukturierung digitaler Dokumente",
          {
            "text": "für die Übertragung von Daten im Internet",
            "comment": "Im Internet nutzt man zur Übertragung von Daten üblicherweise das <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol\">Hypertext Transfer Protocol (HTTP)</a>."
          },
          "um morgens aus dem Bett zu kommen"
        ],
        "correct": 6
      },
      {
        "text": "Was ist ein Hyperlink und wofür setzt man ihn ein?",
        "description": "Ein Hyperlink ist...",
        "input": "radio",
        "answers": [
          "der Künstername des Erfinders des Web.",
          "ein Dateiformat für digitale Dokumente.",
          "ein Gremium zur Ausarbeitung von Web-Standards.",
          "ein Querverweis zum Springen an andere Textstellen in Hypertexten.",
          "ein Modewort zur Vermarktung des Web.",
          "ein Portal in das digitale Zeitalter.",
          "ein Web-Standard zur einheitlichen Verbreitung von Informationen.",
          "eine Arbeitsgruppe zur Weiterentwicklung von HTML.",
          "eine Markierung zum Hervorheben interessanter Textstellen."
        ],
        "correct": 3
      },
      {
        "text": "Wer hat HTML erfunden?",
        "input": "radio",
        "answers": [
          {
            "text": "Bill Gates",
            "comment": "Bill Gates ist der Gründer von Microsoft."
          },
          {
            "text": "Fred Feuerstein",
            "comment": "Fred Feuerstein ist der Vater in der Familie Feuerstein aus der gleichnamigen Zeichentrickserie."
          },
          {
            "text": "Jeff Bezos",
            "comment": "Jeff Bezos ist der Gründer von Amazon."
          },
          {
            "text": "Larry Page",
            "comment": "Larry Page ist einer der Google-Gründer."
          },
          {
            "text": "Mark Zuckerberg",
            "comment": "Mark Zuckerberg ist der Gründer von Facebook."
          },
          {
            "text": "Mike Sandel",
            "comment": "Mike Sandel war der Chef von Tim Berners-Lee."
          },
          {
            "text": "Robert Cailliau",
            "comment": "Robert Cailliau ist der erste Web-Surfer und Freund von Tim-Berners-Lee."
          },
          {
            "text": "Steve Jobs",
            "comment": "Steve Jobs ist der Gründer von Apple."
          },
          {
            "text": "Tim Berners-Lee",
            "comment": "Tim Berners-Lee ist der Erfinder von HTML und der Begründer des World Wide Web (WWW)."
          }
        ],
        "correct": 8
      },
      {
        "text": "Zu welchem ursprünglichen Zweck wurde HTML erfunden?",
        "input": "radio",
        "answers": [
          "für das Sammeln von Daten",
          "für das Streamen von Filmen",
          "für den Aufbau sozialer Netze",
          "für den Aufbau von Tauschbörsen im Internet",
          "für den Austausch wissenschaftlicher Publikationen",
          "für die digitalen Lehre",
          "für die Stärkung von Demokratie",
          "für die Verbreitung von Unterhaltungselektronik",
          "für militärische Zwecke"
        ],
        "correct": 4
      },
      {
        "text": "Wer arbeitet alles an der Weiterentwicklung von HTML?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "answers": [
          "das World Wide Web Consortium (W3C)",
          "die Europäische Union (EU)",
          "die offene Gesellschaft",
          "die Organisation des Nordatlantikvertrags (NATO)",
          "die Nationale Sicherheitsbehörde (NSA)",
          "die Vereinten Nationen (UN)",
          "die Web Hypertext Application Technology Working Group (WHATWG)",
          "Facebook",
          "Youtube"
        ],
        "correct": [ 0, 6 ]
      },
      {
        "text": "In welcher Version liegt HTML aktuell vor?",
        "input": "radio",
        "answers": [
          "HTML+",
          "HTML 2",
          "HTML 3",
          "HTML 4",
          "HTML5",
          "HTML6",
          "HTML10",
          "XHTML 1",
          "XHTML 2"
        ],
        "correct": 4
      }
    ]
  },
  "le02": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/quiz.css" ],
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
      "correct": "Korrekte Lösung: ",
      "finish": "Beenden"
    },
    "questions": [
      {
        "text": "Sind Sie in der Lage eine neue Webseite mit dem Inhalt \"Hallo Welt!\" über ein HTML-basiertes digitales Dokument zu erstellen?",
        "description": "Im Folgenden sind einzelne Arbeitsschritte aufgeführt. Geben Sie für die zutreffenden Arbeitsschritte die richtige Reihenfolge an. Markieren Sie also den ersten Schritt mit \"1\", den Zweiten mit \"2\" u.s.w.. Markieren Sie die Schritte die nicht zutreffen mit \"0\".",
        "input": "number",
        "attributes": {
          "min": 0,
          "max": 9
        },
        "answers": [
          "Änderungen an der Datei speichern",
          "Angabe der Dokumenttypdefinition",
          "Datei einen Namen geben",
          "Datei zum Bearbeiten öffnen",
          "Dateiendung \".html\" festlegen",
          "Fertigbaukasten wählen",
          "Inhalt \"Hallo Welt!\" festlegen",
          "Neue Datei anlegen",
          "Registrierung im Internet"
        ],
        "correct": [ 7, 5, 2, 4, 3, 0, 6, 1, 0 ]
      },
      {
        "text": "Mit welchem Programm kann der Inhalt eines HTML-basierten digitalen Dokuments als Webseite dargestellt werden?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          "mit dem Papierkorb",
          "mit einem Bildbearbeitungsprogramm",
          "mit einem Dateimanager",
          "mit einem Kommandozeilen-Tool",
          "mit einem Online-Editor",
          "mit einem Texteditor",
          "mit einem Video-Player",
          "mit einem Webbrowser",
          "mit einer Entwicklungsumgebung"
        ],
        "correct": 7
      },
      {
        "text": "Was hat es mit der Dokumenttyp-Deklaration in HTML auf sich?",
        "description": "Die Dokumenttyp-Deklaration...",
        "input": "radio",
        "answers": [
          "deklariert die Korrektheit des Dokumenttyps.",
          "deklariert Meta-Informationen zur Webseite.",
          "dient zur Festlegung von Titel und Zeichenkodierung der Webseite.",
          "enthält alle Daten des gesamten HTML-Dokuments.",
          "enthält das Veröffentlichungsdatum und den Namen des Authoren der Webseite.",
          "enthält die Inhalte, die vom Webbrowser in der Webseite dargestellt werden.",
          "gibt an in welcher Sprache das HTML-Dokument zu interpretieren ist.",
          "gibt an mit welchem Programm das HTML-Dokument auszuführen ist.",
          "gibt an unter welchen Bedingungen das HTML-Dokument zu öffnen ist."
        ],
        "correct": 6
      },
      {
        "text": "Wie sieht die Dokumenttyp-Deklaration für HTML5 aus?",
        "input": "radio",
        "encode": true,
        "answers": [
          {
            "text": "<!DOCTYPE HTML>",
            "comment": "Seit HTML5 ist die Dokumenttyp-Deklaration endlich kürzer, unkomplizierter und verständlicher."
          },
          "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">",
          "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">",
          "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">",
          "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Frameset//EN\" \"http://www.w3.org/TR/html4/frameset.dtd\">",
          "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">",
          "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">",
          "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Frameset//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd\">",
          "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
        ],
        "correct": 0
      }
    ]
  },
  "le03": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/quiz.css" ],
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
        "text": "Was ist ein HTML-Tag?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          {
            "text": "ein Auszeichnungselement",
            "comment": "Reflektieren Sie was <a target=\"_blank\" href=\"https://de.wikipedia.org/w/index.php?title=Auszeichnungselement\">Auszeichnungselement</a> in Bezug auf HTML genau bedeutet."
          },
          "ein Befehl",
          "ein Feiertag",
          "ein Platzhalter",
          "ein Sonderzeichen",
          "eine Anweisung",
          "eine Eigenschaft",
          "eine Instruktion",
          "eine Variable"
        ],
        "correct": 0
      },
      {
        "text": "Wofür nutzt man einen HTML-Tag?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "answers": [
          {
            "text": "Für eine darstellungsorientierte Textauszeichnung",
            "comment": "Ein HTML-Tag dient nur zur beschreibenden und nicht zur verfahrens- oder darstellungsorientierten Textauszeichnung."
          },
          {
            "text": "Um Angaben zur Textpräsentation zu machen",
            "comment": "Ein HTML-Tag dient vielmehr zur strukturierenden Auszeichnung, um Textbereichen eine Bedeutung zu geben."
          },
          {
            "text": "Um dynamische Abläufe zu beschreiben",
            "comment": "HTML-Tags beschreiben die Struktur und Semantik der Inhalte eines digitalen Dokuments."
          },
          {
            "text": "Zur Einbettung weiterer Inhalte, die über Text hinausgehen",
            "comment": "Über HTML-Tags können beispielsweise weitere Inhalte wie Bilder, Audios und Videos in die Webseite eingebettet werden."
          },
          {
            "text": "Zum Markieren von Feiertagen",
            "comment": "Ein HTML-Tag dient zur Markierung von Textbereichen in digitalen Dokumenten, um ihnen eine Bedeutung zu geben."
          },
          {
            "text": "Zur Formatierung von Texten",
            "comment": "Ein HTML-Tag dient nur der reinen semantischen Strukturierung von Texten und nicht zu dessen Formatierung."
          },
          {
            "text": "Zur Identifizierung von Textzeilen",
            "comment": "HTML-Tags dienen zur Identifizierung von Inhaltstypen. Also welche Textbereiche beispielsweise vom Typ Überschrift sind."
          },
          {
            "text": "Zur Steuerung des Webbrowsers",
            "comment": "Mit HTML-Tags steuert man den strukturellen Aufbau einer Webseite."
          },
          "Zur Strukturierung von Webseiteninhalten"
        ],
        "correct": [ 3, 8 ]
      },
      {
        "text": "Woraus besteht ein HTML-Tag und wie setzt man ihn ein?",
        "description": "Geben Sie für die folgenden HTML-Codes an, in welchen davon die enthaltenen HTML-Tags korrekt eingesetzt werden.<br><br><b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "encode": true,
        "answers": [
          {
            "text": "<h1>Überschrift<h1>",
            "comment": "Hier fehlt beim schließenden <h1>-Tag der Schrägstrich."
          },
          "<h2>Überschrift</h2>",
          {
            "text": "<h3>Überschrift</h4>",
            "comment": "Hier werden zwei HTML-Tags mit unterschiedlichem Namen verwendet."
          },
          {
            "text": "<p>Paragraph",
            "comment": "Hier fehlt der schließende <p>-Tag."
          },
          {
            "text": "<p>Paragraph<p>",
            "comment": "Hier fehlt beim schließenden <p>-Tag der Schrägstrich."
          },
          "<p>Paragraph</p>",
          "Hallo Welt!<br>Willkommen.",
          {
            "text": "Hallo Welt!<br/>Willkommen.",
            "comment": "Die Schreibweise <br/> gibt es in HTML5 nicht mehr."
          },
          {
            "text": "Hallo Welt!<br></br>Willkommen.",
            "comment": "Bei <br>-Tags wird nur ein öffnender HTML-Tag benötigt."
          }
        ],
        "correct": [ 1, 5, 6 ]
      },
      {
        "text": "Welche HTML-Tags dienen zur Markierung von Überschriften?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "encode": true,
        "answers": [
          "<br>",
          "<h>",
          "<h1>",
          "<h2>",
          "<h3>",
          "<h4>",
          "<h5>",
          "<h6>",
          "<p>"
        ],
        "correct": [ 2, 3, 4, 5, 6, 7 ]
      },
      {
        "text": "Welcher HTML-Tag dient zur Markierung von Paragraphen?",
        "input": "radio",
        "encode": true,
        "answers": [
          "<br>",
          "<h>",
          "<h1>",
          "<h2>",
          "<h3>",
          "<h4>",
          "<h5>",
          "<h6>",
          "<p>"
        ],
        "correct": 8
      },
      {
        "text": "Welcher HTML-Tag dient zur Markierung von Zeilenumbrüchen?",
        "input": "radio",
        "encode": true,
        "answers": [
          "<br>",
          "<h>",
          "<h1>",
          "<h2>",
          "<h3>",
          "<h4>",
          "<h5>",
          "<h6>",
          "<p>"
        ],
        "correct": 0
      },
      {
        "text": "Wie schreibt man einen Kommentar in HTML?",
        "input": "radio",
        "answers": [
          {
            "text": "! Kommentar",
            "comment": "So schreibt man einen Zeilenkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Fortran\">Fortran</a>"
          },
          {
            "text": "# Kommentar",
            "comment": "So schreibt man einen Zeilenkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Perl_(Programmiersprache)\">Perl</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Python_(Programmiersprache)\">Python</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/R_(Programmiersprache)\">R</a> und <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Ruby_(Programmiersprache)\">Ruby</a>."
          },
          {
            "text": "' Kommentar",
            "comment": "So schreibt man einen Zeilenkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/BASIC\">BASIC</a> und <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Visual_Basic\">Visual Basic</a>."
          },
          {
            "text": "/* Kommentar */",
            "comment": "So schreibt man einen Blockkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C_(Programmiersprache)\">C</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C%2B%2B\">C++</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C-Sharp\">C#</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/D_(Programmiersprache)\">D</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Pascal_(Programmiersprache)\">Pascal</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/PHP\">PHP</a> und <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Java_(Programmiersprache)\">Java</a>."
          },
          {
            "text": "/** Kommentar */",
            "comment": "So schreibt man einen Dokumentationskommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Java_(Programmiersprache)\">Java</a> und <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>."
          },
          {
            "text": "// Kommentar",
            "comment": "So schreibt man einen Zeilenkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C_(Programmiersprache)\">C</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C%2B%2B\">C++</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C-Sharp\">C#</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Pascal_(Programmiersprache)\">Pascal</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/PHP\">PHP</a> und <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Java_(Programmiersprache)\">Java</a>."
          },
          {
            "text": "; Kommentar",
            "comment": "So schreibt man einen Zeilenkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Assemblersprache\">Assembler</a>."
          },
          "&lt;!-- Kommentar -->",
          {
            "text": "{ Kommentar }",
            "comment": "So schreibt man einen Blockkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Pascal_(Programmiersprache)\">Pascal</a>."
          }
        ],
        "correct": 7
      }
    ]
  },
  "le04": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/quiz.css" ],
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
  "le05": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/quiz.css" ],
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
        "text": "Was ist ein HTML-Attribut?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          "ein Auszeichnungselement",
          "ein Befehl",
          "ein Feiertag",
          "ein Platzhalter",
          "ein Sonderzeichen",
          "eine Anweisung",
          "eine Eigenschaft",
          "eine Instruktion",
          "eine Variable"
        ],
        "correct": 6
      },
      {
        "text": "Wofür nutzt man ein HTML-Attribut?",
        "input": "radio",
        "answers": [
          {
            "text": "für den Aufruf von Webseiten",
            "comment": "Zum Aufrufen von Webseiten nutzt man einen <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Webbrowser\">Webbrowser</a>."
          },
          {
            "text": "für die dynamische Manipulation von Webseiten",
            "comment": "Zur dynamischen Manipulation von Webseiten nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>."
          },
          {
            "text": "für die elektronische Datenverwaltung",
            "comment": "Zur elektronischen Datenverwaltung nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Datenbank\">Datenbanken</a>."
          },
          {
            "text": "für die Gestaltung von Layout und Design von Webseiten",
            "comment": "Zur Gestaltung von Layout und Design einer Webseite nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Cascading_Style_Sheets\">Cascading Style Sheets (CSS)</a>."
          },
          {
            "text": "für die Programmierung von Webseiten",
            "comment": "HTML ist eine reine <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Auszeichnungssprache\">Auszeichnungssprache</a>. Das Einsetzen von HTML-Tags und Attributen ist kein Programmieren."
          },
          {
            "text": "für die Strukturierung digitaler Dokumente",
            "comment": "Für die Strukturierung digitaler Dokumente nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Hypertext_Markup_Language\">HTML</a>."
          },
          {
            "text": "für die Übertragung von Daten im Internet",
            "comment": "Im Internet nutzt man zur Übertragung von Daten üblicherweise das <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol\">Hypertext Transfer Protocol (HTTP)</a>."
          },
          "um morgens aus dem Bett zu kommen",
          {
            "text": "zur Beschreibung zusätzlicher Eigenschaften von HTML-Tags",
            "comment": "Ein HTML-Attribut ist eine Eigenschaft, die einem HTML-Tag zur Angabe zusätzlicher Informationen zuordenbar ist."
          }
        ],
        "correct": 8
      },
      {
        "text": "Welcher HTML-Tag dient zum Markieren von Hyperlinks?",
        "input": "radio",
        "encode": true,
        "answers": [
          "<a>",
          "<body>",
          "<br>",
          "<head>",
          "<html>",
          "<img>",
          "<meta>",
          "<p>",
          "<title>"
        ],
        "correct": 0
      },
      {
        "text": "Welches HTML-Attribut dient zur Angabe eines Verweisziels?",
        "input": "radio",
        "encode": true,
        "answers": [
          "alt",
          "download",
          "href",
          "link",
          "source",
          "src",
          "target",
          "title",
          "tooltip"
        ],
        "correct": 2
      },
      {
        "text": "Welches HTML-Attribut dient zur Angabe eines Tooltips?",
        "input": "radio",
        "encode": true,
        "answers": [
          "alt",
          "download",
          "href",
          "link",
          "source",
          "src",
          "target",
          "title",
          "tooltip"
        ],
        "correct": 7
      },
      {
        "text": "Welches HTML-Attribut dient zur Markierung eines Downloads?",
        "input": "radio",
        "encode": true,
        "answers": [
          "alt",
          "download",
          "href",
          "link",
          "source",
          "src",
          "target",
          "title",
          "tooltip"
        ],
        "correct": 1
      },
      {
        "text": "Wie setzt man ein HTML-Attribut ein?",
        "description": "Geben Sie für die folgenden HTML-Codes an, in welchen davon die enthaltenen HTML-Attribute korrekt eingesetzt werden.<br><br><b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "encode": true,
        "answers": [
          {
            "text": "<a href='https://www.google.de'>Klick</a>",
            "comment": "In HTML-Attributen können auch einfache statt doppelte Anführungszeichen verwendet werden. Üblich sind Doppelte."
          },
          "<a href=\"https://www.google.de\">Klick</a>",
          "<a href=\"https://www.google.de\" title=\"Hier klicken\">Klick</a>",
          "<a href=\"https://www.google.de\" download>Klick</a>",
          {
            "text": "<a href=\"https://www.google.de\", download>Klick</a>",
            "comment": "Mehrere Attribute eines HTML-Tags werden nur mit einem Leerzeichen voneinander getrennt."
          },
          {
            "text": "<a href:\"https://www.google.de\"></a>",
            "comment": "Für die Zuweisung eines Wertes wird bei einem HTML-Attribut ein \"=\"-Zeichen und kein Doppelpunkt verwendet."
          },
          {
            "text": "<a href=https://www.google.de>Klick</a>",
            "comment": "Bei HTML5-Attributen kann man doppelte Anführungszeichen auch weglassen, was aber zu Problemen führen kann."
          },
          {
            "text": "<a src=\"https://www.google.de\">Klick</a>",
            "comment": "Für <a>-Tags gibt es kein \"src\"-Attribut."
          },
          {
            "text": "<a title=\"Herunterladen\" download>Klick</a>",
            "comment": "Hier fehlt das nicht optionale \"href\"-Attribut zur Angabe des Verweisziels."
          }
        ],
        "correct": [ true, true, true, true, false, false, true, false, false ]
      }
    ]
  },
  "le06": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/quiz.css" ],
    "feedback": true,
    "start_button": true,
    "navigation": true,
    "anytime_finish": true,
    "encode": true,
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
        "text": "Welcher der HTML-Tags dient zur Einbettung von Audios?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          "<audio>",
          "<img>",
          "<li>",
          "<ol>",
          "<table>",
          "<td>",
          "<tr>",
          "<ul>",
          "<video>"
        ],
        "correct": 0
      },
      {
        "text": "Welcher der HTML-Tags dient zur Einbettung von Bildern?",
        "input": "radio",
        "answers": [
          "<audio>",
          "<img>",
          "<li>",
          "<ol>",
          "<table>",
          "<td>",
          "<tr>",
          "<ul>",
          "<video>"
        ],
        "correct": 1
      },
      {
        "text": "Welche der HTML-Tags dienen zur Darstellung von Listen?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "answers": [
          "<audio>",
          "<img>",
          "<li>",
          "<ol>",
          "<table>",
          "<td>",
          "<tr>",
          "<ul>",
          "<video>"
        ],
        "correct": [ 2, 3, 7 ]
      },
      {
        "text": "Welche der HTML-Tags dienen zur Darstellung von Tabellen?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "answers": [
          "<audio>",
          "<img>",
          "<li>",
          "<ol>",
          "<table>",
          "<td>",
          "<tr>",
          "<ul>",
          "<video>"
        ],
        "correct": [ 4, 5, 6 ]
      },
      {
        "text": "Welcher der HTML-Tags dient zur Einbettung eines Videos?",
        "input": "radio",
        "answers": [
          "<audio>",
          "<img>",
          "<li>",
          "<ol>",
          "<table>",
          "<td>",
          "<tr>",
          "<ul>",
          "<video>"
        ],
        "correct": 8
      }
    ]
  },
  "le07": {
    "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/quiz.css" ],
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
        "text": "Was ist CSS?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          "ein internetfähiges Gerät",
          "ein Programm",
          "ein Web-Service",
          "eine Auszeichnungssprache",
          "eine Forschungseinrichtung",
          "eine Programmiersprache",
          "eine Skriptspache",
          "eine Stylesheet-Sprache",
          "etwas essbares"
        ],
        "correct": 7
      },
      {
        "text": "Wofür wird CSS eingesetzt?",
        "input": "radio",
        "answers": [
          {
            "text": "für den Aufruf von Webseiten",
            "comment": "Zum Aufrufen von Webseiten nutzt man einen <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Webbrowser\">Webbrowser</a>."
          },
          {
            "text": "für die Beschreibung zusätzlicher Element-Eigenschaften",
            "comment": "Zur Beschreibung zusätzlicher Eigenschaften von Elementen werden in Auszeichnungssprachen <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Attribut_(Auszeichnungssprache)\">Attribute</a> genutzt."
          },
          {
            "text": "für die dynamische Manipulation von Webseiten",
            "comment": "Zur dynamischen Manipulation von Webseiten nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>."
          },
          {
            "text": "für die elektronische Datenverwaltung",
            "comment": "Zur elektronischen Datenverwaltung nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Datenbank\">Datenbanken</a>."
          },
          "für die Gestaltung von Layout und Design von Webseiten",
          {
            "text": "für die Programmierung von Webseiten",
            "comment": "HTML ist keine Programmiersprache, sondern eine reine <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Auszeichnungssprache\">Auszeichnungssprache</a>."
          },
          {
            "text": "für die Strukturierung digitaler Dokumente",
            "comment": "Für die Strukturierung digitaler Elemente nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Hypertext_Markup_Languag\">HTML</a>."
          },
          {
            "text": "für die Übertragung von Daten im Internet",
            "comment": "Im Internet nutzt man zur Übertragung von Daten üblicherweise das <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol\">Hypertext Transfer Protocol (HTTP)</a>."
          },
          "um morgens aus dem Bett zu kommen"
        ],
        "correct": 4
      },
      {
        "text": "Was síst das Grundprinzip der Trennung von Layout und Design?",
        "description": "Ein Hyperlink ist...",
        "input": "radio",
        "answers": [
          "der Künstername des Erfinders des Web.",
          "ein Dateiformat für digitale Dokumente.",
          "ein Gremium zur Ausarbeitung von Web-Standards.",
          "ein Querverweis zum Springen an andere Textstellen in Hypertexten.",
          "ein Modewort zur Vermarktung des Web.",
          "ein Portal in das digitale Zeitalter.",
          "ein Web-Standard zur einheitlichen Verbreitung von Informationen.",
          "eine Arbeitsgruppe zur Weiterentwicklung von HTML.",
          "eine Markierung zum Hervorheben interessanter Textstellen."
        ],
        "correct": 3
      },
      {
        "text": "Wer hat HTML erfunden?",
        "input": "radio",
        "answers": [
          {
            "text": "Bill Gates",
            "comment": "Bill Gates ist der Gründer von Microsoft."
          },
          {
            "text": "Fred Feuerstein",
            "comment": "Fred Feuerstein ist der Vater in der Familie Feuerstein aus der gleichnamigen Zeichentrickserie."
          },
          {
            "text": "Jeff Bezos",
            "comment": "Jeff Bezos ist der Gründer von Amazon."
          },
          {
            "text": "Larry Page",
            "comment": "Larry Page ist einer der Google-Gründer."
          },
          {
            "text": "Mark Zuckerberg",
            "comment": "Mark Zuckerberg ist der Gründer von Facebook."
          },
          {
            "text": "Mike Sandel",
            "comment": "Mike Sandel war der Chef von Tim Berners-Lee."
          },
          {
            "text": "Robert Cailliau",
            "comment": "Robert Cailliau ist der erste Web-Surfer und Freund von Tim-Berners-Lee."
          },
          {
            "text": "Steve Jobs",
            "comment": "Steve Jobs ist der Gründer von Apple."
          },
          {
            "text": "Tim Berners-Lee",
            "comment": "Tim Berners-Lee ist der Erfinder von HTML und der Begründer des World Wide Web (WWW)."
          }
        ],
        "correct": 8
      },
      {
        "text": "Zu welchem ursprünglichen Zweck wurde HTML erfunden?",
        "input": "radio",
        "answers": [
          "für das Sammeln von Daten",
          "für das Streamen von Filmen",
          "für den Aufbau sozialer Netze",
          "für den Aufbau von Tauschbörsen im Internet",
          "für den Austausch wissenschaftlicher Publikationen",
          "für die digitalen Lehre",
          "für die Stärkung von Demokratie",
          "für die Verbreitung von Unterhaltungselektronik",
          "für militärische Zwecke"
        ],
        "correct": 4
      },
      {
        "text": "Wer arbeitet alles an der Weiterentwicklung von CSS?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "answers": [
          "das World Wide Web Consortium (W3C)",
          "die Europäische Union (EU)",
          "die offene Gesellschaft",
          "die Organisation des Nordatlantikvertrags (NATO)",
          "die Nationale Sicherheitsbehörde (NSA)",
          "die Vereinten Nationen (UN)",
          "die Web Hypertext Application Technology Working Group (WHATWG)",
          "Facebook",
          "Youtube"
        ],
        "correct": [ 0, 6 ]
      },
      {
        "text": "In welcher Version liegt CSS aktuell vor?",
        "input": "radio",
        "answers": [
          "CHSS",
          "CSS0",
          "CSS1",
          "CSS2",
          "CSS3",
          "CSS4",
          "CSS 5",
          "CSS 10",
          "CSS X"
        ],
        "correct": 4
      }
    ]
  }
};