import { Component, OnInit } from '@angular/core';
import {DashboardService} from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers : [DashboardService]
})
export class DashboardComponent implements OnInit {

  nbrMombre;
  nbrOffre;
  nbRH;
  nbRF;

  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.dashboardService.getListeMembre()
      .subscribe(
        data=>{
          this.nbrMombre = data.length;
    }
      );

    this.dashboardService.getListeOffre()
      .subscribe(
        data=>{
          this.nbrOffre = data.length;
        }
      );

    this.dashboardService.getListeResourceHumaine()
      .subscribe(
        data=>{
          this.nbRH = data.length;
        }
      );

    this.dashboardService.getListeRechercheFinanchement()
      .subscribe(
        data=>{
          this.nbRF = data.length;
        }
      );
  }

}
