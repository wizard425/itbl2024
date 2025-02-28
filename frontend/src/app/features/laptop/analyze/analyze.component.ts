import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PasswordService } from '../../../core/services/scenario-services/password.service';
import { OnlinePasswordService } from '../../../core/services/online-password.service';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SpyComponent } from "../../../core/components/spy/spy.component";
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { CompletionService } from '../../../core/services/completion.service';
import { GameScenario } from '../../../shared/gameUtilities/GameScenario';
import { GameService } from '../../../shared/gameUtilities/game.service';

@Component({
  selector: 'app-analyze',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, SpyComponent, MatButtonModule],
  templateUrl: './analyze.component.html',
  styleUrl: './analyze.component.scss'
})
export class AnalyzeComponent implements OnInit, OnDestroy {

  steps: string[] = [
    'Analysiere Länge des Passworts...',
    'Überprüfe Komplexität...',
    'Suche nach Sonderzeichen...',
    'Vergleiche mit bekannten Muster'
  ];
  currentStep: number = 0;
  intervalId: any;

  levenshtein: number = 8000;

  pass: string = "";

  constructor(protected passwordService: PasswordService,
    protected onlinePwd: OnlinePasswordService,
    private router: Router,
    private ac: ActivatedRoute,
    private com: CompletionService,
    private game: GameService) {
    this.passwordService.currentIndex = 4;
    this.checkPwd(passwordService.password);
    this.pass = this.passwordService.password;
  }


  ngOnInit() {
    window.history.pushState(null, '', window.location.href);
    this.intervalId = setInterval(() => {
      this.currentStep = (this.currentStep + 1);
      if (this.currentStep > 3) {
        clearInterval(this.intervalId);
      }
    }, 3000);
  }


  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    // Verhindere die Navigation zurück.
    window.history.pushState(null, '', window.location.href);
  }


  ngOnDestroy() {
    clearInterval(this.intervalId); // Intervall bei Zerstörung der Komponente stoppen
  }


  checkPwd(pwd: string) {
    this.onlinePwd.getLevenshteinDistanceToCommonPWD(pwd).subscribe(data => {
      this.levenshtein = data;
    }
    );
  }


  overAllPoints(): number {
    let points = 0;
    points += this.lengthPoints()
    if (this.uppercase() > 0) {
      points++;
    }
    if (this.lowercase() > 0) {
      points++;
    }
    if (this.num() > 0) {
      points++;
    }
    if (this.sonderzeichen() > 0) {
      points++;
    }
    if (this.wdh()[1] == 0) {
      points++;
    }

    return points
  }


  lengthPoints() {
    const len = this.passwordService.password.length;
    if (len >= 16) {
      return 6;
    } else if (len >= 12) {
      return 4;
    } else if (len >= 8) {
      return 2;
    } else {
      return 0;
    }
  }

  uppercase() {
    return (this.pass.match(/[A-Z]/g) || []).length;
  }

  lowercase() {
    return (this.pass.match(/[a-z]/g) || []).length;
  }

  num() {
    return (this.pass.match(/[1-9]/g) || []).length;
  }

  sonderzeichen() {
    return (this.pass.match(/[^a-zA-Z0-9\s]/g) || []).length
  }

  wdh(): [string, number] {

    const matches = this.pass.match(/(\w)\1+/g);
    const m = matches || [];
    let max = '';
    let maxl = 0;
    for (let st of m) {
      if (st.length > maxl) {
        max = st[0];
        maxl = st.length;
      }
    }
    return [max, maxl];
  }

  goToEnd() {
    // TODO add points to user
    this.com.addToCompleted(GameScenario.Computer);
    this.game.addPoints(this.overAllPoints());
    this.game.currentScenario = GameScenario.All
    this.router.navigate(['../../'], { relativeTo: this.ac });
  }

}
