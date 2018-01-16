import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class OfferDetailsService {

  baseUrl = "http://91.134.139.234/app.php/api/";

  constructor(private http: Http) { }

  getOffreById(id) {
    return this.http.get(this.baseUrl + "offre/" + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
