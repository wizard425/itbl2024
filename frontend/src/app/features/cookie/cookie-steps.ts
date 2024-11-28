import { GameScenario } from "../../shared/gameUtilities/GameScenario";
import { GameStep } from "../../shared/gameUtilities/GameStep";

export const CookieSteps: GameStep[][] = [
    [
        {
            order: 0,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Willkomen, Agent! Wusstest du, dass Cookies nicht nur in der Bäckerei wichig sind?"
        }
    ],
    [
        {
            order: 1,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Auch im Internet bestimmen sie, wie Websites mit deinen Datem umgehen."
        }
    ],
    [
        {
            order: 2,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Lass uns herausfinden, wie du die besten Cookie- und Datenschutzeinstellungen backen kannst!"
        }
    ],
    [
        {
            order: 3,
            canClickNext: false,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Also, los jetzt. Betrete die Bäckerei und leg los!"
        }
    ],
    // baker starts
    [
        {
            order: 4,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Willkommen in meiner Bäckerei! Hier backen wir keine gewöhnlichen Kekse, sondern deine Cookie-Einstellungen für Websites!"
        }
    ],
    [
        {
            order: 5,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Leider habe ich das Rezept für die Datenschutz-Cookies verloren. Wenn wir das richtige Rezept finden, funktioniert die Website perfekt..."
        }
    ],
    [
        {
            order: 6,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "... aber wenn wir die falschen Zutaten wählen, könnte sie langsamer oder weniger sicher sein."
        }
    ],
    [
        {
            order: 7,
            canClickNext: false,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Kannst du mir helfen, das perfekte Rezept zusammenzustellen?"
        }
    ],
    // cookie explanation
    [
        {
            order: 8,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Hier sind die Zutaten, mit denen du arbeiten kannst. Denk daran, jede Zutat hat ihre eigenen Funktion. Es ist wichtig, sie richtig auszuwählen, damit alles funktioniert!"
        }
    ],
    [
        {
            order: 9,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Essenzielle Cookies sorgen dafür, dass die Website funktioniert. Sie sind notwendig und können nicht abgewählt werden."
        }
    ],
    [
        {
            order: 10,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Funktionale Cookies verbessen das Benutzererlebnis, indem sie z. B. deine Einstellungen speichern."
        }
    ],
    [
        {
            order: 11,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Diese Cookies helfen den Betreiben zu verstehen, wie die Webseite genutzt wird, und sie damit zu verbessen."
        }
    ],
    [
        {
            order: 12,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Mit Marketing-Cookies kann die website gezielte Werbung und Inhalte anzeigen"
        }
    ],
    [
        {
            order: 13,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Schau doch mal im Lexikon mehr nach. Da stehen zu jeder Zutat zusätzliche Informationen, die dir sicher helfen werden!"
        }
    ],
    [
        {
            order: 14,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Und jetzt geht's los. Hilf dem Bäcker das richtige Cookie-Rezept zu backen!"
        }
    ],
    [
        {
            order: 15,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Cookies,
            textToSpeech: "Ziehe jetzt die Zutaten in die Schüssel"
        }
    ]
]