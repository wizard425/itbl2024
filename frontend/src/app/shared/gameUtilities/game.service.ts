import { Injectable } from '@angular/core';
import { GameStep } from './GameStep';
import { gameStoryLine } from './GameStoryLine';
import User from '../../core/dtos/User';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameStoryLine: GameStep[] = [];

  private currentGameStep: GameStep;

  private currentUser: User | undefined;

  constructor() {
    this.gameStoryLine = gameStoryLine;
    this.currentGameStep = gameStoryLine[0];
  }

  getCurrentGameStep(): GameStep {
    return this.currentGameStep;
  }

  setCurrentGameStep(gameStep: GameStep) {
    this.currentGameStep = gameStep;
  }

  nextGameStep() {
    if (this.currentGameStep.order < gameStoryLine.length) {
      // sets the next game step
      this.currentGameStep = { ...gameStoryLine[this.currentGameStep.order + 1] };
      if (environment.storeGameStep) {
        localStorage.setItem("game", JSON.stringify(this.currentGameStep));
      }
    }
  }

}
