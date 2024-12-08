import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { GameService } from "../../shared/gameUtilities/game.service";

@Injectable({
  providedIn: 'root'
})
export class StartGuard implements CanActivate {

  constructor(private game: GameService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.game.currentUser == undefined) {
      return true;
    } else {
      this.router.navigate(['/cockpit']);
      return false;
    }
  }

}