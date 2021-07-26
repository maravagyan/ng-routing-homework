import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRoute } from './contact.routing.module';



@NgModule({
  imports: [
    CommonModule,
    ContactRoute
  ],
  declarations: [
    ContactComponent,
  ],
  exports: [ContactComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})

export class ContactModule { }
