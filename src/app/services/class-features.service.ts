import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { IclassFeatures } from './class-features';


@Injectable({
  providedIn: 'root'
})
export class ClassFeaturesService {
  private _url:string = "/assets/data/classFeatures.json";

  public classFeature = "";
  public bonusSkill = "Rages : 2, Dégâts de rage : +2";

    public classFeatureLevel1 = "";
    public classFeatureLevel2 = "";
    public classFeatureLevel3 = "";
    public classFeatureLevel4 = "";
    public classFeatureLevel5 = "";
    public classFeatureLevel6 = "";
    public classFeatureLevel7 = "";
    public classFeatureLevel8 = "";
    public classFeatureLevel9 = "";
    public classFeatureLevel10 = "";
    public classFeatureLevel11 = "";
    public classFeatureLevel12 = "";
    public classFeatureLevel13 = "";
    public classFeatureLevel14 = "";
    public classFeatureLevel15 = "";
    public classFeatureLevel16 = "";
    public classFeatureLevel17 = "";
    public classFeatureLevel18 = "";
    public classFeatureLevel19 = "";
    public classFeatureLevel20 = "";
 
    public bonusSkillLevel1 = "";
    public bonusSkillLevel2 = "";
    public bonusSkillLevel3 = "";
    public bonusSkillLevel4 = "";
    public bonusSkillLevel5 = "";
    public bonusSkillLevel6 = "";
    public bonusSkillLevel7 = "";
    public bonusSkillLevel8 = "";
    public bonusSkillLevel9 = "";
    public bonusSkillLevel10 = "";
    public bonusSkillLevel11 = "";
    public bonusSkillLevel12 = "";
    public bonusSkillLevel13 = "";
    public bonusSkillLevel14 = "";
    public bonusSkillLevel15 = "";
    public bonusSkillLevel16 = "";
    public bonusSkillLevel17 = "";
    public bonusSkillLevel18 = "";
    public bonusSkillLevel19 = "";
    public bonusSkillLevel20 = "";

  constructor(private http:HttpClient) { }

getClassFeatures(): Observable<IclassFeatures[]> {
  return this.http.get<IclassFeatures[]>(this._url);
}

}
