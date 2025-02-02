import { Injectable } from '@angular/core';
import { GameStep } from './GameStep';
import { gameStoryLine } from './GameStoryLine';
import User from '../../core/dtos/User';
import { environment } from '../../../../environments/environment';
import { Chapter, Chapters } from '../lexicon/Chapter';
import { IntroService } from '../../core/services/intro.service';
import { BaseScenarioService } from '../../core/services/scenario-services/base-scenario.service';
import { UserService } from '../../core/services/user.service';
import { CompletionService } from '../../core/services/completion.service';
import { RestrictionService } from '../../core/services/restriction.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _gameStoryLine: GameStep[] = [];
  private _currentGameStep: GameStep;
  private _currentUser?: User;
  private _unlockedChapters: Chapter[] = [Chapters[1]];
  private _currentScenarioService: BaseScenarioService | undefined;


  constructor(public intro: IntroService,
    private userService: UserService,
    private compl: CompletionService,
    private restr: RestrictionService) {
    this._gameStoryLine = gameStoryLine;
    this._currentGameStep = gameStoryLine[0];
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
  public get currentUser(): User | undefined {
    return this._currentUser;
  }
  public set currentUser(value: User | undefined) {
    this._currentUser = value;
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

  logout() {
    this.currentUser = undefined;
    this.currentGameStep = gameStoryLine[0];
    localStorage.clear();
    this.restr.logout();
    this.compl.logout();
  }

  // this method is to add points to a user, it adds it in the backend too
  addPoints(pointsToAdd: number) {
    if (this.currentUser?.id) {
      this.userService.addPoints(this.currentUser?.id, pointsToAdd).subscribe(d => {
        if (this.currentUser && this.currentUser.points) {
          this.currentUser.points += d.points;
          localStorage.setItem("user", JSON.stringify(this.currentUser))
        }
      });
    }
  }

}
