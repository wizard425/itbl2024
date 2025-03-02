import { Component, HostListener, OnInit } from '@angular/core';
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
export class PasswordGameComponent implements OnInit {

  ngOnInit(): void {
    // Wir fügen einen neuen Zustand in den Verlauf ein, um den Zurück-Button zu blockieren.
    window.history.pushState(null, '', window.location.href);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    // Verhindere die Navigation zurück.
    window.history.pushState(null, '', window.location.href);
  }

  constructor(protected passwordService: PasswordService, protected router: Router, protected act: ActivatedRoute) {

  }
  goAnaly() {
    this.router.navigate(["../analyze"], { relativeTo: this.act });
  }
}
