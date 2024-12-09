import { Component } from '@angular/core';
import { ShoppingService } from '../../../../core/services/scenario-services/shopping.service';
import { ShoppingComponent } from '../../shopping.component';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss'
})
export class CookiesComponent {
  constructor(protected shopping:ShoppingService){

  }
  acceptCookies() {
    this.shopping.showCookieDialog = false;
    this.shopping.Start_shopping = true;
    this.shopping.triggerEvent();
    this.shopping.next();
    }
}
