import { CommonModule } from '@angular/common';
import { Component,input,Input } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  @Input() account: any = {
    name: '',
    posts: 0,
    followers: 0,
    following: 0,
    bio: '',
    avatar: '',
    fText: '',
    folowersImage: [],
    postImage: []
  };

}