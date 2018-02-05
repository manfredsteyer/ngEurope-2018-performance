import { FlightEventService } from './flight.event.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
// import { OAuthModule } from 'angular-oauth2-oidc';
import { SharedModule } from './shared/shared.module';
import { BasketComponent } from './basket/basket.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BASE_URL } from "./app.tokens";
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from "./home/home.component";
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { InvoicesModule } from './invoices/invoices.module';
import { TabbedPaneModule } from './controls/tabbed-pane/tabbed-pane.module';
import { DataDrivenTabbedPaneModule } from './controls/data-driven-tabbed-pane/data-driven-tabbed-pane.module';
import { ExtendedDataDrivenTabbedPaneModule } from './controls/ext-data-driven-tabbed-pane/ext-data-driven-tabbed-pane.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FlightBookingModule,  // Would prevent Lazy Loading
    InvoicesModule,
    TabbedPaneModule,
    DataDrivenTabbedPaneModule,
    ExtendedDataDrivenTabbedPaneModule,
    RouterModule.forRoot(APP_ROUTES, {
      // preloadingStrategy: PreloadAllModules
      useHash: true
    }),
    
    SharedModule.forRoot(),
    // OAuthModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    BasketComponent,
    HomeComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
    FlightEventService,
    { provide: BASE_URL, useValue: 'http://www.angular.at/api/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
