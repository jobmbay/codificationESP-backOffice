import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {OffresComponent} from "./offres/offres.component";
import {OfferDetailsComponent} from "./offer-details/offer-details.component";
import {ProjetsComponent} from "./projets/projets.component";
import {ProjetDetailsComponent} from "./projets/projet-details/projet-details.component";
import {CreerBatimentComponent} from "./creer-batiment/creer-batiment.component";
/**
 * Created by jobmbay on 12/1/17.
import {AccueilComponent} from "./accueil/accueil.component";
/**
 * Created by souaibou on 5/9/17.
 */
const HOME_ROUTES : Routes =[
  {
    path: 'home',
    component : HomeComponent,
    children : [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'batiments/liste', component: OffresComponent},
      {path: 'batiments/creer', component: CreerBatimentComponent},
      {path: 'offres/details', component: OfferDetailsComponent},
      {path: 'etages/liste', component: ProjetsComponent},
      {path: 'projets/details', component: ProjetDetailsComponent}
    ]
  }

];
@NgModule({
  imports: [
    RouterModule.forChild(HOME_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRouting {}
