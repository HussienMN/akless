/**
 * @overview quiz configuration for this learning unit
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
ccm.files[ "quiz-data.min.js" ] = {
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
};