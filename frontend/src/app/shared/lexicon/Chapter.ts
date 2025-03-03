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
        startsAtPage: 3,
        isLocked: false
    },
    {
        id: 2,
        name: "Cookies",
        startsAtPage: 1,
        isLocked: false
    },
    {
        id: 3,
        name: "AI",
        startsAtPage: 4,
        isLocked: false
    },
    {
        id: 4,
        name: "Shopping",
        startsAtPage: 3,
        isLocked: false
    },
    {
        id: 5,
        name: "Social Media",
        startsAtPage: 4,
        isLocked: false
    },
]