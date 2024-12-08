import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RanklistEntry } from '../../dtos/RanklistEntry';
import { SchoolclassService } from '../../services/schoolclass.service';
import { GameService } from '../../../shared/gameUtilities/game.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ranklist',
  standalone: true,
  imports: [MatCardModule, MatTableModule],
  templateUrl: './ranklist.component.html',
  styleUrl: './ranklist.component.scss'
})
export class RanklistComponent implements OnInit {



  displayedColumns: string[] = ['position', 'name', 'points'];
  ranklistSchoolClass: RanklistEntry[] = [];


  constructor(private schoolclassService: SchoolclassService,
    private gameService: GameService
  ) {

  }

  ngOnInit(): void {
    if (this.gameService.currentUser?.schoolClassId) {
      this.schoolclassService.getRanklist(this.gameService.currentUser.schoolClassId).subscribe(ranklist => {
        this.ranklistSchoolClass = ranklist;
      })
    }


  }


}
