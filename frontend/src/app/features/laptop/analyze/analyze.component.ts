import { Component } from '@angular/core';
import { PasswordService } from '../../../core/services/scenario-services/password.service';

@Component({
  selector: 'app-analyze',
  standalone: true,
  imports: [],
  templateUrl: './analyze.component.html',
  styleUrl: './analyze.component.scss'
})
export class AnalyzeComponent {

  constructor(protected passwordService: PasswordService){

  }

}
