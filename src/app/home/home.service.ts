import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  baseUrl = "http://91.134.139.234/app.php/api/";


  getListeMembre()
  {
    return this.http.get(this.baseUrl + "membres")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
