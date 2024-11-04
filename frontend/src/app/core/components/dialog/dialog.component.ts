import { Component, Input } from '@angular/core';
import { SpeakingTextComponent} from "../speaking-text/speaking-text.component";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [SpeakingTextComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Input() dialog: string = '';
}
