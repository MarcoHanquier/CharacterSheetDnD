import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Iraces } from './races';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  private _url:string = "/assets/data/races.json";

  public races = [] as any[];
  public selectedRace = 0;
  public selectedRaceSpeed = 9;
  public selectedRaceFeatures = "";
  public selectedRaceCaracteristics = "Toutes vos caractéristiques augmentent de 1";

  constructor(private http:HttpClient) { }

getRaces(): Observable<Iraces[]> {
  return this.http.get<Iraces[]>(this._url);
}


ngOnInit(): void {

  this.getRaces().subscribe((data) => (this.races = data));

}


}
