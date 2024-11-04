import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SectionCardComponent } from "../section-card/section-card.component";
import { SpeakingTextComponent } from "../speaking-box/speaking-text/speaking-text.component";
import { GameService } from '../../../shared/gameUtilities/game.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SpeakingBoxComponent } from "../speaking-box/speaking-box.component";
import { SpeakingTextComponent } from "../speaking-text/speaking-text.component";
import { HeaderComponent } from '../header/header.component';
import { IconComponent } from "../icon/icon.component";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatGridListModule, SectionCardComponent, SpeakingTextComponent, MatCardModule, MatButtonModule, SpeakingBoxComponent],
  imports: [MatGridListModule, SectionCardComponent, SpeakingTextComponent, HeaderComponent, IconComponent, DialogComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
