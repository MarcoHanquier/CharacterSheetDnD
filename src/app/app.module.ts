import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueurComponent } from './components/joueur/joueur.component';

import { RacesService } from './services/races.service';
import { ClassdetailsComponent } from './components/classdetails/classdetails.component';
import { ClassesService } from './services/classes.service';
import { RacesComponent } from './components/races/races.component';
import { ArmorComponent } from './components/armor/armor.component';
import { ArmorsService } from './services/armors.service';
import { CaracteristicsComponent } from './components/caracteristics/caracteristics.component';
import { SpellsComponent } from './components/spells/spells.component';
import { SkillsComponent } from './components/skills/skills.component';

import { NegativeNumberPipe } from './services/negativeNumber';
import { OtherValuesComponent } from './components/other-values/other-values.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    JoueurComponent,
    ClassdetailsComponent,
    RacesComponent,
    ArmorComponent,
    CaracteristicsComponent,
    SpellsComponent,
    SkillsComponent,
    NegativeNumberPipe,
    OtherValuesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [RacesService, ClassesService, ArmorsService, ArmorComponent, JoueurComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
