import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './nav/about/about.component';
import { ContactComponent } from './nav/contact/contact.component';
import { GalleryComponent } from './nav/gallery/gallery.component';
import { HomeComponent } from './nav/home/home.component';
import { NewsComponent } from './nav/news/news.component';
import { ServiceComponent } from './nav/service/service.component';
import { TrainerComponent } from './nav/trainer/trainer.component';


export const routes: Routes = [
  { path: 'about', loadChildren: () => import('../app/nav/about/about.module').then(m => m.AboutModule),},
  { path: 'contact', loadChildren: () => import('../app/nav/contact/contact.module').then(m => m.ContactModule),},
  { path: 'news', loadChildren: () => import('../app/nav/news/news.module').then(m => m.NewsModule), },
  { path: 'gallery', loadChildren: () => import('../app/nav/gallery/gallery.module').then(m => m.GalleryModule),},
  { path: 'trainer', loadChildren: () => import('../app/nav/trainer/trainer.module').then(m => m.TrainerModule),},
  { path: 'service', loadChildren: () => import('../app/nav/service/service.module').then(m => m.ServiceModule),},
  { path: 'home', loadChildren: () => import('../app/nav/home/home.module').then(m => m.HomeModule),},
  { path: '', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



