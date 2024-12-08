import { GameScenario } from "../../shared/gameUtilities/GameScenario";
import { GameStep } from "../../shared/gameUtilities/GameStep";

export const ShoppingSteps: GameStep[][] = [
    [
        {
            order: 1,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Hier lernst du, wie du dich richtig verhältst und deine Daten schützt! Viel Spaß!",
            scenario: GameScenario.Shopping
        }
    ],
    [
        {
            order: 2,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.Shopping
        }
    ],
    [
        {
            order: 3,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Willkommen beim Online-Möbel-Shop! Du möchtest nun für dein Spion-Zimmer einige neue Möbel kaufen. Lass uns dies gemeinsam erledigen und schauen worauf du acht geben musst!",
            scenario: GameScenario.SocialMedia
        }
    ],
    [
        {
            order: 4,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.SocialMedia
        }
    ],
    [
        {
            order: 5,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Sieh dir die Angebote im Shop an. Viele sind stark rabattiert. Lass uns mal eines der Produkte genauer anschauen.",
            scenario: GameScenario.SocialMedia
        }
    ],
    [
        {
            order: 6,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Plötzlich ploppt beim Angebot für den Stuhl ein Timer auf, der droht abzulaufen.",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 7,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Nun musst du dich entscheiden, ob du den Stuhl direkt zum Warenkorb hinzufügst oder das Angebot nochmal überprüfst.",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 8,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 9,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Achtung! Lass dich nicht von vermeintlich zeitlich begrenzten Angebot unter druck setzen, die dich zum schnellen Kauf drängen. Meist gibt es die Angebote noch länger!",
            scenario: GameScenario.SocialMedia
        },{
            order: 9,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Richtig! Du hast dich nicht vom Angebot unter druck setzen lassen und triffst deine Kauf Entscheidungen bewusst! Super!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 10,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Schau, ob es Kundenbewertungen gibt und ob das Unternehmen eine Impressum-Seite hat.",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 11,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Oftmals haben solche betrügerischen Seiten nicht genügend Informationen oder zeigen gefälschte Rezensionen.",
            scenario: GameScenario.SocialMedia
        }
    ]
];
