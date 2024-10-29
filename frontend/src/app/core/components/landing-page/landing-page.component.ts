import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { SectionCardComponent } from "../section-card/section-card.component";
import { SpeakingTextComponent } from "../speaking-text/speaking-text.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatGridListModule, SectionCardComponent, SpeakingTextComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
