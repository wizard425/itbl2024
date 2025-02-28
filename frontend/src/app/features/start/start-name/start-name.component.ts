import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GameService } from '../../../shared/gameUtilities/game.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user.service';
import { environment } from '../../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DuplicateNameComponent } from '../duplicate-name/duplicate-name.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from "../../../core/components/loading-component/loader.component";

@Component({
  selector: 'app-start-name',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, RouterModule, CommonModule, MatSnackBarModule, LoaderComponent],
  templateUrl: './start-name.component.html',
  styleUrls: ['./start-name.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class StartNameComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  constructor(public _GameService: GameService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  protected loading : boolean = false;

  start() {
    const name = this.nameInput.nativeElement.value;
    if (name) {
      this.loading = true;
      this.userService.create({
        name: name,
        points: 0
      }).subscribe(x => {
        this._GameService.currentUser = x;
        if (environment.storeUser) {
          localStorage.setItem("user", JSON.stringify(x));
        }
        this.snackBar.open("Spieler erfolgreich erstellt!", "Ok", {
          duration: 2000,
        })
        this.loading = false;
        this.router.navigate([`../class`], { relativeTo: this.route });
      }, err => {
        this.loading = false;
        this.dialog.open(DuplicateNameComponent);
      });
      ;
    } else {
      alert("Please enter your name")
    }
  }
}