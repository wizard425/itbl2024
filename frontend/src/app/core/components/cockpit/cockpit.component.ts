import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
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

  constructor(private dialog: MatDialog, protected lexicon: LexiconService) {

  }

  openDialog() {
    this.dialog.open(LexiconComponent, {
      height: "70vh",
      width: "fit-content",
      maxWidth: "80vw"
    });
  }

}
