import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { NewsRoute } from './news.routing.module';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoute
  ],
  exports: [NewsComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class NewsModule { }
