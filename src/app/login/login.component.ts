import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: "",
    password: ""
  }

  constructor(private router: Router, private dataService : DataService) { }

  ngOnInit() {
  }

  login()
  {
    this.dataService.login(this.user)
      .subscribe(
        data=>{
          this.dataService.setUser(data["user"]);
          this.dataService.setTocken(data["id"]);
          this.router.navigate(['home/dashboard']);
        },
        err=> {
          this.user.password="";
          console.log(err)
        }
      );
  }

}
