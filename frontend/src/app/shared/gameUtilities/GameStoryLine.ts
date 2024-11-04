import { GameStep } from "./GameStep";

// WICHTIG: order bei 0 beginnen

export const gameStoryLine: GameStep[] = [
    {
        order: 0,
        textToSpeech: "hallo tibl",
        reachablePoints: 200,
        canClickNext: true
    },
    {
        order: 1,
        textToSpeech: "Stell dir vor, du bist mitten in einem Großraumbüro. Überall um dich herum arbeiten Mitarbeiter an vertraulichen Projekten. Du bist verantwortlich dafür, ihre Daten zu sichern und sie vor potenziellen Cyberangriffen und unbefugtem Zugriff zu schützen. Schärfe deine Sinne und sei wachsam!",
        reachablePoints: 200,
        canClickNext: true
    }, {
        order: 2,
        textToSpeech: "Deine Aufgabe besteht darin, die Mitarbeiter über die Gefahren des Datenmissbrauchs aufzuklären. Zeige ihnen, wie wichtig es ist, Passwörter zu schützen und verdächtige E-Mails zu erkennen. Wirst du die richtigen Maßnahmen ergreifen, um ihre Informationen sicher zu halten?",
        reachablePoints: 200,
        canClickNext: true
    }, {
        order: 3,
        textToSpeech: "Zusätzlich musst du die Sicherheitsrichtlinien des Unternehmens beachten. Stelle sicher, dass vertrauliche Daten nur auf sicheren Geräten gespeichert werden und dass keine sensiblen Informationen ungesichert herumliegen. Es liegt an dir, das Vertrauen der Kollegen zu gewinnen und ihnen Sicherheit zu bieten.",
        reachablePoints: 200,
        canClickNext: false
    }, {
        order: 4,
        textToSpeech: "Die Zeit ist knapp! Deine Entscheidungen werden die Sicherheit des Unternehmens beeinflussen. Überlege gut, bevor du handelst, und führe deine Aufgaben mit Geschick und Weitblick aus. Das Büro wartet auf dich – der Datenschutz liegt in deinen Händen. Mach dich bereit, Agent!",
        reachablePoints: 200,
        canClickNext: true
    },
]