import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-speaking-text',
  standalone: true,
  imports: [],
  templateUrl: './speaking-text.component.html',
  styleUrl: './speaking-text.component.scss'
})
export class SpeakingTextComponent implements OnInit {
  @Input() text: string = '';
  displayedText: string = '';  // Text, der Buchstabe für Buchstabe angezeigt wird
  typingSpeed: number = 40;   // Geschwindigkeit in Millisekunden
  private subscription: Subscription | undefined;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    let currentIndex = 0;
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
