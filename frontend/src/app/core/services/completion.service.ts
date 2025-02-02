import { Injectable } from '@angular/core';
import { GameScenario } from '../../shared/gameUtilities/GameScenario';

@Injectable({
  providedIn: 'root'
})
export class CompletionService {

  // scenarios in this set can be clicked and can be played
  private completedList: Array<GameScenario> = [];

  addToCompleted(scenario: GameScenario) {
    if (!this.completedList.some(a => a === scenario)) {
      this.completedList.push(scenario);

      localStorage.setItem("completed", JSON.stringify(this.completedList));
    }
  }

  isCompleted(request: GameScenario) {
    return this.completedList.some(a => a === request);
  }

  setFullCompletedList(list: Array<GameScenario>) {
    this.completedList = list;
  }

  allCompleted(): boolean {
    const allScenarios: Array<GameScenario> = [GameScenario.AI, GameScenario.Computer, GameScenario.Shopping, GameScenario.SocialMedia, GameScenario.Cookies];
    let ret = true;
    for(let i = 0; i < allScenarios.length; i++){
      if (!this.isCompleted(allScenarios[i])){
        ret = false;
        continue;
      }
    }
    return ret;
  }

  logout(){
    this.completedList = [];
  }

}
