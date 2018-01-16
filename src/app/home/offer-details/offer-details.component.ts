import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {OfferDetailsService} from "./offer-details.service";
declare var $:any;

@Component({
  selector: 'app-offer-details',
  templateUrl: 'offer-details.component.html',
  styleUrls: ['offer-details.component.css'],
  providers : [OfferDetailsService]
})
export class OfferDetailsComponent implements OnInit, AfterViewInit {

  offre = {
    titre:String,
    contenu:"",
    etat:"",
    dateOffre: new Date(),
    dateAffiche:""
  };
  offerId;

  constructor(private offerDetailsService : OfferDetailsService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.offerId = localStorage.getItem("offerId");
      this.offerDetailsService.getOffreById(this.offerId)
        .subscribe(
          data=>
          {
            console.log(data)
            this.offre=data;
            document.getElementById("preview").innerHTML = this.offre.contenu;
            this.verifyCheck();
          }
        );
  }

  verifyCheck()
  {
    if(this.offre.etat=="true")
    {
      document.getElementById("unchecked").setAttribute("checked","true");
    }
  }

  changeChecked()
  {
    if(this.offre.etat==null)
    {
      this.offre.etat="true";
    }
    else
    {
      this.offre.etat=null;
    }
  }

  ngAfterViewInit()
  {
    document.getElementById("preview").innerHTML = this.offre.contenu;
  }


}
