import { Component } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { LexiconService } from '../../../shared/lexicon/lexicon.service';
import { SpyComponent } from "../../../core/components/spy/spy.component";

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  imports: [CommonModule, CdkDropList, CdkDrag, SpyComponent]
})
export class GameComponent {
  // Zutatenliste
  ingredients = [
    { name: 'Eier', image: 'assets/cookies/eggs.png' },
    { name: 'Mehl', image: 'assets/cookies/flour.png' },
    { name: 'Zucker', image: 'assets/cookies/sugar.png' },
    { name: 'Butter', image: 'assets/cookies/butter.png' },
    { name: 'Vanille', image: 'assets/cookies/vanilla.png' },
    { name: 'Schokostreusel', image: 'assets/cookies/sprinkles.png' },
    { name: 'Schokolade', image: 'assets/cookies/chocolate.png' },
    { name: 'Milch', image: 'assets/cookies/milk.png' },
  ];

  bowlContents: any[] = [];

  constructor(protected lexicon: LexiconService) {
    lexicon.isVisible = true;
  }

  protected get buttonVisible(): boolean {
    return this.bowlContents.length > 0;
  }



  drop(event: CdkDragDrop<string[]> | any) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );

    console.log(this.bowlContents)
  }

}
