import { Component, HostListener, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { LexiconService } from '../../../shared/lexicon/lexicon.service';
import { SpyComponent } from "../../../core/components/spy/spy.component";
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  imports: [CommonModule, CdkDropList, CdkDrag, SpyComponent]
})
export class GameComponent implements OnInit {


  // Zutatenliste
  ingredients: Ingredient[] = [
    { name: 'Eier', image: 'assets/cookies/eggs.png' },
    { name: 'Mehl', image: 'assets/cookies/flour.png' },
    { name: 'Zucker', image: 'assets/cookies/sugar.png' },
    { name: 'Butter', image: 'assets/cookies/butter.png' },
    { name: 'Vanille', image: 'assets/cookies/vanilla.png' },
    { name: 'Schokostreusel', image: 'assets/cookies/sprinkles.png' },
    { name: 'Schokolade', image: 'assets/cookies/chocolate.png' },
    { name: 'Milch', image: 'assets/cookies/milk.png' },
  ];

  bowlContents: Ingredient[] = [];

  constructor(protected lexicon: LexiconService,
    protected dialog: MatDialog
  ) {
  }

  protected get buttonVisible(): boolean {
    return this.bowlContents.length > 0;
  }



  drop(event: CdkDragDrop<string[]> | any) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );

  }

    ngOnInit(): void {
      // Wir fügen einen neuen Zustand in den Verlauf ein, um den Zurück-Button zu blockieren.
      window.history.pushState(null, '', window.location.href);
    }
  
    @HostListener('window:popstate', ['$event'])
    onPopState(event: PopStateEvent) {
      // Verhindere die Navigation zurück.
      window.history.pushState(null, '', window.location.href);
    }


  bake() {

    let ingList: IngredientsChoosen = {};
    // check what its in bowl
    this.bowlContents.forEach(ing => {
      switch (ing.name) {
        case "Eier": {
          ingList = { ...ingList, eier: true }
          break;
        }
        case "Milch": {
          ingList = { ...ingList, milch: true }
          break;
        }
        case "Zucker": {

          ingList = { ...ingList, zucker: true }
          break;
        }
        case "Mehl": {
          ingList = { ...ingList, mehl: true }
          break;
        }
        case "Vanille": {
          ingList = { ...ingList, vanille: true }
          break;
        }
        case "Schokolade": {
          ingList = { ...ingList, schokolade: true }
          break;
        }
        case "Schokostreusel": {
          ingList = { ...ingList, schokostreusel: true }
          break;
        }
        case "Butter": {
          ingList = { ...ingList, butter: true }
          break;
        }
      }
    });
    
    this.validateCookie(ingList);
  }

  private validateCookie(ingredients: IngredientsChoosen) {
    const essenzielle = ingredients.mehl && ingredients.eier;
    const funktionale = ingredients.butter && ingredients.milch;
    const analyse = ingredients.zucker && ingredients.vanille;
    const marketing = ingredients.schokostreusel || ingredients.schokolade;
    const zuVieleMarketing = (ingredients.schokostreusel ? 1 : 0) + (ingredients.schokolade ? 1 : 0) > 1;

    let points: number = 0;
    let message: string = "";

    // Keine Zutaten
    if (!essenzielle && !funktionale && !analyse && !marketing) {

      points = 0;
      message = "Oh nein! Der Keks hat noch gar keine Basis! Du brauchst mindestens Mehl und Eier, um eine Grundlage zu schaffen.";
    }

    // Nur essenzielle Cookies
    if (essenzielle && !funktionale && !analyse && !marketing) {
      points = 3;
      message = "Das ist ein guter Anfang! Mit Mehl und Eiern hast du die Basis geschaffen, aber ohne die funktionalen und zusätzlichen Zutaten bleibt der Keks trocken und unvollständig. Ergänze noch Komfort und etwas Süße!";
    }

    // Essenzielle und funktionale Cookies
    if (essenzielle && funktionale && !analyse && !marketing) {
      points = 6;
      message = "Gut gemacht! Der Keks hat jetzt nicht nur Stabilität, sondern auch Benutzerfreundlichkeit. Er könnte jedoch noch ein wenig Süße und ein Hauch Analyse gebrauchen, um optimal zu sein."
    }

    // Essenzielle und Analyse-Cookies
    if (essenzielle && !funktionale && analyse) {
      points = 5;
      message = "Du hast die Basis und einen guten Geschmack geschaffen! Aber ohne funktionale Cookies wie Butter und Milch ist der Keks nicht besonders komfortabel für die Benutzer. Achte darauf, dass Komfort auch wichtig ist!";
    }

    // Essenzielle + Funktionale + Analyse (ohne Marketing)
    if (essenzielle && funktionale && analyse && !marketing) {

      points = 10;
      message = "Fantastisch! Du hast die perfekte Balance zwischen Funktionalität, Benutzerfreundlichkeit und Privatsphäre gefunden. Ohne unnötige Marketing-Zutaten ist dieser Keks optimal für Datenschutzbewusste.";
    }

    // Essenzielle + Funktionale + Marketing (ohne Analyse)
    if (essenzielle && funktionale && !analyse && marketing) {
      points = 5;
      message = "Der Keks sieht hübsch aus, aber er fehlt an Analyse. Ohne Zucker und Vanille ist es schwierig, den Keks für die Nutzer zu optimieren. Versuche, Analyse-Cookies hinzuzufügen, um die Erfahrung zu verbessern!";
    }

    // Zu viele Marketing-Cookies
    if (essenzielle && funktionale && analyse && zuVieleMarketing) {
      points = 7;
      message = "Du hast viele Marketing-Zutaten hinzugefügt, was den Cookie etwas überladen macht. Streusel und Schokostückchen sind zwar lecker, aber sie könnten die Sicherheit und Privatsphäre gefährden. Weniger ist manchmal mehr!";
    }

    // Essenzielle, funktionale und Analyse + wenig Marketing
    if (essenzielle && funktionale && analyse && marketing && !zuVieleMarketing) {
      points = 9;
      message = "Das ist fast perfekt! Du hast eine gute Balance gefunden und nur ein bisschen Marketing hinzugefügt. Streusel sind in Ordnung, aber Schokostückchen wären hier vielleicht zu viel gewesen.";

    }

    // Essentielle Zutaten fehlen
    if (!essenzielle) {

      points = 0;
      message = "Oh, der Keks ist zusammengefallen! Ohne Mehl und Eier gibt es keine Grundlage. Das sind die essenziellen Zutaten, die immer dabei sein müssen.";
    }



    this.dialog.open(FeedbackDialogComponent, {
      data: {
        points: points,
        message : message
      },
      disableClose: true,
      height: "70vh",
      width: "60vw"
    });
  }
}

type IngredientsChoosen = {
  eier?: boolean;
  mehl?: boolean;
  zucker?: boolean;
  milch?: boolean;
  vanille?: boolean;
  schokolade?: boolean;
  schokostreusel?: boolean;
  butter?: boolean;
};

type Ingredient = {
  name: string,
  image: string
}

