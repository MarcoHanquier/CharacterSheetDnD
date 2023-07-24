import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ispells } from './spells';

export interface SpellSlots {
  position: number;
  slot1: string;
  slot2: string;
  slot3: string;
  slot4: string;
  slot5: string;
  slot6: string;
  slot7: string;
  slot8: string;
  slot9: string;
}

@Injectable({
  providedIn: 'root',
})
export class SpellsService {
  private _url: string = '/assets/data/spells.json';
  public cantrips = '';
  public spells = '';
  public level = 1;
  public selectedClassName = 'Artificier';
  public selectedArchetypeName = 'Alchimiste';
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

  public SpellSlots: SpellSlots[] = [
    {
      position: 1,
      slot1: '⬤',
      slot2: '',
      slot3: '',
      slot4: '',
      slot5: '',
      slot6: '',
      slot7: '',
      slot8: '',
      slot9: '',
    },
    {
      position: 2,
      slot1: '⬤',
      slot2: '',
      slot3: '',
      slot4: '',
      slot5: '',
      slot6: '',
      slot7: '',
      slot8: '',
      slot9: '',
    },
    {
      position: 3,
      slot1: '',
      slot2: '',
      slot3: '',
      slot4: '',
      slot5: '',
      slot6: '',
      slot7: '',
      slot8: '',
      slot9: '',
    },
    {
      position: 4,
      slot1: '',
      slot2: '',
      slot3: '',
      slot4: '',
      slot5: '',
      slot6: '',
      slot7: '',
      slot8: '',
      slot9: '',
    },
  ];
  dataSourceSpellSlots = this.SpellSlots;

  // Met à jour le tableau d'emplacements de sorts selon la classe
  updateSpellLevelTable = () => {
    if (
      this.selectedClassName == 'Barde' ||
      this.selectedClassName == 'Druide' ||
      this.selectedClassName == 'Ensorceleur' ||
      this.selectedClassName == 'Magicien' ||
      this.selectedClassName == 'Clerc'
    ) {
      switch (this.level) {
        case 1:
        this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 2:
        this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 3:
        this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 4:
        this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 5:
        this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 6:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 7:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 8:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 9:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 10:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 11:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 12:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 13:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 14:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 15:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 16:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 17:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 18:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 19:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 20:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
      }
    } else if (
      this.selectedClassName == 'Paladin' ||
      this.selectedClassName == 'Rôdeur' ||
      this.selectedClassName == 'Artificier'
    ) {
      switch (this.level) {
        case 1:
         if (this.selectedClassName == 'Artificier') { this.dataSourceSpellSlots[0] = {   position: 1,   slot1: '⬤',   slot2: '',   slot3: '',   slot4: '',   slot5: '',   slot6: '',   slot7: '',   slot8: '',   slot9: '', }; this.dataSourceSpellSlots[1] = {   position: 1,   slot1: '⬤',   slot2: '',   slot3: '',   slot4: '',   slot5: '',   slot6: '',   slot7: '',   slot8: '',   slot9: '', }; this.dataSourceSpellSlots[2] = {   position: 1,   slot1: '',   slot2: '',   slot3: '',   slot4: '',   slot5: '',   slot6: '',   slot7: '',   slot8: '',   slot9: '', }; this.dataSourceSpellSlots[3] = {   position: 1,   slot1: '',   slot2: '',   slot3: '',   slot4: '',   slot5: '',   slot6: '',   slot7: '',   slot8: '',   slot9: '', };
         } else { this.dataSourceSpellSlots[0] = {   position: 1,   slot1: '',   slot2: '',   slot3: '',   slot4: '',   slot5: '',   slot6: '',   slot7: '',   slot8: '',   slot9: '', }; this.dataSourceSpellSlots[1] = {   position: 1,   slot1: '',   slot2: '',   slot3: '',   slot4: '',   slot5: '',   slot6: '',   slot7: '',   slot8: '',   slot9: '', }; this.dataSourceSpellSlots[2] = {   position: 1,   slot1: '',   slot2: '',   slot3: '',   slot4: '',   slot5: '',   slot6: '',   slot7: '',   slot8: '',   slot9: '', }; this.dataSourceSpellSlots[3] = {   position: 1,   slot1: '',   slot2: '',   slot3: '',   slot4: '',   slot5: '',   slot6: '',   slot7: '',   slot8: '',   slot9: '', };
         }break;
        case 2:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 3:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 4:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 5:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 6:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 7:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 8:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 9:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 10:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 11:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 12:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 13:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 14:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 15:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 16:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 17:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 18:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 19:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 20:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
      }
    } else if (this.selectedClassName == 'Sorcier') {
      switch (this.level) {
        case 1:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 2:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 3:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 4:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 5:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 6:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 7:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 8:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 9:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 10:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 11:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 12:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 13:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 14:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 15:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 16:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 17:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 18:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 19:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 20:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '⬤', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
      }
    } else if (
      this.selectedArchetypeName == 'Arnaqueur Arcanique' ||
      this.selectedArchetypeName == 'Chevalier occulte'
    ) {
      switch (this.level) {
        case 1:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 2:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 3:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 4:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 5:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 6:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 7:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 8:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 9:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 10:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 11:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 12:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 13:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 14:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 15:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 16:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 17:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 18:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 19:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
        case 20:
         this.dataSourceSpellSlots[0] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[1] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[2] = { position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         this.dataSourceSpellSlots[3] = { position: 1, slot1: '⬤', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '',};
         break;
      }
    } else {
      this.dataSourceSpellSlots[0] = {
        position: 1,
        slot1: '',
        slot2: '',
        slot3: '',
        slot4: '',
        slot5: '',
        slot6: '',
        slot7: '',
        slot8: '',
        slot9: '',
      };
      this.dataSourceSpellSlots[1] = {
        position: 1,
        slot1: '',
        slot2: '',
        slot3: '',
        slot4: '',
        slot5: '',
        slot6: '',
        slot7: '',
        slot8: '',
        slot9: '',
      };
      this.dataSourceSpellSlots[2] = {
        position: 1,
        slot1: '',
        slot2: '',
        slot3: '',
        slot4: '',
        slot5: '',
        slot6: '',
        slot7: '',
        slot8: '',
        slot9: '',
      };
      this.dataSourceSpellSlots[3] = {
        position: 1,
        slot1: '',
        slot2: '',
        slot3: '',
        slot4: '',
        slot5: '',
        slot6: '',
        slot7: '',
        slot8: '',
        slot9: '',
      };
    }
  };

  constructor(private http: HttpClient) {}

  getSpells(): Observable<Ispells[]> {
    return this.http.get<Ispells[]>(this._url);
  }
}
