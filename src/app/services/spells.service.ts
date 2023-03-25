import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ispells } from './spells';

@Injectable({
  providedIn: 'root',
})
export class SpellsService {
  private _url: string = '/assets/data/spells.json';
  public cantrips = '';
  public spells = '';

  public cantrips1 = '';
  public cantrips2 = '';
  public cantrips3 = '';
  public cantrips4 = '';
  public cantrips5 = '';
  public cantrips6 = '';
  public cantrips7 = '';
  public cantrips8 = '';
  public cantrips9 = '';
  public cantrips10 = '';
  public cantrips11 = '';
  public cantrips12 = '';
  public cantrips13 = '';
  public cantrips14 = '';
  public cantrips15 = '';
  public cantrips16 = '';
  public cantrips17 = '';
  public cantrips18 = '';
  public cantrips19 = '';
  public cantrips20 = '';

  public level1Slot = '0 0 0 0 0 0 0 0 0';
  public level2Slot = '';
  public level3Slot = '';
  public level4Slot = '';
  public level5Slot = '';
  public level6Slot = '';
  public level7Slot = '';
  public level8Slot = '';
  public level9Slot = '';
  public level10Slot = '';
  public level11Slot = '';
  public level12Slot = '';
  public level13Slot = '';
  public level14Slot = '';
  public level15Slot = '';
  public level16Slot = '';
  public level17Slot = '';
  public level18Slot = '';
  public level19Slot = '';
  public level20Slot = '';

  public level1SpellsKnown = '';
  public level2SpellsKnown = '';
  public level3SpellsKnown = '';
  public level4SpellsKnown = '';
  public level5SpellsKnown = '';
  public level6SpellsKnown = '';
  public level7SpellsKnown = '';
  public level8SpellsKnown = '';
  public level9SpellsKnown = '';
  public level10SpellsKnown = '';
  public level11SpellsKnown = '';
  public level12SpellsKnown = '';
  public level13SpellsKnown = '';
  public level14SpellsKnown = '';
  public level15SpellsKnown = '';
  public level16SpellsKnown = '';
  public level17SpellsKnown = '';
  public level18SpellsKnown = '';
  public level19SpellsKnown = '';
  public level20SpellsKnown = '';

  constructor(private http: HttpClient) {}

  getSpells(): Observable<Ispells[]> {
    return this.http.get<Ispells[]>(this._url);
  }
}
