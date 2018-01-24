import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-creer-batiment',
  templateUrl: 'creer-batiment.component.html',
  styleUrls: ['creer-batiment.component.css']
})
export class CreerBatimentComponent implements OnInit {

  batiment={
    label:"",
    nombreetage:0
  }

  etages = [];
  currentRoomNumber=0;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.updateNbEtage();
  }

  updateNbEtage()
  {
    this.etages = [];

    for(let i=0; i<this.batiment.nombreetage+1;)
    {
      this.etages.push({num:i, nbChambre:0, nbPosition:4, demeurant:"Masculin"});
      i++;
    }
  }

  valider()
  {
    this.dataService.post("Batiments",this.batiment)
      .subscribe(
        data=>{
          this.createOrReplaceEtage(0,this.batiment.nombreetage,data.id);
          /*this.dataService.get("Etages/count")
            .subscribe(
              donnee=>{
                if(donnee.count!=0) {
                  if(donnee.count<this.batiment.nombreetage)
                  {
                    this.findAndCreate(0,donnee.count,data.id);
                  }
                  else {
                    this.findAndCreate(0,this.batiment.nombreetage,data.id);
                  }
                }
                if(donnee.count<this.batiment.nombreetage)
                {
                  this.createOrReplaceEtage(donnee.count,this.batiment.nombreetage,data.id);
                }
                this.router.navigate(["/home/batiments/liste"]);
              }
            );*/
          this.router.navigate(["/home/batiments/liste"]);
        },
        err=> console.log(err)
      )
  }

  findAndCreate(debut,nbetage,batimentId)
  {
    if(debut==nbetage)
    {
      this.dataService.get('Etages?filter={"where":{"numero":' + debut + '}}')
        .subscribe(
          data=>{
            console.log(data[0]);
            this.dataService.post("BatimentsEtages",{etageId: data[0].id, batimentId: batimentId, nombrechambre: this.etages[debut].nbChambre})
              .subscribe(
              );
          },
          err=> console.log(err)
        )
    }
    else
    {
      this.dataService.get('Etages?filter={"where":{"numero":' + debut + '}}')
        .subscribe(
          data=>{
            console.log(data[0]);
            this.dataService.post("BatimentsEtages",{etageId: data[0].id, batimentId: batimentId, nombrechambre: this.etages[debut].nbChambre})
             .subscribe(
             );
          },
          err=> console.log(err)
        )
      this.findAndCreate(debut+1,nbetage, batimentId);
    }
  }

  createOrReplaceEtage(debut,nombreEtage, batimentId)
  {
    if(debut==nombreEtage)
    {
      this.dataService.post("Etages", {numero:debut, batimentId:batimentId, demeurant: this.etages[debut].demeurant})
        .subscribe(
          data=>{
            if(debut!=0)
            {
              this.currentRoomNumber+=this.etages[debut-1].nbChambre;
            }
            this.createChambre(1, this.etages[debut].nbChambre, data.id, debut, this.currentRoomNumber);
          },
          err=> console.log(err)
        )
    }
    else
    {
      this.dataService.post("Etages", {numero:debut, batimentId:batimentId, demeurant: this.etages[debut].demeurant})
        .subscribe(
          data=>{
            if(debut!=0)
            {
              this.currentRoomNumber+=this.etages[debut-1].nbChambre;
            }
            this.createChambre(1, this.etages[debut].nbChambre, data.id, debut, this.currentRoomNumber);
          },
          err=> console.log(err)
        )
      this.createOrReplaceEtage(debut+1,nombreEtage, batimentId);
    }
  }

  createChambre(debut,nombreChambre, etageId, index, currentRoomNumber)
  {
    if(debut==nombreChambre)
    {
      this.dataService.post("Chambres", {numero:debut + currentRoomNumber, etageId: etageId , nbposition: this.etages[index].nbPosition})
        .subscribe(
          data=>{

          },
          err=> console.log(err)
        )
    }
    else
    {
      this.dataService.post("Chambres", {numero:debut + currentRoomNumber, etageId: etageId ,  nbposition: this.etages[index].nbPosition})
        .subscribe(
          data=>{

          },
          err=> console.log(err)
        )
      this.createChambre(debut+1,nombreChambre, etageId, index, currentRoomNumber);
    }
  }

  annuler()
  {
    this.router.navigate(["/home/batiments/liste"])
  }

}
