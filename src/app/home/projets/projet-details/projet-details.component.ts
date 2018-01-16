import { Component, OnInit } from '@angular/core';
import {ProjetDetailsService} from "./projet-details.service";

@Component({
  selector: 'app-projet-details',
  templateUrl: './projet-details.component.html',
  styleUrls: ['./projet-details.component.css'],
  providers:[ProjetDetailsService]
})
export class ProjetDetailsComponent implements OnInit {

  idSelected = localStorage.getItem("idProjetSelected");
  projet;

  constructor(private projetDetailService: ProjetDetailsService) { }

  ngOnInit() {
    this.projetDetailService.getProjetWithId(this.idSelected)
      .subscribe(
        data => this.handleProjet(data),
        error => this.handleError(error)
      )
  }

  handleProjet(data){
    this.projet = data;
    console.log(this.projet);
  }

  handleError(error){
    console.log(error);
  }


}
