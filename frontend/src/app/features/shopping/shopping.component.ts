import { Component, Inject, ViewChild } from '@angular/core';
import { ShoppingService } from '../../core/services/scenario-services/shopping.service';
import { SpyComponent } from "../../core/components/spy/spy.component";
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { WebsiteComponent } from "./website/website.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { PayoutComponent } from "./payout/payout.component";
import { CompletionService } from '../../core/services/completion.service';
import { GameService } from '../../shared/gameUtilities/game.service';
import { GameScenario } from '../../shared/gameUtilities/GameScenario';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [SpyComponent, CommonModule, ShoppingListComponent, WebsiteComponent, CheckoutComponent, PayoutComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
  constructor( protected shopping: ShoppingService,
    private gameService: GameService) {
  }
  spyclass() {
    if (this.shopping.spyhight == 0) {
      return "spy0";
    } else if (this.shopping.spyhight == 1) {
      return "spy1";
    } else if (this.shopping.spyhight == 2) { return "spy2" }
    else {
      return "spy3"
    }
  }
}
