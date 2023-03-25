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
    private JoueurComponent: JoueurComponent,
    private _backgroundsService: BackgroundsService
    ) {  }

  ngOnInit(): void {
  }

  printThisPage() {
    window.print();
  }

  reset() {
    this._classesService.selectedClass =
    0;
    this._classesService.selectedClassName =
      "Barbare";
    this._classesService.selectedClassBasePv =
      12;
    this._classesService.selectedClassBonusSkill1 =
    "Rages : 2, Dégâts de rage : +2";
    // this._classesService.selectedClassBonusSkill2 =
    //   this.classes[this.selectedClass].bonusSkill2;
    // this._classesService.selectedClassBonusSkill3 =
    //   this.classes[this.selectedClass].bonusSkill3;

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


    // this.classWeaponMasteries =
    //   this.classes[this.selectedClass].classWeaponMasteries;
    // this.classToolMasteries =
    //   this.classes[this.selectedClass].classToolMasteries;
    this._classesService.classSkillMasteries =
      "Deux parmi Athlétisme, Dressage, Intimidation, Nature, Perception et Survie";



      // this.JoueurComponent.selectedRace = 0;
  // this.JoueurComponent.cantest1 = "56341";

  this._racesService.selectedRace = 0;
  // this._racesService.selectedRace = this.JoueurComponent.races[0].name;
  this._racesService.selectedRace = this._racesService.races[this._racesService.selectedRace].name;

      // this._racesService.selectedRace = 0;
      this._racesService.selectedRaceSpeed = 99;
      this._racesService.selectedRaceFeatures =
      "";
      this._racesService.selectedRaceCaracteristics =
      "Toutes vos caractéristiques augmentent de 1";
      this.JoueurComponent.raceSkillMasteries = "maitrises";
      this.JoueurComponent.raceLanguages = "langue";

    
      
  }

  @Input() randomizer() {
    // this._classesService.selectedId = Math.floor(Math.random() * 11) + 1;
    // this._backgroundsService.selectedBackground = Math.floor(Math.random() * 62) + 1;
    // this._racesService.selectedRace = Math.floor(Math.random() * 13) + 1;
// this.JoueurComponent.randomize();
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max + 1);
  }

  // ngAfterViewInit(): void {
  //   this.randomizer() = this.child.updateSpellsKnown();
  // }

}
