import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { GameService } from '../../../shared/gameUtilities/game.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-name',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, RouterModule, CommonModule],
  templateUrl: './start-name.component.html',
  styleUrls: ['./start-name.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class StartNameComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  constructor(public _GameService: GameService, private router: Router) {}

  start() {
    const name = this.nameInput.nativeElement.value;
    if (name) {
      this._GameService.currentUser.name = name;
      this.router.navigate(['/cockpit']);
    }else{
      alert("please enter ur name")
    }
}
}