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
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderComponent } from '../../../core/components/loading-component/loader.component';


@Component({
  selector: 'app-enter-class',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, RouterModule, CommonModule, LoaderComponent],
  templateUrl: './enter-class.component.html',
  styleUrl: './enter-class.component.scss'
})
export class EnterClassComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;

  protected loading : boolean = false;

  constructor(private gameService: GameService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {

  }

  addClass() {
    if (this.gameService.currentUser != undefined) {

        const name = this.nameInput.nativeElement.value;
        if (name && this.gameService.currentUser.id) {
          this.loading = true;
          this.userService.addToClass(this.gameService.currentUser.id, name).subscribe(x => {
            this.gameService.currentUser = x;
            if(environment.storeUser){
              localStorage.setItem("user",JSON.stringify(x));
            }
            this.snackBar.open("Erfolgreich in Klasse eingeschrieben", "Ok", {
              duration: 2000
            })
            this.loading = false;
            this.router.navigate([`/cockpit`]);
          });
        } else if (this.gameService.currentUser.id) {
          this.router.navigate([`/cockpit`]);
        } else {
          console.log("something went wrong");
        }
    }
  }

}
