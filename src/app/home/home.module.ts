import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeRouting} from "./home.routing";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProjetsComponent } from './projets/projets.component';
import { ProjetDetailsComponent } from './projets/projet-details/projet-details.component';
import { CreerEtageComponent } from './creer-etage/creer-etage.component';
import {FormsModule} from "@angular/forms";
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import {ChartModule} from "angular2-highcharts";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';

declare let require: any;


export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  const de = require('highcharts/highcharts-3d.js');
  dd(hc);
  de(hc);
  return hc;
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRouting,
    FormsModule,
    Ng2SmartTableModule,
    BrowserAnimationsModule,
    ChartModule.forRoot(require('highcharts'))
  ],
    providers: [
      {
        provide: HighchartsStatic,
        useFactory: highchartsFactory
      }
    ],
  declarations: [
    ProjetsComponent,
    ProjetDetailsComponent,
    CreerEtageComponent,
    DashboardComponent,
    EtudiantDetailsComponent
  ]
})
export class HomeModule { }
