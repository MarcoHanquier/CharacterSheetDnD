import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iclasses } from './classes';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  private _url: string = '/assets/data/detailsclasses.json';

  public selectedClassName = '';
  public selectedClassType = '';
  public selectedCantripGroup = '';
  public selectedClassBasePv = 12;
  public selectedClass = 0;
  public selectedClassBonusSkill1 = '';
  public selectedClassBonusSkill2 = '';
  public selectedClassBonusSkill3 = '';

  public commonWeaponsMastery = false;
  public warWeaponsMastery = false;
  public lightArmorMastery = false;
  public mediumArmorMastery = false;
  public heavyArmorMastery = false;
  public shieldMastery = false;

  public classWeaponMasteries = '';
  public classToolMasteries = '';
  public classSkillMasteries = '';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<Iclasses[]> {
    return this.http.get<Iclasses[]>(this._url);
  }
}
