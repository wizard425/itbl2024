import { Component, inject } from '@angular/core';
import { GameScenario } from '../../../shared/gameUtilities/GameScenario';
import { GameService } from '../../../shared/gameUtilities/game.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-settings-dialog',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule],
  templateUrl: './settings-dialog.component.html',
  styleUrl: './settings-dialog.component.scss'
})
export class SettingsDialogComponent {
  readonly dialogRef = inject(MatDialogRef<SettingsDialogComponent>);


  constructor(protected gameService: GameService,
    private router: Router
  ){
  }

  logout(){
    this.gameService.logout();
    this.dialogRef.close();
    this.router.navigate(['/']);
  }

}
