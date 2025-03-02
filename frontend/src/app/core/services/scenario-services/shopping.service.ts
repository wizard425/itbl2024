import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingSteps } from '../../../features/shopping/shopping-steps';
import { BaseScenarioService } from './base-scenario.service';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { CompletionService } from '../completion.service';
import { Router } from '@angular/router';
import { GameScenario } from '../../../shared/gameUtilities/GameScenario';
import { GameService } from '../../../shared/gameUtilities/game.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService extends BaseScenarioService {
  Cart: number = 0;
  hidecart: boolean = true;
  isspyright: boolean = true;
  phonenumber: boolean = false;
  product: boolean[] = [false, false, false];
  Hidespy: boolean = false;
  showbuttons: boolean = false;
  newslatter: boolean = false;
  payout: boolean = false;
  spyhight: number = 0;
  webnumber: number = 0;
  angebot: boolean = false;
  angebotAngenommen: number = 0;
  GivedphoneN: boolean = false;
  showcheckout: boolean = false;
  answers: boolean[] = [false, false, false, false]
  evaluation: boolean[] = [false, false, false, false, false, false]
  constructor(private router: Router,
    private completion: CompletionService,private gameService: GameService) {
    super(ShoppingSteps)
  }
  public override get currentGameStep(): GameStep {
    if (this.currentIndex == 7 || this.currentIndex == 13 || this.currentIndex == 19) {
      this.answers = [false, false, false, false]
    }
    if (this.currentIndex == 23) {
      if (this.angebotAngenommen == 0) {
        return this.scenarioSteps[this.currentIndex][1];
      } else {
        this.evaluation[3] = true;
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if (this.currentIndex == 25) {
      if (this.GivedphoneN) {
        return this.scenarioSteps[this.currentIndex][1];
      } else {
        this.evaluation[4] = true;
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if (this.currentIndex == 28) {
      if (this.newslatter) {
        return this.scenarioSteps[this.currentIndex][1];
      } else {
        this.evaluation[5] = true;
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if (this.currentIndex == 6 || this.currentIndex == 12) {
      if (this.answers[0] || this.answers[1]) {
        return this.scenarioSteps[this.currentIndex][1];
      } else {
        if (this.currentIndex == 6) {
          this.evaluation[0] = true;
        } else {
          this.evaluation[1] = true
        }
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if (this.currentIndex == 18) {
      if (this.answers[0] || this.answers[1]) {
        this.evaluation[2] = true;
        return this.scenarioSteps[this.currentIndex][0];
      } else {
        return this.scenarioSteps[this.currentIndex][1];
      }
    }
    return this.scenarioSteps[this.currentIndex][0];
  }
  override next(): GameStep {
    if (this.currentIndex == 9) {
      this.webnumber = 1;
    }
    if (this.currentIndex == 15) {
      this.webnumber = 2;
      this.spyhight = 2;
    }
    if (this.currentIndex == 3) {
      this.spyhight = 1;
    }
    if (this.currentIndex == 4 || this.currentIndex == 10 || this.currentIndex == 16) {
      this.Hidespy = true;
      this.showbuttons = true;
    } else {
      this.Hidespy = false;
      this.showbuttons = false;
    }
    if (this.currentIndex == 21) {
      this.Hidespy = true;
      this.hidecart = false;
      this.webnumber = 3
    }
    if (this.currentIndex == 22) {
      this.Hidespy = false;
      this.spyhight = 0;
    }
    if (this.currentIndex == 23) {
      this.phonenumber = true;
    }
    if (this.currentIndex == 25) {
      this.Hidespy = true;
      this.showcheckout = false;
      this.payout = true;
      this.spyhight = 3;
      setTimeout(() => {
        this.Hidespy = false;
        this.isspyright = false;
      }, 2000);
    }
    if (this.currentIndex == 26) {
      this.Hidespy = true;
    }
    if (this.currentIndex == 27) {
      this.Hidespy = false
    }
    if (this.currentIndex == 28) {
      this.payout = false;
      this.spyhight = 0;
      this.isspyright = true;
    }
    if (this.currentIndex == 35) {
      this.completion.addToCompleted(GameScenario.Shopping);
      this.router.navigate(["/cockpit"]);
      this.gameService.addPoints(this.calculatePoints(this.evaluation))
    }
    this.currentIndex++;
    return this.currentGameStep;
  }


  calculatePoints(answers: boolean[]): number {
    console.log(answers)
    let points = 0;
    let streak3 = 0;
    let streak4 = 0;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i]) {
        points += 4;
        streak3++;
        streak4++;
      } else {
        points -= 2;
        streak3 = 0;
        streak4 = 0;
      }

      if (streak3 === 3) {
        points += 3;
        streak3 = 0;
      }

      if (streak4 === 4) {
        points += 4;
        streak4 = 0;
      }
      if(points<0){
        points = 0;
      }
    }

    if (answers.every(answer => answer === true)) {
      points += 3;
    }

    return points;
  }

}

