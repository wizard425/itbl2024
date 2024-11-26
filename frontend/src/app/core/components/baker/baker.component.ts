import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BakerAvatarComponent } from './baker-avatar/baker-avatar.component';
import { GameStep } from '../../../shared/gameUtilities/GameStep';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-baker',
  standalone: true,
  imports: [BakerAvatarComponent, DialogComponent],
  templateUrl: './baker.component.html',
  styleUrl: './baker.component.scss'
})
export class BakerComponent {

  @Output() clickedNext = new EventEmitter<string>();
  @Input() gameStep!: GameStep;

}
