import { Injectable } from '@angular/core';
import { BaseScenarioService } from './base-scenario.service';
import { PhoneSteps } from '../../../features/phone/phone-steps';
import { Router } from '@angular/router';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { CompletionService } from '../completion.service';
import { GameScenario } from '../../../shared/gameUtilities/GameScenario';

@Injectable({
  providedIn: 'root'
})
export class PhoneService extends BaseScenarioService {
  Hide: boolean = false;
  BHide: boolean = true;
  Right_Answer: boolean[] = [true,false,false,true];
  Profile:boolean [] = [false,false,false,false];
  Answer: boolean = false;
  constructor(private router: Router,
    private completion: CompletionService
  ) {
    super(PhoneSteps);
  }
  
  public override get currentGameStep(): GameStep {
    if(this.currentIndex == 4){
      if(this.Right_Answer[0]==this.Answer){
        return this.scenarioSteps[this.currentIndex][1];
      }else{
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    else if(this.currentIndex == 9){
      if(this.Right_Answer[1]==this.Answer){
        return this.scenarioSteps[this.currentIndex][1];
      }else{
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    else if(this.currentIndex == 15){
      if(this.Right_Answer[2]==this.Answer){
        return this.scenarioSteps[this.currentIndex][1];
      }else{
        return this.scenarioSteps[this.currentIndex][0];
      }
    }else if(this.currentIndex == 20){
      if(this.Right_Answer[3]==this.Answer){
        return this.scenarioSteps[this.currentIndex][1];
      }else{
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    else{
      return this.scenarioSteps[this.currentIndex][0];
    }

  }
  next() {
    if(this.currentIndex == 1){
      this.Hide= true;
    }
    if(this.currentIndex == 2){
      this.Profile[0] =true;
      this.BHide = false;
    }
    if(this.currentIndex == 7){
      this.Profile[0] =false;
      this.Profile[1] =true;
      this.BHide = false;
    }
    if(this.currentIndex == 13){
      this.Profile[1] =false;
      this.Profile[2] =true;
      this.BHide = false;
    }
    if(this.currentIndex == 18){
      this.Profile[2] =false;
      this.Profile[3] =true;
      this.BHide = false;
    }
    if(this.currentIndex == 24){
      this.Hide = false;
    }
    if(this.currentGameStep.order == 26){
      this.completion.addToCompleted(GameScenario.SocialMedia);
      this.router.navigate(["/cockpit"]);
    }
    this.currentIndex++;
    return this.currentGameStep;
  }
}
