import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() imageSrc: string = '';
  @Input() iconName: string = '';
  @Input() link: string = '';
}
