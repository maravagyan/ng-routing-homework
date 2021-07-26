import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
  {     path: '',
        component: ContactComponent,
        children: []
    },
];

export const ContactRoute = RouterModule.forChild(routes);