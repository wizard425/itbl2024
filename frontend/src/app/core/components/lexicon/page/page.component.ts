import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges, Type, ViewChild, ViewContainerRef } from '@angular/core';
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
export class PageComponent implements AfterViewInit, OnChanges {

  @Input() page: Page | undefined;
  @Input() isLeftPage: boolean = true;
  @ViewChild('container', { read: ViewContainerRef, static: false }) container!: ViewContainerRef;


  constructor(protected lexicon: LexiconService) { }


  ngAfterViewInit(): void {
    this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.container) {
      this.loadComponent();
    }
  }

  nextPage() {
    this.lexicon.nextPage();
  }

  previousPage() {
    this.lexicon.previousPage();
  }

  loadComponent() {
    if (this.container) {
      this.container.clear();
      if (this.page?.component) {
        this.container.createComponent(this.page?.component);
      }
    }
  }

}
