import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service.component';

export const routes: Routes = [
  {     path: '',
        component: ServiceComponent,
        children: []
    },
];

export const ServiceRoute = RouterModule.forChild(routes);