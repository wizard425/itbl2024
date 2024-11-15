import { Injectable } from '@angular/core';
import { GameStep } from './GameStep';
import { gameStoryLine } from './GameStoryLine';
import User from '../../core/dtos/User';
import { environment } from '../../../../environments/environment';
import { GameScenario } from './GameScenario';
import { Chapter, Chapters } from '../lexicon/Chapter';
import { IntroService } from '../../core/services/intro.service';
import { BaseScenarioService } from '../../core/services/scenario-services/base-scenario.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _gameStoryLine: GameStep[] = [];
  private _currentGameStep: GameStep;
  private _currentUser: User;
  private _points: number = 0;
  private _unlockedChapters: Chapter[] = [Chapters[1]];
  private _currentScenarioService: BaseScenarioService | undefined;


  constructor(public intro: IntroService) {
    this._gameStoryLine = gameStoryLine;
    this._currentGameStep = gameStoryLine[0];
    this._currentUser = {
      name: "notSet",
      points: 0,
    }
  }

  public get gameStoryLine(): GameStep[] {
    return this._gameStoryLine;
  }
  public set gameStoryLine(value: GameStep[]) {
    this._gameStoryLine = value;
  }
  public get currentGameStep(): GameStep {
    return this._currentGameStep;
  }
  public set currentGameStep(value: GameStep) {
    this._currentGameStep = value;
  }
  public get currentUser(): User {
    return this._currentUser;
  }
  public set currentUser(value: User) {
    this._currentUser = value;
  }
  public get points(): number {
    return this._points;
  }
  public set points(value: number) {
    this._points = value;
  }
  public get unlockedChapters(): Chapter[] {
    return this._unlockedChapters;
  }
  public set unlockedChapters(value: Chapter[]) {
    this._unlockedChapters = value;
  }
  public get currentScenarioService(): BaseScenarioService | undefined {
    return this._currentScenarioService;
  }
  public set currentScenarioService(value: BaseScenarioService | undefined) {
    this._currentScenarioService = value;
  }

  nextGameStep() {
    if (this.currentGameStep.order < gameStoryLine.length && !this.scenarioInProgress()) {
      // sets the next game step
      this.currentGameStep = { ...gameStoryLine[this.currentGameStep.order + 1] };
      this.intro.setOutBasedOnOrder(this.currentGameStep.order);
      if (environment.storeGameStep) {
        localStorage.setItem("game", JSON.stringify(this.currentGameStep));
      }
    }
  }

  scenarioInProgress(): boolean {
    if (this.currentScenarioService) {
      return this.currentScenarioService.isInProgress;
    } else {
      return false;
    }
  }

}
