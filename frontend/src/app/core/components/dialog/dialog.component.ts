import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { GameService } from '../../../shared/gameUtilities/game.service';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { SpeakingTextComponent } from './speaking-text/speaking-text.component';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [SpeakingTextComponent, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  protected showNextButton: boolean = false;
  @Output() clickedOnNext = new EventEmitter();
  @Input() gameStep!: GameStep;
  @Input() who: string = "";
  @Input() BackgroundColor: string = "";
  @Input() isRight : boolean = true;
  
  constructor() {

  }

  goToNext() {
    this.clickedOnNext.emit();
  }

  finishedChanged(isFinished: boolean) {
    this.showNextButton = isFinished;
  }
}
