import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GameService } from '../../../../shared/gameUtilities/game.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';
import { IconComponent } from "./icon/icon.component";
import { DialogComponent } from "../../dialog/dialog.component";
import { SpeakingTextComponent } from '../../dialog/speaking-text/speaking-text.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatGridListModule, SpeakingTextComponent, MatCardModule, MatButtonModule, HeaderComponent, IconComponent, DialogComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(protected game: GameService){
    
  }

}
