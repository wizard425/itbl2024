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
import { BakeryOutsideComponent } from './features/cookie/bakery-outside/bakery-outside.component';
import { BakeryInsideComponent } from './features/cookie/bakery-inside/bakery-inside.component';
import { GameComponent } from './features/cookie/game/game.component';
import { KitchenComponent } from './features/cookie/kitchen/kitchen.component';
import { EnterClassComponent } from './features/start/enter-class/enter-class.component';
import { RanklistComponent } from './core/components/ranklist/ranklist.component';
import { GameGuard } from './core/guards/game.guard';
import { StartGuard } from './core/guards/start.guard';
import { MonitorComponent } from './features/laptop/monitor/monitor.component';
import { PasswordGameComponent } from './features/laptop/password-game/password-game.component';
import { AnalyzeComponent } from './features/laptop/analyze/analyze.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/start/1",
        pathMatch: 'full'
    },
    {
        path: "start",
        component: StartComponent,
        canActivate: [StartGuard],
        children: [
            {
                path: "1",
                component: StartButtonScreenComponent,
                title: "Willkommen"
            },
            {
                path: "2",
                component: StartNameComponent,
                title: "Willkommen"
            },
            {
                path: "class",
                component: EnterClassComponent,
                title: "Klasse einschreiben"
            }
        ]
    },
    {
        path: "cockpit",
        component: CockpitComponent,
        canActivate: [GameGuard],
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
                children: [
                    {
                        path: "monitor",
                        title: "Computer | Spion",
                        component: MonitorComponent
                    },
                    {
                        path: "game",
                        title: "Computer | Spion",
                        component: PasswordGameComponent
                    },
                    {
                        path: "analyze",
                        title: "Computer | Spion",
                        component: AnalyzeComponent
                    }
                ]
            },
            {
                path: "cookies",
                component: CookieComponent,
                title: "Cookies | Spion",
                children: [
                    {
                        path: "",
                        redirectTo: "bakery",
                        pathMatch: 'full'
                    },
                    {
                        path: "bakery",
                        title: "Cookies",
                        component: BakeryOutsideComponent
                    },
                    {
                        path: "inside",
                        title: "Cookies",
                        component: BakeryInsideComponent
                    }, {
                        path: "kitchen",
                        title: "Cookies",
                        component: KitchenComponent
                    }, {
                        path: "game",
                        title: "Cookies",
                        component: GameComponent
                    }
                ]
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
    },
    {
        path: "ranklist",
        component: RanklistComponent,
        title: "Rangliste"
    }
];
