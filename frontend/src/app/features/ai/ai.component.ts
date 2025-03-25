import { Component, HostListener, OnInit } from '@angular/core';
import { AiService } from '../../core/services/scenario-services/ai.service';
import { SpyComponent } from "../../core/components/spy/spy.component";
import { HausaufgabeComponent } from "./hausaufgabe/hausaufgabe.component";
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from "./chatbot/chatbot.component";
import { ConsentDialogComponent } from "../../core/components/consent/consent-dialog/consent-dialog.component";

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [SpyComponent, HausaufgabeComponent, CommonModule, ChatbotComponent, ConsentDialogComponent],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss'
})
export class AiComponent implements OnInit {

  ngOnInit(): void {
    // Wir fügen einen neuen Zustand in den Verlauf ein, um den Zurück-Button zu blockieren.
    window.history.pushState(null, '', window.location.href);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    // Verhindere die Navigation zurück.
    window.history.pushState(null, '', window.location.href);
  }

  constructor(protected ai: AiService) { }
  getclass(): string {
    if (this.ai.spypostion == 0) {
      return "spy0"
    } else if (this.ai.spypostion == 1) {
      return "spy1"
    }
    else if (this.ai.spypostion == 2) {
      return "spy2"
    } else {
      return "spy3"
    }
  }

}
