import { Component } from '@angular/core';
import { AccountComponent } from "../../core/components/cockpit/account/account.component";
import { PhoneService } from '../../core/services/scenario-services/phone.service';
import { CommonModule } from '@angular/common';
import { SpyComponent } from '../../core/components/spy/spy.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-phone',
    standalone: true,
    imports: [AccountComponent, CommonModule, SpyComponent, SpyComponent, MatGridListModule, RouterModule],
    templateUrl: './phone.component.html',
    styleUrl: './phone.component.scss'
})
export class PhoneComponent {
    public AccountArray = [{
        name: 'Sophiekaiser',
        posts: 23,
        followers: 896,
        following: 474,
        tick: true,
        bio: 'München \n Cat owner\n  skiing',
        avatar: 'assets/accounts/robertIcon.png',
        fText: "Gefolgt von paulfriedrich, juliaowczarek und 92 weiteren",
        folowersImage: ['assets/accounts/robertIcon.png'],
        postImage: ['assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png', 'assets/accounts/robertIcon.png']
    }, {
        name: 'Lisa Sunshine',
        posts: 9,
        followers: 15,
        tick:true,
        following: 325,
        bio: 'Lisa \n Shop \n  Lieben ',
        avatar: 'assets/accounts/robertIcon.png',
        fText: "Gefolgt von paulfriedrich, juliaowczarek und 92 weiteren",
        folowersImage: [
            'assets/followers/follower1.png',
            'assets/followers/follower2.png',
            'assets/followers/follower3.png'
        ],
        postImage: []
    }, {
        name: 'JohnDae',
        posts: 0,
        followers: 1,
        following: 23,
        tick: false,
        bio: 'JohnDae \n Hier um Freunde zu Finden!',
        avatar: 'assets/accounts/robertIcon.png',
        fText: "Gefolgt von paulfriedrich, juliaowczarek und 92 weiteren",
        folowersImage: [
            'assets/followers/follower1.png',
            'assets/followers/follower2.png',
            'assets/followers/follower3.png'
        ],
        postImage: []
    }, {
        name: 'Paulfriedrich',
        posts: 14,
        followers: 358,
        following: 242,
        bio: 'Paul Friedrich \n Traveler',
        tick: false,
        avatar: 'assets/accounts/robertIcon.png',
        fText: "Gefolgt von paulfriedrich, juliaowczarek und 92 weiteren",
        folowersImage: [
            'assets/followers/follower1.png',
            'assets/followers/follower2.png',
            'assets/followers/follower3.png'
        ],
        postImage: []
    },]

    showPhone: boolean = false;

    constructor(protected phoneService: PhoneService) {
    }
    onFakeClick() {
        this.phoneService.Answer = false;
        this.phoneService.next();
        this.phoneService.BHide = true;
    }
    onRealClick() {
        this.phoneService.Answer = true;
        this.phoneService.next();
        this.phoneService.BHide = true; 
    }
}
