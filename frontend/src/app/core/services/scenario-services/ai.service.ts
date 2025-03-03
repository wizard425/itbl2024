import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CompletionService } from '../completion.service';
import { AISteps } from '../../../features/ai/ai-steps';
import { BaseScenarioService } from './base-scenario.service';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { Subject } from 'rxjs';
import { GameScenario } from '../../../shared/gameUtilities/GameScenario';
import { GameService } from '../../../shared/gameUtilities/game.service';
@Injectable({
  providedIn: 'root'
})
export class AiService extends BaseScenarioService {
  isspyright: boolean = false;
  Hidespy: boolean = false;
  spypostion: number = 0;
  firstq: boolean = false;
  secq: boolean = false;
  showfile: boolean = false;


  public override get currentGameStep(): GameStep {
    if (this.currentIndex == 25) {
      if (this.secq) {
        return this.scenarioSteps[this.currentIndex][1];
      }
    }
    if (this.currentIndex == 14) {
      if (this.firstq) {
        return this.scenarioSteps[this.currentIndex][1];
      }
    }
    return this.scenarioSteps[this.currentIndex][0];
  }


  override next(): GameStep {
    if (this.currentIndex == 2) {
      this.spypostion = 1;
      this.isspyright = true;
    }
    if (this.currentIndex == 4) {
      this.spypostion = 2;
    }
    if (this.currentIndex == 8) {
      this.spypostion = 3;
    }
    if (this.currentIndex == 21) {
      this.callComponentFunction(21);
    }
    if (this.currentIndex == 28) {
      this.showfile = false;
      this.callComponentFunction(28);
    }
    if (this.currentIndex == 31) {
      this.callComponentFunction(31);
    }
    if (this.currentIndex == 32) {
      this.completion.addToCompleted(GameScenario.AI);
      this.router.navigate(["/cockpit"]);
      this.gameService.addPoints(this.calculate_point())
    }
    if (this.currentIndex == 3 || this.currentIndex == 6) {
      this.Hidespy = true;
    } else {
      this.Hidespy = false;
    }
    this.currentIndex++;
    return this.currentGameStep;
  }
  private componentFunctionCallSource = new Subject<any>();
  componentFunctionCall$ = this.componentFunctionCallSource.asObservable();

  callComponentFunction(param: any) {
    this.componentFunctionCallSource.next(param);
  }

  constructor(private router: Router,
    private completion: CompletionService, private gameService: GameService) {
    super(AISteps)
  }
  calculate_point(): number {
    var point = 0;
    if (this.firstq) {
      point = + 10;
    } else { point = -5; }
    if (this.secq) {
      point = + 10;
    } else { point = -5; }
    if (this.firstq && this.secq) {
      point = point + 2;
    }
    if (point < 0) {
      point = 0;
    }
    return point;
  }
}
