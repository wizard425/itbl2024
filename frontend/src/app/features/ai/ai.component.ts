import { Component } from '@angular/core';
import { AiService } from '../../core/services/scenario-services/ai.service';
import { SpyComponent } from "../../core/components/spy/spy.component";
import { HausaufgabeComponent } from "./hausaufgabe/hausaufgabe.component";
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from "./chatbot/chatbot.component";

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [SpyComponent, HausaufgabeComponent, CommonModule, ChatbotComponent],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss'
})
export class AiComponent {
  constructor(protected ai:AiService){}

}
