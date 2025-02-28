import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.scss'
})
export class CookieComponent implements OnInit{

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
