import { GameScenario } from "../../shared/gameUtilities/GameScenario";
import { GameStep } from "../../shared/gameUtilities/GameStep";

export const PhoneSteps: GameStep[][] = [
    [
        {
            order: 1,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Guten Morgen! Zeit, in den Tag zu starten. Was machst du meist, wenn du aufwachst?",
            scenario: GameScenario.SocialMedia
        }
    ],
    [
        {
            order: 2,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Genau, Instagram! Bevor du aus dem Bett springst, lass uns einen Blick auf dein Handy werfen.",
            scenario: GameScenario.SocialMedia
        }
    ],
    [
        {
            order: 3,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Du hast neue Freundschaftsanfragen! Lass uns diese gemeinsam durchgehen...",
            scenario: GameScenario.SocialMedia
        }
    ],
    [
        {
            order: 4,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Was meinst du, ist dieses Profil echt oder gefälscht?",
            scenario: GameScenario.SocialMedia
        }
    ],
    [
        {
            order: 5,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Leider Falsch! Im folgenden erklären wir dir, warum es sich bei diesem Profil sehr wahrscheinlich nicht um einen Fake-Account handelt.",
            scenario: GameScenario.SocialMedia
        }, {
            order: 5,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Richtig! Das sieht nach einem echtem Profil aus! Das erkennst du im Folgenden an den Rot eingekreisten Bereichen!",
            scenario: GameScenario.SocialMedia
        }
    ],
    [
        {
            order: 6,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Bei diesem Nutzer fällt auf, dass er eine realistische Verteilung bei der Anzahl an Followern, Gefolgten und Beiträgen hat! Gefälschte Profile haben oft weniger Beiträge und Follower!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 7,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Zudem siehst du hier, dass ihr viele gemeinsame Follower habt, was ebenfalls stark darauf schließen lässt, dass es sich um keinen Fake-Account handelt!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 8,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Der Nutzer scheint außerdem ein ausgewogenes Posting-Verhalten zu haben. Achte bei Bildern zudem immer auf das Veröffentlichungsdatum. Fake Accounts posten meist viele Bilder kurz nacheinander!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 9,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Hier ist deine 2. Anfrage. Ist das Profil echt oder fake?",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 10,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Leider falsch! Das Profil scheint leider ein Fake-Account zu sein. Wir erklären wir dir im folgenden woran du das erkennst!",
            scenario: GameScenario.SocialMedia
        }, {
            order: 10,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Richtig! Das sieht nach einem fake Profil aus! Das erkennst du im folgenden an den Rot eingekreisten Bereichen.",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 11,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Die Person scheint sehr wenig Follower zu haben, im Verhältnis zu der Anzahl an Personen denen sie folgt. Das muss nicht Zwingend bedeuten, dass es ein Fake Profil ist, deshalb solltest du auf weitere Faktoren achten!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 12,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Des Weiteren gibt die Person sich als ein Shop aus und hat einen verdächtigen Link im Profil auf denen du auf keinen Fall klicken solltest!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 13,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Auch die Beiträge der Person scheinen alles keine authentischen Bilder zu sein. Achte hier zudem auf das Veröffentlichungsdatum.",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 14,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Es wird zudem nach Unterstützung für ein Projekt gefragt. Auch hier ist der verdächtige Link wieder zu sehen. Auf keinen Fall drauf klicken!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 15,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Jetzt dein vorletztes Profil! Du machst einen tollen Eindruck bisher! Echt oder Fake?",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 16,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Leider falsch, dieses Profil scheint ein fake Profil zu sein! Im folgenden erklären wir dir kurz die einzelnen Merkmale!",
            scenario: GameScenario.SocialMedia
        }, {
            order: 16,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Richtig! Das sieht nach einem fake Profil aus! Auch hier erklären wir dir es wieder Anhand einzelner Profil Merkmale.",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 17,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Hier könnte der Name schon auf einen Fake-Account hindeuten. Komisch ist, dass dieser User einen blauen Haken hat.",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 18,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Dieser soll wohl darauf abzielen anderen Usern zu zeigen, dass es sich um ein echtes Profil handelt. Ein blauer Haken kann jedoch seit kurzem von jedem käuflich erworben werden und ist kein Beweis für ein echtes Profil!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 19,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Außerdem hat dieser User nur einen Follower und keine Beiträge, welches ebenfalls  klare Zeichen für einen Fake-Account sind!",
            scenario: GameScenario.SocialMedia
        }
    ],[
        {
            order: 20,
            canClickNext: false,
            reachablePoints: 0,
            textToSpeech: "Und abschließend deine letzte Anfrage! Entscheide zwischen Echt oder Fake!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 21,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Leider falsch! Lass uns gemeinsam die Merkmale durchgehen, welche für ein echtes Profil sprechen!",
            scenario: GameScenario.SocialMedia
        }, {
            order: 21,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Richtig, dieses Profil scheint echt zu sein. Auch hier schauen wir uns nochmal gemeinsam die Merkmale dafür an!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 22,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Ihr habt viele gemeinsame Follower! Dies ist ein starkes Indiz für einen echten Account!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 23,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Dieses Profil scheint aktiv zu sein. Die Beiträge passen hierbei auch zu den Story-Highlights, welches einen seriösen Eindruck vermittelt!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 24,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Abschließend zeigt auch das ausgewogene Verhältnis von Followern und gefolgten Profilen die Authentizität des Profils und unterstreicht dessen Echtheit!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 25,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Bei diesem Nutzer fällt auf, dass er eine realistische Verteilung bei der Anzahl an Followern, Gefolgten und Beiträgen hat! Gefälschte Profile haben oft weniger Beiträge und Follower!",
            scenario: GameScenario.SocialMedia
        }
    ], [
        {
            order: 26,
            canClickNext: true,
            reachablePoints: 0,
            textToSpeech: "Glückwunsch! Mit diesem Spiel hast du X-Punkte verdient! Checke deinen aktuellen Score auf der Startseite ab!",
            scenario: GameScenario.SocialMedia
        }
    ]
];
