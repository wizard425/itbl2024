import { Component } from '@angular/core';
import { SpeakingTextComponent } from "./speaking-text/speaking-text.component";
import { GameService } from '../../../shared/gameUtilities/game.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-speaking-box',
  standalone: true,
  imports: [SpeakingTextComponent, MatCardModule, MatButtonModule],
  templateUrl: './speaking-box.component.html',
  styleUrl: './speaking-box.component.scss'
})
export class SpeakingBoxComponent {


  constructor (protected game: GameService){

  }


  goToNextGameStep() {
    this.game.nextGameStep();
  }

}
