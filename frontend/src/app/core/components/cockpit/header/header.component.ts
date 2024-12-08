import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { SettingsDialogComponent } from '../../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatGridListModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() userName: string = 'Y'; // Placeholder for user name
  @Input() score: number = 0;      // Placeholder for score
  @Input() progress: number = 0;   // Placeholder for progress percentage

  @Output() profileClicked: EventEmitter<boolean> = new EventEmitter();
  readonly dialog = inject(MatDialog);

  constructor() { }

  ngOnInit(): void {
    // Here you can fetch or set these values dynamically
    // e.g., through a service or from parent component inputs
  }

  clicked(){
    const dialogRef = this.dialog.open(SettingsDialogComponent)

  }

}
