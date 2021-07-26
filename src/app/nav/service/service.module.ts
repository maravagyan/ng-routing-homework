import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ServiceComponent } from './service.component';
import { ServiceRoute } from './service.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ServiceRoute
  ],
  declarations: [
    ServiceComponent
  ],
  exports: [ServiceComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class ServiceModule { }
