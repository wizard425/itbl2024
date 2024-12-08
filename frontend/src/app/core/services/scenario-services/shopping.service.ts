import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingSteps } from '../../../features/shopping/shopping-steps';
import { BaseScenarioService } from './base-scenario.service';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService extends BaseScenarioService {
  private countdownSubject = new BehaviorSubject<boolean>(false);
  countdown$ = this.countdownSubject.asObservable(); // Expose as observable

  setCountdown(value: boolean) {
    this.countdownSubject.next(value); // Update the countdown flag
  }
  images = [
    { src: '/assets/shopping/webProduct/p1.png', alt: 'Image 1',countdown: '' },
    { src: '/assets/shopping/webProduct/p2.png', alt: 'Image 2',countdown: '' },
    { src: '/assets/shopping/webProduct/p3.png', alt: 'Image 3',countdown: '' },
    { src: '/assets/shopping/webProduct/p4.png', alt: 'Image 4',countdown: '' },
    { src: '/assets/shopping/webProduct/p5.png', alt: 'Image 5',countdown: '' },
    { src: '/assets/shopping/webProduct/p6.png', alt: 'Image 6',countdown: '' },
    { src: '/assets/shopping/webProduct/p7.png', alt: 'Image 7',countdown: '' },
    { src: '/assets/shopping/webProduct/p8.png', alt: 'Image 8',countdown: '' },
  ];
  question:boolean = false;
  Hide:boolean = false;
  Hide1:boolean = false;
  Product:boolean = false;
  showCookieDialog:boolean = false;
  Start_shopping: boolean = false;
  web1:boolean = false;
  web2:boolean = false;
  move:boolean = false;
  Answers: boolean[]=[false]
  eventEmitter = new EventEmitter<void>(); // EventEmitter for notifications
  constructor() {
    super(ShoppingSteps)
   }
  change_pic(){
    this.images[1].src = '/assets/shopping/webProduct/p2.2.png'
  }
   public override get currentGameStep(): GameStep {
    if(this.currentIndex == 8){
      if(this.Answers[0] == true){
        return this.scenarioSteps[this.currentIndex][1];
      }else{
        return this.scenarioSteps[this.currentIndex][0];
      }
    }
    else return this.scenarioSteps[this.currentIndex][0];
  }
  override next(): GameStep {
    if(this.currentIndex == 0){
      this.Hide= true;
    }
    if(this.currentIndex == 2){
      this.showCookieDialog = true;
    }
    if(this.currentIndex == 3){
      this.Product = true;
    }
    if(this.currentIndex == 4){
      this.change_pic();
      this.setCountdown(true)
    }
    if(this.currentIndex ==6){
      this.question = true;
    }
    if(this.currentIndex == 7){
      this.question = false;
    }
    if(this.currentIndex == 8){
      this.triggerEvent();
      this.move = true;
      this.Product = false;
      this.web1 = true;
    }
    if(this.currentIndex == 9){
      this.web1 = false;
      this.web2 = true;
    }
    this.currentIndex++;
    return this.currentGameStep;
  }
  triggerEvent() {
    this.eventEmitter.emit(); // Emit the event
  }
}

