import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpyAvatarComponent } from './spy-avatar/spy-avatar.component';
import { DialogComponent } from './dialog/dialog.component';
import { GameStep } from '../../../shared/gameUtilities/GameStep';

@Component({
  selector: 'app-spy',
  standalone: true,
  imports: [SpyAvatarComponent, DialogComponent],
  templateUrl: './spy.component.html',
  styleUrl: './spy.component.scss'
})
export class SpyComponent {

  @Output() clickedNext = new EventEmitter<string>();
  @Input() gameStep!: GameStep;


}
