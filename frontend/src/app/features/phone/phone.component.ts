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
        bio: '📍München <br> 🐈Cat owner <br> ⛷️Skiing',
        avatar: 'assets/accounts/sophiekaiser/profile.png',
        fText: "Gefolgt von paulfriedrich, juliaowczarek und 92 weiteren",
        folowersImage: ['assets/accounts/sophiekaiser/mufo1.png','assets/accounts/sophiekaiser/mufo2.png','assets/accounts/sophiekaiser/mufo3.png'],highlights: [{image:'assets/accounts/sophiekaiser/cat.png',name:"Lucie"}],
        postImage: ['assets/accounts/sophiekaiser/Post1.png', 'assets/accounts/sophiekaiser/Post2.png', 'assets/accounts/sophiekaiser/Post3.png', 'assets/accounts/sophiekaiser/Post4.png','assets/accounts/sophiekaiser/Post5.png', 'assets/accounts/sophiekaiser/Post6.png','assets/accounts/sophiekaiser/Post7.png', 'assets/accounts/sophiekaiser/Post8.png', 'assets/accounts/sophiekaiser/Post9.png']
    }, {
        name: 'Lisa Sunshine',
        posts: 9,
        followers: 15,
        tick:true,
        following: 325,
        bio: 'Lisa <br> Shop <br>  Leben, Lachen, Lieben. 🌞 <br> <a>www.scam.com</a> ',
        avatar: 'assets/accounts/Lisa/profile.png',
        fText: "",
        folowersImage: [],
        postImage: ['assets/accounts/Lisa/Post1.png', 'assets/accounts/Lisa/Post2.png', 'assets/accounts/Lisa/Post3.png', 'assets/accounts/Lisa/Post4.png','assets/accounts/Lisa/Post5.png', 'assets/accounts/Lisa/Post6.png','assets/accounts/Lisa/Post7.png', 'assets/accounts/Lisa/Post8.png', 'assets/accounts/Lisa/Post9.png']
    }, {
        name: 'JohnDae',
        posts: 0,
        followers: 1,
        following: 23,
        tick: false,
        bio: 'JohnDae <br> Hier um Freunde zu Finden!',
        avatar: 'assets/accounts/John/profile.png',
        fText: "",
        folowersImage: [],
        postImage: ["assets/accounts/John/nimage.png"]
    }, {
        name: 'Paulfriedrich',
        posts: 14,
        followers: 358,
        following: 242,
        bio: 'Paul Friedrich <br> Traveler <br> Just enjoy',
        tick: false,
        avatar: 'assets/accounts/paul/profile.png',
        fText: "Gefolgt von paulfriedrich, juliaowczarek und 92 weiteren",
        folowersImage: [
            'assets/accounts/paul/mfol1.png','assets/accounts/paul/mfol2.png','assets/accounts/paul/mfol3.png'
        ],
        highlights: [{image:'assets/accounts/paul/H1.png',name:"Dubai"},{image:'assets/accounts/paul/H2.png',name:"Rhodos"},{image:'assets/accounts/paul/H3.png',name:"Abu Dabi"},{image:'assets/accounts/paul/H4.png',name:"Suki"}],
        postImage: ['assets/accounts/paul/Post1.png', 'assets/accounts/paul/Post2.png', 'assets/accounts/paul/Post3.png', 'assets/accounts/paul/Post4.png','assets/accounts/paul/Post5.png', 'assets/accounts/paul/Post6.png','assets/accounts/paul/Post7.png', 'assets/accounts/paul/Post8.png', 'assets/accounts/paul/Post9.png']
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
    getclass(){
        if(this.phoneService.currentIndex == 5){
            return ['follower','followerel','hidden']
        }
        else if(this.phoneService.currentIndex == 6){
            return['mufollow','mufollowel','hidden']
        }
        else if(this.phoneService.currentIndex == 7){
            return ['post','hidden','postel']
        }
        else if(this.phoneService.currentIndex == 10){
            return ['follower','followerel','hidden']
        } 
        else if(this.phoneService.currentIndex == 11){
            return ['bio','hidden','hidden']
        } 
        else if(this.phoneService.currentIndex == 12){
            return ['post1','hidden','postel1']
        }
        else if(this.phoneService.currentIndex == 13){
            return ['scam','scamel','hidden']
        } 
        else if(this.phoneService.currentIndex == 16){
            return ['tick','hidden','hidden']
        } 
        else if(this.phoneService.currentIndex == 17){
            return ['tick','hidden','hidden']
        } 
        else if(this.phoneService.currentIndex == 18){
            return ['follower','followerel','middle']
        }
        else if(this.phoneService.currentIndex == 21){
            return['mufollow','mufollowel','hidden']
        }  
        else if(this.phoneService.currentIndex == 22){
            return ['post','hidden','postel']
        }  
        else if(this.phoneService.currentIndex == 23){
            return ['follower','followerel','hidden']
        }    
        else{
            return ['hidden','hidden','hidden']
        }
    }
}
