import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShoppingService } from '../../../core/services/scenario-services/shopping.service';
import { AngebotComponent } from "../angebot/angebot.component";
import { PhonenumberComponent } from "../phonenumber/phonenumber.component";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, AngebotComponent, PhonenumberComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  constructor(protected shopping: ShoppingService) {
  }
  cartItems = [
    [
      {
        name: 'Premium Winterjacke',
        category: 'Jacken',
        imageUrl: 'assets/shopping/jaket.png',
        currentPrice: '249.99',
        originalPrice: '299.99',
      },
      {
        name: 'Sportliche Sneaker',
        category: 'Schuhe',
        imageUrl: 'assets/shopping/redshoe.png',
        currentPrice: '99.99',
        originalPrice: '129.99',
      },
      {
        name: 'Wollmütze',
        category: 'Accessoires',
        imageUrl: 'assets/shopping/cap.png',
        currentPrice: '34.99',
        originalPrice: '39.99',
      }
    ],[
      {
        name: 'Premium Winterjacke',
        category: 'Jacken',
        imageUrl: 'assets/shopping/jaket.png',
        currentPrice: '249.99',
        originalPrice: '299.99',
      },
      {
        name: 'Sportliche Sneaker',
        category: 'Schuhe',
        imageUrl: 'assets/shopping/greenshoe.png',
        currentPrice: '99.99',
        originalPrice: '129.99',
      },
      {
        name: 'Wollmütze',
        category: 'Accessoires',
        imageUrl: 'assets/shopping/cap.png',
        currentPrice: '34.99',
        originalPrice: '39.99',
      },
    ]
  ];
  summery = [[459.97,85.00,374.97],[459.97,109.99,349.98]]
}
