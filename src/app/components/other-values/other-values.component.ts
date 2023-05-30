import { Component, OnInit } from '@angular/core';
import { CaracteristicsService } from 'src/app/services/caracteristics.service';
import { ArmorsService } from 'src/app/services/armors.service';
import { RacesService } from 'src/app/services/races.service';
import { ClassesService } from 'src/app/services/classes.service';
import { ClassFeaturesService } from 'src/app/services/class-features.service';

@Component({
  selector: 'app-other-values',
  templateUrl: './other-values.component.html',
  styleUrls: ['./other-values.component.css'],
})
export class OtherValuesComponent implements OnInit {
  public proficiency = 2;
  public updatedArmorClass = 7;
  public savingThrowMod = 0;
  public initiativeSubBonus = 0;
  public subClass = "";
  public malusArmureLourde = 0;
  public warforgedACBonus = 0;
  public speedBonus = 0;

  constructor(
    private _caracteristicsService: CaracteristicsService,
    private _armorsService: ArmorsService,
    private _racesService: RacesService,
    private _classesService: ClassesService,
    private _classFeaturesService: ClassFeaturesService
  ) {}

  proficiencyInUI = () => {
    return this._caracteristicsService.proficiency;
  };

  speedInUI = () => {
    if (this._classesService.selectedClassName == 'Barbare' && this._caracteristicsService.level>2 && this._armorsService.armorType != 'Armure lourde') {
      this.speedBonus = 3;
      return this._racesService.selectedRaceSpeed + this.speedBonus;
    } else if (this._armorsService.armorType == 'Armure lourde' && (this._caracteristicsService.force < this._armorsService.selectedMinStrength) 
    && (this._racesService.selectedRaceName == "Nain des collines" || this._racesService.selectedRaceName == "Nain des montagnes" )) {
      this.speedBonus = 0;
      return this._racesService.selectedRaceSpeed;
    }  else if (this._armorsService.armorType == 'Armure lourde' && (this._caracteristicsService.force < this._armorsService.selectedMinStrength) ) {
      this.speedBonus = -3;
      return this._racesService.selectedRaceSpeed -3;
    }
    this.speedBonus = 0;
    return this._racesService.selectedRaceSpeed + this.speedBonus;
  };

  flyingSpeedInUI = () => {
 if (this._racesService.selectedRaceName == "Aarakocra" || this._racesService.selectedRaceName == "Fadette" || this._racesService.selectedRaceName == "Hiboulin") {
    return this._racesService.selectedRaceSpeed + this.speedBonus;
    }
    return 0;
  };

  swimmingSpeedInUI = () => {
    if (this._classFeaturesService.selectedArchetypeName == "Insondable") {
        return 12;
        } else if (this._racesService.selectedRaceName == "Génasi de l'eau" || this._racesService.selectedRaceName == "Elfe des mers" || this._racesService.selectedRaceName == "Triton" ) {
          return this._racesService.selectedRaceSpeed + this.speedBonus;
          }
    return 0;
  };

  updateInitiative = () => {

  this.subClass = this._classFeaturesService.selectedArchetypeName;
  if ( (this.subClass == 'Chronurgie' || this.subClass == 'Magie de guerre' )&& this._caracteristicsService.level>1) {
   this.initiativeSubBonus = this._caracteristicsService.intelligenceModifier;
  }  else this.initiativeSubBonus = 0;


    if (this._racesService.selectedRaceName == "Conil") {
      return this._caracteristicsService.initiativeBonus + this._caracteristicsService.proficiency + this.initiativeSubBonus ;
    } else return this._caracteristicsService.initiativeBonus + this.initiativeSubBonus;
  };

  initiativeSubClassBonus() {
    this.subClass = this._classFeaturesService.selectedArchetypeName;
    if ( this.subClass == 'Chronurgie' ) {
     this.initiativeSubBonus = this._caracteristicsService.intelligenceModifier;
    } else if (this.subClass == 'Magie de guerre'  ) {
      this.initiativeSubBonus = this._caracteristicsService.intelligenceModifier;
    } else this.initiativeSubBonus = 0;
  }


  updatePassivePerception = () => {
    return this._caracteristicsService.passivePerception;
  };

  updateSavingThrow = () => {
  if (
    this._classesService.selectedClassName == 'Barde' ||
    this._classesService.selectedClassName == 'Ensorceleur' ||
    this._classesService.selectedClassName == 'Paladin' ||
    this._classesService.selectedClassName == 'Sorcier'
  ) {
    this.savingThrowMod =  8 + this._caracteristicsService.proficiency + this._caracteristicsService.charismaModifier;

  } else if (this._classesService.selectedClassName == 'Magicien') {
    this.savingThrowMod =  8 + this._caracteristicsService.proficiency + this._caracteristicsService.intelligenceModifier;

  } else if (    this._classesService.selectedClassName == 'Clerc' ||
    this._classesService.selectedClassName == 'Druide' ||
    this._classesService.selectedClassName == 'Rôdeur'||
    this._classesService.selectedClassName == 'Moine') {
      this.savingThrowMod =  8 + this._caracteristicsService.proficiency + this._caracteristicsService.wisdomModifier;
  } else  {
    this.savingThrowMod =  0;
  }
  return this.savingThrowMod
  };

  updateArmorClass = () => {
    this.warforgedArmorClass();
    let dexterityModifier = this._caracteristicsService.dexterityModifier;
    let barbareAC = 0;
    let lezardAC = 0;
    let tortleAC = 0;
    let moineAC = 0;
    switch (this._armorsService.armorType) {
      case 'Aucune':
        if (this._classesService.selectedClassName == 'Barbare' && this._racesService.selectedRaceName == 'Homme-Lézard') {

          barbareAC = 10 + dexterityModifier + this._caracteristicsService.constitutionModifier + this._armorsService.selectedShieldValue;
          lezardAC = 13 + dexterityModifier + this._armorsService.selectedShieldValue;
            if (barbareAC > lezardAC) {
              this.updatedArmorClass = barbareAC;
            } else this.updatedArmorClass = lezardAC;

        } else if (this._classesService.selectedClassName == 'Barbare' && this._racesService.selectedRaceName == 'Tortle') {

          barbareAC = 10 + dexterityModifier + this._caracteristicsService.constitutionModifier + this._armorsService.selectedShieldValue;
          tortleAC = 17 + this._armorsService.selectedShieldValue;
            if (barbareAC > tortleAC) {
              this.updatedArmorClass = barbareAC;
            } else this.updatedArmorClass = tortleAC;

        } else if (this._classesService.selectedClassName == 'Moine' && this._racesService.selectedRaceName == 'Homme-Lézard' &&  this._armorsService.selectedShieldName == 'Aucun bouclier') {

          moineAC = 10 + dexterityModifier + this._caracteristicsService.wisdomModifier;
          lezardAC = 13 + dexterityModifier + this._armorsService.selectedShieldValue;
            if (moineAC > lezardAC) {
              this.updatedArmorClass = moineAC;
            } else this.updatedArmorClass = lezardAC;

        } else if (this._classesService.selectedClassName == 'Moine' && this._racesService.selectedRaceName == 'Tortle' &&  this._armorsService.selectedShieldName == 'Aucun bouclier') {

          moineAC = 10 + dexterityModifier + this._caracteristicsService.wisdomModifier;
          tortleAC = 17 + this._armorsService.selectedShieldValue;
            if (moineAC > tortleAC) {
              this.updatedArmorClass = moineAC;
            } else this.updatedArmorClass = tortleAC;

        } else if (this._classesService.selectedClassName == 'Moine' && this._racesService.selectedRaceName == 'Homme-Lézard') {

          moineAC = 10 + dexterityModifier + this._armorsService.selectedShieldValue;
          lezardAC = 13 + dexterityModifier + this._armorsService.selectedShieldValue;
            if (moineAC > lezardAC) {
              this.updatedArmorClass = moineAC;
            } else this.updatedArmorClass = lezardAC;

        } else if (this._classesService.selectedClassName == 'Moine' && this._racesService.selectedRaceName == 'Tortle') {

          moineAC = 10 + dexterityModifier + this._armorsService.selectedShieldValue;
          tortleAC = 17 + this._armorsService.selectedShieldValue;
            if (moineAC > tortleAC) {
              this.updatedArmorClass = moineAC;
            } else this.updatedArmorClass = tortleAC;

        } else if (this._classFeaturesService.selectedArchetypeName == 'Lignée draconique' && this._racesService.selectedRaceName == 'Tortle') {
          this.updatedArmorClass = 13 + dexterityModifier + this._armorsService.selectedShieldValue;

         }  else if (this._classesService.selectedClassName == 'Barbare' ) {
          this.updatedArmorClass = 10 + dexterityModifier + this._caracteristicsService.constitutionModifier + this._armorsService.selectedShieldValue + this.warforgedACBonus;
          
         } else if ( this._classesService.selectedClassName == 'Moine' &&  this._armorsService.selectedShieldName == 'Aucun bouclier') {
          this.updatedArmorClass = 10 + dexterityModifier + this._caracteristicsService.wisdomModifier + this.warforgedACBonus;

        } else if (this._classFeaturesService.selectedArchetypeName == 'Lignée draconique' || this._racesService.selectedRaceName == 'Homme-Lézard') {
          this.updatedArmorClass = 13 + dexterityModifier + this._armorsService.selectedShieldValue + this.warforgedACBonus;

        } else if (this._racesService.selectedRaceName == 'Tortle') {
          this.updatedArmorClass = 17 + this._armorsService.selectedShieldValue;

        } else
          this.updatedArmorClass =
            10 + dexterityModifier + this._armorsService.selectedShieldValue + this.warforgedACBonus;
        break;
      case 'Armure légère':
        this.updatedArmorClass =
          this._armorsService.selectedArmorValue +
          dexterityModifier +
          this._armorsService.selectedShieldValue +
          this._armorsService.armorBonus +
          this._armorsService.shieldBonus + this.warforgedACBonus;
        break;
      case 'Armure intermédiaire':
        if (dexterityModifier > 2) {
          this.updatedArmorClass =
            this._armorsService.selectedArmorValue +
            2 +
            this._armorsService.selectedShieldValue +
            this._armorsService.armorBonus +
            this._armorsService.shieldBonus + this.warforgedACBonus;
        } else {
          this.updatedArmorClass =
            this._armorsService.selectedArmorValue +
            dexterityModifier +
            this._armorsService.selectedShieldValue +
            this._armorsService.armorBonus +
            this._armorsService.shieldBonus + this.warforgedACBonus;
        }
        break;
      case 'Armure lourde':
        this.updatedArmorClass = this._armorsService.selectedArmorValue + this._armorsService.selectedShieldValue + this._armorsService.armorBonus + this._armorsService.shieldBonus + this.warforgedACBonus;
        break;
    }
    this._armorsService.selectedArmor = this.updatedArmorClass;
    return this._armorsService.selectedArmor;
  };

  armorClass = () => {
    return this._armorsService.selectedArmorValue;
  };

  warforgedArmorClass = () => {
    if (this._racesService.selectedRaceName == 'Forgelier') {
this.warforgedACBonus = 1;
    } else this.warforgedACBonus = 0;
  }
  updatedPV = () => {
    if (this._caracteristicsService.level === 1) {
      this._caracteristicsService.currentPV =
        this._classesService.selectedClassBasePv;
    }
    return (
      this._caracteristicsService.currentPV + 
      this._caracteristicsService.constitutionModifier *
        this._caracteristicsService.level + (this._caracteristicsService.dwarfPV*this._caracteristicsService.level)
    );
  };

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max + 1);
  }

  minPV = () => {
    return (
      this._classesService.selectedClassBasePv + (this._caracteristicsService.dwarfPV*this._caracteristicsService.level) + this._caracteristicsService.constitutionModifier * this._caracteristicsService.level +
      (this._caracteristicsService.level - 1) * 1
    );
  };

  maxPV = () => {
    return (
      this._classesService.selectedClassBasePv  + this._caracteristicsService.constitutionModifier * this._caracteristicsService.level +
       (this._caracteristicsService.level - 1) * this._classesService.selectedClassBasePv + (this._caracteristicsService.dwarfPV*this._caracteristicsService.level)
    );
  };
  pvFixe = () => {
    return (
      this._classesService.selectedClassBasePv + (this._caracteristicsService.dwarfPV*this._caracteristicsService.level) + this._caracteristicsService.constitutionModifier * this._caracteristicsService.level +
      (this._caracteristicsService.level - 1) * (this._classesService.selectedClassBasePv / 2 + 1)
    );
  };

  ngOnInit(): void {}
}
