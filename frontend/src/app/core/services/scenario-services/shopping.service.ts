import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingSteps } from '../../../features/shopping/shopping-steps';
import { BaseScenarioService } from './base-scenario.service';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService extends BaseScenarioService {
  Cart: number = 0;
  hidecart: boolean = true;
  phonenumber:boolean = false;
  product: boolean [] = [false,false,false];
  Hidespy: boolean = false;
  showbuttons: boolean = false;
  spyhight: number = 0;
  webnumber: number = 0;
  angebot: boolean = false;
  angebotAngenommen: number = 0;
  GivedphoneN: boolean = false;
  showcheckout: boolean = false;
  answers: boolean [] = [false,false,false,false]
  constructor() {
    super(ShoppingSteps)
   }
   public override get currentGameStep(): GameStep {
    if(this.currentIndex == 7 || this.currentIndex == 13 || this.currentIndex == 19){
      this.answers = [false,false,false,false]
    }
    if(this.currentIndex == 23){
      if(this.angebotAngenommen == 0){
        return this.scenarioSteps[this.currentIndex][1];
      }else{
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if(this.currentIndex == 25){
      if(this.GivedphoneN){
        return this.scenarioSteps[this.currentIndex][1];
      }else{
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if(this.currentIndex == 6 || this.currentIndex == 12){
      if(this.answers[0]||this.answers[1]){
        return this.scenarioSteps[this.currentIndex][1];
      }else{
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    if(this.currentIndex == 18){
      if(this.answers[0]||this.answers[1]){
        return this.scenarioSteps[this.currentIndex][0];
      }else{
        return this.scenarioSteps[this.currentIndex][1];
      }
    }
    return this.scenarioSteps[this.currentIndex][0];
  }
  override next(): GameStep {
    if(this.currentIndex == 9){
      this.webnumber = 1;
    }
    if(this.currentIndex == 15){
      this.webnumber = 2;
      this.spyhight = 2;
    }
    if(this.currentIndex == 3){
      this.spyhight = 1;
    }
    if(this.currentIndex == 4 || this.currentIndex == 10 || this.currentIndex == 16){
      this.Hidespy = true;
      this.showbuttons = true;
    }else{
      this.Hidespy = false;
      this.showbuttons = false;
    }
    if(this.currentIndex == 21){
      this.Hidespy = true;
      this.hidecart = false;
    }
    if(this.currentIndex == 22){
      this.Hidespy = false;
      this.spyhight = 0;
    }
    if(this.currentIndex == 23){
      this.phonenumber = true;
    }
    this.currentIndex++;
    return this.currentGameStep;
  }
}

