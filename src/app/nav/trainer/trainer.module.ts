import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TrainerComponent } from './trainer.component';
import { TrainerRoute } from './trainer.routing.module';

@NgModule({
  imports: [
    TrainerRoute,
    CommonModule
  ],
  declarations: [
    TrainerComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class TrainerModule { }
