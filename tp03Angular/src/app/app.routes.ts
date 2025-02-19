import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GeneratePageComponent } from './generate-page/generate-page.component';

export const routes: Routes = [
    {
        component: HomePageComponent,
        path: ''
    },
    {
        component: GeneratePageComponent,
        path: 'generate'
    },
];
