import { Component } from '@angular/core';
import { AiService } from '../../../core/services/scenario-services/ai.service';

@Component({
  selector: 'app-hausaufgabe',
  standalone: true,
  imports: [],
  templateUrl: './hausaufgabe.component.html',
  styleUrl: './hausaufgabe.component.scss'
})
export class HausaufgabeComponent {
  constructor(protected ai:AiService){

  }
onButtonClick() {
  this.ai.next()
}

}
