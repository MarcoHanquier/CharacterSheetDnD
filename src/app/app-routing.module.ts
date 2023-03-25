import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicsComponent } from './components/caracteristics/caracteristics.component';
import { ClassdetailsComponent } from './components/classdetails/classdetails.component';
import { JoueurComponent } from './components/joueur/joueur.component';
import { RacesComponent } from './components/races/races.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  // { path: '', redirectTo: 'characterSheet', pathMatch: 'full'},
  { path: '', component: AppComponent }
  // { path: 'joueur', component: JoueurComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
