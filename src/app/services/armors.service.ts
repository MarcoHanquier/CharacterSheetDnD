import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ArmorComponent } from '../components/armor/armor.component';
import { JoueurComponent } from '../components/joueur/joueur.component';
import { Iarmors } from './armors';

@Injectable({
  providedIn: 'root'
})
export class ArmorsService {
  private _url:string = "/assets/data/armors.json";

  public selectedArmor = 10;
  public selectedArmorValue = 10;
  public armorType = "Aucune";
  public selectedShield = 0;
public selectedMinStrength = 0;
public selectedShieldValue = 0;
public armorBonus = 0;
public shieldBonus = 0;
public selectedShieldName = "Aucun bouclier";
  
  onChange(ngValue:number) {
    this.selectedArmor = ngValue;
    return this.selectedArmor;
    console.log(ngValue);
}

  constructor(private http:HttpClient) {
   }

  getArmors(): Observable<Iarmors[]> {
    return this.http.get<Iarmors[]>(this._url);
  }
}
