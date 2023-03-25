import { Component, OnInit } from '@angular/core';
import { CaracteristicsService } from 'src/app/services/caracteristics.service';
import { ArmorsService } from 'src/app/services/armors.service';
import { RacesService } from 'src/app/services/races.service';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-other-values',
  templateUrl: './other-values.component.html',
  styleUrls: ['./other-values.component.css'],
})
export class OtherValuesComponent implements OnInit {
  public proficiency = 2;
  public updatedArmorClass = 7;

  constructor(
    private _caracteristicsService: CaracteristicsService,
    private _armorsService: ArmorsService,
    private _racesService: RacesService,
    private _classesService: ClassesService
  ) {}

  proficiencyInUI = () => {
    return this._caracteristicsService.proficiency;
  };

  speedInUI = () => {
    return this._racesService.selectedRaceSpeed;
  };

  updateInitiative = () => {
    return this._caracteristicsService.initiativeBonus;
  };

  updatePassivePerception = () => {
    return this._caracteristicsService.passivePerception;
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
          this._armorsService.selectedShieldValue +
          this._armorsService.armorBonus +
          this._armorsService.shieldBonus;
        break;
      case 'Armure intermédiaire':
        if (dexterityModifier > 2) {
          this.updatedArmorClass =
            this._armorsService.selectedArmorValue +
            2 +
            this._armorsService.selectedShieldValue +
            this._armorsService.armorBonus +
            this._armorsService.shieldBonus;
        } else {
          this.updatedArmorClass =
            this._armorsService.selectedArmorValue +
            dexterityModifier +
            this._armorsService.selectedShieldValue +
            this._armorsService.armorBonus +
            this._armorsService.shieldBonus;
        }
        break;
      case 'Armure lourde':
        this.updatedArmorClass =
          this._armorsService.selectedArmorValue +
          this._armorsService.selectedShieldValue +
          this._armorsService.armorBonus +
          this._armorsService.shieldBonus;
        break;
    }
    this._armorsService.selectedArmor = this.updatedArmorClass;
    return this._armorsService.selectedArmor;
  };

  armorClass = () => {
    return this._armorsService.selectedArmorValue;
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

  ngOnInit(): void {}
}
