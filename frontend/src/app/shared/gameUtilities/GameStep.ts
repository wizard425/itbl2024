export interface GameStep {
    order: number,
    textToSpeech: string,
    reachablePoints: number,
    canClickNext: boolean
}