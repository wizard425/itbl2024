import { Injectable } from '@angular/core';
import { GameScenario } from '../../shared/gameUtilities/GameScenario';

@Injectable({
  providedIn: 'root'
})
export class IntroService {
  currnet: number;
  senario_array: GameScenario[];
  start: boolean;
  end: boolean;
  out: boolean[];

  constructor() {
    this.currnet = 0;
    this.senario_array = [GameScenario.Computer, GameScenario.AI, GameScenario.Shopping, GameScenario.Cookies, GameScenario.SocialMedia];
    this.start = true;
    this.end = false;
    this.out = [true, true, true, true, true];
  }

  getout(): boolean[] {
    return this.out;
  }

  setOutBasedOnOrder(order: number): void {
    // If order is less than 3 or greater than 15, set all to true
    if (order < 3 || order > 15) {
      this.out = [true, true, true, true, true];
    } else {
      // Reset all elements to false initially
      this.out = [false, false, false, false, false];

      // Map the order to an index in the senario_array
      if (order >= 3 && order < 5) {
        this.out[0] = true;  // GameScenario.Computer
      } else if (order >= 5 && order < 8) {
        this.out[1] = true;  // GameScenario.AI
      } else if (order >= 8 && order < 11) {
        this.out[2] = true;  // GameScenario.Shopping
      } else if (order >= 11 && order < 13) {
        this.out[3] = true;  // GameScenario.Cookies
      } else if (order >= 13 && order<16) {
        this.out[4] = true;  // GameScenario.SocialMedia
      }
    }
  }
}
