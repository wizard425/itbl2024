import { Component, HostListener, OnInit } from '@angular/core';
import { ScenarioComponent } from '../../../core/components/scenario-interface/scenario.component';
import { GameScenario } from '../../../shared/gameUtilities/GameScenario';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [],
  templateUrl: './end.component.html',
  styleUrl: './end.component.scss'
})
export class EndComponent implements OnInit {

  ngOnInit(): void {
    // Wir fügen einen neuen Zustand in den Verlauf ein, um den Zurück-Button zu blockieren.
    window.history.pushState(null, '', window.location.href);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    // Verhindere die Navigation zurück.
    window.history.pushState(null, '', window.location.href);
  }

}
