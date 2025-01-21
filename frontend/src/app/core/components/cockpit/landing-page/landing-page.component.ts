import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../../../shared/gameUtilities/game.service';
import { GameScenario } from '../../../../shared/gameUtilities/GameScenario';
import { IntroService } from '../../../services/intro.service';
import { PhoneService } from '../../../services/scenario-services/phone.service';
import { SpyComponent } from "../../spy/spy.component";
import { HeaderComponent } from '../header/header.component';
import { IconComponent } from "./icon/icon.component";
import { RestrictionService } from '../../../services/restriction.service';
import { LexiconService } from '../../../../shared/lexicon/lexicon.service';
import { relative } from 'path';
import { CompletionService } from '../../../services/completion.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, IconComponent, CommonModule, SpyComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  constructor(protected game: GameService, public intro: IntroService,
    private phoneScenarioService: PhoneService,
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private restriction : RestrictionService,
    private lexicon : LexiconService,
    protected completionService: CompletionService
  ) {
  }
  ngOnInit(): void {
    if(this.completionService.allCompleted()){
      this.router.navigate(["../scoreboard/list"], {relativeTo: this.activatedRoute});
    }
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

  clicked(scenario: GameScenario, link: string) {
    // not restricted and not completed yet
    if(this.restriction.canClick(scenario) && !this.completionService.isCompleted(scenario)){
      this.router.navigate([link], {relativeTo: this.activatedRoute});
    }
  }

  next(){
    this.game.nextGameStep()
    if(this.game.currentGameStep.order == 18) {
      this.restriction.free(GameScenario.Computer);
      this.restriction.free(GameScenario.AI);
      this.restriction.free(GameScenario.Shopping);
      this.restriction.free(GameScenario.Cookies);
      this.restriction.free(GameScenario.SocialMedia);
    }
    if(this.game.currentGameStep.order == 15) {
      this.lexicon.isVisible = true;
    }
  }
}
