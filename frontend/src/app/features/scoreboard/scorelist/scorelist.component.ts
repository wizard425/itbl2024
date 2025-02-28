import { Component } from '@angular/core';
import { SchoolclassService } from '../../../core/services/schoolclass.service';
import { RanklistEntry } from '../../../core/dtos/RanklistEntry';
import { UserService } from '../../../core/services/user.service';
import { GameService } from '../../../shared/gameUtilities/game.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../core/components/loading-component/loader.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-scorelist',
  standalone: true,
  imports: [CommonModule, LoaderComponent, MatButtonModule, MatIconModule],
  templateUrl: './scorelist.component.html',
  styleUrl: './scorelist.component.scss'
})
export class ScorelistComponent {

  data: RanklistEntry[] = [];

  others: Array<RanklistEntry> = [];
  loading: boolean = false;

  constructor(private classService: SchoolclassService,
    private gameService: GameService
  ) {

    if (gameService.currentUser?.schoolClassId) {
      this.loadRanks();
    }
  }

  loadRanks() {
    if (this.gameService.currentUser?.schoolClassId) {
      this.loading = true;
      this.classService.getRanklist(this.gameService.currentUser?.schoolClassId).subscribe(da => {
        this.data = da;
        this.others = [];
        for (let i = 3; i < this.data.length; i++) {
          if (this.data[i])
            this.others.push(this.data[i]);
        }
        this.loading = false;
      }, err => {
        this.loading = false;
      });
    }

  }





}
