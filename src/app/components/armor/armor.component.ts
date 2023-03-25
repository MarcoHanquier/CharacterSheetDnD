import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ArmorsService } from 'src/app/services/armors.service';
import { CaracteristicsService } from 'src/app/services/caracteristics.service';
import { ShieldsService } from 'src/app/services/shields.service';
import { JoueurComponent } from '../joueur/joueur.component';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.css']
})
export class ArmorComponent implements OnInit {
  public armors = [] as any[];
  public shields = [] as any[];

  public selectedArmor = 10;
  public deviceValue = 1;
  public updatedArmorClass = 7;
  public selectedShield = 0;
  public selectedShieldName = "Aucun bouclier";
  public selectedArmorType = '';
  public selectedMinStrength = 0;
  public currentStrength = 0;
public testValue = 0;
public test2 = 0;

  

  onSelected(ngValue:number): void {
    this.selectedArmor = ngValue;
  }

  onChange(ngValue:number) {
    this.selectedArmor = ngValue;
}

  updateAClass = (ngValue:number) => {
    updatedArmorClass = this.selectedArmor;
    return updatedArmorClass;
    }

updateRequiredStrength = () => {
  return this._armorsService.selectedMinStrength
}

currentStrengths = () => {
  return this._caracteristicsService.force
}

addArmorBonus = () => {
  this._armorsService.armorBonus++
}

removeArmorBonus = () => {
  this._armorsService.armorBonus--
}

addShieldBonus = () => {
  this._armorsService.shieldBonus++
}

removeShieldBonus = () => {
  this._armorsService.shieldBonus--
}

updateArmorBonus = () => {
  return this._armorsService.armorBonus
}

updateShieldBonus = () => {
  return this._armorsService.shieldBonus
}


update(e:any) {
  
    this._armorsService.selectedShieldName = this.shields[this.selectedShield].name;
    this._armorsService.selectedShieldValue = this.shields[this.selectedShield].armorValue;

    this._armorsService.selectedMinStrength = this.armors[this.selectedArmor].minStrength;


    this._armorsService.selectedArmorValue = this.armors[this.selectedArmor].armorValue;
    this._armorsService.armorType = this.armors[this.selectedArmor].armorType;
    this.currentStrength = this._caracteristicsService.force;
    this.selectedMinStrength = this.armors[this.selectedArmor].minStrength;
}


  constructor(private _armorsService: ArmorsService, private _shieldsService: ShieldsService, private _caracteristicsService: CaracteristicsService) { 
  }

  ngOnInit(): void {
    this._armorsService.getArmors().subscribe(data => (this.armors= data));
    this._shieldsService.getShields().subscribe(data => (this.shields= data));

    this.selectedArmor = 0;
    this.selectedShield = 0;
  }

}


let updatedArmorClass = 1;