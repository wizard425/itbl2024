import { Component } from '@angular/core';
import { GameScenario } from '../../../shared/gameUtilities/GameScenario';
import { GameService } from '../../../shared/gameUtilities/game.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-settings-dialog',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './settings-dialog.component.html',
  styleUrl: './settings-dialog.component.scss'
})
export class SettingsDialogComponent {


  constructor(protected gameService: GameService){




  }

}
