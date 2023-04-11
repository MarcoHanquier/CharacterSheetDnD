import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ispells } from './spells';
import { Subject } from 'rxjs';



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
public selectedClassName = "Barbare";
public selectedArchetypeName = "Berkerker";
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


  // private subject =new Subject<any>();

  //Value is any string message or boolean value
  //this will notify that you have added or deleted the data successfully and you //want other component to listen that
  
//   sendNotification(value:any)
//   {
//       this.subject.next({text:value});
//   }
  
//   getNotification(){
//     return this.subject.asObservable();
// }



private subjectName = new Subject<any>(); //need to create a subject
    
sendUpdate(message: string) { //the component that wants to update something, calls this fn
    this.subjectName.next({ text: message }); //next() will feed the value in Subject
    
}

getUpdate(): Observable<any> { //the receiver component calls this function 
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
}






  public Fighter: SpellSlots[] = [
    {position: 1, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: ''},
    {position: 2, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: ''},
    {position: 3, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: ''},
    {position: 4, slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: ''},
  ];
  dataSourceFighter = this.Fighter;  

  // public buttonClickEventTrack = new Subject();
  

  updateSpellLevelTable = () => {

 
        if (this.selectedClassName == "Barde" || this.selectedClassName == "Druide" 
            || this.selectedClassName == "Ensorceleur" || this.selectedClassName == "Magicien" || this.selectedClassName == "Clerc"  ) {
        switch (this.level) {
          case 1:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 2:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 3:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 4:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 5:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 6:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 7:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 8:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 9:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 10:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 11:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 12:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 13:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 14:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 15:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 16:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:""};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 17:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:"⬤"};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 18:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:"⬤"};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 19:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:"⬤"};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          case 20:
            this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:"⬤"};
            this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"",slot9:""};
            this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
            this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
            break;
          } 
       }  else if ((this.selectedClassName == "Paladin" || this.selectedClassName == "Rôdeur" )) {
   switch (this.level) {
     case 1:
       this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 2:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 3:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 4:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 5:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 6:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 7:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 8:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 9:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 10:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 11:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 12:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 13:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 14:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 15:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 16:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 17:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 18:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 19:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     case 20:
       this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
       break;
     } 
  } else if (this.selectedClassName == "Sorcier" ) {
    switch (this.level) {
      case 1:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 2:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 3:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 4:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 5:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 6:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 7:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 8:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 9:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 10:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 11:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 12:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 13:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 14:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 15:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 16:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 17:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 18:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 19:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 20:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      } 
   } else if (this.selectedArchetypeName == "Arnaqueur Arcanique" || this.selectedArchetypeName == "Chevalier occulte" ) {
    switch (this.level) {
      case 1:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 2:
        this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 3:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 4:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 5:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 6:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 7:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 8:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 9:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 10:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 11:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 12:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 13:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 14:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 15:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 16:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 17:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 18:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 19:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      case 20:
        this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
        break;
      }
     } else {
    this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
   }

          

        }


















  // buttonClickSubject: Subject<Boolean> = new BehaviorSubject(null);

  // buttonClick$: Observable<Boolean> = this.buttonClickSubject.asObservable();


  constructor(private http: HttpClient) {}

  getSpells(): Observable<Ispells[]> {
    return this.http.get<Ispells[]>(this._url);
  }
}
