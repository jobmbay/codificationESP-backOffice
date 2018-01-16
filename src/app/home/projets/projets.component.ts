import { Component, OnInit } from '@angular/core';
import {ProjetsService} from "./projets.service";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css'],
  providers: [ProjetsService]
})
export class ProjetsComponent implements OnInit {

  etages = [];

  constructor(private dataService : DataService, private projetService : ProjetsService) { }

  ngOnInit() {
    this.initialiseData();
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
