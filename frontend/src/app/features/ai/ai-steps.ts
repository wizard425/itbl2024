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
            textToSpeech: "",
            scenario: GameScenario.AI
        }
    ],
    [
        {
            order: 5,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Deine Mission: Schreibe einen Aufsatz mit Hilfe einer KI – aber Vorsicht! Die KI fordert persönliche Informationen, und du musst entscheiden, welche du preisgibst. Deine Aufgabe ist es, deine Identität zu schützen und trotzdem erfolgreich zu bleiben. Viel Glück, Spion!",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 6,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.Shopping
        }
    ],
    [
        {
            order: 7,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Richtig! Diese Seite ist nicht nicht vertrauenswürdig! Lass uns gemeinsam auf die Merkmale schauen...",
            scenario: GameScenario.Shopping
        },{
            order: 7,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Leider Falsch! Auch wenn diese Seite verlockende Angebote hat, solltest du auf folgende Merkmale achten...",
            scenario: GameScenario.Shopping
        }
    ], [
        {
            order: 8,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Hier handelt es sich um ein Fake Impressum! Achte auf möglichst seriöse Angaben. “Registered in Somewhere” scheint hier auf eine Fake-Angabe hinzuweisen",
            scenario: GameScenario.Shopping
        }
    ], [
        {
            order: 9,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Sehr hohe Rabatte (70%) sind ebenfalls ein Indiz für Fake-Angebote ",
            scenario: GameScenario.Shopping
        }
    ], [
        {
            order: 10,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Außerdem finden wir hier keine Kontaktangaben zu dem Onlineshop. Ein weiteres Zeichen für einen Fake-Shop.",
            scenario: GameScenario.Shopping
        }
    ], [
        {
            order: 11,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Ist diese Webseite vertrauenswürdig?",
            scenario: GameScenario.Shopping
        }
    ], [
        {
            order: 12,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 13,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Richtig! Diese Seite ist nicht nicht vertrauenswürdig! Lass uns gemeinsam auf die Merkmale schauen...",
            scenario: GameScenario.Shopping
        },{
            order: 13,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Leider Falsch! Auch wenn diese Seite verlockende Angebote hat, solltest du auf folgende Merkmale achten...",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 14,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Diesmal ist das Impressum zwar vorhanden. Aber nicht ganz vollständig! ",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 15,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Der Name ist zwar vorhanden, jedoch ist die Adresse nicht sichtbar. “Irgendwo in Deutschland” ist hier auffällig!",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 16,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Außerdem haben wir hier unseriöse Rabatte und Angebote, die den Kunden unter Druck setzen sollen! ",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 17,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Ist diese Webseite vertrauenswürdig?",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 18,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 19,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Richtig diese Seite ist vertrauenswürdig! Lass uns gemeinsam analysieren, woran du das erkennen kannst",
            scenario: GameScenario.Shopping
        },{
            order: 19,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Leider falsch! Diese Seite scheint vertrauenswürdig zu sein! Aber nicht schlimm, ich zeige dir, woran du das erkennen kannst!",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 20,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Das Impressum ist vollständig vorhanden mit Namen , Adresse und weiteren Kontaktangaben",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 21,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Zudem enthält die Seite keine unrealistischen Angebote oder Rabatte! Dies ist ein seriöses Zeichen!",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 22,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Wir haben jetzt eine seriöse Webseite gefunden – es kann losgehen! Arbeite deine Shoppingliste ab und füge die benötigten Produkte in den Warenkorb hinzu. Falls du dir unsicher bist, kannst du die Liste jederzeit im Lexikon nachschauen",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 23,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 24,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Gute Wahl! Du hast nicht nur deine Shoppingliste clever abgearbeitet, sondern auch noch Geld gespart – und das ganz ohne unnötige Daten preiszugeben. Weiter so, Agent!",
            scenario: GameScenario.Shopping
        },{
            order: 24,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Alles klar, du hast das Angebot abgelehnt. Aber denk daran: Nicht jedes Sparangebot ist automatisch eine Falle. Manchmal lohnt es sich, genauer hinzuschauen. Weiter mit der Mission!",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 25,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Entscheide dich ob du deine Handynummer für weiteren Rabatt angeben willst oder nicht. Tippe dafür auf das jeweilige Feld!",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 26,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Genau richtig! Gib hier besser nicht deine Handynummer an. Jede Angabe bedeutet zusätzliche Daten, die gesammelt und möglicherweise für andere Zwecke verwendet werden könnten – auch gegen dich.",
            scenario: GameScenario.Shopping
        },{
            order: 26,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Vorsicht! Gib deine Handynummer besser nicht preis. Jede Angabe liefert zusätzliche Daten, die gesammelt und möglicherweise für andere Zwecke genutzt werden können – auch gegen dich.",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 27,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Fast geschafft! Überprüfe jetzt deinen Warenkorb: Sind alle Produkte richtig? Wenn alles passt, klicke auf Bestellung abschließen, um deine Mission abzuschließen.",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 28,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 29,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Gut gemacht! Du hast aufmerksam geprüft und unnötige Werbung vermieden. Ein wichtiger Schritt, um sicher und datenbewusst einzukaufen!",
            scenario: GameScenario.Shopping
        },{
            order: 29,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Oh nein, das Häkchen war schon gesetzt! Dadurch hast du dich unbemerkt für den Newsletter angemeldet. Das zeigt, wie wichtig es ist, auch die kleinsten Details im Checkout zu prüfen.",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 30,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Gut gemacht, Agent! Beim Online-Shopping ist es wichtig, dass die Webseite, auf der du einkaufen möchtest, vertrauenswürdig ist. Ein gutes Impressum und echte Kontaktmöglichkeiten sind ein Muss!",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 31,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Aber Achtung! Auch auf vertrauenswürdigen Webseiten können Fallen lauern.",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 32,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Manchmal wirst du mit Angeboten gelockt, die deine persönlichen Daten verlangen – wie zum Beispiel deine Telefonnummer. Das kann später zu personalisierter Werbung führen.",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 33,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Natürlich gibt es auch legitime Angebote, bei denen du sparen kannst – du musst immer abwägen, ob es wirklich sinnvoll ist!",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 34,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Generell solltest du beim Online-Shopping auf sogenannte Dark Patterns achten. Das sind Designelemente, die dich unbewusst zu Entscheidungen drängen, die nicht in deinem besten Interesse sind.",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 35,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Ein Beispiel, das wir in unserem Spiel hatten, war die Pre-Checked Box – ein automatisch gesetztes Häkchen, das dich z. B. für einen Newsletter anmeldet, wenn du nicht aufpasst.",
            scenario: GameScenario.Shopping
        }
    ],[
        {
            order: 36,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Hier sind noch ein paar weitere wichtige Dark Patterns - wenn du mehr darüber erfahren willst, lies im Lexikon nach.",
            scenario: GameScenario.Shopping
        }
    ]
];
