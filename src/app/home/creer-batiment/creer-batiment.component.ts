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
    label:""
  }

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  valider()
  {
    this.dataService.post("Batiments",this.batiment)
      .subscribe(
        data=>{
          this.router.navigate(["/home/batiments/liste"]);
        },
        err=> console.log(err)
      )
  }

  annuler()
  {
    this.router.navigate(["/home/batiments/liste"])
  }

}
