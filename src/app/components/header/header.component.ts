import { Component, OnInit, Input } from '@angular/core';
import { RacesService } from 'src/app/services/races.service';
import { BackgroundsService } from 'src/app/services/backgrounds.service';
import { ClassesService } from 'src/app/services/classes.service';
import { JoueurComponent } from '../joueur/joueur.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [JoueurComponent]
})
export class HeaderComponent implements OnInit {

  constructor(
    private _racesService: RacesService,
    private _classesService: ClassesService,
    private _joueurComponent: JoueurComponent,
    private _backgroundsService: BackgroundsService
    ) {  }

  ngOnInit(): void {
  }

  printThisPage() {
    window.print();
  }

updateNameInUI() {
  return this._joueurComponent.characterName
}

  reset() {
    this._classesService.selectedClass =
    0;
    this._classesService.selectedClassName =
      "Barbare";
    this._classesService.selectedClassBasePv =
      12;

    this._classesService.selectedClassType =
      "Fighter";

    this._classesService.selectedCantripGroup =
     "A";



  this._classesService.commonWeaponsMastery = false;
  this._classesService.warWeaponsMastery = false;
  this._classesService.lightArmorMastery = false;
  this._classesService.mediumArmorMastery = false;
  this._classesService.heavyArmorMastery = false;
  this._classesService.shieldMastery = false;


    this._classesService.classSkillMasteries =
      "Deux parmi Athlétisme, Dressage, Intimidation, Nature, Perception et Survie";


  this._racesService.selectedRace = 0;
  this._racesService.selectedRace = this._racesService.races[this._racesService.selectedRace].name;

      
  }

  @Input() randomizer() {
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max + 1);
  }


}
