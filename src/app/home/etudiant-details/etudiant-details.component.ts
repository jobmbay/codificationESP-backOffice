import { Component, OnInit } from '@angular/core';

import {DataService} from "../../data.service";


@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {
  etudiants=[
      {
        id:"",
      position:{
        chambre:{
          etage:{
            batiment:{}
          }
        }
      }
    }
  ];
  constructor(private dataService:DataService) { 

  }

  ngOnInit() {
    this.dataService.get("Etudiants?filter="+ encodeURIComponent('{"include":[{"option":"departement"},{"position":{"chambre":{"etage":"batiment"}}}]}'))
    .subscribe(
      data=>{
        this.etudiants=data;
      },
      error=>{
        console.log("err");
      }
    )
  }

}
