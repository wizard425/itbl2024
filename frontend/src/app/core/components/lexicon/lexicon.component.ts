import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { LexiconService } from '../../../shared/lexicon/lexicon.service';
import { CommonModule } from '@angular/common';
import { PageComponent } from "./page/page.component";

@Component({
  selector: 'app-lexicon',
  standalone: true,
  imports: [MatDialogModule, CommonModule, PageComponent],
  templateUrl: './lexicon.component.html',
  styleUrl: './lexicon.component.scss'
})
export class LexiconComponent {


  constructor(protected lexicon: LexiconService) {

  }

}
