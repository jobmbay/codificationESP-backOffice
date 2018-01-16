import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response, Headers} from "@angular/http";

@Injectable()
export class DataService {

  baseUrl = "https://codification-esp-api.herokuapp.com/api/";

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post("https://codification-esp-api.herokuapp.com/api/Etudiants/login?include=user", data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  post(url,data) {
    return this.http.post(this.baseUrl + url, data)
      .map((res:Response) => res.json());
  }

  get(url) {
    return this.http.get(this.baseUrl + url)
      .map((res:Response) => res.json());
  }

  setUser(user)
  {
    let userStringify = JSON.stringify(user);
    localStorage.setItem("userAccount",userStringify);
  }

  getUser()
  {
    return JSON.parse(localStorage.getItem("userAccount"));
  }


  setTocken(token)
  {
    localStorage.setItem("tocken",token);
  }

  getTocken()
  {
    return localStorage.getItem("tocken");
  }

  isConnected()
  {
    if(localStorage.getItem("tocken"))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  deconnect()
  {
    localStorage.removeItem("tocken");
  }


}
