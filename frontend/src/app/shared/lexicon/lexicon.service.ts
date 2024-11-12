import { Injectable } from '@angular/core';
import { DoublePage, LexiconContent } from './LexiconContent';
import { Chapter } from './Chapter';

@Injectable({
  providedIn: 'root'
})
export class LexiconService {

  private currentChapter: Chapter | undefined;
  private lexiconContent: DoublePage[] = [];
  private currentIndex = 0;
  private currentPage: DoublePage;


  constructor() {
    this.lexiconContent = LexiconContent;
    this.currentPage = this.lexiconContent[this.currentIndex];
  }


  getCurrentPage(): DoublePage {
    return this.currentPage;
  }

  getCurrentChapter(): Chapter | undefined {
    return this.currentChapter;
  }

  nextPage() {
    if (this.hasNextPage()) {
      this.currentIndex++;
      this.setPage(this.currentIndex);
    }
  }

  previousPage() {
    if (this.hasPreviousPage()) {
      this.currentIndex--;
      this.setPage(this.currentIndex);
    }
  }

  setChapter(chapter: Chapter) {
    // currentPage has also to be set
    this.currentChapter = chapter;
    this.currentIndex = chapter.startsAtPage;
    this.setPage(this.currentIndex);
  }

  hasNextPage(): boolean {
    return this.currentIndex < this.lexiconContent.length - 1;
  }

  hasPreviousPage(): boolean {
    return this.currentIndex > 0;
  }

  private setPage(index: number) {
    this.currentPage = this.lexiconContent[this.currentIndex];
  }

}
