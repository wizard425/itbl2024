import { Injectable } from '@angular/core';
import { BaseScenarioService } from './base-scenario.service';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { PasswordSteps } from '../../../features/laptop/passwordsteps';

@Injectable({
  providedIn: 'root'
})
export class PasswordService extends BaseScenarioService {

  public password: string = "";

  constructor() {
    super(PasswordSteps);
  }

  
    public override get currentGameStep(): GameStep{
      return this.scenarioSteps[this.currentIndex][0];
    }
  
    override next(): GameStep {
      if (this.scenarioSteps[this.currentIndex + 1] !== undefined) {
        this.currentIndex++;
      }
      return this.currentGameStep;
    }
}
