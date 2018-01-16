import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private dataService: DataService, private router: Router){}

  ngOnInit()
  {
    /*if(this.dataService.isConnected()==true)
    {
      this.router.navigate(["home/dashboard"]);
    }
    else
    {
      this.router.navigate([""]);
    }*/
  }
}
