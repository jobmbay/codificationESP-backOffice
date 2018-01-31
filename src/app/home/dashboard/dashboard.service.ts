import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Response, Http} from "@angular/http";

@Injectable()
export class DashboardService {

  constructor(private http: Http) {
  }
}
