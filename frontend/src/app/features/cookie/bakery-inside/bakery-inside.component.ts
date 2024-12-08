import { Component } from '@angular/core';
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
export class BakeryInsideComponent {

  private _showButton: boolean = false;

  protected get showButton(): boolean {
    console.log(this.cookieService.currentIndex)
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

}
