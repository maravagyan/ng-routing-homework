import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {     path: '',
        component: HomeComponent,
        children: []
    },
];

export const HomeRoute = RouterModule.forChild(routes);