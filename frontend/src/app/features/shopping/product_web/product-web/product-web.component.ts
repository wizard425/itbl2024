import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingService } from '../../../../core/services/scenario-services/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-web',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-web.component.html',
  styleUrls: ['./product-web.component.scss'],
})
export class ProductWebComponent implements OnInit, OnDestroy {
  private countdownSubscription!: Subscription;

  constructor(protected shopping: ShoppingService) {}

  ngOnInit() {
    // Subscribe to the countdown observable
    this.countdownSubscription = this.shopping.countdown$.subscribe((isCountdownActive) => {
      if (isCountdownActive) {
        const secondImage = this.shopping.images[1]; // Access the second element (index 1)
        if (secondImage) {
          this.startCountdown(secondImage, 3600); // Start a 1-hour countdown
        }
      }
    });
  }

  startCountdown(image: any, seconds: number) {
    image.countdown = '01:00:00'; // Initialize the countdown property

    const interval = setInterval(() => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      // Update the countdown for the specific image
      image.countdown = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;

      if (seconds > 0) {
        seconds--; // Decrement the seconds
      } else {
        clearInterval(interval); // Stop the timer when it reaches 0
      }
    }, 1000);
  }

  pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`; // Ensure two-digit format
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
}
