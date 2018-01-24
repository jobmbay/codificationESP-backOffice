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
  etageSelected = -1;
  baimentId = "";

  constructor(private dataService: DataService, private router: Router, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.initialiseData();
  }

  initialiseData()
  {
    this.dataService.get('Batiments?filter=' + encodeURIComponent('{"order":"etages.numero","include": {"etages": "chambres"}}'))
      .subscribe(
        data=>{
          this.batiments = data;
        },
        err=> {
          console.log(err);
        }
      );
  }

  selectEtageForUpdate(numero, batimentId)
  {
    this.etageSelected = numero;
    this.baimentId = batimentId;
  }

  validateSelectEtageForUpdate(etage)
  {
    this.etageSelected = -1;
    this.baimentId = "";
    this.dataService.patch("Etages/" + etage.id, etage)
      .subscribe(
        data=> {

        },
        err=> {
          console.log(err);
        }
      );
    this.dataService.get('Chambres?filter=' + encodeURIComponent('{"where" : {"etageId":"' + etage.id + '"}}'))
      .subscribe(
        data=> {
          this.updateNbPositionChambres(0,data.length, data, etage);
        },
        err=> {
          console.log(err);
        }
      );
  }

  updateNbPositionChambres(debut, max , chambres, etage)
  {
    if(debut==max-1)
    {
      chambres[debut].nbposition = etage.chambres[0].nbposition;
      this.dataService.patch("Chambres/" + chambres[debut].id, chambres[debut])
        .subscribe(
          data=> {

          },
          err=> {

          }
        );
    }
    else {
      chambres[debut].nbposition = etage.chambres[0].nbposition;
      this.dataService.patch("Chambres/" + chambres[debut].id, chambres[debut])
        .subscribe(
          data=> {

          },
          err=> {

          }
        );
      this.updateNbPositionChambres(debut+1 , max , chambres, etage)
    }
  }

  modifBatiment(id)
  {
    this.modif = id;
  }

  creerBatimentPage()
  {
    this.router.navigate(["/home/batiments/creer"])
  }

  validateModif(batiment)
  {
    this.dataService.patch("Batiments", batiment)
      .subscribe(
        data=> {
          this.initialiseData();
        },
        err=> {
          console.log(err);
        }
      );
    this.modif="";
  }

  AnuulerSuppAndModef()
  {
    this.modif="";
  }

  validateSupp(id)
  {
    this.dataService.delete("Batiments", id)
      .subscribe(
        data=> {
          this.initialiseData();
        },
        err=> {
          console.log(err);
        }
      );
    this.modif="";
  }

}
