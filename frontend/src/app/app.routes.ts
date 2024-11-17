import { Routes } from '@angular/router';
import { LandingPageComponent } from './core/components/cockpit/landing-page/landing-page.component';
import { AiComponent } from './features/ai/ai.component';
import { CockpitComponent } from './core/components/cockpit/cockpit.component';
import { LaptopComponent } from './features/laptop/laptop.component';
import { CookieComponent } from './features/cookie/cookie.component';
import { ShoppingComponent } from './features/shopping/shopping.component';
import { PhoneComponent } from './features/phone/phone.component';
import { StartComponent } from './features/start/start.component';
import { StartButtonScreenComponent } from './features/start/start-button-screen/start-button-screen.component';
import { StartNameComponent } from './features/start/start-name/start-name.component';
import path from 'path';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/start/1",
        pathMatch: 'full'
    },
    {
        path: "start",
        component: StartComponent,
        children:[
            {
                path: "1",
                component: StartButtonScreenComponent,
                title: "Willkommen"
            },
            {
                path: "2",
                component: StartNameComponent,
                title: "Willkommen"
            }
        ]
    },
    {
        path: "cockpit",
        component: CockpitComponent,
        children: [
            {
                path: "",
                component: LandingPageComponent,
                title: "Cockpit | Spion"
            },
            {
                path: "ai",
                component: AiComponent,
                title: "AI | Spion"
            },
            {
                path: "computer",
                component: LaptopComponent,
                title: "Computer | Spion"
            },
            {
                path: "cookies",
                component: CookieComponent,
                title: "Cookies | Spion"
            },
            {
                path: "shopping",
                component: ShoppingComponent,
                title: "Shopping | Spion"
            },
            {
                path: "socialmedia",
                component: PhoneComponent,
                title: "Social Media | Spion"
            }
        ]
    }
];
