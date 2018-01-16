import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {HomeModule} from "./home/home.module";
import {routing} from "./app.routing";
import { DashboardComponent } from './home/dashboard/dashboard.component';
import {HttpModule} from "@angular/http";
import { OffresComponent } from './home/offres/offres.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import { OfferDetailsComponent } from './home/offer-details/offer-details.component';
import {DataService} from "./data.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CreerBatimentComponent } from './home/creer-batiment/creer-batiment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    OffresComponent,
    OfferDetailsComponent,
    CreerBatimentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HomeModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
