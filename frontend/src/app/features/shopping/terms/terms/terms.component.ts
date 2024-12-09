import { Component } from '@angular/core';
import { ShoppingService } from '../../../../core/services/scenario-services/shopping.service';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss'
})
export class TermsComponent {
agree() {
  this.shopping.Answers[2] = true;
  this.shopping.next();
}
disagree() {
  this.shopping.Answers[2] = false;
  this.shopping.next();
}
  constructor(protected shopping: ShoppingService){

  }
}
