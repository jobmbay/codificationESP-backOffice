import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import 'rxjs/Rx';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [HomeService]
})
export class HomeComponent implements OnInit {

  user={
    adresse: "",
    age:0,
    email:"",
    matricule: "",
    nom: "",
    prenom: "",
    sexe: "",
    telephone: "",
    username: "",
  };

  constructor(private router: Router, private dataService: DataService, private homeService : HomeService) { }

  ngOnInit() {
    this.user = this.dataService.getUser();
  }

  deconnexion()
  {
    this.dataService.deconnect();
    this.router.navigate(['']);
  }

}
