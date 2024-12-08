import { Component, ViewChild } from '@angular/core';
import { ShoppingService } from '../../core/services/scenario-services/shopping.service';
import { SpyComponent } from "../../core/components/spy/spy.component";
import { CommonModule } from '@angular/common';
import { CookiesComponent } from "./cookies/cookies/cookies.component";
import { ProductWebComponent } from "./product_web/product-web/product-web.component";
import { OutComponent } from "./outgame/out/out.component";

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [SpyComponent, CommonModule, CookiesComponent, ProductWebComponent, OutComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
Right() {
  this.shopping.Answers[0] = true;
  this.shopping.next();
}
Left() {
  this.shopping.Answers[0] = false
  this.shopping.next();
}
  @ViewChild('spy') childComponent?: SpyComponent;

  addAttribute() {
    if (this.childComponent) {
      if(this.shopping.Start_shopping){
        this.childComponent.Role = 'shopping';
      }
      if(this.shopping.currentIndex == 8){
        this.childComponent.isRight = true;
      }
    }
  }
  ngOnInit() {
    // Subscribe to the EventEmitter
    this.shopping.eventEmitter.subscribe(() => {
      this.addAttribute(); // Call the function when the event is triggered
    });
  }
  constructor(protected shopping: ShoppingService ){
  }
}
