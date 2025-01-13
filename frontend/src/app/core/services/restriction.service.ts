import { Injectable } from '@angular/core';
import { GameScenario } from '../../shared/gameUtilities/GameScenario';

@Injectable({
  providedIn: 'root'
})
export class RestrictionService {

  // scenarios in this set can be clicked and can be played
  private clickableList: Set<GameScenario> = new Set<GameScenario>();

  lock(scenario: GameScenario) {
    if (this.clickableList.has(scenario)) {
      this.clickableList.delete(scenario);
    }
  }

  free(scenario: GameScenario) {
    if (!this.clickableList.has(scenario)) {
      this.clickableList.add(scenario);
    }
  }

  canClick(request: GameScenario) {
    return this.clickableList.has(request);
  }
}
