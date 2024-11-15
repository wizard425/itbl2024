import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  account = {
    name: 'Robert',
    posts: 10,
    followers: 2,
    following: 180,
    bio: 'Just enjoying my life!',
    avatar: 'assets/accounts/robertIcon.png', 
    postImage: 'assets/accounts/robertPosts.png' 
  };

}