import { Component } from '@angular/core';
import { ShoppingService } from '../../../core/services/scenario-services/shopping.service';

@Component({
  selector: 'app-phonenumber',
  standalone: true,
  imports: [],
  templateUrl: './phonenumber.component.html',
  styleUrl: './phonenumber.component.scss'
})
export class PhonenumberComponent {
  constructor(protected shopping: ShoppingService) {
    }
onDecline() {
  this.shopping.GivedphoneN = false;
  this.shopping.next();
  this.shopping.phonenumber = false;
}
onInputClick() {
  this.shopping.GivedphoneN = true;
  this.shopping.next();
  this.shopping.phonenumber = false;
}

}
