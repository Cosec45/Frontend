import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { TourComponent } from './page/tour/tour.component';
import { FooterComponent } from './footer/footer.component';
import { DomesticComponent } from './tourcard/domestic/domestic.component';
import { ForeignComponent } from './tourcard/foreign/foreign.component';
import { FormsModule } from '@angular/forms';
import { DomesticIDComponent } from './pagebyID/domestic-id/domestic-id.component';
import { ForeignIDComponent } from './pagebyID/foreign-id/foreign-id.component';
import { TripinfoComponent } from './page/tripinfo/tripinfo.component';
import { PaymentComponent } from './page/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    TourComponent,
    FooterComponent,
    DomesticComponent,
    ForeignComponent,
    DomesticIDComponent,
    ForeignIDComponent,
    TripinfoComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
