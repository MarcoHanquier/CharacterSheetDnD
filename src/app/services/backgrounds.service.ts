import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Ibackgrounds } from './backgrounds';

@Injectable({
  providedIn: 'root'
})
export class BackgroundsService {
  private _url:string = "/assets/data/backgrounds.json";

  public selectedBackground = 0;
  public selectedBackgroundSkill = "";
  public selectedBackgroundSkillMasteries = "";
  public selectedBackgroundLanguages = "";
  public selectedBackgroundOrigin = "";
  public selectedBackgroundTools = "";

  constructor(private http:HttpClient) { }

getBackgrounds(): Observable<Ibackgrounds[]> {
  return this.http.get<Ibackgrounds[]>(this._url);
}

}
