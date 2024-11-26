import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { IngredientComponent } from "./ingredient/ingredient.component";

@Component({
  selector: 'app-shelf',
  standalone: true,
  imports: [MatGridListModule, IngredientComponent],
  templateUrl: './shelf.component.html',
  styleUrl: './shelf.component.scss'
})
export class ShelfComponent {

}
