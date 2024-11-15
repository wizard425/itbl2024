import { GameScenario } from "../../shared/gameUtilities/GameScenario";
import { GameStep } from "../../shared/gameUtilities/GameStep";

export const PhoneSteps : GameStep[] = [
    {
        order: 1,
        canClickNext: true,
        reachablePoints: 0,
        textToSpeech: "Willkommen beim Phonespiel",
        scenario: GameScenario.SocialMedia
    },
    {
        order: 2,
        canClickNext: true,
        reachablePoints: 0,
        textToSpeech: "Das muss ich dir erklären",
        scenario: GameScenario.SocialMedia
    }
]