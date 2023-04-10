import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from '../app/navbar/navbar.component';
import {HomeComponent} from '../app/page/home/home.component';
import {AboutComponent} from '../app/page/about/about.component';
import {ContactComponent} from '../app/page/contact/contact.component';
import {TourComponent} from '../app/page/tour/tour.component';
import {FooterComponent} from '../app/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'homepage', component:HomeComponent },
  { path: 'navbar', component:NavbarComponent },
  { path: 'about', component:AboutComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'tour', component:TourComponent },
  { path: 'footer', component:FooterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
