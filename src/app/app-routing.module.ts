import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from '../app/navbar/navbar.component';
import {HomeComponent} from '../app/page/home/home.component';
import {AboutComponent} from '../app/page/about/about.component';
import {ContactComponent} from '../app/page/contact/contact.component';
import {TourComponent} from '../app/page/tour/tour.component';
import {FooterComponent} from '../app/footer/footer.component';
import {DomesticComponent} from '../app/tourcard/domestic/domestic.component';
import {ForeignComponent} from '../app/tourcard/foreign/foreign.component';
import {DomesticIDComponent} from '../app/pagebyID/domestic-id/domestic-id.component';
import {ForeignIDComponent} from '../app/pagebyID/foreign-id/foreign-id.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'navbar', component:NavbarComponent },
  { path: 'about', component:AboutComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'tour', component:TourComponent },
  { path: 'footer', component:FooterComponent },
  { path: 'foreign', component:ForeignComponent },
  { path: 'domestic', component:DomesticComponent },
  { path: 'domestic/:id', component:DomesticIDComponent },
  { path: 'foreign/:id', component:ForeignIDComponent },
  { path: 'login',component:LoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
