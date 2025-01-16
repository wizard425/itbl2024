import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CompletionService } from '../../../../core/services/completion.service';
import { GameScenario } from '../../../../shared/gameUtilities/GameScenario';

@Component({
  selector: 'app-feedback-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './feedback-dialog.component.html',
  styleUrl: './feedback-dialog.component.scss'
})
export class FeedbackDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { points: number, message: string },
private router: Router, private dialogRef: MatDialogRef<FeedbackDialogComponent>,
private completionService: CompletionService) {
  }

  continue() {
    this.dialogRef.close();
    this.completionService.addToCompleted(GameScenario.Cookies);
    this.router.navigate([`/cockpit`]);
  }

}
