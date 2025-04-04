import { Component, Type } from "@angular/core";
import { Chapter } from "./Chapter";
import { TableOfContentsComponent } from "../../core/components/lexicon/table-of-contents/table-of-contents.component";

export interface Page {
    title?: string;
    pageNumber: number,
    content?: string,
    component?: Type<any>;
    chapter?: Chapter
}

export interface DoublePage {
    leftPage?: Page;
    rightPage?: Page;
}

export const LexiconContent: DoublePage[] = [
    {
        leftPage: {
            title: "Lexikon",
            component: TableOfContentsComponent,
            pageNumber: 0
        },
        rightPage: {
            title: "Inhalt",
            content: "Hier findest du allerlei Wissen um deinem Erfolg bisschen zu helfen. Schau es dir gut an und lese Dinge nach. Es wird sich lohnen :)",
            pageNumber: 1
        }
    }, {
        leftPage: {
            title: "Cookie-Zutaten",
            content: "<h6>Mehl</h6><p>Mehl ist eine grundlegende Zutat, die daf&uuml;r sorgt, dass alles zusammenh&auml;lt. Es steht f&uuml;r die grundlegenden Funktionen einer Website, die notwendig sind, um sie zu betreiben.</p><p>&nbsp;</p><h6>Streusel</h6><p>Die bringen den letzten Schlitt. Sie repr&auml;sentieren personalisierte Inhalte, die auf den Interessen der Nutzer basieren.</p>",
            pageNumber: 2
        },
        rightPage: {
            title: "",
            content: "<h6>Vanille</h6><p>Vanille verleiht dem Keks eine besondere Note. Sie symbolisiert Features, die das Nutzererlebnis verbessen und die Qualit&auml;t steigern.</p><p>&nbsp;</p><h6>Zucker</h6><p>Zucker verfeiner den Geschmack. Er steht f&uuml;r Datenanalyse, die dabei hilft, die Nutzererfahrung zu verbessern, indem sie das Verhalten auf der Seite verfolgt.</p>",
            pageNumber: 3
        }
    }, {
        leftPage: {
            title: "",
            content: "<h6>Butter</h6><p>Butter sorgt f&uuml;r eine cremige Textur und eine angenehme Konsistenz. Sie steht f&uuml;r Komfortfunktionen, die das Benutzererlebnis verbessern, ohne die Grundlage zu ver&auml;ndern.</p><h6>Schoko</h6><p>Schokost&uuml;ckchen machen den Keks besonders und unverwechselbar. Sie stehen f&uuml;r gezielte Werbung, die auf die Vorlieben des Nutzers abgestimmt ist</p>",
            pageNumber: 4
        },
        rightPage: {
            title: "",
            content: "<h6>Milch</h6><p>Milch sorgt f&uuml;r ein angenehmes Finish und eine verbesserte Textur. Sie repr&auml;sentiert Funktionen, die die Benutzererfahrung verbessern, wie personalisierte Vorschl&auml;ge.</p> <h6>Ei</h6><p>Ei ist eine grundlegende Zutat, die daf&uuml;r sorgt, dass alles zusammenh&auml;lt. Es steht f&uuml;r die grundlegenden Funktionen einer Website, die notwendig sind, um sie zu betreiben.</p><p>&nbsp;</p>",
            pageNumber: 5
        }
    }, {
        leftPage: {
            title: "Passwort",
            content: "<p> Ein starkes Passwort schützt deine Daten vor Hackern.Merke dir: </p><ul><li>Länge: Mindestens 12 Zeichen, je länger, desto besser.</li ><li>Vielfalt: Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen kombinieren.</li ><li>Keine einfachen Wörter oder persönliche Infos:  „123456“, „Passwort“ oder dein Name sind unsicher.</li ><li>Einzigartigkeit: Für jeden Account ein eigenes Passwort verwenden.</li ><li>Passwortmanager nutzen: Hilft, starke Passwörter zu speichern und zu verwalten.</li > </ul>",
            pageNumber: 6
        },
        rightPage: {
            title: "Online Shopping",
            content: "<p>Nicht jede Webseite ist vertrauenswürdig. Darauf solltest du achten:</p>\n<ul>\n    <li>Impressum und Kontakt prüfen: Fehlende oder unklare Angaben sind ein Warnsignal.</li>\n    <li>Unrealistische Rabatte hinterfragen: „80 % auf alles“ ist oft Betrug.</li>\n <li>Druck durch Countdown-Timer: Viele Webseiten setzen auf künstliche Zeitlimits.</li>\n    <li>Nur notwendige Daten angeben: Telefonnummer oder Geburtsdatum sind meist nicht erforderlich.</li>\n    <li>Sichere Zahlungsmethoden nutzen: Nur bekannte Anbieter wie Kreditkarte oder PayPal wählen.</li>\n</ul>",
            pageNumber: 7
        }
    }, {
        leftPage: {
            title: "",
            content: "<h6>Dark Patterns</h6><ul><li>Dark Patterns sind manipulative Design-Tricks, die Nutzer dazu bringen, ungewollte Entscheidungen zu treffen, zB. ein Abo abzuschließen oder Daten preiszugeben. Häufig verwendete Beispiele sind versteckte Kosten, irreführende Buttons oder erschwerte Kündigungen.</li></ul>",
            pageNumber: 8
        },
        rightPage: {
            title: "KI",
            content: "<p>KI kann hilfreich sein, aber es gibt Datenschutzrisiken. Wichtige Punkte:</p>\n<ul>\n    <li>Keine persönlichen Daten eingeben: Name, Adresse oder Telefonnummer nicht teilen.</li>\n    <li>Keine sensiblen Informationen preisgeben: Arztberichte oder Passwörter gehören nicht in eine KI-Anfrage.</li>\n    <li>Allgemeine Fragen stellen: Formulierungen so wählen, dass keine Rückschlüsse auf persönliche Daten möglich sind.</li>\n    <li>Ergebnisse kritisch hinterfragen: KI kann Fehler machen und falsche Informationen liefern.</li>\n</ul>",
            pageNumber: 9
        }
    }, {
        leftPage: {
            title: "Social Media",
            content: "<p>Nicht jedes Profil ist echt. So kannst du vertrauenswürdige von unseriösen Accounts unterscheiden:</p>\n<ul>\n    <li>Gemeinsame Follower prüfen: Echte Profile haben oft gemeinsame Freunde oder Follower aus deinem Umfeld.</li>\n    <li>Bilder genau anschauen: Vertrauenswürdige Profile nutzen echte, konsistente Bilder – Fake-Accounts haben oft stockartige, zu perfekte oder gestohlene Bilder.</li>\n    <li>Aktivität überprüfen: Echte Profile posten regelmäßig, interagieren natürlich und haben sinnvolle Kommentare. Fake-Profile wirken oft leer oder haben generische Beiträge.</li>\n</ul>",
            pageNumber: 10
        },
        rightPage: {
            title: "",
            content: "<ul><li>Follower und Followings checken: Auffällig sind extrem viele oder fast keine Follower sowie unausgewogene Verhältnisse (z. B. folgt 1000+, aber kaum jemand folgt zurück).</li>\n    <li>Account-Details ansehen: Neue Accounts ohne Biografie oder mit merkwürdigen Links sind verdächtig.</li></ul>",
            pageNumber: 11
        }
    }, {
        leftPage: {
            title: "Informationspflicht",
            content: "<p><strong>Informationspflicht gemäß Art. 13 DSGVO</strong></p><p><strong>für das Web-Game „Cyber Spion“</strong></p><p><strong>1. Verantwortlicher</strong><br>Musterunternehmen GmbH<br>Beispielstraße 1, 12345 Beispielstadt<br>E-Mail: kontakt@musterunternehmen.de<br>Telefon: +49 123 456789</p><p><strong>2. Zwecke der Datenverarbeitung</strong></p><ul><li>Bereitstellung des Spiels „Cyber Spion“</li><li>Verwaltung von Nutzerkonten</li><li>Veröffentlichung des Benutzernamens und der Punkte im Leaderboard</li></ul>",
            pageNumber: 12
        },
        rightPage: {
            title: "",
            content: "<p><strong>3. Erhobene Daten</strong></p><ul><li>Benutzername</li><li>Erreichte Punkte im Spiel</li></ul><p><strong>4. Empfänger der Daten</strong></p><ul><li>Hosting-Dienstleister (zur Bereitstellung der Web-App)</li></ul><p><strong>5. Speicherdauer</strong></p><ul><li><strong>Log-Dateien:</strong> Bis zum Ausloggen des Nutzers. Beim Ausloggen wird die Einwilligung widerrufen, und die Daten werden gelöscht.</li></ul> ",
            pageNumber: 13
        }
    },{
        leftPage: {
            title: "",
            content: "<p><strong>6. Ihre Rechte</strong></p><ul><li><strong>Auskunft</strong> (Art. 15 DSGVO) – Welche Daten wir über Sie speichern</li><li><strong>Berichtigung</strong> (Art. 16 DSGVO) – Korrektur unrichtiger Daten</li><li><strong>Löschung</strong> (Art. 17 DSGVO) – Recht auf Vergessenwerden</li><li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li><li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li><li><strong>Widerspruch</strong> (Art. 21 DSGVO)</li></ul> <p><strong>7. Widerrufsrecht bei Einwilligung</strong></p><p>Falls wir Ihre Daten auf Basis einer Einwilligung verarbeiten, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Beim Ausloggen wird Ihre Einwilligung automatisch widerrufen.</p>",
            pageNumber: 14
        },
        rightPage: {
            title: "",
            content: "<p><strong>8. Beschwerderecht</strong></p><p>Sie können sich jederzeit bei der Datenschutzbehörde Ihres Landes beschweren.</p>",
            pageNumber: 15
        }
    }
]