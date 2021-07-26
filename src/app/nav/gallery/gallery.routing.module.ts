import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';

export const routes: Routes = [
  {     path: '',
        component: GalleryComponent,
        children: []
    },
];

export const GalleryRoute = RouterModule.forChild(routes);