import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-consent-dialog',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './consent-dialog.component.html',
  styleUrl: './consent-dialog.component.scss'
})
export class ConsentDialogComponent {
  isVisible = true;
  isChecked = false;

  constructor() { }


  onContinue(): void {
    if (this.isChecked) {
      this.closeDialog();
    }
  }

  closeDialog(): void {
    this.isVisible = false;
  }

}
