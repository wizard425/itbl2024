import { GameScenario } from "../../../shared/gameUtilities/GameScenario";
import { GameStep } from "../../../shared/gameUtilities/GameStep";

export abstract class BaseScenarioService {

  private _currentIndex: number = 0;
  private _scenario: GameScenario = GameScenario.All;
  private _scenarioSteps: GameStep[][] = [];
  private _isInProgress: boolean = false;

  constructor(private scenarioStepsFromChild: GameStep[][]) {
    this.scenarioSteps = scenarioStepsFromChild;
  }


  public get currentIndex(): number {
    return this._currentIndex;
  }
  public set currentIndex(value: number) {
    this._currentIndex = value;
  }

  public get scenario(): GameScenario {
    return this._scenario;
  }
  public set scenario(value: GameScenario) {
    this._scenario = value;
  }

  public get scenarioSteps(): GameStep[][] {
    return this._scenarioSteps;
  }
  public set scenarioSteps(value: GameStep[][]) {
    this._scenarioSteps = value;
  }

  public get isInProgress(): boolean {
    return this._isInProgress;
  }

  public set isInProgress(value: boolean) {
    this._isInProgress = value;
  }

  public abstract get currentGameStep(): GameStep;

  abstract next() : GameStep;

  public logout() {
    this.currentIndex = 0;
  }

}
