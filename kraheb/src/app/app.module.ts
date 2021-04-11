import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CardvComponent } from './cardv/cardv.component';
import { CarComponent } from './car/car.component';
import { VoitureComponent } from './voiture/voiture.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { FilterComponent } from './filter/filter.component';
import { GestionComponent } from './gestion/gestion.component';
import { BdComponent } from './bd/bd.component';
import { NavbdComponent } from './navbd/navbd.component';
import { GdvComponent } from './gdv/gdv.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'home', component: ViewComponent },
  { path: 'voiture', component: VoitureComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'bd', component: BdComponent },
  { path: '', component: ViewComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardvComponent,
    CarComponent,
    VoitureComponent,
    ViewComponent,
    ReservationComponent,
    FilterComponent,
    GestionComponent,
    BdComponent,
    NavbdComponent,
    GdvComponent,
    AjouterComponent,
    ModifierComponent,
    SupprimerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
