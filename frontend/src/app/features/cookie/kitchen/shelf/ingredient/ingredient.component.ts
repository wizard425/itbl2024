import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.scss'
})
export class IngredientComponent {

  @Input() path: string = "";

}