import { GameScenario } from "./GameScenario";
import { GameStep } from "./GameStep";

// WICHTIG: order bei 0 beginnen

export const gameStoryLine: GameStep[] = [
    {
        order: 0,
        textToSpeech: "Hallo Agent!\n",
        reachablePoints: 0,
        canClickNext: true,
        scenario: GameScenario.Cockpit
    },
    {
        order: 1,
        textToSpeech: "Ich bin der Spion, der den Schülern Sachen zum Thema Datenschutz beibringen wird",
        reachablePoints: 0,
        canClickNext: true,
        scenario: GameScenario.Cockpit
    },
    {
        order: 2,
        textToSpeech: "Um mich herum seht ihr die einzelnen Bereiche, die durch Spiele näher gebracht werden",
        reachablePoints: 0,
        canClickNext: true,
        scenario: GameScenario.Cockpit
    },
    // Intro for Passwords
    {
        order: 3,
        textToSpeech: "Zuerst lernen wir, ein starkes Passwort zu erstellen.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.Computer
    },
    {
        order: 4,
        textToSpeech: "Ein starkes Passwort ist wie ein Tresor – sicher vor Hackern.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.Computer
    },
    // Intro for AI Data Sharing
    {
        order: 5,
        textToSpeech: "Als nächstes tauchen wir in die Welt der KI ein.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.AI
    },
    {
        order: 6,
        textToSpeech: "Sei vorsichtig, welche Daten du mit KI teilst.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.AI
    },
    {
        order: 7,
        textToSpeech: "Ich zeige dir, wie du sicher Daten online teilst.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.AI
    },
    // Intro for Online Shopping
    {
        order: 8,
        textToSpeech: "Jetzt erkunden wir die Welt des Online-Shoppings.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.Shopping
    },
    {
        order: 9,
        textToSpeech: "Online-Shopping ist bequem, birgt aber Risiken.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.Shopping
    },
    {
        order: 10,
        textToSpeech: "Ich verrate dir Tipps für sicheres Einkaufen im Internet.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.Shopping
    },
    // Intro for Cookies
    {
        order: 11,
        textToSpeech: "Cookies wirken harmlos, aber sie verfolgen jede deiner Bewegungen.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.Cookies
    },
    {
        order: 12,
        textToSpeech: "Ich zeige dir, welche Cookies du sicher zulassen kannst.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.Cookies
    },
    // Intro for Social Media
    {
        order: 13,
        textToSpeech: "Zum Schluss sprechen wir über soziale Medien und sicheres Teilen.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.SocialMedia
    },
    {
        order: 14,
        textToSpeech: "Zu viel Teilen kann riskant sein – schütze dein Privatleben.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.SocialMedia
    },
    {
        order: 15,
        textToSpeech: "Ich zeige dir, wie du dein Online-Leben sicher hältst.",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.SocialMedia
    },
    {
        order: 16,
        textToSpeech: "Oh, eine Sache habe ich noch! Schau mal nach unten rechts. Da findest du das Lexikon",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.SocialMedia
    },
    {
        order: 17,
        textToSpeech: "Da stehen sehr nützliche Sachen drin, die dir sicher weiterhelfen werden. Also scheue dich nicht, einen Blick rein zu werfen!",
        reachablePoints: 10,
        canClickNext: true,
        scenario: GameScenario.SocialMedia
    },
    // Outro of the Intro
    {
        order: 18,
        textToSpeech: "Das war die Einführung. Jetzt beginnt deine digitale Mission!",
        reachablePoints: 0,
        canClickNext: true,
        scenario: GameScenario.Cockpit
    },
    {
        order: 19,
        textToSpeech: "Mach dich bereit, deine Fähigkeiten im Cyberspace zu beweisen!",
        reachablePoints: 0,
        canClickNext: true,
        scenario: GameScenario.Cockpit
    },
    {
        order: 20,
        textToSpeech: "Viel Glück! Der Schutz deiner Daten liegt in deinen Händen.",
        reachablePoints: 0,
        canClickNext: false,
        scenario: GameScenario.Cockpit
    }
];
