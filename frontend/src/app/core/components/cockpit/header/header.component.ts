import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() userName: string = 'Y'; // Placeholder for user name
  @Input() score: number = 0;      // Placeholder for score
  @Input() progress: number = 0;   // Placeholder for progress percentage

  constructor() {}

  ngOnInit(): void {
    // Here you can fetch or set these values dynamically
    // e.g., through a service or from parent component inputs
  }
}
