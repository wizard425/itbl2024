import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Chapter } from '../../../../../shared/lexicon/Chapter';
import { LexiconService } from '../../../../../shared/lexicon/lexicon.service';
import { GameService } from '../../../../../shared/gameUtilities/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapter-tile',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './chapter-tile.component.html',
  styleUrl: './chapter-tile.component.scss'
})
export class ChapterTileComponent {

  @Input() chapter!: Chapter;

  constructor(protected lexicon: LexiconService, protected game: GameService) {

  }

  goToChapter() {
    this.game.unlockedChapters.forEach(c => {
      this.lexicon.setChapter(this.chapter);
    })
  }

  isLocked(): boolean {
    const chapters = this.game.unlockedChapters;
    if (this.chapter !== undefined) {
      if (chapters.filter(c => c.id == this.chapter.id).length > 0){
        return false;
      }
    }
    return false;
  }

}
