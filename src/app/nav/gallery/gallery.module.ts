import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { GalleryRoute } from './gallery.routing.module';



@NgModule({
  imports: [
    CommonModule,
    GalleryRoute
  ],
  declarations: [
    GalleryComponent
  ],
  exports: [GalleryComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class GalleryModule { }
