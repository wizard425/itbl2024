import { Injectable } from '@angular/core';
import { GameStep } from './GameStep';
import { gameStoryLine } from './GameStoryLine';
import User from '../../core/dtos/User';
import { environment } from '../../../../environments/environment';
import { GameScenario } from './GameScenario';
import { Chapter } from '../lexicon/Chapter';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameStoryLine: GameStep[] = [];

  private currentGameStep: GameStep;

  private currentUser: User;

  private currentScenario: GameScenario;

  private points: number = 0;
  private unlockedChapters: Chapter[] = [];

  constructor() {
    this.gameStoryLine = gameStoryLine;
    this.currentGameStep = gameStoryLine[0];
    this.currentScenario = GameScenario.Start;
    this.currentUser = {
      name: "notSet",
      points: 0,
    }
  }

  getCurrentGameStep(): GameStep {
    return this.currentGameStep;
  }

  setCurrentGameStep(gameStep: GameStep) {
    this.currentGameStep = gameStep;
  }

  getPoints(): number {
    return this.points;
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

  getCurrentUser(): User {
    return this.currentUser;
  }

  getUnlockedChapters() {
    return this.unlockedChapters;
  }

}
