import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

    
 
  ],

  imports: [
    BrowserModule,
    
  ],

  exports: [
    HeaderComponent,
    FooterComponent,

  ], 

  providers: [],
  bootstrap: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
        
        };
    }
}
