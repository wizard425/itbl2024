import { GameScenario } from "../../shared/gameUtilities/GameScenario";
import { GameStep } from "../../shared/gameUtilities/GameStep";

export const AISteps: GameStep[][] = [
    [
        {
            order: 1,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Willkommen, Agent, bei unserer gemeinsamen KI-Mission!",
            scenario: GameScenario.AI
        }
    ],
    [
        {
            order: 2,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Lass uns gemeinsam deine Hausaufgabe für heute anschauen.",
            scenario: GameScenario.AI
        }
    ],
    [
        {
            order: 3,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Die KI kann dir dabei als zusätzliche Hilfe dienen – aber denk daran, deine Aufgaben selbstständig zu lösen und nur die Unterstützung zu nutzen, die du wirklich brauchst!",
            scenario: GameScenario.AI
        }
    ],
    [
        {
            order: 4,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Hier sind deine heutigen Hausaufgaben. Fange mit der ersten an und schreibe einen Aufsatz über Datenschutz!",
            scenario: GameScenario.AI
        }
    ],
    [
        {
            order: 5,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 6,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Deine Mission: Schreibe einen Aufsatz mit Hilfe einer KI – aber Vorsicht! Die KI fordert persönliche Informationen, und du musst entscheiden, welche du preisgibst.",
            scenario: GameScenario.AI
        }
    ],
    [
        {
            order: 7,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Deine Aufgabe ist es, deine Identität zu schützen und trotzdem erfolgreich zu bleiben. Viel Glück, Spion!",
            scenario: GameScenario.AI
        }
    ], [{
        order: 8,
        canClickNext: true,
        reachablePoints: 0,
        textToSpeech: "",
        scenario: GameScenario.AI
    }], [
        {
            order: 9,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Das ist nicht ganz richtig, Partner. Unsere Aufgabe ist, Informationen über den Datenschutz zu finden. Versuch es nochmal!",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 10,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Antworte nun der KI mit “Schreibe einen Aufsatz zum Thema Datenschutz”",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 11,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Das ist nicht ganz richtig, Partner. Antworte nun der KI mit “Schreibe einen Aufsatz zum Thema Datenschutz”. Versuch es nochmal!",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 12,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Hier fordert die KI einige persönlichen Daten. Entscheide, welche du teilen willst und welche du lieber für dich behältst! Einige könnten hier hilfreich für den Aufsatz sein.",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 13,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Tippe nun alle Ziffern (1-4) in das Eingabefeld, welche Informationen du mit der KI teilen würdest!",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 14,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Du musst mindestens eine Ziffer eingeben.Alle deine Ziffern müssen zwischen 1 und 4 sein. Bitte gib diese an!",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 15,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Leider waren bei deiner Eingabe Daten dabei, welche du lieber nicht teilen solltest. Aber lass uns dies noch einmal gemeinsam durchgehen!",
            scenario: GameScenario.AI
        }, {
            order: 15,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Sehr gut! Du hast einige Daten angegeben, welche zu einem besseren Aufsatz führen könnten. Zudem hast du sensible Informationen für dich behalten. Lass uns trotzdem nochmal kurz sensible Daten besprechen, die du besser nicht teilen solltest!",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 16,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Achtung! Mit deinem Geburtsdatum können Dritte dein Alter berechnen. In Kombination mit anderen persönlichen Informationen – wie deinem Namen oder deiner Klassenstufe – erhöht sich das Risiko von Identitätsdiebstahl.",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 17,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Teile dein Geburtsdatum nur, wenn es wirklich notwendig ist!",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 18,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Dein Name ist eine persönliche Information, die leicht mit anderen Daten verknüpft werden kann.",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 19,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Statt deinen vollständigen Namen zu verwenden, kannst du in solchen Fällen auch ein Pseudonym oder nur deine Initialen angeben. Das schützt deine Identität und erfüllt trotzdem den Zweck.",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 20,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Auch bei Interessen solltest du vorsichtig sein: Allgemeine Angaben wie ‚Sport‘ schützen deine Privatsphäre besser als spezifische Details wie ‚Fortnite spielen‘.",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 21,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Je allgemeiner du bleibst, desto weniger persönliche Rückschlüsse können andere ziehen!",
            scenario: GameScenario.AI
        }
    ], [
        {
            order: 22,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Du hast dich bisher richtig gut geschlagen! Im folgenden schauen wir uns ein kleines weiteres Beispiel an, damit du zum Profi im Thema Datenschutz mit KI wirst!",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 23,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Nehmen wir an, dass du dir im Sportunterricht eine Verletzung an der Schulter zugezogen hast. Jetzt hattest du einen MRT-Termin und fragst nun die KI ob sie dir erklären kann, was du dir zugezogen hast.",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 24,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Klicken Sie auf den Plus-Button, um die Datei hinzuzufügen.",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 25,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Würdest du das so absenden damit die KI dir genau erklären kann was du möglicherweise hast?",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 26,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Stop! Nicht absenden! Du solltest einer KI niemals solch hochsensible Daten preisgeben, die auf dich zurückführbar sind!",
            scenario: GameScenario.AI
        },{
            order: 26,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Richtig! Ein vollständiges medizinisches Dokument solltest du niemals einfach so einer KI zur verfügung stellen.",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 27,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "In einem ärztlichen Befund stehen viele deiner persönlichen Daten und natürlich medizinische Daten, die du nicht einfach so ins Internet schicken solltest.",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 28,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Wenn du nicht mehr bis zu deinem Arzttermin warten möchtest, kannst du die KI dennoch nutzen um dir  beispielsweise eine unbekannte Begriffe erklären zu lassen.",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 29,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Auf diese Art und Weise wird zumindest kein direkter Rückschluss auf dich gezogen.",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 30,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Deine Nachricht könnte zum Beispiel wie folgt aussehen:",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 31,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Eine mögliche Antwort der KI könnte wie folgt aussehen:",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 32,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Wie du siehst kannst du auch so an Informationen kommen, ohne leichtsinnig sensible Daten preiszugeben.Lade niemals einfach so persönliche Dokumente ohne vorherige Prüfung hoch!",
            scenario: GameScenario.AI
        }
    ],[
        {
            order: 33,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Mit Hilfe dieser Informationen, hast du schonmal ein gutes grundlegendes Verständnis gewonnen, um Daten gegenüber Künstlicher Intelligenz zu schützen.",
            scenario: GameScenario.AI
        }
    ]
];
