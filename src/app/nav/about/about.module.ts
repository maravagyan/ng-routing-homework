import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoute } from './about.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoute
  ],
  declarations: [
    AboutComponent,
  ],
  exports: [AboutComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class AboutModule { }
