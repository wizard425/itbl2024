import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CompletionService } from '../completion.service';
import { AISteps } from '../../../features/ai/ai-steps';
import { BaseScenarioService } from './base-scenario.service';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
@Injectable({
  providedIn: 'root'
})
export class AiService extends BaseScenarioService{
  isspyright: boolean = false;
  Hidespy: boolean = false;
  public override get currentGameStep(): GameStep {
    return this.scenarioSteps[this.currentIndex][0];
  }
  override next(): GameStep {
    if(this.currentIndex == 2){
      this.Hidespy = true;
    }else{
      this.Hidespy = false;
    }
    this.currentIndex++;
    return this.currentGameStep;
  }

  constructor(private router: Router,
    private completion: CompletionService) {
      super(AISteps)
     }
}
