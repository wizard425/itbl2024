import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-duplicate-name',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './duplicate-name.component.html',
  styleUrl: './duplicate-name.component.scss'
})
export class DuplicateNameComponent {

  readonly dialogRef = inject(MatDialogRef<DuplicateNameComponent>);

  closeDialog() {
    this.dialogRef.close();
  }

}
