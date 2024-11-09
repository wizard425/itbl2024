export interface Chapter {
    id: number,
    name: string,
    startsAtPage: number,
    isLocked: boolean
}


export const Chapters: Chapter[] = [
    {
        id: 1,
        name: "Passwort",
        startsAtPage: 1,
        isLocked: true
    },
    {
        id: 2,
        name: "Cookies",
        startsAtPage: 10,
        isLocked: true
    },
    {
        id: 3,
        name: "AI",
        startsAtPage: 20,
        isLocked: true
    },
    {
        id: 4,
        name: "Shopping",
        startsAtPage: 30,
        isLocked: true
    },
    {
        id: 5,
        name: "Social Media",
        startsAtPage: 40,
        isLocked: true
    },
]