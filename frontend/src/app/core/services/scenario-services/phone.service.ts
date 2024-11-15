import { Injectable } from '@angular/core';
import { BaseScenarioService } from './base-scenario.service';
import { PhoneSteps } from '../../../features/phone/phone-steps';

@Injectable({
  providedIn: 'root'
})
export class PhoneService extends BaseScenarioService {

  constructor() {
    super(PhoneSteps);
  }

  next() {
    this.currentIndex++;
    return this.currentGameStep;
  }
}
