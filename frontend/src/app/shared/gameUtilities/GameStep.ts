import { GameScenario } from "./GameScenario";

export interface GameStep {
    order: number,
    // what text the spy says to the user
    textToSpeech: string,
    // points that can be achieved in this step
    reachablePoints: number,
    // can click to next gamestep in dialog of spy
    canClickNext: boolean,
    // in which gamescenario this game step is valid / gets executed
    scenario: GameScenario
}