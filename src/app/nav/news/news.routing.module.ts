import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';

export const routes: Routes = [
  {     path: '',
        component: NewsComponent,
        children: []
    },
];

export const NewsRoute = RouterModule.forChild(routes);