import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

export const routes: Routes = [
  {     path: '',
        component: AboutComponent,
        children: []
    },
];

export const AboutRoute = RouterModule.forChild(routes);