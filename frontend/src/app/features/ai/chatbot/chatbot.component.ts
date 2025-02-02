import { CommonModule } from '@angular/common';
import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { SpeakingTextComponent } from "../../../core/components/dialog/speaking-text/speaking-text.component";
import { AiService } from '../../../core/services/scenario-services/ai.service';
import { Subscription } from 'rxjs';

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
  addfile() {
    if (this.ai.currentIndex == 23) {
      this.ai.showfile = true;
      this.ai.next();
    }
  }
  doNotSend() {
    this.ai.secq = true;
    this.ai.next();
  }
  send() {
    this.ai.secq = false
    this.ai.next();
  }
  @ViewChild('textarea') textarea!: ElementRef;
  @ViewChild('chatInterface') private chatInterface!: ElementRef;
  subscription: Subscription;

  constructor(protected ai: AiService) {
    this.subscription = this.ai.componentFunctionCall$.subscribe(
      (param) => {
        this.myFunction(param);
      }
    );
  }
  messages: ChatMessage[] = [];
  showHelpText: boolean = true;
  Inputerror: boolean = false;
  correctan: boolean = false;
  counter: number = 0;
  botResponses: string[] = [
    'Hallo! Wie kann ich dir bezüglich Datenschutz weiterhelfen?',
    '<p><strong>Okay gerne helfe ich dir bei deinem Aufsatz zum Thema Datenschutz!</strong></p><p>Damit ich den Aufsatz besser an dich und deine persönlichen Bedürfnisse anpassen kann, benötige ich einige Informationen über dich:</p><ol><li><strong>Name:</strong> „Ich könnte deinen Namen in der Einleitung verwenden.“</li><li><strong>Klassenstufe:</strong> „Damit passe ich die Komplexität des Aufsatzes an.“</li><li><strong>Interessen:</strong> „So füge ich Beispiele hinzu, die für dich spannend sind.“</li><li><strong>Geburtsdatum:</strong> „Damit ich den Aufsatz an deine Altersgruppe anpassen kann.“</li></ol>',
    "<p><strong>Natürlich, ich erkläre die Begriffe gerne:</strong></p><ol><li><strong>Flächiges Knochenmarködem im proximalen Humeruskopf und Hals dorsal</strong><ul><li><strong>Knochenmarködem:</strong> Eine Ansammlung von Flüssigkeit (Ödem) im Knochenmark, die häufig durch eine Verletzung, Überlastung oder Entzündung verursacht wird. Es deutet auf eine Schädigung oder Reizung des Knochens hin.</li><li><strong>Proximaler Humeruskopf:</strong> Der obere Teil des Oberarmknochens (Humerus), der an der Schultergelenkpfanne anliegt.</li></ul></li><li><strong>Sehr flache Hill-Sachs-Läsion dorsocranial</strong><ul><li><strong>Hill-Sachs-Läsion:</strong> Eine Einbuchtung oder Eindellung im Humeruskopf, die typischerweise durch eine Schulterluxation (Ausrenkung) entsteht, wenn der Kopf des Humerus gegen den vorderen Rand der Gelenkpfanne gedrückt wird.</li><li><strong>Dorsocranial:</strong> Beschreibt die Position der Läsion, nämlich hinten (dorsal) und oben (kranial) im Humeruskopf.</li><li><strong>Sehr flach:</strong> Die Einbuchtung ist nur gering ausgeprägt.</li></ul></li></ol>","<p1>Abschließend noch eine kleine Zusammenfassung:<p1><br><ul><li>Teile keine persönlichen Daten die zu einem Rückschluss auf dich führen können (Geburtsdatum, Passnummern, Kontodaten etc.)</li><li>Teile nicht einfach so vertrauliche Dokumente (PDF's, Excel Dateien etc.)</li><li>Teile keine Informationen über Dritte ohne deren Zustimmung</li><li>Teile keine Unternehmensdaten ohne Zustimmung</li></ul>"
  ];
  placeholder: string = "Gib hier ‘Datenschutz’ ein...";

  pushesseges(current: string) {
    this.messages.push({ text: current.trim(), sender: 'user' });
    this.textarea.nativeElement.value = '';
    this.placeholder = ""
    this.showHelpText = false;
    setTimeout(() => this.generateBotResponse(), 1000);
  }

  containsOneOrFour(input: string): boolean {
    const regex = /[14]/;
    return regex.test(input);
  }

  isValidInput(input: string): boolean {
    const regex = /^[1-4\s]+$/;
    if (input.trim() === "" || !regex.test(input)) {
      return false;
    }
    return true;
  }

  evaluate(input: string) {
    this.ai.firstq = !this.containsOneOrFour(input);
    this.correctan = this.ai.firstq;
    this.Inputerror = !this.ai.firstq
  }

  sendMessage() {
    const currentMessage = this.textarea.nativeElement.value.toLowerCase().trim();
    console.log("the current index is " + this.ai.currentIndex + " the current messege is " + currentMessage)
    if (this.ai.currentIndex == 7 || this.ai.currentIndex == 8) {
      var falsch = false;
      if (currentMessage === "datenschutz") {
        this.pushesseges(this.textarea.nativeElement.value);
        falsch = true;
      }
      if (falsch) {
        this.ai.currentIndex = 8
        this.Inputerror = false;
      } else {
        this.Inputerror = true;
        this.ai.currentIndex = 7;
      }
      this.ai.next();
      this.textarea.nativeElement.value = ''
    }
    else if (this.ai.currentIndex == 9 || this.ai.currentIndex == 10) {
      var falsch = false;
      if (currentMessage === "schreibe einen aufsatz zum thema datenschutz") {
        this.pushesseges(this.textarea.nativeElement.value);
        falsch = true;
      }
      if (falsch) {
        this.ai.currentIndex = 10
        this.Inputerror = false;
      } else {
        this.ai.currentIndex = 9;
        this.Inputerror = true;
      }
      this.ai.next();
      this.textarea.nativeElement.value = ''
    }
    else if (this.ai.currentIndex == 12 || this.ai.currentIndex == 13) {
      var falsch = false;
      if (this.isValidInput(currentMessage)) {
        this.evaluate(currentMessage)
        falsch = true;
      }
      if (falsch) {
        this.ai.currentIndex = 13
        this.Inputerror = !this.ai.firstq;
      } else {
        this.ai.currentIndex = 12;
        this.Inputerror = true;
      }
      this.ai.next();
      this.textarea.nativeElement.value = ''
    }
    else if (this.ai.currentIndex == 29) {
      this.pushesseges(this.textarea.nativeElement.value)
      this.placeholder = "Gib hier deine Nachricht ein."
      this.textarea.nativeElement.value = ''
      this.ai.next();
      this.resetHeight();
    }
  }
  resetHeight(): void {
    const textarea = this.textarea.nativeElement;
    textarea.style.height = '40px'; // Reset the height to default/min-height
  }
  generateBotResponse() {
    this.messages.push({ text: this.botResponses[this.counter], sender: 'bot' });
    this.counter = this.counter + 1;
  }

  ngAfterViewInit() {
    this.adjustTextareaHeight();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  adjustTextareaHeight() {
    const textarea = this.textarea.nativeElement;
    textarea.style.overflow = 'hidden';
    textarea.addEventListener('input', () => {
      textarea.style.height = '';
      textarea.style.height = textarea.scrollHeight + 'px';
    });
  }

  scrollToBottom(): void {
    try {
      this.chatInterface.nativeElement.scrollTop = this.chatInterface.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
  myFunction(param: any) {
    if (this.ai.currentIndex == 21) {
      this.textarea.nativeElement.value = "Hallo, ich habe mich im Sportunterricht an der Schulter verletzt. Ich hatte gestern einen MRT Termin und habe folgenden Befund erhalten. Kannst du mir helfen und mir sagen was genau ich habe? Einen Termin bei meinem Arzt habe ich erst kommende Woche."
      this.messages = [];
      this.Inputerror = false;
      this.correctan = false;
      this.showHelpText = true;
    }
    if(this.ai.currentIndex == 28){
      this.textarea.nativeElement.value = "Hallo, kannst du mir einige Begriffe und deren Bedeutung erklären? \nFlächiges Knochenmarködem im proximalen Humeruskopf und Hals dorsal, sehr flache Hill-Sachs-Läsion dorsocranial.\n Und \n Verdacht auf knorpelige Bankartläsion, keine signifikante Dislokation."
    }
    if(this.ai.currentIndex == 31){
      this.messages = [];
      this.showHelpText= true;
      this.generateBotResponse();
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
