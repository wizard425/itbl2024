import { Component } from '@angular/core';
import { SpyComponent } from "../../../core/components/spy/spy.component";
import { PasswordService } from '../../../core/services/scenario-services/password.service';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [SpyComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent {


  constructor(protected passwordService: PasswordService){

  }

}
