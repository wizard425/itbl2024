import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overlay" *ngIf="isLoading">
      <div class="loader"></div>
    </div>
  `,
  styles: [`
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .loader {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: conic-gradient(#3498db 10%, transparent 10%);
      mask: radial-gradient(circle, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 41%);
      -webkit-mask: radial-gradient(circle, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 41%);
      animation: rotate 1s linear infinite;
    }
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LoaderComponent {
  @Input() isLoading = false;
}
