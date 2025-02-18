import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'detail/:id',
    component: DetailPageComponent,
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
