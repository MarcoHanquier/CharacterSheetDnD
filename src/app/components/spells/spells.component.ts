import { Component, OnInit } from '@angular/core';
import { SpellsService } from 'src/app/services/spells.service';
import { ClassesService } from 'src/app/services/classes.service';
import { CaracteristicsService } from 'src/app/services/caracteristics.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

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

const ELEMENT_DATA: SpellSlots[] = [
    {position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤'},
    {position: 2, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤'},
    {position: 3, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤'},
    {position: 4, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤'},
];

const Fighter: SpellSlots[] = [
  {position: 1, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤'},
  {position: 2, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤'},
  {position: 3, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤'},
  {position: 4, slot1: '⬤', slot2: '⬤', slot3: '⬤', slot4: '⬤', slot5: '⬤', slot6: '⬤', slot7: '⬤', slot8: '⬤', slot9: '⬤'},
];




@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css'],
})
export class SpellsComponent implements OnInit {
  public armors = [] as any[];
  public shields = [] as any[];
  public spellSavingMod = 0;
  public spellAttackMod = 0;

  public selectedArmor = 10;
  public deviceValue = 1;
  public updatedArmorClass = 7;
  public selectedShield = 0;
  public selectedArmorType = '';

  public spellsKnown = '0';
  public cantripsKnown = '0';
  public spellsSlots = '0 0 0 0 0 0 0 0 0';
  public spellsPrepared = 0;
  public selectedClass = '';

  // public spellslots = [] as any[];


  // subscription:Subscription

 

  displayedColumns: string[] = ['position', 'slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9'];
  dataSource = ELEMENT_DATA;
  dataSourceFighter = new MatTableDataSource(this._spellsService.Fighter);

  messageReceived: any;
  public subscriptionName: Subscription; //important to create a subscription


  constructor(
    private _spellsService: SpellsService,
    private _classesService: ClassesService,
    private _caracteristicsService: CaracteristicsService
  ) { this.subscriptionName= this._spellsService.getUpdate().subscribe
    (message => { //message contains the data sent from service
    this.messageReceived = message;
    });

  }

  public spells = [] as any[];
  public classes = [] as any[];


updateMessage() {
  console.log(this.updateMessage);
}



  updateSpellsInUI = () => {
    this.updateSpellsByLevel();
    this.selectedClass = this._classesService.selectedClassName;
    if (
      this._classesService.selectedClassName == 'Druide' ||
      this._classesService.selectedClassName == 'Clerc' ||
      this._classesService.selectedClassName == 'Magicien' ||
      this._classesService.selectedClassName == 'Paladin'
    ) {
      this.calculatePreparedSpells();
      return this.spellsPrepared;
    }
    this.updateSpellsKnown();
    return this.spellsKnown;
  };

  updatedSpellsSlots = () => {
    this.updateSpellsByLevel();
    return this.spellsSlots;
  };

  calculatePreparedSpells = () => {
    if (this._classesService.selectedClassName == 'Magicien') {
      this.spellsPrepared =
        this._caracteristicsService.intelligenceModifier +
        this._caracteristicsService.level;
      if (this.spellsPrepared < 1) {
        this.spellsPrepared = 1;
      } else this.spellsPrepared = this.spellsPrepared;
    } else if (this._classesService.selectedClassName == 'Paladin') {
      this.spellsPrepared =
        this._caracteristicsService.charismaModifier +
        this._caracteristicsService.level;
      if (this.spellsPrepared < 1) {
        this.spellsPrepared = 1;
      } else this.spellsPrepared = this.spellsPrepared;
    } else if (
      this._classesService.selectedClassName == 'Druide' ||
      this._classesService.selectedClassName == 'Clerc'
    ) {
      this.spellsPrepared =
        this._caracteristicsService.wisdomModifier +
        this._caracteristicsService.level;
      if (this.spellsPrepared < 1) {
        this.spellsPrepared = 1;
      } else this.spellsPrepared = this.spellsPrepared;
    }
  };

  updateSpellMod = () => {
    if (
      this._classesService.selectedClassName == 'Barde' ||
      this._classesService.selectedClassName == 'Ensorceleur' ||
      this._classesService.selectedClassName == 'Paladin' ||
      this._classesService.selectedClassName == 'Sorcier'
    ) {
      this.spellSavingMod =  8 + this._caracteristicsService.proficiency + this._caracteristicsService.charismaModifier;
      this.spellAttackMod =  this._caracteristicsService.proficiency + this._caracteristicsService.charismaModifier;
  
    } else if (this._classesService.selectedClassName == 'Magicien') {
      this.spellSavingMod =  8 + this._caracteristicsService.proficiency + this._caracteristicsService.intelligenceModifier;
      this.spellAttackMod =  this._caracteristicsService.proficiency + this._caracteristicsService.intelligenceModifier;
  
    } else if (    this._classesService.selectedClassName == 'Clerc' ||
      this._classesService.selectedClassName == 'Druide' ||
      this._classesService.selectedClassName == 'Rôdeur') {
        this.spellSavingMod =  8 + this._caracteristicsService.proficiency + this._caracteristicsService.wisdomModifier;
        this.spellAttackMod =  this._caracteristicsService.proficiency + this._caracteristicsService.wisdomModifier;
    } else if (    this._classesService.selectedClassName == 'Moine') {
      this.spellSavingMod =  8 + this._caracteristicsService.proficiency + this._caracteristicsService.wisdomModifier;
      this.spellAttackMod =  0;
  } else  {
      this.spellSavingMod =  0;
      this.spellAttackMod =  0;
    }
    };


    updateSpellSaveModInUI() {
      this.updateSpellMod();
      return this.spellSavingMod

    }

    updateSpellAttackModInUI() {
      this.updateSpellMod();
      return this.spellAttackMod
      
    }


  updateSpellsKnown = () => {
    if (
      this._classesService.selectedClassName == 'Barbare' ||
      this._classesService.selectedClassName == 'Guerrier' ||
      this._classesService.selectedClassName == 'Roublard' ||
      this._classesService.selectedClassName == 'Moine'
    ) {
      this._spellsService.level1SpellsKnown = '0';
      this._spellsService.level2SpellsKnown = '0';
      this._spellsService.level3SpellsKnown = '0';
      this._spellsService.level4SpellsKnown = '0';
      this._spellsService.level5SpellsKnown = '0';
      this._spellsService.level6SpellsKnown = '0';
      this._spellsService.level7SpellsKnown = '0';
      this._spellsService.level8SpellsKnown = '0';
      this._spellsService.level9SpellsKnown = '0';
      this._spellsService.level10SpellsKnown = '0';
      this._spellsService.level11SpellsKnown = '0';
      this._spellsService.level12SpellsKnown = '0';
      this._spellsService.level13SpellsKnown = '0';
      this._spellsService.level14SpellsKnown = '0';
      this._spellsService.level15SpellsKnown = '0';
      this._spellsService.level16SpellsKnown = '0';
      this._spellsService.level17SpellsKnown = '0';
      this._spellsService.level18SpellsKnown = '0';
      this._spellsService.level19SpellsKnown = '0';
      this._spellsService.level20SpellsKnown = '0';
    } else if (this._classesService.selectedClassName == 'Rôdeur') {
      this._spellsService.level1SpellsKnown = '0';
      this._spellsService.level2SpellsKnown = '2';
      this._spellsService.level3SpellsKnown = '3';
      this._spellsService.level4SpellsKnown = '3';
      this._spellsService.level5SpellsKnown = '4';
      this._spellsService.level6SpellsKnown = '4';
      this._spellsService.level7SpellsKnown = '5';
      this._spellsService.level8SpellsKnown = '5';
      this._spellsService.level9SpellsKnown = '6';
      this._spellsService.level10SpellsKnown = '6';
      this._spellsService.level11SpellsKnown = '7';
      this._spellsService.level12SpellsKnown = '7';
      this._spellsService.level13SpellsKnown = '8';
      this._spellsService.level14SpellsKnown = '8';
      this._spellsService.level15SpellsKnown = '9';
      this._spellsService.level16SpellsKnown = '9';
      this._spellsService.level17SpellsKnown = '10';
      this._spellsService.level18SpellsKnown = '10';
      this._spellsService.level19SpellsKnown = '11';
      this._spellsService.level20SpellsKnown = '11';
    } else if (this._classesService.selectedClassName == 'Sorcier') {
      this._spellsService.level1SpellsKnown = '2';
      this._spellsService.level2SpellsKnown = '3';
      this._spellsService.level3SpellsKnown = '4';
      this._spellsService.level4SpellsKnown = '5';
      this._spellsService.level5SpellsKnown = '6';
      this._spellsService.level6SpellsKnown = '7';
      this._spellsService.level7SpellsKnown = '8';
      this._spellsService.level8SpellsKnown = '9';
      this._spellsService.level9SpellsKnown = '10';
      this._spellsService.level10SpellsKnown = '10';
      this._spellsService.level11SpellsKnown = '11';
      this._spellsService.level12SpellsKnown = '11';
      this._spellsService.level13SpellsKnown = '12';
      this._spellsService.level14SpellsKnown = '12';
      this._spellsService.level15SpellsKnown = '13';
      this._spellsService.level16SpellsKnown = '13';
      this._spellsService.level17SpellsKnown = '14';
      this._spellsService.level18SpellsKnown = '14';
      this._spellsService.level19SpellsKnown = '15';
      this._spellsService.level20SpellsKnown = '15';
    } else if (this._classesService.selectedClassName == 'Barde') {
      this._spellsService.level1SpellsKnown = '4';
      this._spellsService.level2SpellsKnown = '5';
      this._spellsService.level3SpellsKnown = '6';
      this._spellsService.level4SpellsKnown = '7';
      this._spellsService.level5SpellsKnown = '8';
      this._spellsService.level6SpellsKnown = '9';
      this._spellsService.level7SpellsKnown = '10';
      this._spellsService.level8SpellsKnown = '11';
      this._spellsService.level9SpellsKnown = '12';
      this._spellsService.level10SpellsKnown = '14';
      this._spellsService.level11SpellsKnown = '15';
      this._spellsService.level12SpellsKnown = '15';
      this._spellsService.level13SpellsKnown = '16';
      this._spellsService.level14SpellsKnown = '18';
      this._spellsService.level15SpellsKnown = '19';
      this._spellsService.level16SpellsKnown = '19';
      this._spellsService.level17SpellsKnown = '20';
      this._spellsService.level18SpellsKnown = '22';
      this._spellsService.level19SpellsKnown = '22';
      this._spellsService.level20SpellsKnown = '22';
    } else if (this._classesService.selectedClassName == 'Ensorceleur') {
      this._spellsService.level1SpellsKnown = '2';
      this._spellsService.level2SpellsKnown = '3';
      this._spellsService.level3SpellsKnown = '4';
      this._spellsService.level4SpellsKnown = '5';
      this._spellsService.level5SpellsKnown = '6';
      this._spellsService.level6SpellsKnown = '7';
      this._spellsService.level7SpellsKnown = '8';
      this._spellsService.level8SpellsKnown = '9';
      this._spellsService.level9SpellsKnown = '10';
      this._spellsService.level10SpellsKnown = '11';
      this._spellsService.level11SpellsKnown = '12';
      this._spellsService.level12SpellsKnown = '12';
      this._spellsService.level13SpellsKnown = '13';
      this._spellsService.level14SpellsKnown = '13';
      this._spellsService.level15SpellsKnown = '14';
      this._spellsService.level16SpellsKnown = '14';
      this._spellsService.level17SpellsKnown = '15';
      this._spellsService.level18SpellsKnown = '15';
      this._spellsService.level19SpellsKnown = '15';
      this._spellsService.level20SpellsKnown = '15';
    }
  };

  updateCantrips = () => {
    switch (this._classesService.selectedCantripGroup) {
      case 'A':
        // Barbare, Guerrier, Roublard, Moine, Paladin, Rodeur
        this._spellsService.cantrips1 = '0';
        this._spellsService.cantrips2 = '0';
        this._spellsService.cantrips3 = '0';
        this._spellsService.cantrips4 = '0';
        this._spellsService.cantrips5 = '0';
        this._spellsService.cantrips6 = '0';
        this._spellsService.cantrips7 = '0';
        this._spellsService.cantrips8 = '0';
        this._spellsService.cantrips9 = '0';
        this._spellsService.cantrips10 = '0';
        this._spellsService.cantrips11 = '0';
        this._spellsService.cantrips12 = '0';
        this._spellsService.cantrips13 = '0';
        this._spellsService.cantrips14 = '0';
        this._spellsService.cantrips15 = '0';
        this._spellsService.cantrips16 = '0';
        this._spellsService.cantrips17 = '0';
        this._spellsService.cantrips18 = '0';
        this._spellsService.cantrips19 = '0';
        this._spellsService.cantrips20 = '0';
        break;
      case 'B':
        // Sorcier, Druide, Barde
        this._spellsService.cantrips1 = '2';
        this._spellsService.cantrips2 = '2';
        this._spellsService.cantrips3 = '2';
        this._spellsService.cantrips4 = '3';
        this._spellsService.cantrips5 = '3';
        this._spellsService.cantrips6 = '3';
        this._spellsService.cantrips7 = '3';
        this._spellsService.cantrips8 = '3';
        this._spellsService.cantrips9 = '3';
        this._spellsService.cantrips10 = '4';
        this._spellsService.cantrips11 = '4';
        this._spellsService.cantrips12 = '4';
        this._spellsService.cantrips13 = '4';
        this._spellsService.cantrips14 = '4';
        this._spellsService.cantrips15 = '4';
        this._spellsService.cantrips16 = '4';
        this._spellsService.cantrips17 = '4';
        this._spellsService.cantrips18 = '4';
        this._spellsService.cantrips19 = '4';
        this._spellsService.cantrips20 = '4';
        break;
      case 'C':
        // Clerc, Magicien
        this._spellsService.cantrips1 = '3';
        this._spellsService.cantrips2 = '3';
        this._spellsService.cantrips3 = '3';
        this._spellsService.cantrips4 = '4';
        this._spellsService.cantrips5 = '4';
        this._spellsService.cantrips6 = '4';
        this._spellsService.cantrips7 = '4';
        this._spellsService.cantrips8 = '4';
        this._spellsService.cantrips9 = '5';
        this._spellsService.cantrips10 = '5';
        this._spellsService.cantrips11 = '5';
        this._spellsService.cantrips12 = '5';
        this._spellsService.cantrips13 = '5';
        this._spellsService.cantrips14 = '5';
        this._spellsService.cantrips15 = '5';
        this._spellsService.cantrips16 = '5';
        this._spellsService.cantrips17 = '5';
        this._spellsService.cantrips18 = '5';
        this._spellsService.cantrips19 = '5';
        this._spellsService.cantrips20 = '5';
        break;

      case 'D':
        // Ensorceleur
        this._spellsService.cantrips1 = '4';
        this._spellsService.cantrips2 = '4';
        this._spellsService.cantrips3 = '4';
        this._spellsService.cantrips4 = '5';
        this._spellsService.cantrips5 = '5';
        this._spellsService.cantrips6 = '5';
        this._spellsService.cantrips7 = '5';
        this._spellsService.cantrips8 = '5';
        this._spellsService.cantrips9 = '6';
        this._spellsService.cantrips10 = '6';
        this._spellsService.cantrips11 = '6';
        this._spellsService.cantrips12 = '6';
        this._spellsService.cantrips13 = '6';
        this._spellsService.cantrips14 = '6';
        this._spellsService.cantrips15 = '6';
        this._spellsService.cantrips16 = '6';
        this._spellsService.cantrips17 = '6';
        this._spellsService.cantrips18 = '6';
        this._spellsService.cantrips19 = '6';
        this._spellsService.cantrips20 = '6';
        break;
    }
  };



  // updateSpellLevelTable = () => {
  //   this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};

  //   this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //   this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //   this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           if (this._classesService.selectedClassName == "Barbare" || this._classesService.selectedClassName == "Guerrier" 
  //       || this._classesService.selectedClassName == "Roublard" || this._classesService.selectedClassName == "Moine"  ) {
  //       }
  //       if (this._classesService.selectedClassName == "Barde" || this._classesService.selectedClassName == "Druide" 
  //           || this._classesService.selectedClassName == "Ensorceleur" || this._classesService.selectedClassName == "Magicien" || this._classesService.selectedClassName == "Clerc"  ) {

  //       switch (this._caracteristicsService.level) {
  //         case 1:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 2:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 3:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 4:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 5:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 6:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 7:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 8:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 9:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 10:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 11:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 12:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 13:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 14:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 15:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 16:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 17:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:"⬤"};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 18:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:"⬤"};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 19:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:"⬤"};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"⬤",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         case 20:
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"⬤",slot9:"⬤"};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"⬤",slot7:"⬤",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"⬤",slot3:"⬤",slot4:"⬤",slot5:"⬤",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           break;
  //         } 
          
  //       }
  //         else {
  //           this.dataSourceFighter[0] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[1] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[2] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //           this.dataSourceFighter[3] = {position:1,slot1:"⬤",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
  //         }

          

  //       }


   

    // switch (this._caracteristicsService.level) {
    //   case 1:
    //     if (this._classesService.selectedClassName == "Barde" || this._classesService.selectedClassName == "Druide" 
    //     || this._classesService.selectedClassName == "Ensorceleur" || this._classesService.selectedClassName == "Magicien" || this._classesService.selectedClassName == "Clerc"  ) {
    //       this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //       this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //       this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //       this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //     } else if (this._classesService.selectedClassName == "Paladin" || this._classesService.selectedClassName == "Rôdeur" ) {
    //       this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //       this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //       this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //       this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //     } else if (this._classesService.selectedClassName == "Sorcier") {
    //       this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //       this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //       this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //       this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    //     }
    //     break;
    // }
  

  updateSpellLevel = () => {
    switch (this._classesService.selectedClassName) {
      case 'Fighter':
        // Barbare, Guerrier, Roublard, Moine, Sorcier
        this._spellsService.level1Slot = this.spells[0].level1Slot;
        this._spellsService.level2Slot = this.spells[0].level2Slot;
        this._spellsService.level3Slot = this.spells[0].level3Slot;
        this._spellsService.level4Slot = this.spells[0].level4Slot;
        this._spellsService.level5Slot = this.spells[0].level5Slot;
        this._spellsService.level6Slot = this.spells[0].level6Slot;
        this._spellsService.level7Slot = this.spells[0].level7Slot;
        this._spellsService.level8Slot = this.spells[0].level8Slot;
        this._spellsService.level9Slot = this.spells[0].level9Slot;
        this._spellsService.level10Slot = this.spells[0].level10Slot;
        this._spellsService.level11Slot = this.spells[0].level11Slot;
        this._spellsService.level12Slot = this.spells[0].level12Slot;
        this._spellsService.level13Slot = this.spells[0].level13Slot;
        this._spellsService.level14Slot = this.spells[0].level14Slot;
        this._spellsService.level15Slot = this.spells[0].level15Slot;
        this._spellsService.level16Slot = this.spells[0].level16Slot;
        this._spellsService.level17Slot = this.spells[0].level17Slot;
        this._spellsService.level18Slot = this.spells[0].level18Slot;
        this._spellsService.level19Slot = this.spells[0].level19Slot;
        this._spellsService.level20Slot = this.spells[0].level20Slot;
        break;

      case 'Caster':
        // Barde, Druide, Ensorceleur, Magicien, Clerc
        this._spellsService.level1Slot = this.spells[1].level1Slot;
        this._spellsService.level2Slot = this.spells[1].level2Slot;
        this._spellsService.level3Slot = this.spells[1].level3Slot;
        this._spellsService.level4Slot = this.spells[1].level4Slot;
        this._spellsService.level5Slot = this.spells[1].level5Slot;
        this._spellsService.level6Slot = this.spells[1].level6Slot;
        this._spellsService.level7Slot = this.spells[1].level7Slot;
        this._spellsService.level8Slot = this.spells[1].level8Slot;
        this._spellsService.level9Slot = this.spells[1].level9Slot;
        this._spellsService.level10Slot = this.spells[1].level10Slot;
        this._spellsService.level11Slot = this.spells[1].level11Slot;
        this._spellsService.level12Slot = this.spells[1].level12Slot;
        this._spellsService.level13Slot = this.spells[1].level13Slot;
        this._spellsService.level14Slot = this.spells[1].level14Slot;
        this._spellsService.level15Slot = this.spells[1].level15Slot;
        this._spellsService.level16Slot = this.spells[1].level16Slot;
        this._spellsService.level17Slot = this.spells[1].level17Slot;
        this._spellsService.level18Slot = this.spells[1].level18Slot;
        this._spellsService.level19Slot = this.spells[1].level19Slot;
        this._spellsService.level20Slot = this.spells[1].level20Slot;
        break;
      case 'MagFighter':
        // Paladin, Rodeur
        this._spellsService.level1Slot = this.spells[2].level1Slot;
        this._spellsService.level2Slot = this.spells[2].level2Slot;
        this._spellsService.level3Slot = this.spells[2].level3Slot;
        this._spellsService.level4Slot = this.spells[2].level4Slot;
        this._spellsService.level5Slot = this.spells[2].level5Slot;
        this._spellsService.level6Slot = this.spells[2].level6Slot;
        this._spellsService.level7Slot = this.spells[2].level7Slot;
        this._spellsService.level8Slot = this.spells[2].level8Slot;
        this._spellsService.level9Slot = this.spells[2].level9Slot;
        this._spellsService.level10Slot = this.spells[2].level10Slot;
        this._spellsService.level11Slot = this.spells[2].level11Slot;
        this._spellsService.level12Slot = this.spells[2].level12Slot;
        this._spellsService.level13Slot = this.spells[2].level13Slot;
        this._spellsService.level14Slot = this.spells[2].level14Slot;
        this._spellsService.level15Slot = this.spells[2].level15Slot;
        this._spellsService.level16Slot = this.spells[2].level16Slot;
        this._spellsService.level17Slot = this.spells[2].level17Slot;
        this._spellsService.level18Slot = this.spells[2].level18Slot;
        this._spellsService.level19Slot = this.spells[2].level19Slot;
        this._spellsService.level20Slot = this.spells[2].level20Slot;
        break;
        case 'Sorcier':
        // Paladin, Rodeur
    // this.dataSourceFighter[0] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    // this.dataSourceFighter[1] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    // this.dataSourceFighter[2] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    // this.dataSourceFighter[3] = {position:1,slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:"",slot9:""};
    // this.dataSourceFighter[0].slot1 = '';
    // this.dataSourceFighter[0].slot2 = '';
    // this.dataSourceFighter[0].slot3 = '';
    // this.dataSourceFighter[0].slot4 = '';
    // this.dataSourceFighter[0].slot5 = '';
    // this.dataSourceFighter[0].slot6 = '';
    // this.dataSourceFighter[0].slot7 = '';
    // this.dataSourceFighter[0].slot8 = '';
    // this.dataSourceFighter[0].slot9 = '';
        // this._spellsService.level1Slot = this.spells[3].level1Slot;
        // this._spellsService.level2Slot = this.spells[3].level2Slot;
        // this._spellsService.level3Slot = this.spells[3].level3Slot;
        // this._spellsService.level4Slot = this.spells[3].level4Slot;
        // this._spellsService.level5Slot = this.spells[3].level5Slot;
        // this._spellsService.level6Slot = this.spells[3].level6Slot;
        // this._spellsService.level7Slot = this.spells[3].level7Slot;
        // this._spellsService.level8Slot = this.spells[3].level8Slot;
        // this._spellsService.level9Slot = this.spells[3].level9Slot;
        // this._spellsService.level10Slot = this.spells[3].level10Slot;
        // this._spellsService.level11Slot = this.spells[3].level11Slot;
        // this._spellsService.level12Slot = this.spells[3].level12Slot;
        // this._spellsService.level13Slot = this.spells[3].level13Slot;
        // this._spellsService.level14Slot = this.spells[3].level14Slot;
        // this._spellsService.level15Slot = this.spells[3].level15Slot;
        // this._spellsService.level16Slot = this.spells[3].level16Slot;
        // this._spellsService.level17Slot = this.spells[3].level17Slot;
        // this._spellsService.level18Slot = this.spells[3].level18Slot;
        // this._spellsService.level19Slot = this.spells[3].level19Slot;
        // this._spellsService.level20Slot = this.spells[3].level20Slot;
        break;
    }
  };

  updateSpellsByLevel = () => {
    this.updateCantrips();
    switch (this._caracteristicsService.level) {
      case 1:
        this.spellsKnown = this._spellsService.level1SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips1;
        this.spellsSlots = this._spellsService.level1Slot;
        break;
      case 2:
        this.spellsKnown = this._spellsService.level2SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips2;
        this.spellsSlots = this._spellsService.level2Slot;
        break;
      case 3:
        this.spellsKnown = this._spellsService.level3SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips3;
        this.spellsSlots = this._spellsService.level3Slot;
        break;
      case 4:
        this.spellsKnown = this._spellsService.level4SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips4;
        this.spellsSlots = this._spellsService.level4Slot;
        break;
      case 5:
        this.spellsKnown = this._spellsService.level5SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips5;
        this.spellsSlots = this._spellsService.level5Slot;
        break;
      case 6:
        this.spellsKnown = this._spellsService.level6SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips6;
        this.spellsSlots = this._spellsService.level6Slot;
        break;
      case 7:
        this.spellsKnown = this._spellsService.level7SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips7;
        this.spellsSlots = this._spellsService.level7Slot;
        break;
      case 8:
        this.spellsKnown = this._spellsService.level8SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips8;
        this.spellsSlots = this._spellsService.level8Slot;
        break;
      case 9:
        this.spellsKnown = this._spellsService.level9SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips9;
        this.spellsSlots = this._spellsService.level9Slot;
        break;
      case 10:
        this.spellsKnown = this._spellsService.level10SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips10;
        this.spellsSlots = this._spellsService.level10Slot;
        break;
      case 11:
        this.spellsKnown = this._spellsService.level11SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips11;
        this.spellsSlots = this._spellsService.level11Slot;
        break;
      case 12:
        this.spellsKnown = this._spellsService.level12SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips12;
        this.spellsSlots = this._spellsService.level12Slot;
        break;
      case 13:
        this.spellsKnown = this._spellsService.level13SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips13;
        this.spellsSlots = this._spellsService.level13Slot;
        break;
      case 14:
        this.spellsKnown = this._spellsService.level14SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips14;
        this.spellsSlots = this._spellsService.level14Slot;
        break;
      case 15:
        this.spellsKnown = this._spellsService.level15SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips15;
        this.spellsSlots = this._spellsService.level15Slot;
        break;
      case 16:
        this.spellsKnown = this._spellsService.level16SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips16;
        this.spellsSlots = this._spellsService.level16Slot;
        break;
      case 17:
        this.spellsKnown = this._spellsService.level17SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips17;
        this.spellsSlots = this._spellsService.level17Slot;
        break;
      case 18:
        this.spellsKnown = this._spellsService.level18SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips18;
        this.spellsSlots = this._spellsService.level18Slot;
        break;
      case 19:
        this.spellsKnown = this._spellsService.level19SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips19;
        this.spellsSlots = this._spellsService.level19Slot;
        break;
      case 20:
        this.spellsKnown = this._spellsService.level20SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips20;
        this.spellsSlots = this._spellsService.level20Slot;
        break;
    }
  };

getUpdate() {
  console.log(this.updateMessage);

}


refresh() {
    // this.dataSourceFighter = this._spellsService.dataSourceFighter;
    this.dataSourceFighter = new MatTableDataSource(this._spellsService.dataSourceFighter)

    };

getDatasource(){
  return this._spellsService.dataSourceFighter;
}

  ngOnInit(): void {
    this._spellsService.getSpells().subscribe((data) => (this.spells = data));
    // this._spellsService.refresh().subscribe(this._spellsService.updateSpellLevelTable);
    this._classesService
      .getClasses()
      .subscribe((data) => (this.classes = data));
    this.updateSpellsByLevel();
    this.dataSourceFighter = new MatTableDataSource(this._spellsService.dataSourceFighter)

  // dataSourceFighter = Fighter;
// this.dataSourceFighter = this._spellsService.dataSourceFighter;
  //   this._spellsService.updateSpellLevelTable().subscribe(event => {
  //     this.updateSpellLevelTable();

  // });
  }

  ngAfterViewInit(): void {

    this.dataSourceFighter = new MatTableDataSource(this._spellsService.dataSourceFighter)

  }


}
