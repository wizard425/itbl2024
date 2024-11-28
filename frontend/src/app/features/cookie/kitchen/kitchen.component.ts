import { Component } from '@angular/core';
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
export class KitchenComponent {

  constructor(protected cookieService: CookieService,
    protected lexicon: LexiconService,
    protected router: Router,
    private route: ActivatedRoute
  ){
    lexicon.isVisible = true;
  }


  next() {
    if(this.cookieService.currentIndex === 14){
      this.router.navigate([`../game`], { relativeTo: this.route });
    }
    this.cookieService.next()
  }

}
