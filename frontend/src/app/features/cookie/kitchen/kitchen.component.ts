import { Component, HostListener, OnInit } from '@angular/core';
import { ShelfComponent } from "./shelf/shelf.component";
import { SpyComponent } from "../../../core/components/spy/spy.component";
import { CookieService } from '../../../core/services/scenario-services/cookie.service';
import { LexiconService } from '../../../shared/lexicon/lexicon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [ShelfComponent, SpyComponent],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.scss'
})
export class KitchenComponent implements OnInit{

  constructor(protected cookieService: CookieService,
    protected lexicon: LexiconService,
    protected router: Router,
    private route: ActivatedRoute
  ){
    lexicon.isVisible = true;
    this.cookieService.currentIndex = 8;
  }


  next() {
    if(this.cookieService.currentIndex === 14){
      this.router.navigate([`../game`], { relativeTo: this.route });
    }
    this.cookieService.next()
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
