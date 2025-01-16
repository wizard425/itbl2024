import { Component } from '@angular/core';
import { PasswordfieldComponent } from "./passwordfield/passwordfield.component";
import { SpyComponent } from "../../../core/components/spy/spy.component";
import { PasswordService } from '../../../core/services/scenario-services/password.service';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password-game',
  standalone: true,
  imports: [PasswordfieldComponent, SpyComponent, MatButtonModule],
  templateUrl: './password-game.component.html',
  styleUrl: './password-game.component.scss'
})
export class PasswordGameComponent {


  constructor(protected passwordService: PasswordService, protected router: Router, protected act : ActivatedRoute){

  }
  goAnaly(){
    this.router.navigate(["../analyze"], { relativeTo: this.act });
  }
}
