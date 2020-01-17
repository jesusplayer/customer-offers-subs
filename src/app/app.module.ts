import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { OffersModule } from './offers/offers.module';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    // OffersListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SubscriptionsModule, 
    OffersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
