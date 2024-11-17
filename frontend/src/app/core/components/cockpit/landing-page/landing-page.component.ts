import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../../../shared/gameUtilities/game.service';
import { GameScenario } from '../../../../shared/gameUtilities/GameScenario';
import { IntroService } from '../../../services/intro.service';
import { PhoneService } from '../../../services/scenario-services/phone.service';
import { SpyComponent } from "../../spy/spy.component";
import { HeaderComponent } from '../header/header.component';
import { IconComponent } from "./icon/icon.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, IconComponent, CommonModule, SpyComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(protected game: GameService, public intro: IntroService,
    private phoneScenarioService: PhoneService,
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  public get scenarios(): typeof GameScenario {
    return GameScenario;
  }


  setScenarioService(scenario: GameScenario) {
    switch (scenario) {
      case GameScenario.SocialMedia: {
        // social media spiel startet hier
        this.phoneScenarioService.isInProgress = true;
        this.game.currentScenarioService = this.phoneScenarioService;
        break;
      }
    }
  }

}
