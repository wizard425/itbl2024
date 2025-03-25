import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LexiconComponent } from '../lexicon/lexicon.component';
import { LexiconService } from '../../../shared/lexicon/lexicon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatDialogModule, CommonModule],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.scss'
})
export class CockpitComponent {

  constructor(private dialog: MatDialog, protected lexicon: LexiconService, private router: Router) {

  }

  getClass() {
    if (this.router.url == "/cockpit/shopping") {
      return "lexikon-button-1";
    } else {
      return "lexikon-button"
    }
  }
  openDialog() {
    this.dialog.open(LexiconComponent, {
      height: "70vh",
      width: "fit-content",
      maxWidth: "80vw"
    });
  }

}
