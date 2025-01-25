import { Component, ViewChild } from '@angular/core';
import { ShoppingService } from '../../core/services/scenario-services/shopping.service';
import { SpyComponent } from "../../core/components/spy/spy.component";
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { WebsiteComponent } from "./website/website.component";
import { CheckoutComponent } from "./checkout/checkout.component";

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [SpyComponent, CommonModule, ShoppingListComponent, WebsiteComponent, CheckoutComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {  
  constructor(protected shopping: ShoppingService ){
  }
  spyclass(){
    if(this.shopping.spyhight == 0){
      return "spy0";
    }else if(this.shopping.spyhight == 1){
      return "spy1";
    }else{ return "spy2"}
  }
}
