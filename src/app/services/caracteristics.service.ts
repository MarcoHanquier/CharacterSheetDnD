import { Injectable } from '@angular/core';
import { Icaracteristics } from './caracteristics';

@Injectable({
  providedIn: 'root',
})
export class CaracteristicsService {
  public force = 8;
  public dexterity = 8;
  public constitution = 8;
  public intelligence = 8;
  public wisdom = 8;
  public charisma = 8;

  public forceModifier = -1;
  public dexterityModifier = -1;
  public constitutionModifier = -1;
  public intelligenceModifier = -1;
  public wisdomModifier = -1;
  public charismaModifier = -1;

  public forceSave = 0;
  public dexteritySave = 0;
  public constitutionSave = 0;
  public intelligenceSave = 0;
  public wisdomSave = 0;
  public charismaSave = 0;

  public forceCheck = false;
  public dexterityCheck = false;
  public constitutionCheck = false;
  public intelligenceCheck = false;
  public wisdomCheck = false;
  public charismaCheck = false;

  public characterName = '';
  public proficiency = 2;
  public initiativeBonus = -1;
  public level = 1;
  public armorModifier = 0;
  public currentPV = 7;
  public passivePerception = 9;

  public dwarfPV = 0;
  constructor() {}
}
