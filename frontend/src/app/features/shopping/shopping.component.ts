import { Component, ViewChild } from '@angular/core';
import { ShoppingService } from '../../core/services/scenario-services/shopping.service';
import { SpyComponent } from "../../core/components/spy/spy.component";
import { CommonModule } from '@angular/common';
import { CookiesComponent } from "./cookies/cookies/cookies.component";
import { ProductWebComponent } from "./product_web/product-web/product-web.component";
import { OutComponent } from "./outgame/out/out.component";
import { TermsComponent } from "./terms/terms/terms.component";

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [SpyComponent, CommonModule, CookiesComponent, ProductWebComponent, OutComponent, TermsComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {  
getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      () => {
        // Permission granted
        this.shopping.Answers[1] = false;
        this.shopping.next();
      },
      (error) => {
        // Permission denied
        if (error.code === error.PERMISSION_DENIED) {
          this.shopping.Answers[1] = true;
          this.shopping.next();
        }
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}
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
      console.log("hello the index is "+ this.shopping.currentIndex)
      if(this.shopping.currentIndex == 10){
        console.log("hello from if the index is "+ this.shopping.currentIndex)
        this.childComponent.isRight = false;
        this.getUserLocation();
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
