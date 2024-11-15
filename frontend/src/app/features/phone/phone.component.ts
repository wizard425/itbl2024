import { Component } from '@angular/core';
import { AccountComponent } from "../../core/components/cockpit/account/account.component"; 


@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [AccountComponent],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {
  public AccountArray = [{
    name: 'Robert',
    posts: 10,
    followers: 2,
    following: 180,
    bio: 'Just enjoying my life!',
    avatar: 'assets/accounts/robertIcon.png',
    fText: "Gefolgt von paulfriedrich, juliaowczarek und 92 weiteren",
    folowersImage: ['assets/accounts/robertIcon.png'],
    postImage: ['assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png']
}, {
    name: 'Robert',
    posts: 10,
    followers: 200,
    following: 180,
    bio: 'Just enjoying my life!',
    avatar: 'assets/accounts/robertIcon.png',
    fText: "Gefolgt von paulfriedrich, juliaowczarek und 92 weiteren",
    folowersImage: [
        'assets/followers/follower1.png',
        'assets/followers/follower2.png',
        'assets/followers/follower3.png'
    ],
    postImage: []
}, {
    name: 'Robert',
    posts: 10,
    followers: 2,
    following: 180,
    bio: 'Just enjoying my life!',
    avatar: 'assets/accounts/robertIcon.png',
    fText: "Gefolgt von paulfriedrich, juliaowczarek und 92 weiteren",
    folowersImage: [
        'assets/followers/follower1.png',
        'assets/followers/follower2.png',
        'assets/followers/follower3.png'
    ],
    postImage: []
}, {
    name: 'Robert',
    posts: 10,
    followers: 2,
    following: 180,
    bio: 'Just enjoying my life!',
    avatar: 'assets/accounts/robertIcon.png',
    fText: "Gefolgt von paulfriedrich, juliaowczarek und 92 weiteren",
    folowersImage: [
        'assets/followers/follower1.png',
        'assets/followers/follower2.png',
        'assets/followers/follower3.png'
    ],
    postImage: []
},]

}
