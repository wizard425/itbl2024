import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LexiconComponent } from '../lexicon/lexicon.component';

@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatDialogModule],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.scss'
})
export class CockpitComponent {

  constructor(private dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(LexiconComponent, {
      height: "70vh",
      width: "fit-content",
      //nWidth: "700px",
      maxWidth: "800px"
    });
  }

}
