import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingSteps } from '../../../features/shopping/shopping-steps';
import { BaseScenarioService } from './base-scenario.service';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { CompletionService } from '../completion.service';
import { Router } from '@angular/router';
import { GameScenario } from '../../../shared/gameUtilities/GameScenario';

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
  constructor(private router: Router,
    private completion: CompletionService) {
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
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if (this.currentIndex == 25) {
      if (this.GivedphoneN) {
        return this.scenarioSteps[this.currentIndex][1];
      } else {
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if (this.currentIndex == 28) {
      if (this.newslatter) {
        return this.scenarioSteps[this.currentIndex][1];
      } else {
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if (this.currentIndex == 6 || this.currentIndex == 12) {
      if (this.answers[0] || this.answers[1]) {
        return this.scenarioSteps[this.currentIndex][1];
      } else {
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if (this.currentIndex == 18) {
      if (this.answers[0] || this.answers[1]) {
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
    }
    this.currentIndex++;
    return this.currentGameStep;
  }
}

