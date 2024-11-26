import { Component } from '@angular/core';
import { ShelfComponent } from "./shelf/shelf.component";
import { SpyComponent } from "../../../core/components/spy/spy.component";
import { CookieService } from '../../../core/services/scenario-services/cookie.service';
import { LexiconService } from '../../../shared/lexicon/lexicon.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [ShelfComponent, SpyComponent],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.scss'
})
export class KitchenComponent {

  constructor(protected cookieService: CookieService,
    protected lexicon: LexiconService
  ){
    lexicon.isVisible = true;
  }

}
