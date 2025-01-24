import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent {
  products = [
    {
        name: 'Premium Winter Jacket',
        imageUrl: 'assets/shopping/jaket.png', 
        currentPrice: '$149.99',
        originalPrice: '$299.99',
        discount: '-50%',
        category: 'Jackets'
    },
    {
        name: 'Designer Sneakers',
        imageUrl: 'assets/shopping/redshoe.png', 
        currentPrice: '$89.99',
        originalPrice: '$199.99',
        discount: '-55%',
        category: 'Shoes'
    },
    {
        name: 'Luxury Beanie',
        imageUrl: 'assets/shopping/cap.png', 
        currentPrice: '$24.99',
        originalPrice: '$49.99',
        discount: '-50%',
        category: 'Hats'
    }
];
}
