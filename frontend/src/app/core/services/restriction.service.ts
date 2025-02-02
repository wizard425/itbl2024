import { Injectable } from '@angular/core';
import { GameScenario } from '../../shared/gameUtilities/GameScenario';

@Injectable({
  providedIn: 'root'
})
export class RestrictionService {

  // scenarios in this set can be clicked and can be played
  private clickableList: Array<GameScenario> = [
    GameScenario.AI,
    GameScenario.Computer,
    GameScenario.Cookies,
    GameScenario.Shopping,
    GameScenario.SocialMedia
  ];

  lock(scenario: GameScenario) {
    if (!this.clickableList.some(a => a === scenario)) {
      this.clickableList.push(scenario);
      localStorage.setItem("restrictions", JSON.stringify(this.clickableList));
    }
  }

  free(scenario: GameScenario) {
    if (this.clickableList.some(a => a === scenario)) {
      this.clickableList = this.clickableList.filter(a => a !== scenario);
      localStorage.setItem("restrictions", JSON.stringify(this.clickableList));
    }
  }

  canClick(request: GameScenario) {
    return !this.clickableList.some(a => a === request);
  }

  setFullList(setOfRestrictions: Array<GameScenario>) {
    this.clickableList = setOfRestrictions;
  }

  logout() {
    this.clickableList = [
      GameScenario.AI,
      GameScenario.Computer,
      GameScenario.Cookies,
      GameScenario.Shopping,
      GameScenario.SocialMedia
    ];
  }

}
