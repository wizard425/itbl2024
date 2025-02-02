import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameService } from './shared/gameUtilities/game.service';
import { GameStep } from './shared/gameUtilities/GameStep';
import User from './core/dtos/User';
import { CompletionService } from './core/services/completion.service';
import { GameScenario } from './shared/gameUtilities/GameScenario';
import { RestrictionService } from './core/services/restriction.service';
import { ImageLoadingService } from './core/services/image-loading.service';
import { imageUrls } from './images';
import { ImageLoadingComponent } from "./core/components/image-loading/image-loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageLoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'itbl2024';

  protected isLoading : boolean = true;

  constructor(private game: GameService,
    private completed: CompletionService,
    private restriction: RestrictionService,
    protected imageLoaderService: ImageLoadingService
  ) { }

  ngOnInit(): void {

    this.imageLoaderService.loadImages(imageUrls)
      .then(() => {
        this.isLoading = false;
      })
      .catch(() => {
        console.error('Ein Bild konnte nicht geladen werden.');
        this.isLoading = false;
      });


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
