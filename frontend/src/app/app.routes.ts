import { Routes } from '@angular/router';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { AiComponent } from './features/ai/ai.component';

export const routes: Routes = [
    {
        path: "landing-page",
        component: LandingPageComponent
    },{
        path: "AI",
        component: AiComponent
    }
];
