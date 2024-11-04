import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { interval, Subscription } from 'rxjs';
import { GameService } from '../../../../shared/gameUtilities/game.service';

@Component({
  selector: 'app-speaking-text',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './speaking-text.component.html',
  styleUrl: './speaking-text.component.scss'
})
export class SpeakingTextComponent implements OnChanges {
  @Input() text: string = '';
  displayedText: string = '';  // Text, der Buchstabe für Buchstabe angezeigt wird
  typingSpeed: number = 25;   // Geschwindigkeit in Millisekunden
  private subscription: Subscription | undefined;

  constructor(protected game: GameService,
    private cdr: ChangeDetectorRef) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.subscription?.unsubscribe();
    this.displayedText = '';
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    let currentIndex = 0;
    if (this.text !== undefined)
      // Erzeugt einen Intervall-Stream, der alle `typingSpeed`-Millisekunden feuert
      this.subscription = interval(this.typingSpeed).subscribe(() => {
        if (currentIndex < this.text.length) {
          this.displayedText += this.text[currentIndex];
          currentIndex++;
          this.cdr.detectChanges();  // Sicherstellen, dass Angular den Text sofort rendert
        } else {
          this.subscription?.unsubscribe();  // Animation beenden, wenn der Text vollständig ist
        }
      });
  }

}
