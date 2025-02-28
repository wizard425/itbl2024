import { Component, HostListener, OnInit } from '@angular/core';
import { CookieService } from '../../../core/services/scenario-services/cookie.service';
import { BakerComponent } from "../../../core/components/baker/baker.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-bakery-inside',
  standalone: true,
  imports: [BakerComponent, CommonModule],
  templateUrl: './bakery-inside.component.html',
  styleUrl: './bakery-inside.component.scss'
})
export class BakeryInsideComponent implements OnInit {

  private _showButton: boolean = false;

  protected get showButton(): boolean {
    return this.cookieService.currentIndex == 7;
  }


  constructor(protected cookieService: CookieService,
    private router: Router, private route: ActivatedRoute
  ) {
    this.cookieService.currentIndex = 4;
  }

  enter() {
    this.cookieService.next();
    this.router.navigate([`../kitchen`], { relativeTo: this.route });
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

}
