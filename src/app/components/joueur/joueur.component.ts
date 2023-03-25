import { NgIf, NgSwitch } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { race } from 'rxjs';
import { RacesService } from 'src/app/services/races.service';
import { ClassesService } from 'src/app/services/classes.service';
import { ClassdetailsComponent } from '../classdetails/classdetails.component';
import { ArmorComponent } from '../armor/armor.component';
import { SpellsService } from 'src/app/services/spells.service';
import { ArmorsService } from 'src/app/services/armors.service';
import { CaracteristicsService } from 'src/app/services/caracteristics.service';
import { SpellsComponent } from '../spells/spells.component';
import { ClassFeaturesService } from 'src/app/services/class-features.service';
import { CaracteristicsComponent } from '../caracteristics/caracteristics.component';
import { BackgroundsService } from 'src/app/services/backgrounds.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css'],
})
export class JoueurComponent implements OnInit, AfterViewInit {
  // level: number;
  @ViewChild(SpellsComponent) child: any;
  level: number;
  levelFeatures: string;
  pv: number;
  classPv: number;
  public masteries = [] as any[];

  public classes = [] as any[];

  public selectedArmor = 14;
  // public UpdatedArmorClass = 9;
  public currentProficiency = 2;
  public selectedPlayerClass = 0;
  public currentPv = 14;
  public currentSelected = '';
  public dexterityModifier = -1;
  public updatedArmorClass = 7;
  public currentArmorClass = 7;
  public cantest1 = '14';
  public bonusSkill = '';

  public commonWeaponsMastery = true;
  public warWeaponsMastery = true;
  public lightArmorMastery = true;
  public mediumArmorMastery = true;
  public heavyArmorMastery = false;
  public shieldMastery = true;
  public classWeaponMasteries = '';
  public raceWeaponMasteries = '';
  public classToolMasteries = '';
  public raceToolMasteries = '';

  public classSkillMasteries =
    'Deux parmi Athlétisme, Dressage, Intimidation, Nature, Perception et Survie';
  public raceSkillMasteries = '';

  public backgroundSkill = 'Signes de piste';
  public backgroundSkillMasteries = 'Discrétion, Survie';
  public backgroundToolMasteries =
    'Véhicules (terrestres), un type de jeu au choix';
  public backgroundOrigin = '';
  public backgroundLanguages = '';

  public raceLanguages = 'Commun et une au choix';

  public selectedRace = 0;
  public selectedBackground = 0;
  public selectedClass = 0;

  public randomizedRace = 0;
  public randomizedBackground = 0;
  public randomizedClass = 0;

  public spellsKnown = '0';

  public updateSpellsKnown = '0';
  public updateSpellLevel = '0';
  public updateSpellsInUI = '0';

  public cantripsKnown = '0';
  public spellsSlots = '';
  public spellsPrepared = 0;

  onSelected(value: any): void {}
  update(e: any) {
    this._classesService.selectedClassName =
      this.classes[this.selectedClass].name;
    this._classesService.selectedClassBasePv =
      this.classes[this.selectedClass].pvBase;
    this._classesService.selectedClassBonusSkill1 =
      this.classes[this.selectedClass].bonusSkill1;
    this._classesService.selectedClassBonusSkill2 =
      this.classes[this.selectedClass].bonusSkill2;
    this._classesService.selectedClassBonusSkill3 =
      this.classes[this.selectedClass].bonusSkill3;

    this._classesService.selectedClassType =
      this.classes[this.selectedClass].classType;

    this._classesService.selectedCantripGroup =
      this.classes[this.selectedClass].cantripGroup;

    this._classesService.selectedClass =
      this.classes[this.selectedClass].id;

    this.classWeaponMasteries =
      this.classes[this.selectedClass].classWeaponMasteries;
    this.classToolMasteries =
      this.classes[this.selectedClass].classToolMasteries;
    this.classSkillMasteries =
      this.classes[this.selectedClass].classSkillMasteries;

    this.updateSpellsInUI;

    this._caracteristicsService.level = 1;
    this.currentProficiency = 2;
    this._caracteristicsService.proficiency = 2;
    this.updateClass();
    this.updateLevel();
  }

test () {
  return this.cantest1
}

updateClassName() {
  return this._classesService.selectedClassName
}


reset() {
  this.selectedClass = 0;

  this._classesService.selectedClassName =
    this.classes[this.selectedClass].name;
  this._classesService.selectedClassBasePv =
    this.classes[this.selectedClass].pvBase;
  this._classesService.selectedClassBonusSkill1 =
    this.classes[this.selectedClass].bonusSkill1;
  this._classesService.selectedClassBonusSkill2 =
    this.classes[this.selectedClass].bonusSkill2;
  this._classesService.selectedClassBonusSkill3 =
    this.classes[this.selectedClass].bonusSkill3;
  this._classesService.selectedClassType =
    this.classes[this.selectedClass].classType;

  this._classesService.selectedCantripGroup =
    this.classes[this.selectedClass].cantripGroup;

  this._classesService.selectedClass = this.classes[this.selectedClass].id;

  this.classWeaponMasteries =
    this.classes[this.selectedClass].classWeaponMasteries;
  this.classToolMasteries =
    this.classes[this.selectedClass].classToolMasteries;
  this.classSkillMasteries =
    this.classes[this.selectedClass].classSkillMasteries;

  this.updateSpellsInUI;

  this._caracteristicsService.level = 1;
  this.currentProficiency = 2;
  this._caracteristicsService.proficiency = 2;
  this.updateClass();
  this.updateLevel();

  this.selectedRace = 0;
  this._racesService.selectedRace = this.races[this.selectedRace].name;
  this._racesService.selectedRaceSpeed = this.races[this.selectedRace].speed;
  this._racesService.selectedRaceFeatures =
    this.races[this.selectedRace].raceFeatures;
  this._racesService.selectedRaceCaracteristics =
    this.races[this.selectedRace].caracteristics;
  this.raceSkillMasteries = this.races[this.selectedRace].raceSkillMasteries;
  this.raceLanguages = this.races[this.selectedRace].languages;

  this.selectedBackground = 0;
    this._backgroundsService.selectedBackground =
      this.backgrounds[this.selectedBackground].name;
    this.backgroundSkill =
      this.backgrounds[this.selectedBackground].backgroundSkill;
    this.backgroundSkillMasteries =
      this.backgrounds[this.selectedBackground].backgroundSkillMasteries;
    this.backgroundLanguages =
      this.backgrounds[this.selectedBackground].backgroundLanguages;
    this.backgroundOrigin =
      this.backgrounds[this.selectedBackground].backgroundOrigin;
    this.backgroundToolMasteries =
      this.backgrounds[this.selectedBackground].backgroundTools;
}

randomize() {
this.randomizeClass();
this.randomizeRace();
this.randomizeBackground();

}

randomizeClass() {
  this.selectedClass = Math.floor(Math.random() * 11) + 1;

  this._classesService.selectedClassName =
    this.classes[this.selectedClass].name;
  this._classesService.selectedClassBasePv =
    this.classes[this.selectedClass].pvBase;
  this._classesService.selectedClassBonusSkill1 =
    this.classes[this.selectedClass].bonusSkill1;
  this._classesService.selectedClassBonusSkill2 =
    this.classes[this.selectedClass].bonusSkill2;
  this._classesService.selectedClassBonusSkill3 =
    this.classes[this.selectedClass].bonusSkill3;
  this._classesService.selectedClassType =
    this.classes[this.selectedClass].classType;

  this._classesService.selectedCantripGroup =
    this.classes[this.selectedClass].cantripGroup;

  this._classesService.selectedClass = this.classes[this.selectedClass].id;

  this.classWeaponMasteries =
    this.classes[this.selectedClass].classWeaponMasteries;
  this.classToolMasteries =
    this.classes[this.selectedClass].classToolMasteries;
  this.classSkillMasteries =
    this.classes[this.selectedClass].classSkillMasteries;

  this.updateSpellsInUI;

  this._caracteristicsService.level = 1;
  this.currentProficiency = 2;
  this._caracteristicsService.proficiency = 2;
  this.updateClass();
  this.updateLevel();
}

randomizeRace() {
  this.selectedRace = Math.floor(Math.random() * 13) + 1;
  this._racesService.selectedRace = this.races[this.selectedRace].name;
  this._racesService.selectedRaceSpeed = this.races[this.selectedRace].speed;
  this._racesService.selectedRaceFeatures =
    this.races[this.selectedRace].raceFeatures;
  this._racesService.selectedRaceCaracteristics =
    this.races[this.selectedRace].caracteristics;
  this.raceSkillMasteries = this.races[this.selectedRace].raceSkillMasteries;
  this.raceLanguages = this.races[this.selectedRace].languages;
}

randomizeBackground() {
  this.selectedBackground = Math.floor(Math.random() * 62) + 1;
    this._backgroundsService.selectedBackground =
      this.backgrounds[this.selectedBackground].name;
    this.backgroundSkill =
      this.backgrounds[this.selectedBackground].backgroundSkill;
    this.backgroundSkillMasteries =
      this.backgrounds[this.selectedBackground].backgroundSkillMasteries;
    this.backgroundLanguages =
      this.backgrounds[this.selectedBackground].backgroundLanguages;
    this.backgroundOrigin =
      this.backgrounds[this.selectedBackground].backgroundOrigin;
    this.backgroundToolMasteries =
      this.backgrounds[this.selectedBackground].backgroundTools;

}
  // public randomize(): void {
   

    

  // }

  updateRace(e: any) {
    this._racesService.selectedRace = this.races[this.selectedRace].name;
    this._racesService.selectedRaceSpeed = this.races[this.selectedRace].speed;
    this._racesService.selectedRaceFeatures =
      this.races[this.selectedRace].raceFeatures;
    this._racesService.selectedRaceCaracteristics =
      this.races[this.selectedRace].caracteristics;
    this.raceSkillMasteries = this.races[this.selectedRace].raceSkillMasteries;
    this.raceLanguages = this.races[this.selectedRace].languages;
  }

  updateBackground(e: any) {
    this._backgroundsService.selectedBackground =
      this.backgrounds[this.selectedBackground].name;
    this.backgroundSkill =
      this.backgrounds[this.selectedBackground].backgroundSkill;
    this.backgroundSkillMasteries =
      this.backgrounds[this.selectedBackground].backgroundSkillMasteries;
    this.backgroundLanguages =
      this.backgrounds[this.selectedBackground].backgroundLanguages;
    this.backgroundOrigin =
      this.backgrounds[this.selectedBackground].backgroundOrigin;
    this.backgroundToolMasteries =
      this.backgrounds[this.selectedBackground].backgroundTools;
  }

  constructor(
    // private _caracteristicsComponent : SpellsComponent,

    private _racesService: RacesService,
    private _classesService: ClassesService,
    private _armorsService: ArmorsService,
    private _caracteristicsService: CaracteristicsService,
    private _spellsService: SpellsService,
    private _classFeaturesService: ClassFeaturesService,
    private _backgroundsService: BackgroundsService
  ) {
    // this.level = 1;

    this.pv = 8;

    this.level = 1;
    this.classPv = 2;
    this.levelFeatures = '';
    // this.armorClass = this.selectedArmor;

    // this.currentProficiency = 5;
  }

  levelUp = () => {
    this._caracteristicsService.level++;
    pvRoll =
      Math.floor(Math.random() * this._classesService.selectedClassBasePv) + 1;
    this._caracteristicsService.currentPV =
      this._caracteristicsService.currentPV + pvRoll;
    // console.log(this.selectedPlayerClass);
    // this.updateClass();
    // this.updateArmorClass();
    // this._caracteristicsService.currentPV = pv;

    this.updateProficiency();
    this.currentProficiency = this._caracteristicsService.proficiency;
    this.updateLevel();
  };

  levelDown = () => {
    this._caracteristicsService.level--;
    this._caracteristicsService.currentPV =
      this._caracteristicsService.currentPV - pvRoll;
    // this.updateClass();

    if (this._caracteristicsService.level === 1) {
      this._caracteristicsService.currentPV =
        this._classesService.selectedClassBasePv;
    }
    // this._caracteristicsService.currentPV = pv;
    this.updateProficiency();
    this.currentProficiency = this._caracteristicsService.proficiency;
    this.updateLevel();
  };

  updateProficiency = () => {
    if (this._caracteristicsService.level > 16) {
      this._caracteristicsService.proficiency = 6;
    } else if (this._caracteristicsService.level > 12) {
      this._caracteristicsService.proficiency = 5;
    } else if (this._caracteristicsService.level > 8) {
      this._caracteristicsService.proficiency = 4;
    } else if (this._caracteristicsService.level > 4) {
      this._caracteristicsService.proficiency = 3;
    } else if (this._caracteristicsService.level > 0) {
      this._caracteristicsService.proficiency = 2;
    }
  };

  updatedPV = () => {
    if (this._caracteristicsService.level === 1) {
      this._caracteristicsService.currentPV =
        this._classesService.selectedClassBasePv;
    }
    return (
      this._caracteristicsService.currentPV +
      this._caracteristicsService.constitutionModifier *
        this._caracteristicsService.level
    );
    // return pv + this._caracteristicsService.constitutionModifier * this._caracteristicsService.level;
  };

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max + 1);
  }

  minPV = () => {
    return (
      this._classesService.selectedClassBasePv +
      this._caracteristicsService.constitutionModifier *
        this._caracteristicsService.level +
      (this._caracteristicsService.level - 1) * 1
    );
  };

  maxPV = () => {
    return (
      this._classesService.selectedClassBasePv +
      this._caracteristicsService.constitutionModifier *
        this._caracteristicsService.level +
      (this._caracteristicsService.level - 1) *
        this._classesService.selectedClassBasePv
    );
  };
  pvFixe = () => {
    return (
      this._classesService.selectedClassBasePv +
      this._caracteristicsService.constitutionModifier *
        this._caracteristicsService.level +
      (this._caracteristicsService.level - 1) *
        (this._classesService.selectedClassBasePv / 2 + 1)
    );
  };

  currentSpeed = () => {
    return this._racesService.selectedRaceSpeed;
  };

  updatedLevel = () => {
    return this._caracteristicsService.level;
  };

  updateArmorClass = () => {
    let dexterityModifier = this._caracteristicsService.dexterityModifier;
    switch (this._armorsService.armorType) {
      case 'Aucune':
        if (this._classesService.selectedClassName == 'Barbare') {
          this.updatedArmorClass =
            10 +
            dexterityModifier +
            this._caracteristicsService.constitutionModifier +
            this._armorsService.selectedShieldValue;
        } else if (
          this._classesService.selectedClassName == 'Moine' &&
          this._armorsService.selectedShieldName == 'Aucun bouclier'
        ) {
          this.updatedArmorClass =
            10 + dexterityModifier + this._caracteristicsService.wisdomModifier;
        } else
          this.updatedArmorClass =
            10 + dexterityModifier + this._armorsService.selectedShieldValue;

        break;
      case 'Armure légère':
        this.updatedArmorClass =
          this._armorsService.selectedArmorValue +
          dexterityModifier +
          this._armorsService.selectedShieldValue;
        break;
      case 'Armure intermédiaire':
        if (dexterityModifier > 2) {
          this.updatedArmorClass =
            this._armorsService.selectedArmorValue +
            2 +
            this._armorsService.selectedShieldValue;
        } else {
          this.updatedArmorClass =
            this._armorsService.selectedArmorValue +
            dexterityModifier +
            this._armorsService.selectedShieldValue;
        }
        break;
      case 'Armure lourde':
        this.updatedArmorClass =
          this._armorsService.selectedArmorValue +
          this._armorsService.selectedShieldValue;
        break;
    }
    this._armorsService.selectedArmor = this.updatedArmorClass;
    // this._armorsService.selectedArmor = actualArmorClass;
    return this._armorsService.selectedArmor;
  };

  armorClass = () => {
    return this._armorsService.selectedArmorValue;
  };

  updateInitiative = () => {
    return this._caracteristicsService.initiativeBonus;
  };

  updatedLevelFeatures = function () {
    return levelFeatures;
  };

  updatedProficiency = function () {
    return currentProficiency;
  };

  // updateClassWeaponMasteries = function () {
  //   return this.classWeaponMasteries;
  // };

  // updateClassToolMasteries = function () {
  //   return currentProficiency;
  // };

  // updateClassSkillMasteries = function () {
  //   return currentProficiency;
  // };

  onFileChanged(event: any) {
    const file = event.target.files[0];
  }

  picture = true;
  //url; //Angular 8
  url: any; //Angular 11, for stricter type
  msg = '';

  //selectFile(event) { //Angular 8
  selectFile(event: any) {
    //Angular 11, for stricter type
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }
    this.picture = false;
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }
    // this.url = "https://i.pinimg.com/474x/72/33/9d/72339d38def6cf7d7210b43787a781ed.jpg";
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }

  // public source: string;
  // changeImage(path: string) {
  //     this.url = path;
  // }

  // showPreview(event:any) {

  //   if (event.target.files.length > 0) {
  //     let src = URL.createObjectURL(event.target.files[0]);
  //     let preview = document.getElementById("file-ip-" + "-preview");
  //   }

  //     let src = URL.createObjectURL(event.target.files[0]);
  //     let preview = document.getElementById("file-ip-");
  //     var reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //     this.url = reader.result;

  // }

  // updateMasteries = () => {
  // this.masteries = this._classesService.masteries.filter(function(mastery){
  //     return mastery.isMastered === true;
  //   }).map (function(mastery){
  //     return mastery.text;
  //   })

  // };

  updateClass = () => {
    switch (this._classesService.selectedClassName) {
      case 'Barbare':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = true;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = false;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = true;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = true;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = false;

        break;
      case 'Barde':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        // this._classesService.masteries[0].isMastered = true;
        // this._classesService.masteries[1].isMastered = false;
        // this._classesService.masteries[2].isMastered = false;
        // this._classesService.masteries[3].isMastered = true;
        // this._classesService.masteries[4].isMastered = false;
        // this._classesService.masteries[5].isMastered = false;
        // this.classWeaponMasteries = "Arbalète de poing, épée longue, rapière, épée courte";
        // this.classToolMasteries = "Trois instruments de musique de votre choix";
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = true;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = true;
        break;
      case 'Clerc':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = false;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = true;
        this._caracteristicsService.charismaCheck = true;
        break;
      case 'Druide':
        this.commonWeaponsMastery = false;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = false;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = true;
        this._caracteristicsService.wisdomCheck = true;
        this._caracteristicsService.charismaCheck = false;
        break;
      case 'Ensorceleur':
        this.commonWeaponsMastery = false;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = false;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = true;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = true;
        break;
      case 'Guerrier':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = true;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = true;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = true;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = true;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = false;
        break;
      case 'Magicien':
        this.commonWeaponsMastery = false;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = false;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = true;
        this._caracteristicsService.wisdomCheck = true;
        this._caracteristicsService.charismaCheck = false;
        break;
      case 'Moine':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = false;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        this._caracteristicsService.forceCheck = true;
        this._caracteristicsService.dexterityCheck = true;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = false;
        break;
      case 'Paladin':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = true;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = true;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = true;
        this._caracteristicsService.charismaCheck = true;
        break;
      case 'Rôdeur':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = true;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = false;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = true;
        this._caracteristicsService.dexterityCheck = true;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = false;
        break;
      case 'Roublard':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = true;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = true;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = false;
        break;
      case 'Sorcier':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = true;
        this._caracteristicsService.charismaCheck = true;
        break;
    }
  };

  updateClassFeatures = () => {
    return this._classFeaturesService.classFeature;
  };

  updateBonusSkill = () => {
    return this._classFeaturesService.bonusSkill;
  };

  public classFeaturesList = [] as any[];
  // this._classFeaturesService.classFeature = this.classFeaturesList[this.level-1];

  updateLevel = () => {
    const ul = document.querySelector('#featureList') as HTMLElement;
    const ul2 = document.querySelector('#featureList2') as HTMLElement;
    let affichage = '<ul>';
    let affichage2 = '<ul>';
    // this._classFeaturesService.bonusSkill = this.classFeatures[this._classesService.selectedId].bonusSkillLevel[this.level];

    switch (this._caracteristicsService.level) {
      case 1:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel1;
        affichage = `<ul> <li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        // affichage = ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel1} ` + "\n";
        break;
      case 2:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel2;
        // affichage += ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel1} ` + "\n";
        // affichage2 += ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel2} ` + "\n";

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        break;
      case 3:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel3;
        // affichage += ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel1} ` + "\n";
        // affichage2 += ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel2} ` + "\n";
        // affichage += ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel3} ` + "\n";
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        break;
      case 4:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel4;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        break;
      case 5:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel5;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        break;
      case 6:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel6;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        break;
      case 7:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel7;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        break;
      case 8:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel8;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        break;
      case 9:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel9;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        break;
      case 10:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel10;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        break;
      case 11:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel11;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel11
        } </li> `;
        break;
      case 12:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel12;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel11
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel12
        } </li> `;
        break;
      case 13:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel13;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel11
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel12
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel13
        } </li> `;
        break;
      case 14:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel14;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel11
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel12
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel13
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel14
        } </li> `;
        break;
      case 15:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel15;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel11
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel12
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel13
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel14
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel15
        } </li> `;
        break;
      case 16:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel16;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel11
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel12
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel13
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel14
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel15
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel16
        } </li> `;
        break;
      case 17:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel17;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel11
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel12
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel13
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel14
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel15
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel16
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel17
        } </li> `;
        break;
      case 18:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel18;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel11
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel12
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel13
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel14
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel15
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel16
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel17
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel18
        } </li> `;
        break;
      case 19:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel19;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel11
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel12
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel13
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel14
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel15
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel16
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel17
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel18
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel19
        } </li> `;
        break;
      case 20:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel20;

        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel1
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel2
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel3
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel4
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel5
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel6
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel7
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel8
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel9
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel10
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel11
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel12
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel13
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel14
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel15
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel16
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel17
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel18
        } </li> `;
        affichage += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel19
        } </li> `;
        affichage2 += `<li> ${
          this.classFeatures[this._classesService.selectedClass]
            .classFeatureLevel20
        } </li> `;
        break;
    }
    affichage += '</ul>';
    affichage2 += '</ul>';
    ul.innerHTML = affichage;
    ul2.innerHTML = affichage2;
  };

  public races = [] as any[];
  public armors = [] as any[];
  public spells = [] as any[];
  public classFeatures = [] as any[];
  public backgrounds = [] as any[];

  ngOnInit(): void {
    this._racesService.getRaces().subscribe((data) => (this.races = data));
    this._spellsService.getSpells().subscribe((data) => (this.spells = data));
    this._classesService
      .getClasses()
      .subscribe((data) => (this.classes = data));
    this._armorsService.getArmors().subscribe((data) => (this.armors = data));
    this._classFeaturesService
      .getClassFeatures()
      .subscribe((data) => (this.classFeatures = data));
    this._backgroundsService
      .getBackgrounds()
      .subscribe((data) => (this.backgrounds = data));
    this.updateClass();
    this.updatedArmorClass = 9;
    this._classesService.selectedClassType = 'Fighter';
    this._classesService.selectedCantripGroup = 'A';
    // this._classesService.selectedClassName = 'Barbare';
    // this.selectedRace = 0;
    // this.selectedClass = 0;
    // this.selectedBackground = 0;
    // this._backgroundsService.selectedBackground = 0;
    // this.updateBackground();
    this._spellsService.level1SpellsKnown = '0';
    this.updateSpellsKnown;
    this.reset();
    // this.selectedRace = 0
  }

  ngAfterViewInit(): void {
    this.updateSpellsKnown = this.child.updateSpellsKnown();
    // this.updateSpellsKnown = this.child.updateSpellsKnown()
    this.updateSpellLevel = this.child.updateSpellLevel();
    // this.calculatePreparedSpells = this.child.calculatePreparedSpells();
    // this.updatedSpellsSlots = this.child.updatedSpellsSlots();
    this.updateSpellsInUI = this.child.updateSpellsInUI();
  }
}

let pvRoll = 1;
let pv = 1;
let level = 1;
let basePV = 1;
let currentProficiency = 2;
let currentPv = 5;
let levelFeatures = '';
let updatedArmorClass = 1;
