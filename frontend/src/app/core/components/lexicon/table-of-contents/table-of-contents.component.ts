import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Chapter, Chapters } from '../../../../shared/lexicon/Chapter';
import { ChapterTileComponent } from "./chapter-tile/chapter-tile.component";
import { GameService } from '../../../../shared/gameUtilities/game.service';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [CommonModule, ChapterTileComponent],
  templateUrl: './table-of-contents.component.html',
  styleUrl: './table-of-contents.component.scss'
})
export class TableOfContentsComponent {
  protected chapters : Chapter[];

  constructor(private game: GameService) {
    this.chapters = Chapters;
  }

}
