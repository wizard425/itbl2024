import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingService } from '../../../core/services/scenario-services/shopping.service';
import { GameService } from '../../../shared/gameUtilities/game.service';

@Component({
  selector: 'app-payout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payout.component.html',
  styleUrl: './payout.component.scss'
})
export class PayoutComponent {
  isNewsletterChecked: boolean = true;
  handleCheckout() {
    if (this.shopping.currentIndex == 27) {
      this.shopping.newslatter = this.isNewsletterChecked;
      this.shopping.next();
    }
  }
  constructor(protected shopping: ShoppingService, protected gameService: GameService) {
  }
}
