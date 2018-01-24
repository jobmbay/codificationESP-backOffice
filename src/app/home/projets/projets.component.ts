import { Component, OnInit } from '@angular/core';
import {ProjetsService} from "./projets.service";
import {DataService} from "../../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css'],
  providers: [ProjetsService]
})
export class ProjetsComponent implements OnInit {

  etages = [];

  constructor(private router: Router, private dataService : DataService, private projetService : ProjetsService) { }

  ngOnInit() {
    this.initialiseData();
  }

  creerEtagePage()
  {
    this.router.navigate(["/home/etages/creer"]);
  }

  initialiseData()
  {
    this.dataService.get("Etages")
      .subscribe(
        data=>{
          this.etages = data;
        },
        err=> {
          console.log(err);
        }
      );
  }

}
