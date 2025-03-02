import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-allcompleted-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './allcompleted-dialog.component.html',
  styleUrl: './allcompleted-dialog.component.scss'
})
export class AllcompletedDialogComponent {

  constructor(private dialogRef: MatDialogRef<AllcompletedDialogComponent>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  weiter() {
    this.dialogRef.close();
    this.router.navigate(["../scoreboard/list"], { relativeTo: this.activatedRoute });
  }

}
