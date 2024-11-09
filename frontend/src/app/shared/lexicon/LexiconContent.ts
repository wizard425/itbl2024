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
            title: "eeeee",
            content: "",
            pageNumber: 1
        }
    }, {
        leftPage: {
            title: "zewieieieiei",
            content: "Hier findest du Sachen die nützlich sein könnten",
            pageNumber: 2
        },
        rightPage: {
            title: "drrrr",
            content: "",
            pageNumber: 3
        }
    }, {
        leftPage: {
            title: "Seite 4",
            content: "Hier findestsdf",
            pageNumber: 4
        },
        rightPage: {
            title: "sdfgsdfg",
            content: "sdfsdgfsd",
            pageNumber: 5
        }
    },
]