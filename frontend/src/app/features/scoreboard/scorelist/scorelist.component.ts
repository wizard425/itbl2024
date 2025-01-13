import { Component } from '@angular/core';
import { SchoolclassService } from '../../../core/services/schoolclass.service';
import { RanklistEntry } from '../../../core/dtos/RanklistEntry';
import { UserService } from '../../../core/services/user.service';
import { GameService } from '../../../shared/gameUtilities/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scorelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scorelist.component.html',
  styleUrl: './scorelist.component.scss'
})
export class ScorelistComponent {

  data: RanklistEntry[] = [];

  others: Array<RanklistEntry> = [];


  constructor(private classService: SchoolclassService,
    gameService: GameService
  ) {

    if (gameService.currentUser?.schoolClassId) {
      classService.getRanklist(gameService.currentUser?.schoolClassId).subscribe(da => {
        this.data = da;
        for (let i = 3; i < this.data.length; i++) {
          if (this.data[i])
            this.others.push(this.data[i]);
        }
      });
    }
  }





}
