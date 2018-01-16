import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../dashboard/dashboard.service";
import {Router} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-offres',
  templateUrl: 'offres.component.html',
  styleUrls: ['offres.component.css'],
  providers : [DashboardService]
})
export class OffresComponent implements OnInit {

  batiments;
  modif;

  constructor(private dataService: DataService, private router: Router, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dataService.get("Batiments")
      .subscribe(
        data=>{
          this.batiments = data;
        },
        err=> {
          console.log(err);
        }
      );
  }

  modifBatiment(id)
  {
    this.modif = id;
  }

  creerBatimentPage()
  {
    this.router.navigate(["/home/batiments/creer"])
  }

  validateModif()
  {

    this.modif="";
  }

}
