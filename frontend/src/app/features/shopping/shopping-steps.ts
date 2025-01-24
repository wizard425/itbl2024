import { GameScenario } from "../../shared/gameUtilities/GameScenario";
import { GameStep } from "../../shared/gameUtilities/GameStep";

export const ShoppingSteps: GameStep[][] = [
    [
        {
            order: 1,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Du bist auf einer neuen Mission: eine Shoppingliste abzuarbeiten und dabei auf alle Fallen zu achten, die im Internet auf dich lauern!",
            scenario: GameScenario.Shopping
        }
    ],
    [
        {
            order: 2,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Aber denk daran, nicht alles ist so, wie es scheint – überprüfe die Webseiten genau, gib keine unnötigen Daten preis und lass dich nicht unter Druck setzen!",
            scenario: GameScenario.Shopping
        }
    ],
    [
        {
            order: 3,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Hier ist deine Shoppingliste, die du abarbeiten musst. Du kannst sie jederzeit im Lexikon einsehen!",
            scenario: GameScenario.SocialMedia
        }
    ],
    [
        {
            order: 4,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Okay, lass uns nun mit dem ersten Online-Shop beginnen",
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
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Oftmals haben solche betrügerischen Seiten nicht genügend Informationen oder zeigen gefälschte Rezensionen.",
            scenario: GameScenario.SocialMedia
        }
    ],[
        {
            order: 12,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.SocialMedia
        }
    ],[
        {
            order: 13,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Stop! Gib keine unnötigen Standortabfragen frei! Für den Kaufprozess ist eine Standortabfrage völlig unnötig und vermindern deinen Datenschutz!",
            scenario: GameScenario.SocialMedia
        },{
            order: 13,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Super! In diesem Kontext ist es richtig eine unnötige Standortabfrage abzulehnen, da sie für den Kauf nicht erforderlich ist freizugeben!",
            scenario: GameScenario.SocialMedia
        }
    ],[
        {
            order: 14,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.SocialMedia
        }
    ],[
        {
            order: 15,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Falsch, ohne Zustimmung zu den Nutzungsbedingungen kannst du leider nicht weiter shoppen.",
            scenario: GameScenario.SocialMedia
        },{
            order: 15,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Richtig, die Terms and agreements musst du bei so gut wie jeder Seite akzeptieren. Ein kurzer Blick in diese lohnt sich dennoch, um zu sehen, was du alles akzeptierst!",
            scenario: GameScenario.SocialMedia
        }
    ],[
        {
            order: 16,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Die Zustimmung zu den Nutzungsbedingungen ist erforderlich, da sie die Regeln und den Schutz deiner Daten im Shop festlegen. Stimme den Terms and Agreements zu, um den Einkauf sicher fortzusetzen.",
            scenario: GameScenario.SocialMedia
        }
    ],[
        {
            order: 17,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Stelle zudem sicher, dass du - vor allem wenn du nicht vor hast in nächster Zeit noch einmal zu bestellen - keine Daten in deinem Profil speicherst!",
            scenario: GameScenario.SocialMedia
        }
    ],[
        {
            order: 18,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Auch optionale Angaben wie beispielsweise deine Handynummer solltest zum besseren Schutz deiner Daten nicht angeben!",
            scenario: GameScenario.SocialMedia
        }
    ]
];
