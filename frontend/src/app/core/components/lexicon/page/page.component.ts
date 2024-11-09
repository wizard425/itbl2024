import { Component, Input } from '@angular/core';
import { Page } from '../../../../shared/lexicon/LexiconContent';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LexiconService } from '../../../../shared/lexicon/lexicon.service';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

  @Input() page: Page | undefined;
  @Input() isLeftPage: boolean = true;

  constructor(protected lexicon: LexiconService) { }

  nextPage() {
    this.lexicon.nextPage();
  }

  previousPage() {
    this.lexicon.previousPage();
  }

}
