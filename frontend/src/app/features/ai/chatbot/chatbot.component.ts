import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SpeakingTextComponent } from "../../../core/components/dialog/speaking-text/speaking-text.component";

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, SpeakingTextComponent],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {
  @ViewChild('textarea') textarea!: ElementRef;

  constructor() { }

  messages: ChatMessage[] = [];
  showHelpText: boolean = true;
  counter: number = 0;
  botResponses: string[] = [
    'Hallo! Wie kann ich dir bezüglich Datenschutz weiterhelfen?',
    '<p><strong>Okay gerne helfe ich dir bei deinem Aufsatz zum Thema Datenschutz!</strong></p><p>Damit ich den Aufsatz besser an dich und deine persönlichen Bedürfnisse anpassen kann, benötige ich einige Informationen über dich:</p><ol><li><strong>1. Name:</strong> „Ich könnte deinen Namen in der Einleitung verwenden.“</li><li><strong>2. Klassenstufe:</strong> „Damit passe ich die Komplexität des Aufsatzes an.“</li><li><strong>3. Interessen:</strong> „So füge ich Beispiele hinzu, die für dich spannend sind.“</li><li><strong>4. Geburtsdatum:</strong> „Damit ich den Aufsatz an deine Altersgruppe anpassen kann.“</li></ol>',
    "<p><strong>Natürlich, ich erkläre die Begriffe gerne:</strong></p><ol><li><strong>Flächiges Knochenmarködem im proximalen Humeruskopf und Hals dorsal</strong><ul><li><strong>Knochenmarködem:</strong> Eine Ansammlung von Flüssigkeit (Ödem) im Knochenmark, die häufig durch eine Verletzung, Überlastung oder Entzündung verursacht wird. Es deutet auf eine Schädigung oder Reizung des Knochens hin.</li><li><strong>Proximaler Humeruskopf:</strong> Der obere Teil des Oberarmknochens (Humerus), der an der Schultergelenkpfanne anliegt.</li></ul></li><li><strong>Sehr flache Hill-Sachs-Läsion dorsocranial</strong><ul><li><strong>Hill-Sachs-Läsion:</strong> Eine Einbuchtung oder Eindellung im Humeruskopf, die typischerweise durch eine Schulterluxation (Ausrenkung) entsteht, wenn der Kopf des Humerus gegen den vorderen Rand der Gelenkpfanne gedrückt wird.</li><li><strong>Dorsocranial:</strong> Beschreibt die Position der Läsion, nämlich hinten (dorsal) und oben (kranial) im Humeruskopf.</li><li><strong>Sehr flach:</strong> Die Einbuchtung ist nur gering ausgeprägt.</li></ul></li></ol>"
  ];

  sendMessage() {
    const currentMessage = this.textarea.nativeElement.value;
    if (currentMessage.trim()) {
      this.messages.push({ text: currentMessage, sender: 'user' });
      this.textarea.nativeElement.value = '';
      this.showHelpText = false;
      setTimeout(() => this.generateBotResponse(currentMessage), 1000);
    }
  }
  generateBotResponse(userMessage: string) {
    this.messages.push({ text: this.botResponses[this.counter], sender: 'bot' });
    this.counter = this.counter +1;
  }
  ngAfterViewInit() {
    this.adjustTextareaHeight();
  }

  adjustTextareaHeight() {
    const textarea = this.textarea.nativeElement;
    textarea.style.overflow = 'hidden';
    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto'; 
      textarea.style.height = textarea.scrollHeight + 'px'; 
    });
  }
}
