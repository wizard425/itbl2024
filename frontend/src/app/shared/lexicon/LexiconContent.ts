import { Component, Type } from "@angular/core";
import { Chapter } from "./Chapter";
import { TableOfContentsComponent } from "../../core/components/lexicon/table-of-contents/table-of-contents.component";

export interface Page {
    title?: string;
    pageNumber: number,
    content?: string,
    component?: Type<any>;
    chapter?: Chapter
}

export interface DoublePage {
    leftPage?: Page;
    rightPage?: Page;
}

export const LexiconContent: DoublePage[] = [
    {
        leftPage: {
            title: "Lexikon",
            component: TableOfContentsComponent,
            pageNumber: 0
        },
        rightPage: {
            title: "Inhalt",
            content: "Hier findest du allerlei Wissen um deinem Erfolg bisschen zu helfen. Schau es dir gut an und lese Dinge nach. Es wird sich lohnen :)",
            pageNumber: 1
        }
    }, {
        leftPage: {
            title: "Cookie-Zutaten",
            content: "<h6>Mehl</h6><p>Mehl ist eine grundlegende Zutat, die daf&uuml;r sorgt, dass alles zusammenh&auml;lt. Es steht f&uuml;r die grundlegenden Funktionen einer Website, die notwendig sind, um sie zu betreiben.</p><p>&nbsp;</p><h6>Streusel</h6><p>Die bringen den letzten Schlitt. Sie repr&auml;sentieren personalisierte Inhalte, die auf den Interessen der Nutzer basieren.</p>",
            pageNumber: 2
        },
        rightPage: {
            title: "",
            content: "<h6>Vanille</h6><p>Vanille verleiht dem Keks eine besondere Note. Sie symbolisiert Features, die das Nutzererlebnis verbessen und die Qualit&auml;t steigern.</p><p>&nbsp;</p><h6>Zucker</h6><p>Zucker verfeiner den Geschmack. Er steht f&uuml;r Datenanalyse, die dabei hilft, die Nutzererfahrung zu verbessern, indem sie das Verhalten auf der Seite verfolgt.</p>",
            pageNumber: 3
        }
    }, {
        leftPage: {
            title: "",
            content: "<h6>Butter</h6><p>Butter sorgt f&uuml;r eine cremige Textur und eine angenehme Konsistenz. Sie steht f&uuml;r Komfortfunktionen, die das Benutzererlebnis verbessern, ohne die Grundlage zu ver&auml;ndern.</p><h6>Schoko</h6><p>Schokost&uuml;ckchen machen den Keks besonders und unverwechselbar. Sie stehen f&uuml;r gezielte Werbung, die auf die Vorlieben des Nutzers abgestimmt ist</p>",
            pageNumber: 4
        },
        rightPage: {
            title: "",
            content: "<h6>Milch</h6><p>Milch sorgt f&uuml;r ein angenehmes Finish und eine verbesserte Textur. Sie repr&auml;sentiert Funktionen, die die Benutzererfahrung verbessern, wie personalisierte Vorschl&auml;ge.</p>",
            pageNumber: 5
        }
    }
]