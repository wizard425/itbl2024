import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingSteps } from '../../../features/shopping/shopping-steps';
import { BaseScenarioService } from './base-scenario.service';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService extends BaseScenarioService {
  constructor() {
    super(ShoppingSteps)
   }
   public override get currentGameStep(): GameStep {
    return this.scenarioSteps[this.currentIndex][0];
  }
  override next(): GameStep {
    this.currentIndex++;
    return this.currentGameStep;
  }
}

