import { Injectable } from '@angular/core';
import { BaseScenarioService } from './base-scenario.service';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { CookieSteps } from '../../../features/cookie/cookie-steps';

@Injectable({
  providedIn: 'root'
})
export class CookieService extends BaseScenarioService {

  constructor() {
    super(CookieSteps);
  }

  public override get currentGameStep(): GameStep {
    return this.scenarioSteps[this.currentIndex][0];
  }

  override next(): GameStep {
    if (this.scenarioSteps[this.currentIndex + 1] !== undefined) {
      this.currentIndex++;
    }
    return this.currentGameStep;
  }


}
