import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creer-etage',
  templateUrl: './creer-etage.component.html',
  styleUrls: ['./creer-etage.component.css']
})
export class CreerEtageComponent implements OnInit {

  etage = {
    numero : 0
  };

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  valider()
  {
    this.dataService.post("Etages",this.etage)
      .subscribe(
        data=>{
          this.router.navigate(["/home/etages/liste"]);
        },
        err=> console.log(err)
      )
  }


  annuler()
  {
    this.router.navigate(["/home/etages/liste"])
  }

}
