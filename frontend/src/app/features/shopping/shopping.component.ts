import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
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
import { ConsentDialogComponent } from "../../core/components/consent/consent-dialog/consent-dialog.component";

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [SpyComponent, CommonModule, ShoppingListComponent, WebsiteComponent, CheckoutComponent, PayoutComponent, ConsentDialogComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent implements OnInit {

  ngOnInit(): void {
    // Wir fügen einen neuen Zustand in den Verlauf ein, um den Zurück-Button zu blockieren.
    window.history.pushState(null, '', window.location.href);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    // Verhindere die Navigation zurück.
    window.history.pushState(null, '', window.location.href);
  }

  constructor(protected shopping: ShoppingService,
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
