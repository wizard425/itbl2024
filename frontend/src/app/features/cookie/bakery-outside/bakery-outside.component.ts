import { Component, HostListener, OnInit } from '@angular/core';
import { CookieService } from '../../../core/services/scenario-services/cookie.service';
import { SpyComponent } from "../../../core/components/spy/spy.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bakery-outside',
  standalone: true,
  imports: [SpyComponent, CommonModule, RouterModule],
  templateUrl: './bakery-outside.component.html',
  styleUrl: './bakery-outside.component.scss'
})
export class BakeryOutsideComponent implements OnInit{

  ngOnInit(): void {
    // Wir fügen einen neuen Zustand in den Verlauf ein, um den Zurück-Button zu blockieren.
    window.history.pushState(null, '', window.location.href);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    // Verhindere die Navigation zurück.
    window.history.pushState(null, '', window.location.href);
  }


  constructor(protected cookieService: CookieService, private router: Router, private route: ActivatedRoute) {

  }

  protected get showButton(): boolean {
    return this.cookieService.currentIndex == 3;
  };


  enter() {
    this.cookieService.next();
    this.router.navigate([`../inside`], { relativeTo: this.route });
    }

}
