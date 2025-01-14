import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./core/components/cockpit/landing-page/landing-page.component";
import { GameService } from './shared/gameUtilities/game.service';
import { GameStep } from './shared/gameUtilities/GameStep';
import User from './core/dtos/User';
import { CompletionService } from './core/services/completion.service';
import { GameScenario } from './shared/gameUtilities/GameScenario';
import { RestrictionService } from './core/services/restriction.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'itbl2024';


  constructor(private game: GameService,
    private completed: CompletionService,
    private restriction: RestrictionService
  ) { }

  ngOnInit(): void {
    const loadedString = localStorage.getItem("game");
    if (loadedString != null) {
      const loadedGameStep: GameStep = (JSON.parse(loadedString) as GameStep);
      this.game.currentGameStep = loadedGameStep;
    }

    const userString = localStorage.getItem("user");
    if (userString != null) {
      const loadedUser: User = (JSON.parse(userString) as User);
      this.game.currentUser = loadedUser;
    }

    const completedString = localStorage.getItem("completed");
    if (completedString != null) {
      const completedLoaded: Array<GameScenario> = (JSON.parse(completedString) as Array<GameScenario>);
      this.completed.setFullCompletedList(completedLoaded);
    }

    const restrictionString = localStorage.getItem("restrictions");
    if (restrictionString != null) {
      const restrictionsLoaded: Array<GameScenario> = (JSON.parse(restrictionString) as Array<GameScenario>);
      this.restriction.setFullList(restrictionsLoaded);
    }

  }
}
