import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeRouting} from "./home.routing";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProjetsComponent } from './projets/projets.component';
import { ProjetDetailsComponent } from './projets/projet-details/projet-details.component';
import { CreerEtageComponent } from './creer-etage/creer-etage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRouting,
    Ng2SmartTableModule,
    BrowserAnimationsModule
  ],
  declarations: [ProjetsComponent, ProjetDetailsComponent, CreerEtageComponent]
})
export class HomeModule { }
