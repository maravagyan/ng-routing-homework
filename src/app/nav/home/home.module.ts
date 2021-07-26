import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoute } from './home.routing.mudule';

@NgModule({
  imports: [
    HomeRoute,
    CommonModule
  ],
  declarations: [
    HomeComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class HomeModule { }
