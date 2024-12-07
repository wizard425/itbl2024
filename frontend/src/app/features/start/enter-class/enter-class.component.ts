import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameService } from '../../../shared/gameUtilities/game.service';
import { UserService } from '../../../core/services/user.service';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-enter-class',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, RouterModule, CommonModule],
  templateUrl: './enter-class.component.html',
  styleUrl: './enter-class.component.scss'
})
export class EnterClassComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;


  constructor(private gameService: GameService,
    private userService: UserService,
    private router: Router,
  ) {

  }


  addClass() {
    if (this.gameService.currentUser != undefined) {
      {
        const name = this.nameInput.nativeElement.value;
        if (name && this.gameService.currentUser.id) {
          console.log("subscribe to class now")
          this.userService.addToClass(this.gameService.currentUser.id, name).subscribe(x => {
            this.gameService.currentUser = x;
            if(environment.storeUser){
              localStorage.setItem("user",JSON.stringify(x));
            }
            this.router.navigate([`/cockpit`]);
          });
        } else if (this.gameService.currentUser.id) {
          console.log("do not subscribe, but navigate")
          this.router.navigate([`/cockpit`]);
        } else {
          console.log("something went wrong");
        }
      }
    }
  }

}
