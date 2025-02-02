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
        }],
    [{
        order: 1,
        canClickNext: true,
        reachablePoints: 0,
        scenario: GameScenario.Computer,
        textToSpeech: "Ein nicht leicht zu knackendes Passwort ist in der heutigen Zeit sehr wichtig. Ein Passwort schützt deine persönlichen Daten auf Webseiten und vor Datendiebstahl."
    }], [{
        order: 2,
        canClickNext: true,
        reachablePoints: 0,
        scenario: GameScenario.Computer,
        textToSpeech: "Stell dir vor jemand hat deine Zugangsdaten zu Instagram und kann anschließend mit deinem Account machen was er will."
    }], [{
        order: 3,
        canClickNext: true,
        reachablePoints: 0,
        scenario: GameScenario.Computer,
        textToSpeech: "Damit das nicht passiert, schauen wir uns an, wie man am besten Passwörter erstellt. Also los jetzt!"
    }],[{
        order: 4,
        canClickNext: true,
        reachablePoints: 0,
        scenario: GameScenario.Computer,
        textToSpeech: "Die Analyse ist fertig. Schau deine Statistiken an"
    }],

];