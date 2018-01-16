import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Response, Http} from "@angular/http";

@Injectable()
export class DashboardService {

  constructor(private http: Http) {
  }

  baseUrl = "http://91.134.139.234/app.php/api/";


  getListeMembre() {
    return this.http.get(this.baseUrl + "membres")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getListeOffre() {
    return this.http.get(this.baseUrl + "offres")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getListeRechercheFinanchement() {
    return this.http.get(this.baseUrl + "rechercheFinancements")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getListeResourceHumaine() {
    return this.http.get(this.baseUrl + "resourceHumaines")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
