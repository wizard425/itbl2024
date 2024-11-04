import { Component, Input } from '@angular/core';
import { SpeakingTextComponent } from './speaking-text/speaking-text.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GameService } from '../../../shared/gameUtilities/game.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [SpeakingTextComponent, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  protected showNextButton: boolean = false;

  constructor(protected game: GameService){

  }

  goToNext() {
    this.game.nextGameStep();
  }

  finishedChanged(isFinished:boolean){
    this.showNextButton = isFinished;
  }
}
