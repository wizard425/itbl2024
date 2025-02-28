import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { GameService } from "../../shared/gameUtilities/game.service";
import { GameScenario } from "../../shared/gameUtilities/GameScenario";
import { consumerPollProducersForChange } from "@angular/core/primitives/signals";

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {

  constructor(private game: GameService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log("iNjsarndksajnd")
    if (this.game.currentUser != undefined) {
      return true;
    } else {
      if (this.game.currentUser == undefined) {
        this.router.navigate(['/start/1']);
      }
      return false;
    }
  }

}