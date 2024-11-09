import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Chapter } from '../../../../../shared/lexicon/Chapter';
import { LexiconService } from '../../../../../shared/lexicon/lexicon.service';
import { GameService } from '../../../../../shared/gameUtilities/game.service';

@Component({
  selector: 'app-chapter-tile',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './chapter-tile.component.html',
  styleUrl: './chapter-tile.component.scss'
})
export class ChapterTileComponent {

  @Input() chapter: Chapter | undefined;

  constructor(protected lexicon: LexiconService, protected game: GameService) {

  }

  goToChapter() {
    this.game.getUnlockedChapters().forEach(c => {
      if (c.id == this.chapter?.id) {
        this.lexicon.setChapter(this.chapter);
      }
    })
  }

}
