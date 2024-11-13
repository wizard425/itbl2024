import { Component } from '@angular/core';
import { AccountComponent } from "../../core/components/cockpit/account/account.component";

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [AccountComponent],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {

}
