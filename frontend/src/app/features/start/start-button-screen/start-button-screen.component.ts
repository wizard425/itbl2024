import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ConsentDialogComponent } from "../../../core/components/consent/consent-dialog/consent-dialog.component";

@Component({
  selector: 'app-start-button-screen',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterModule, ConsentDialogComponent],
  templateUrl: './start-button-screen.component.html',
  styleUrl: './start-button-screen.component.scss'
})
export class StartButtonScreenComponent {

}
