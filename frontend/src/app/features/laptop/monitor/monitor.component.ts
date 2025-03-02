import { Component, HostListener, OnInit } from '@angular/core';
import { SpyComponent } from "../../../core/components/spy/spy.component";
import { PasswordService } from '../../../core/services/scenario-services/password.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [SpyComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent implements OnInit{


  constructor(protected passwordService: PasswordService,
    protected router: Router,
    protected ac: ActivatedRoute
  ) {

  }

    ngOnInit(): void {
      // Wir fügen einen neuen Zustand in den Verlauf ein, um den Zurück-Button zu blockieren.
      window.history.pushState(null, '', window.location.href);
    }
  
    @HostListener('window:popstate', ['$event'])
    onPopState(event: PopStateEvent) {
      // Verhindere die Navigation zurück.
      window.history.pushState(null, '', window.location.href);
    }


  next() {
    if (this.passwordService.currentIndex == 3) {
      this.router.navigate(['../game'], { relativeTo: this.ac });
    } else {
      this.passwordService.next();
    }

  }
}
