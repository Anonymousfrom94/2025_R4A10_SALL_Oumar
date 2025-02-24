import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GeneratePageComponent } from './generate-page/generate-page.component';
import { DetailComponent } from './home-page/detail/detail.component';

export const routes: Routes = [
    {
        component: HomePageComponent,
        path: '',
    },
    {
        component: GeneratePageComponent,
        path: 'generate',
    },
    {
        component: DetailComponent,
        path: 'detail/:id',
    },
];
