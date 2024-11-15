import { Component } from '@angular/core';
import { AccountComponent } from "../../core/components/cockpit/account/account.component";
import { CommonModule } from '@angular/common';
import { SpyComponent } from "../../core/components/spy/spy.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { PhoneService } from '../../core/services/scenario-services/phone.service';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [AccountComponent, CommonModule, SpyComponent, SpyComponent, MatGridListModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {

  showPhone: boolean = false;

  constructor(protected phoneService: PhoneService) {
  }
}
