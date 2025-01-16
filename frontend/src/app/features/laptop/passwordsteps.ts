import { GameScenario } from "../../shared/gameUtilities/GameScenario";
import { GameStep } from "../../shared/gameUtilities/GameStep";

export const PasswordSteps: GameStep[][] = [
    [
        {
            order: 0,
            canClickNext: true,
            reachablePoints: 0,
            scenario: GameScenario.Computer,
            textToSpeech: "Hey Agent, es ist an der Zeit deine Sicherheit zu erhöhen. Lass uns ein starkes Passwort erstellen!"
        }
    ]];