import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProjetsService {

  baseUrl = "http://91.134.139.234/app.php/api/";

  constructor(private http : Http) { }

  getListProjets(){
    return this.http.get(this.baseUrl + "projets")
      .map((res : Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
