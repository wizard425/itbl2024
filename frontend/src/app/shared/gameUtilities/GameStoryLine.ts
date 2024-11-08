import { GameScenario } from "./GameScenario";
import { GameStep } from "./GameStep";

// WICHTIG: order bei 0 beginnen

export const gameStoryLine: GameStep[] = [
    {
        order: 0,
        textToSpeech: "Hallo ITBL!\nDas ist unser Protoyp",
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
        canClickNext: false,
        scenario: GameScenario.Cockpit
    }
]