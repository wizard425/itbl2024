import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SectionCardComponent } from "../section-card/section-card.component";
import { SpeakingTextComponent } from "../speaking-box/speaking-text/speaking-text.component";
import { GameService } from '../../../shared/gameUtilities/game.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SpeakingBoxComponent } from "../speaking-box/speaking-box.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatGridListModule, SectionCardComponent, SpeakingTextComponent, MatCardModule, MatButtonModule, SpeakingBoxComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
