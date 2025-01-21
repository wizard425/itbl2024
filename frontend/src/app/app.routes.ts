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
import { ScoreboardComponent } from './features/scoreboard/scoreboard.component';
import { ScorelistComponent } from './features/scoreboard/scorelist/scorelist.component';
import { MonitorComponent } from './features/laptop/monitor/monitor.component';
import { PasswordGameComponent } from './features/laptop/password-game/password-game.component';
import { AnalyzeComponent } from './features/laptop/analyze/analyze.component';

const AppTitle = "CyperSpion@TUM"

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
                component: StartButtonScreenComponent
            },
            {
                path: "2",
                component: StartNameComponent,
                title: "Willkommen " + AppTitle
            },
            {
                path: "class",
                component: EnterClassComponent,
                title: "Klasse einschreiben " + AppTitle
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
                title: "Cockpit | " + AppTitle
            },
            {
                path: "ai",
                component: AiComponent,
                title: "AI | " + AppTitle
            },
            {
                path: "computer",
                children: [
                    {
                        path: "",
                        redirectTo: "monitor",
                        pathMatch: 'full'
                    },
                    {
                        path: "monitor",
                        title: "Computer | " + AppTitle,
                        component: MonitorComponent
                    },
                    {
                        path: "game",
                        title: "Computer | " + AppTitle,
                        component: PasswordGameComponent
                    },
                    {
                        path: "analyze",
                        title: "Computer | " + AppTitle,
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
                title: "Shopping | " + AppTitle
            },
            {
                path: "socialmedia",
                component: PhoneComponent,
                title: "Social Media | " + AppTitle
            }
        ]
    },
    {
        path: "scoreboard",
        component: ScoreboardComponent,
        title: "Rangliste",
        children: [
            {
                path: "list",
                title: "Rangliste | " + AppTitle,
                component: ScorelistComponent
            }
        ]
    }
];
