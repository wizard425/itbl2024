import { Component } from '@angular/core';
import { ShoppingService } from '../../../../core/services/scenario-services/shopping.service';
import { SpyComponent } from "../../../../core/components/spy/spy.component";

@Component({
  selector: 'app-out',
  standalone: true,
  imports: [SpyComponent],
  templateUrl: './out.component.html',
  styleUrl: './out.component.scss'
})
export class OutComponent {
  constructor(protected shopping: ShoppingService){
  }
  startGame() {
    this.shopping.Hide1 = true;
    this.shopping.currentIndex++;
  }
}
