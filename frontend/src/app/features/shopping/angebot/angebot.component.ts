import { Component } from '@angular/core';
import { ShoppingService } from '../../../core/services/scenario-services/shopping.service';

@Component({
  selector: 'app-angebot',
  standalone: true,
  imports: [],
  templateUrl: './angebot.component.html',
  styleUrl: './angebot.component.scss'
})
export class AngebotComponent {
  constructor(protected shopping: ShoppingService) {
    }
onDecline() {
  this.shopping.angebot = false;
  this.shopping.next();
}
onAccept() {
  this.shopping.angebotAngenommen = 1;
  this.shopping.angebot = false;
  this.shopping.next();
}

}
