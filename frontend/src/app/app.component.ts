import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./core/components/landing-page/landing-page.component";
import { GameService } from './shared/gameUtilities/game.service';
import { GameStep } from './shared/gameUtilities/GameStep';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'itbl2024';


  constructor(private game: GameService) { }

  ngOnInit(): void {
    const loadedString = localStorage.getItem("game");
    if (loadedString != null) {
      console.log("das gespeichert")
      const loadedGameStep: GameStep = (JSON.parse(loadedString) as GameStep);
      this.game.setCurrentGameStep(loadedGameStep);
    }
  }
}
