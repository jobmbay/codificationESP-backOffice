import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creer-etage',
  templateUrl: './creer-etage.component.html',
  styleUrls: ['./creer-etage.component.css']
})
export class CreerEtageComponent implements OnInit {

  etage = {
    numero : 0
  };

  constructor() { }

  ngOnInit() {
  }

}
