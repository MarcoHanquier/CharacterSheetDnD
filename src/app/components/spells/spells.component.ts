import { Component, OnInit } from '@angular/core';
import { SpellsService } from 'src/app/services/spells.service';
import { ClassesService } from 'src/app/services/classes.service';
import { CaracteristicsService } from 'src/app/services/caracteristics.service';
import { MatTableDataSource } from '@angular/material/table';

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
  public spellsPrepared = 0;
  public selectedClass = '';


  displayedColumns: string[] = ['position', 'slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9'];
  dataSourceSpellSlots = new MatTableDataSource(this._spellsService.SpellSlots);


  constructor(
    private _spellsService: SpellsService,
    private _classesService: ClassesService,
    private _caracteristicsService: CaracteristicsService
  ) {  }

  public spells = [] as any[];
  public classes = [] as any[];

  // Met à jour les sorts préparés/connus selon la classe
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

  // Sorts préparés selon la classe
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

  // Modificateur de sort
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

  // Sorts connus selon la classe
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

  // Tours de magie connus selon la classe
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

  // Mets à jour le nombre de sorts et de tours de magie connus selon le niveau
  updateSpellsByLevel = () => {
    this.updateCantrips();
    switch (this._caracteristicsService.level) {
      case 1:
        this.spellsKnown = this._spellsService.level1SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips1;
        break;
      case 2:
        this.spellsKnown = this._spellsService.level2SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips2;
        break;
      case 3:
        this.spellsKnown = this._spellsService.level3SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips3;
        break;
      case 4:
        this.spellsKnown = this._spellsService.level4SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips4;
        break;
      case 5:
        this.spellsKnown = this._spellsService.level5SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips5;
        break;
      case 6:
        this.spellsKnown = this._spellsService.level6SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips6;
        break;
      case 7:
        this.spellsKnown = this._spellsService.level7SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips7;
        break;
      case 8:
        this.spellsKnown = this._spellsService.level8SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips8;
        break;
      case 9:
        this.spellsKnown = this._spellsService.level9SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips9;
        break;
      case 10:
        this.spellsKnown = this._spellsService.level10SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips10;
        break;
      case 11:
        this.spellsKnown = this._spellsService.level11SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips11;
        break;
      case 12:
        this.spellsKnown = this._spellsService.level12SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips12;
        break;
      case 13:
        this.spellsKnown = this._spellsService.level13SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips13;
        break;
      case 14:
        this.spellsKnown = this._spellsService.level14SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips14;
        break;
      case 15:
        this.spellsKnown = this._spellsService.level15SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips15;
        break;
      case 16:
        this.spellsKnown = this._spellsService.level16SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips16;
        break;
      case 17:
        this.spellsKnown = this._spellsService.level17SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips17;
        break;
      case 18:
        this.spellsKnown = this._spellsService.level18SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips18;
        break;
      case 19:
        this.spellsKnown = this._spellsService.level19SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips19;
        break;
      case 20:
        this.spellsKnown = this._spellsService.level20SpellsKnown;
        this.cantripsKnown = this._spellsService.cantrips20;
        break;
    }
  };

  // Rafraichit le tableau d'emplacements de sorts
refresh() {
    this.dataSourceSpellSlots = new MatTableDataSource(this._spellsService.dataSourceSpellSlots)
    };


  ngOnInit(): void {
    this._spellsService.getSpells().subscribe((data) => (this.spells = data));
    this._classesService
      .getClasses()
      .subscribe((data) => (this.classes = data));
    this.updateSpellsByLevel();
    this.dataSourceSpellSlots = new MatTableDataSource(this._spellsService.dataSourceSpellSlots)
  }

  ngAfterViewInit(): void {
    this.dataSourceSpellSlots = new MatTableDataSource(this._spellsService.dataSourceSpellSlots)
  }


}
