import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { Ishields } from './shields';

@Injectable({
  providedIn: 'root'
})
export class ShieldsService {
  private _url:string = "/assets/data/shields.json";

  constructor(private http:HttpClient) { }

  getShields(): Observable<Ishields[]> {
    return this.http.get<Ishields[]>(this._url);
  }
}
