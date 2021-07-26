import { RouterModule, Routes } from '@angular/router';
import { TrainerComponent } from './trainer.component';

export const routes: Routes = [
  {     path: '',
        component: TrainerComponent,
        children: []
    },
];

export const TrainerRoute = RouterModule.forChild(routes);