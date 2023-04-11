import { NgIf, NgSwitch } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { race } from 'rxjs';
import { RacesService } from 'src/app/services/races.service';
import { ClassesService } from 'src/app/services/classes.service';
import { ClassdetailsComponent } from '../classdetails/classdetails.component';
import { ArmorComponent } from '../armor/armor.component';
import { SpellsService } from 'src/app/services/spells.service';
import { ArmorsService } from 'src/app/services/armors.service';
import { CaracteristicsService } from 'src/app/services/caracteristics.service';
import { SpellsComponent } from '../spells/spells.component';
import { ClassFeaturesService } from 'src/app/services/class-features.service';
import { CaracteristicsComponent } from '../caracteristics/caracteristics.component';
import { BackgroundsService } from 'src/app/services/backgrounds.service';
import { MatDialog } from '@angular/material/dialog';
import { RandomizerService } from 'src/app/services/randomizer.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css'],
})
export class JoueurComponent implements OnInit, AfterViewInit {
  // level: number;
  @ViewChild(SpellsComponent) child: any;
  level: number;
  levelFeatures: string;
  pv: number;
  classPv: number;
  public masteries = [] as any[];

  public classes = [] as any[];
  public barbareArchetypes = [] as any[];
  public bardeArchetypes = [] as any[];
  public clercArchetypes = [] as any[];
  public druideArchetypes = [] as any[];
  public ensorceleurArchetypes = [] as any[];
  public guerrierArchetypes = [] as any[];
  public magicienArchetypes = [] as any[];
  public moineArchetypes = [] as any[];
  public paladinArchetypes = [] as any[];
  public rodeurArchetypes = [] as any[];
  public roublardArchetypes = [] as any[];
  public sorcierArchetypes = [] as any[];






public selectedArchetype = 0;;
public selectedArchetypeName = "Voie du Berserker";
  public selectedArmor = 14;
  // public UpdatedArmorClass = 9;
  public currentProficiency = 2;
  public characterName = '';
  public selectedPlayerClass = 0;
  public currentPv = 14;
  public currentSelected = '';
  public dexterityModifier = -1;
  public updatedArmorClass = 7;
  public currentArmorClass = 7;
  public cantest1 = '14';
  public bonusSkill = '';

  public commonWeaponsMastery = true;
  public warWeaponsMastery = true;
  public lightArmorMastery = true;
  public mediumArmorMastery = true;
  public heavyArmorMastery = false;
  public shieldMastery = true;
  public classWeaponMasteries = '';
  public subClassWeaponMasteries = '';
  public raceWeaponMasteries = '';
  public classToolMasteries = '';
  public raceToolMasteries = '';

  public raceSource = 'Manuel des Joueurs';
  public classSource = 'Manuel des Joueurs';
  public subClassSource = 'Manuel des Joueurs';
  public backgroundSource = 'La Côte des Épées';

  public classFeatureLevel1 = "Rage, Défense sans armure";
  public classFeatureLevel2 = "Témérité, Sens du danger";
  public classFeatureLevel3 = "Voie primitive";
  public classFeatureLevel4 = "Amélioration de caractéristiques";
  public classFeatureLevel5 = "Attaque supplémentaire, Déplacement rapide";
  public classFeatureLevel6 = "";
  public classFeatureLevel7 = "Instinct sauvage";
  public classFeatureLevel8 = "Amélioration de caractéristiques";
  public classFeatureLevel9 = "Critique brutal (1 dé)";
  public classFeatureLevel10 = "";
  public classFeatureLevel11 = "Rage implacable";
  public classFeatureLevel12 = "Amélioration de caractéristiques";
  public classFeatureLevel13 = "Critique brutal (2 dés)";
  public classFeatureLevel14 = "";
  public classFeatureLevel15 = "Rage ininterrompue";
  public classFeatureLevel16 = "Amélioration de caractéristiques";
  public classFeatureLevel17 = "Critique brutal (3 dés)";
  public classFeatureLevel18 = "Puissance indomptable";
  public classFeatureLevel19 = "Amélioration de caractéristiques";
  public classFeatureLevel20 = "Champion primitif";



  public archetypeFeatureLevel1 = "";
  public archetypeFeatureLevel2 = "";
  public archetypeFeatureLevel3 = "Frénésie";
  public archetypeFeatureLevel4 = "";
  public archetypeFeatureLevel5 = "";
  public archetypeFeatureLevel6 = "Rage aveugle";
  public archetypeFeatureLevel7 = "";
  public archetypeFeatureLevel8 = "";
  public archetypeFeatureLevel9 = "";
  public archetypeFeatureLevel10 = "Présence intimidante";
  public archetypeFeatureLevel11 = "";
  public archetypeFeatureLevel12 = "";
  public archetypeFeatureLevel13 = "";
  public archetypeFeatureLevel14 = "Représailles";
  public archetypeFeatureLevel15 = "";
  public archetypeFeatureLevel16 = "";
  public archetypeFeatureLevel17 = "";
  public archetypeFeatureLevel18 = "";
  public archetypeFeatureLevel19 = "";
  public archetypeFeatureLevel20 = "";

  public clercCanalisationDivine = "";
  public clercCanalisationDivine2 = "";
  public paladinCanalisationDivine ="";


  public classSkillMasteries =
    'Deux parmi Athlétisme, Dressage, Intimidation, Nature, Perception et Survie';
  public raceSkillMasteries = '';
  public subClassSkillMasteries = '';

  public backgroundSkill = 'Accès à la bibliothèque';
  public backgroundSkillMasteries = 'Histoire, une parmi Arcanes, Nature et Religion';
  public backgroundToolMasteries =
    '';
  public backgroundOrigin = '';
  public backgroundLanguages = 'Deux langues au choix';

  public subClassToolMasteries = '';
  public raceLanguages = 'Commun et une au choix';
  public subClassLangages = '';
public classLangages = "";

  public selectedRace = 0;
  public selectedRaceName = "Humain";
  public selectedBackground = 0;
  public selectedClass = 0;
  public selectedClassName = "Barbare";

  public randomizedRace = 0;
  public randomizedBackground = 0;
  public randomizedClass = 0;
  public randomizedSubClass = 0;

  public spellsKnown = '0';

  public updateSpellsKnown = '0';
  public updateSpellLevel = '0';
  public updateSpellsInUI = '0';

  public cantripsKnown = '0';
  public spellsSlots = '';
  public spellsPrepared = 0;

  public classLock = false;
  public subClassLock = false;
  public raceLock = false;
  public backgroundLock = false;



  onSelected(value: any): void {}
  update(e: any) {
    this._classesService.selectedClassName =
      this.classes[this.selectedClass].name;
    this._classesService.selectedClassBasePv =
      this.classes[this.selectedClass].pvBase;
    this._classesService.selectedClassBonusSkill1 =
      this.classes[this.selectedClass].bonusSkill1;
    this._classesService.selectedClassBonusSkill2 =
      this.classes[this.selectedClass].bonusSkill2;
    this._classesService.selectedClassBonusSkill3 =
      this.classes[this.selectedClass].bonusSkill3;

    this._classesService.selectedClassType =
      this.classes[this.selectedClass].classType;

    this._classesService.selectedCantripGroup =
      this.classes[this.selectedClass].cantripGroup;

    this._classesService.selectedClass =
      this.classes[this.selectedClass].id;

    this.classWeaponMasteries =
      this.classes[this.selectedClass].classWeaponMasteries;
    this.classToolMasteries =
      this.classes[this.selectedClass].classToolMasteries;
    this.classSkillMasteries =
      this.classes[this.selectedClass].classSkillMasteries;

      this.classSource = this.classes[this.selectedClass].source;
      

this.updateClassFeatures();
this.selectedClassName = this.classes[this.selectedClass].name;
this.selectedArchetype = 0;
this.updateSubClassFeatures();
// Attribution des compétences d'archétype selon this.selectedClassName

    this.updateSpellsInUI;
this.selectedClassName = this.classes[this.selectedClass].name;
    this._caracteristicsService.level = 1;
    this.currentProficiency = 2;
    this._caracteristicsService.proficiency = 2;
    this.updateClass();
    this.updateLevel();
    this._spellsService.selectedClassName = this.classes[this.selectedClass].name;
    this._spellsService.level = this._caracteristicsService.level;

    this._spellsService.updateSpellLevelTable();
    this.updateDwarfArmorMasteries();
  }


updateClassName() {
  return this._classesService.selectedClassName
}

// updateName(e: any){
// this._caracteristicsService.characterName = this.characterName;
// }

reset() {

  this.selectedClass = 0;

  // this.updateSubClassFeatures();

    // this.selectedClass = Math.floor(Math.random() * 12) ;
    this._classesService.selectedClass = this.selectedClass;
  
    this._classesService.selectedClassName =  this.classes[this.selectedClass].name;
    this.selectedClassName = this.classes[this.selectedClass].name;
    this.classSource = this.classes[this.selectedClass].source;
  
    this.selectedArchetype = 0;
    this.updateSubClassFeatures();
  // Attribution des compétences d'archétype selon this.selectedClassName
  
  this._classesService.selectedClassBasePv =  this.classes[this.selectedClass].pvBase;
  this._classesService.selectedClassBonusSkill1 =  this.classes[this.selectedClass].bonusSkill1;
  this._classesService.selectedClassBonusSkill2 =  this.classes[this.selectedClass].bonusSkill2;
  this._classesService.selectedClassBonusSkill3 =  this.classes[this.selectedClass].bonusSkill3;
  
  this._classesService.selectedClassType =  this.classes[this.selectedClass].classType;
  this._classesService.selectedCantripGroup =  this.classes[this.selectedClass].cantripGroup;
  
  this.classWeaponMasteries =  this.classes[this.selectedClass].classWeaponMasteries;
  this.classToolMasteries =  this.classes[this.selectedClass].classToolMasteries;
  this.classSkillMasteries =  this.classes[this.selectedClass].classSkillMasteries;
  
  
  this.updateClassFeatures();
  // Attribution des compétences de classe selon this._classesService.selectedClass
  
  
  this._caracteristicsService.level = 1;
  this.currentProficiency = 2;
  this._caracteristicsService.proficiency = 2;
  
  this.updateClass();
  // Maitrises et sauvegardes
  
  
  this.updateLevel();

  this._spellsService.selectedClassName = this.classes[this.selectedClass].name;
  this._spellsService.level = this._caracteristicsService.level;

  this._spellsService.updateSpellLevelTable();
  
this.updateDwarfArmorMasteries();





















  // this._classesService.selectedClassName =
  //   this.classes[this.selectedClass].name;
  // this._classesService.selectedClassBasePv =
  //   this.classes[this.selectedClass].pvBase;
  // this._classesService.selectedClassBonusSkill1 =
  //   this.classes[this.selectedClass].bonusSkill1;
  // this._classesService.selectedClassBonusSkill2 =
  //   this.classes[this.selectedClass].bonusSkill2;
  // this._classesService.selectedClassBonusSkill3 =
  //   this.classes[this.selectedClass].bonusSkill3;
  // this._classesService.selectedClassType =
  //   this.classes[this.selectedClass].classType;

  // this._classesService.selectedCantripGroup =
  //   this.classes[this.selectedClass].cantripGroup;

  // this._classesService.selectedClass = this.classes[this.selectedClass].id;

  // this.classWeaponMasteries =
  //   this.classes[this.selectedClass].classWeaponMasteries;
  // this.classToolMasteries =
  //   this.classes[this.selectedClass].classToolMasteries;
  // this.classSkillMasteries =
  //   this.classes[this.selectedClass].classSkillMasteries;

  // this.updateSpellsInUI;

  // this._caracteristicsService.level = 1;
  // this.currentProficiency = 2;
  // this._caracteristicsService.proficiency = 2;
  // this.selectedClassName = "Barbare";

  // this.updateClass();
  // this.updateLevel();
  // this.selectedArchetype = 0;

  // this.updateSubClassFeatures();

  this.selectedRace = 0;
  this._racesService.selectedRace = this.races[this.selectedRace].name;
  this._racesService.selectedRaceSpeed = this.races[this.selectedRace].speed;
  this._racesService.selectedRaceFeatures =
    this.races[this.selectedRace].raceFeatures;
  this._racesService.selectedRaceCaracteristics =
    this.races[this.selectedRace].caracteristics;
  this.raceSkillMasteries = this.races[this.selectedRace].raceSkillMasteries;
  this.raceLanguages = this.races[this.selectedRace].languages;

  this.selectedBackground = 0;
    this._backgroundsService.selectedBackground =
      this.backgrounds[this.selectedBackground].name;
    this.backgroundSkill =
      this.backgrounds[this.selectedBackground].backgroundSkill;
    this.backgroundSkillMasteries =
      this.backgrounds[this.selectedBackground].backgroundSkillMasteries;
    this.backgroundLanguages =
      this.backgrounds[this.selectedBackground].backgroundLanguages;
    this.backgroundOrigin =
      this.backgrounds[this.selectedBackground].backgroundOrigin;
    this.backgroundToolMasteries =
      this.backgrounds[this.selectedBackground].backgroundTools;

      this.characterName = "";
}

randomize() {
this.randomizeRace();
this.randomizeClass();
this.randomizeSubClass();

this.randomizeBackground();
this.randomizeName();
}

randomizeName(){
  this._randomizerService.selectedClassName = this.selectedClassName;
  this._randomizerService.playerRace = this.races[this.selectedRace].name;
  this._randomizerService.randomizeName();
this.characterName = this._randomizerService.randomizedCharacterName;
}


randomizeClass() {
  if (this.classLock == false) {

    // this.selectedClass = Math.floor(Math.random() * 12) ;
    this._randomizerService.randomizeClass();
    this.selectedClass = this._randomizerService.randomizedClass;
    this._classesService.selectedClass = this.selectedClass;
  
    this._classesService.selectedClassName =  this.classes[this.selectedClass].name;
    this.selectedClassName = this.classes[this.selectedClass].name;
    this.classSource = this.classes[this.selectedClass].source;
  
    this.selectedArchetype = 0;
    this.updateSubClassFeatures();
  // Attribution des compétences d'archétype selon this.selectedClassName
  
  this._classesService.selectedClassBasePv =  this.classes[this.selectedClass].pvBase;
  this._classesService.selectedClassBonusSkill1 =  this.classes[this.selectedClass].bonusSkill1;
  this._classesService.selectedClassBonusSkill2 =  this.classes[this.selectedClass].bonusSkill2;
  this._classesService.selectedClassBonusSkill3 =  this.classes[this.selectedClass].bonusSkill3;
  
  this._classesService.selectedClassType =  this.classes[this.selectedClass].classType;
  this._classesService.selectedCantripGroup =  this.classes[this.selectedClass].cantripGroup;
  
  this.classWeaponMasteries =  this.classes[this.selectedClass].classWeaponMasteries;
  this.classToolMasteries =  this.classes[this.selectedClass].classToolMasteries;
  this.classSkillMasteries =  this.classes[this.selectedClass].classSkillMasteries;
  
  
  this.updateClassFeatures();
  // Attribution des compétences de classe selon this._classesService.selectedClass
  
  
  this._caracteristicsService.level = 1;
  this.currentProficiency = 2;
  this._caracteristicsService.proficiency = 2;
  
  this.updateClass();
  // Maitrises et sauvegardes
  
  
  this.updateLevel();

  this._spellsService.selectedClassName = this.classes[this.selectedClass].name;
  this._spellsService.level = this._caracteristicsService.level;

  this._spellsService.updateSpellLevelTable();
  
this.updateDwarfArmorMasteries();

  }




}

randomizeRace() {

  if (this.raceLock == false) {
    this._randomizerService.randomizeRace();
    this.selectedRace = this._randomizerService.randomizedRace;
    this._racesService.selectedRace = this.races[this.selectedRace].name;
    this._racesService.selectedRaceSpeed = this.races[this.selectedRace].speed;
    this._racesService.selectedRaceFeatures =
      this.races[this.selectedRace].raceFeatures;
    this._racesService.selectedRaceCaracteristics =
      this.races[this.selectedRace].caracteristics;
    this.raceSkillMasteries = this.races[this.selectedRace].raceSkillMasteries;
    this.raceLanguages = this.races[this.selectedRace].languages;
    this.raceSource = this.races[this.selectedRace].source;
    this.updateClass();
    this.updateSubClassFeatures();
    this.updateDwarfArmorMasteries();
    this.updateDwarfPV();
  }
}



// notify(){
//   dlg = null;
//   dlg = $dialogs.notify('Something Happened!','Something happened that I need to tell you.');
// }


lockClass() {
  switch(this.classLock) {
    case true :
      this.classLock = false;
      break;
      case false :
      this.classLock = true;
      break;
  }
  }  

lockSubClass() {
switch(this.subClassLock) {
  case true :
    this.subClassLock = false;
    break;
    case false :
    this.subClassLock = true;
    break;
}
}  
      
lockRace() {
  switch(this.raceLock) {
    case true :
      this.raceLock = false;
      break;
      case false :
      this.raceLock = true;
      break;
  }
  }  

  lockBackground() {
    switch(this.backgroundLock) {
      case true :
        this.backgroundLock = false;
        break;
        case false :
        this.backgroundLock = true;
        break;
    }
    }  



randomizeBackground() {
  if (this.backgroundLock == false) {
  this._randomizerService.randomizeBackground();
    this.selectedBackground = this._randomizerService.randomizedBackground;
    this._backgroundsService.selectedBackground =      this.backgrounds[this.selectedBackground].name;
    this.backgroundSkill =      this.backgrounds[this.selectedBackground].backgroundSkill;
    this.backgroundSkillMasteries =      this.backgrounds[this.selectedBackground].backgroundSkillMasteries;
    this.backgroundLanguages =      this.backgrounds[this.selectedBackground].backgroundLanguages;
    this.backgroundOrigin =      this.backgrounds[this.selectedBackground].backgroundOrigin;
    this.backgroundToolMasteries =      this.backgrounds[this.selectedBackground].backgroundTools;
      this.backgroundSource = this.backgrounds[this.selectedBackground].source;
  }
}

randomizeSubClass() {

if (this.subClassLock == false) {
  this._randomizerService.selectedClassName = this.selectedClassName;
  this._randomizerService.randomizeSubClass();
  this.selectedArchetype = this._randomizerService.randomizedSubClass;
  // if (this.selectedClassName == 'Clerc') {
  //   this.selectedArchetype = Math.floor(Math.random() * 14) ;
  // } else if (this.selectedClassName == 'Magicien') {
  //   this.selectedArchetype = Math.floor(Math.random() * 13) ;
  // } else if (this.selectedClassName == 'Artificier') {
  //   this.selectedArchetype = Math.floor(Math.random() * 4) ;
  // } else if (this.selectedClassName == 'Barbare' || this.selectedClassName == 'Barde' || this.selectedClassName == 'Rôdeur' ) {
  //   this.selectedArchetype = Math.floor(Math.random() * 8) ;
  // } else if (this.selectedClassName == 'Paladin' || this.selectedClassName == 'Roublard' || this.selectedClassName == 'Sorcier' ) {
  //   this.selectedArchetype = Math.floor(Math.random() * 9) ;
  // } else if (this.selectedClassName == 'Druide' || this.selectedClassName == 'Ensorceleur' ) {
  //   this.selectedArchetype = Math.floor(Math.random() * 7) ;
  // } else if (this.selectedClassName == 'Guerrier' || this.selectedClassName == 'Moine' ) {
  //   this.selectedArchetype = Math.floor(Math.random() * 10) ;
  // }

  this.updateSubClassFeatures();
  this._spellsService.selectedArchetypeName = this.selectedArchetypeName;
  this._spellsService.level = this._caracteristicsService.level;
  this._spellsService.updateSpellLevelTable();
  this.updateDwarfArmorMasteries();
}


 

}


  // public randomize(): void {
   

    

  // }

  updateRace(e: any) {
    this.raceWeaponMasteries = "";
    this.raceToolMasteries = "";
    this.raceSkillMasteries = "";
    this.raceLanguages = "";
    this._racesService.selectedRace = this.races[this.selectedRace].name;
    this.selectedRaceName = this.races[this.selectedRace].name;
    this._racesService.selectedRaceName = this.races[this.selectedRace].name;
    this._racesService.selectedRaceSpeed = this.races[this.selectedRace].speed;
    this._racesService.selectedRaceFeatures =
      this.races[this.selectedRace].raceFeatures;
    this._racesService.selectedRaceCaracteristics =
      this.races[this.selectedRace].caracteristics;
    this.raceSkillMasteries = this.races[this.selectedRace].raceSkillMasteries;
    this.raceLanguages = this.races[this.selectedRace].languages;
    this.raceSource = this.races[this.selectedRace].source;
    this.raceWeaponMasteries = this.races[this.selectedRace].raceWeaponMasteries;
    this.raceToolMasteries = this.races[this.selectedRace].raceToolMasteries;
    // if (this.selectedRaceName == "Nain des montagnes") {
    //   this.lightArmorMastery = true;
    //   this.mediumArmorMastery = true;
    // } else
    // this.lightArmorMastery = false;
    // this.mediumArmorMastery = false;
    this.updateClass();
    this.updateSubClassFeatures();

    this.updateDwarfArmorMasteries();
    this.updateDwarfPV();

  }

  updateBackground(e: any) {
    this._backgroundsService.selectedBackground =
      this.backgrounds[this.selectedBackground].name;
    this.backgroundSkill =
      this.backgrounds[this.selectedBackground].backgroundSkill;
    this.backgroundSkillMasteries =
      this.backgrounds[this.selectedBackground].backgroundSkillMasteries;
    this.backgroundLanguages =
      this.backgrounds[this.selectedBackground].backgroundLanguages;
    this.backgroundOrigin =
      this.backgrounds[this.selectedBackground].backgroundOrigin;
    this.backgroundToolMasteries =
      this.backgrounds[this.selectedBackground].backgroundTools;
      this.backgroundSource = this.backgrounds[this.selectedBackground].source;

  }

  updateArchetype(e: any) {
      this.updateSubClassFeatures();
    this._classFeaturesService.selectedArchetypeName = this.selectedArchetypeName;
      this._spellsService.level = this._caracteristicsService.level;
      this._spellsService.selectedArchetypeName = this.selectedArchetypeName;
      this._spellsService.updateSpellLevelTable();
  }

  constructor(
    // private _caracteristicsComponent : SpellsComponent,

    private _racesService: RacesService,
    private _classesService: ClassesService,
    private _armorsService: ArmorsService,
    private _caracteristicsService: CaracteristicsService,
    private _spellsService: SpellsService,
    private _classFeaturesService: ClassFeaturesService,
    private _backgroundsService: BackgroundsService,
    private _randomizerService: RandomizerService,
    public dialog: MatDialog
  ) {
    // this.level = 1;

    this.pv = 8;

    this.level = 1;
    this.classPv = 2;
    this.levelFeatures = '';
    // this.armorClass = this.selectedArmor;

    // this.currentProficiency = 5;
  }


  openDialog() {
    const dialogRef = this.dialog.open(About);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  levelUp = () => {
    this._caracteristicsService.level++;
    pvRoll =
      Math.floor(Math.random() * this._classesService.selectedClassBasePv) + 1;
    this._caracteristicsService.currentPV =
      this._caracteristicsService.currentPV + pvRoll;
      
        // this._spellsService.buttonClickEventTrack.next(event);
        
    // console.log(this.selectedPlayerClass);
    // this.updateClass();
    // this.updateArmorClass();
    // this._caracteristicsService.currentPV = pv;

    this.updateProficiency();
    this.currentProficiency = this._caracteristicsService.proficiency;
    this.updateLevel();
    this.updateClass();
    this.updateSubClassFeatures();
    this.sendMessage();

    this._spellsService.level = this._caracteristicsService.level;

    this._spellsService.updateSpellLevelTable();

  };

  refresh(){

  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this._spellsService.sendUpdate('Message from Sender Component to Receiver Component!');
}

  levelDown = () => {
    this._caracteristicsService.level--;
    this._caracteristicsService.currentPV =
      this._caracteristicsService.currentPV - pvRoll;
    // this.updateClass();

    if (this._caracteristicsService.level === 1) {
      this._caracteristicsService.currentPV =
        this._classesService.selectedClassBasePv;
    }
    // this._caracteristicsService.currentPV = pv;
    this.updateProficiency();
    this.currentProficiency = this._caracteristicsService.proficiency;
    this.updateLevel();
    this.updateClass();
    this.updateSubClassFeatures();
    this._spellsService.level = this._caracteristicsService.level;

    this._spellsService.updateSpellLevelTable();

  };

  updateProficiency = () => {
    if (this._caracteristicsService.level > 16) {
      this._caracteristicsService.proficiency = 6;
    } else if (this._caracteristicsService.level > 12) {
      this._caracteristicsService.proficiency = 5;
    } else if (this._caracteristicsService.level > 8) {
      this._caracteristicsService.proficiency = 4;
    } else if (this._caracteristicsService.level > 4) {
      this._caracteristicsService.proficiency = 3;
    } else if (this._caracteristicsService.level > 0) {
      this._caracteristicsService.proficiency = 2;
    }
  };

  updatedPV = () => {
    if (this._caracteristicsService.level === 1) {
      this._caracteristicsService.currentPV =
        this._classesService.selectedClassBasePv;
    }
    return (
      this._caracteristicsService.currentPV +
      this._caracteristicsService.constitutionModifier *
        this._caracteristicsService.level
    );
    // return pv + this._caracteristicsService.constitutionModifier * this._caracteristicsService.level;
  };

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max + 1);
  }

  minPV = () => {
    return (
      this._classesService.selectedClassBasePv +
      this._caracteristicsService.constitutionModifier *
        this._caracteristicsService.level +
      (this._caracteristicsService.level - 1) * 1
    );
  };

  maxPV = () => {
    return (
      this._classesService.selectedClassBasePv +
      this._caracteristicsService.constitutionModifier *
        this._caracteristicsService.level +
      (this._caracteristicsService.level - 1) *
        this._classesService.selectedClassBasePv
    );
  };
  pvFixe = () => {
    return (
      this._classesService.selectedClassBasePv +
      this._caracteristicsService.constitutionModifier *
        this._caracteristicsService.level +
      (this._caracteristicsService.level - 1) *
        (this._classesService.selectedClassBasePv / 2 + 1)
    );
  };

  currentSpeed = () => {
    return this._racesService.selectedRaceSpeed;
  };

  updatedLevel = () => {
    return this._caracteristicsService.level;
  };

  updateArmorClass = () => {
    let dexterityModifier = this._caracteristicsService.dexterityModifier;
    switch (this._armorsService.armorType) {
      case 'Aucune':
        if (this._classesService.selectedClassName == 'Barbare') {
          this.updatedArmorClass =
            10 +
            dexterityModifier +
            this._caracteristicsService.constitutionModifier +
            this._armorsService.selectedShieldValue;
        } else if (
          this._classesService.selectedClassName == 'Moine' &&
          this._armorsService.selectedShieldName == 'Aucun bouclier'
        ) {
          this.updatedArmorClass =
            10 + dexterityModifier + this._caracteristicsService.wisdomModifier;
        } else
          this.updatedArmorClass =
            10 + dexterityModifier + this._armorsService.selectedShieldValue;

        break;
      case 'Armure légère':
        this.updatedArmorClass =
          this._armorsService.selectedArmorValue +
          dexterityModifier +
          this._armorsService.selectedShieldValue;
        break;
      case 'Armure intermédiaire':
        if (dexterityModifier > 2) {
          this.updatedArmorClass =
            this._armorsService.selectedArmorValue +
            2 +
            this._armorsService.selectedShieldValue;
        } else {
          this.updatedArmorClass =
            this._armorsService.selectedArmorValue +
            dexterityModifier +
            this._armorsService.selectedShieldValue;
        }
        break;
      case 'Armure lourde':
        this.updatedArmorClass =
          this._armorsService.selectedArmorValue +
          this._armorsService.selectedShieldValue;
        break;
    }
    this._armorsService.selectedArmor = this.updatedArmorClass;
    // this._armorsService.selectedArmor = actualArmorClass;
    return this._armorsService.selectedArmor;
  };

  armorClass = () => {
    return this._armorsService.selectedArmorValue;
  };

  updateInitiative = () => {
    return this._caracteristicsService.initiativeBonus;
  };

  updatedLevelFeatures = function () {
    return levelFeatures;
  };

  updatedProficiency = function () {
    return currentProficiency;
  };

  // updateClassWeaponMasteries = function () {
  //   return this.classWeaponMasteries;
  // };

  // updateClassToolMasteries = function () {
  //   return currentProficiency;
  // };

  // updateClassSkillMasteries = function () {
  //   return currentProficiency;
  // };

  onFileChanged(event: any) {
    const file = event.target.files[0];
  }

  picture = true;
  //url; //Angular 8
  url: any; //Angular 11, for stricter type
  msg = '';

  //selectFile(event) { //Angular 8
  selectFile(event: any) {
    //Angular 11, for stricter type
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }
    this.picture = false;
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }
    // this.url = "https://i.pinimg.com/474x/72/33/9d/72339d38def6cf7d7210b43787a781ed.jpg";
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }

  // public source: string;
  // changeImage(path: string) {
  //     this.url = path;
  // }

  // showPreview(event:any) {

  //   if (event.target.files.length > 0) {
  //     let src = URL.createObjectURL(event.target.files[0]);
  //     let preview = document.getElementById("file-ip-" + "-preview");
  //   }

  //     let src = URL.createObjectURL(event.target.files[0]);
  //     let preview = document.getElementById("file-ip-");
  //     var reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //     this.url = reader.result;

  // }

  // updateMasteries = () => {
  // this.masteries = this._classesService.masteries.filter(function(mastery){
  //     return mastery.isMastered === true;
  //   }).map (function(mastery){
  //     return mastery.text;
  //   })

  // };

  // updateSubClass = () => {
  //   switch (this._classFeaturesService.selectedArchetypeName) {
  //     case 'Voie du Berserker':
  //      this._classFeaturesService.archetypeFeatureLevel3 = "Frénésie";
  //      this._classFeaturesService.archetypeFeatureLevel6 = "Rage aveugle";
  //      this._classFeaturesService.archetypeFeatureLevel10 = "Présence intimidante";
  //      this._classFeaturesService.archetypeFeatureLevel14 = "Représailles";
  //       break;
  //       case 'Voie des esprits':
  //      this._classFeaturesService.archetypeFeatureLevel3 = "Né dans la nature, Initiation";
  //      this._classFeaturesService.archetypeFeatureLevel6 = "Incarnation";
  //      this._classFeaturesService.archetypeFeatureLevel10 = "Communion";
  //      this._classFeaturesService.archetypeFeatureLevel14 = "Élévation";
  //       break;

  //   }
  // }

updateClassFeatures = () => {

this.classFeatureLevel1  = this.classFeatures[this._classesService.selectedClass].classFeatureLevel1 ;
this.classFeatureLevel2  = this.classFeatures[this._classesService.selectedClass].classFeatureLevel2 ;
this.classFeatureLevel3  = this.classFeatures[this._classesService.selectedClass].classFeatureLevel3 ;
this.classFeatureLevel4  = this.classFeatures[this._classesService.selectedClass].classFeatureLevel4 ;
this.classFeatureLevel5  = this.classFeatures[this._classesService.selectedClass].classFeatureLevel5 ;
this.classFeatureLevel6  = this.classFeatures[this._classesService.selectedClass].classFeatureLevel6 ;
this.classFeatureLevel7  = this.classFeatures[this._classesService.selectedClass].classFeatureLevel7 ;
this.classFeatureLevel8  = this.classFeatures[this._classesService.selectedClass].classFeatureLevel8 ;
this.classFeatureLevel9  = this.classFeatures[this._classesService.selectedClass].classFeatureLevel9 ;
this.classFeatureLevel10 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel10;
this.classFeatureLevel11 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel11;
this.classFeatureLevel12 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel12;
this.classFeatureLevel13 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel13;
this.classFeatureLevel14 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel14;
this.classFeatureLevel15 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel15;
this.classFeatureLevel16 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel16;
this.classFeatureLevel17 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel17;
this.classFeatureLevel18 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel18;
this.classFeatureLevel19 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel19;
this.classFeatureLevel20 = this.classFeatures[this._classesService.selectedClass].classFeatureLevel20;
}

updateDwarfArmorMasteries() {
  if (this._racesService.selectedRaceName == "Nain des montagnes") {
    this.lightArmorMastery = true;
    this.mediumArmorMastery = true;
  }

}

updateDwarfPV() {
  if (this._racesService.selectedRaceName == "Nain des collines") {
    this._caracteristicsService.dwarfPV = 1;
  } else {
    this._caracteristicsService.dwarfPV = 0;
  }
}

updateSubClassFeatures = () => {
  this.subClassLangages = "";
  this.subClassSkillMasteries = "";
  this.subClassToolMasteries = "";
  this.subClassWeaponMasteries = "";
  switch (this.selectedClassName) {
    case 'Barbare':
      this.selectedArchetypeName   =  this.barbareArchetypes[this.selectedArchetype].name;   
      this.subClassSource = this.barbareArchetypes[this.selectedArchetype].source; 
      this.archetypeFeatureLevel1  =  "";
      this.archetypeFeatureLevel2  =  "";
      this.archetypeFeatureLevel3  =  this.barbareArchetypes[this.selectedArchetype].archetypeFeatureLevel3;
      this.archetypeFeatureLevel6  =  this.barbareArchetypes[this.selectedArchetype].archetypeFeatureLevel6;
      this.archetypeFeatureLevel7  =  "";
      this.archetypeFeatureLevel8  =  "";
      this.archetypeFeatureLevel9  =  "";
      this.archetypeFeatureLevel10 =  this.barbareArchetypes[this.selectedArchetype].archetypeFeatureLevel10;
      this.archetypeFeatureLevel11 =  "";
      this.archetypeFeatureLevel13 =  "";
      this.archetypeFeatureLevel14 =  this.barbareArchetypes[this.selectedArchetype].archetypeFeatureLevel14;
      this.archetypeFeatureLevel15 =  "";
      this.archetypeFeatureLevel17 =  "";
      this.archetypeFeatureLevel18 =  "";
      this.archetypeFeatureLevel20 =  "";
      break;
      case 'Barde':
      this.selectedArchetypeName =   this.bardeArchetypes[this.selectedArchetype].name;
      this.subClassSource = this.bardeArchetypes[this.selectedArchetype].source; 
      this.archetypeFeatureLevel1  =  "";
      this.archetypeFeatureLevel2  =  "";
      this.archetypeFeatureLevel3  =  this.bardeArchetypes[this.selectedArchetype].archetypeFeatureLevel3;
      this.archetypeFeatureLevel6  =  this.bardeArchetypes[this.selectedArchetype].archetypeFeatureLevel6;
      this.archetypeFeatureLevel7  =  "";
      this.archetypeFeatureLevel8  =  "";
      this.archetypeFeatureLevel9  =  "";
      this.archetypeFeatureLevel10 =  "";
      this.archetypeFeatureLevel11 =  "";
      this.archetypeFeatureLevel13 =  "";
      this.archetypeFeatureLevel14 =  this.bardeArchetypes[this.selectedArchetype].archetypeFeatureLevel14;
      this.archetypeFeatureLevel15 =  "";
      this.archetypeFeatureLevel17 =  "";
      this.archetypeFeatureLevel18 =  "";
      this.archetypeFeatureLevel20 =  "";
      if (this.selectedArchetypeName == "Vaillance" && this._caracteristicsService.level>2) {
        this.subClassSkillMasteries = "";
        this.warWeaponsMastery = true;
        this.mediumArmorMastery = true;
        this.shieldMastery = true;
       } else if (this.selectedArchetypeName == "Savoir" && this._caracteristicsService.level>2){
        this.subClassSkillMasteries = "3 compétences de votre choix";
        this.warWeaponsMastery = false;
        this.mediumArmorMastery = false;
        this.shieldMastery = false;
        } else {
        this.subClassSkillMasteries = "";
              this.warWeaponsMastery = false;
            this.mediumArmorMastery = false;
            this.shieldMastery = false;
            }
      break;
      case 'Clerc':
      this.subClassToolMasteries = "";
      this.selectedArchetypeName =   this.clercArchetypes[this.selectedArchetype].name;
      this.subClassSource = this.clercArchetypes[this.selectedArchetype].source; 
      this.archetypeFeatureLevel1  =  this.clercArchetypes[this.selectedArchetype].archetypeFeatureLevel1;
      this.archetypeFeatureLevel2  =  this.clercArchetypes[this.selectedArchetype].archetypeFeatureLevel2;
      this.archetypeFeatureLevel3  =  "";
      this.archetypeFeatureLevel6  =  this.clercArchetypes[this.selectedArchetype].archetypeFeatureLevel6;
      this.archetypeFeatureLevel7  =  "";
      this.archetypeFeatureLevel8  =  this.clercArchetypes[this.selectedArchetype].archetypeFeatureLevel8;
      this.archetypeFeatureLevel9  =  "";
      this.archetypeFeatureLevel10 =  "";
      this.archetypeFeatureLevel11 =  "";
      this.archetypeFeatureLevel13 =  "";
      this.archetypeFeatureLevel14 =  this.clercArchetypes[this.selectedArchetype].archetypeFeatureLevel14;
      this.archetypeFeatureLevel15 =  "";
      this.archetypeFeatureLevel17 =  this.clercArchetypes[this.selectedArchetype].archetypeFeatureLevel17;
      this.archetypeFeatureLevel18 =  "";
      this.archetypeFeatureLevel20 =  "";
      this.clercCanalisationDivine = this.clercArchetypes[this.selectedArchetype].clercCanalisationDivine;
      this.clercCanalisationDivine2 = this.clercArchetypes[this.selectedArchetype].clercCanalisationDivine2;
      if (this.selectedArchetypeName == "Guerre" || this.selectedArchetypeName == "Tempête" || this.selectedArchetypeName == "Crépuscule") {
        this.warWeaponsMastery = true;
        this.heavyArmorMastery = true;
      } else if (this.selectedArchetypeName == "Nature" || this.selectedArchetypeName == "Vie") {
        this.warWeaponsMastery = false;
        this.heavyArmorMastery = true;
      } else if (this.selectedArchetypeName == "Forge") {
        this.warWeaponsMastery = false;
        this.heavyArmorMastery = true;
        this.subClassToolMasteries = "outils de forgeron";
        this.subClassSkillMasteries = "";
      } else if (this.selectedArchetypeName == "Ordre") {
        this.warWeaponsMastery = false;
        this.heavyArmorMastery = true;
        this.subClassSkillMasteries = "Intimidation ou Persuasion";
      } else if (this.selectedArchetypeName == "Paix") {
        this.warWeaponsMastery = false;
        this.heavyArmorMastery = false;
        this.subClassSkillMasteries = "Intuition, Persuasion ou Représentation";
      } else if (this.selectedArchetypeName == "Arcane") {
        this.warWeaponsMastery = false;
        this.heavyArmorMastery = false;
        this.subClassSkillMasteries = "Arcanes";
      } else if (this.selectedArchetypeName == "Savoir") {
        this.warWeaponsMastery = false;
        this.heavyArmorMastery = false;
        this.subClassSkillMasteries = "Expertise dans deux compétences parmi Arcanes, Histoire, Nature ou Religion";
        this.subClassLangages = "Deux langues de votre choix";
      } else {
        this.warWeaponsMastery = false;
        this.heavyArmorMastery = false;
        this.subClassSkillMasteries = "";
      }
      break;
      case 'Druide':
        this.selectedArchetypeName =   this.druideArchetypes[this.selectedArchetype].name;
        this.subClassSource = this.druideArchetypes[this.selectedArchetype].source; 
        this.archetypeFeatureLevel1  = "";
        this.archetypeFeatureLevel2  = this.druideArchetypes[this.selectedArchetype].archetypeFeatureLevel2;
        this.archetypeFeatureLevel3  = "";
        this.archetypeFeatureLevel6  = this.druideArchetypes[this.selectedArchetype].archetypeFeatureLevel6;
        this.archetypeFeatureLevel7  = "";
        this.archetypeFeatureLevel8  = "";
        this.archetypeFeatureLevel9  = "";
        this.archetypeFeatureLevel10 = this.druideArchetypes[this.selectedArchetype].archetypeFeatureLevel10;
        this.archetypeFeatureLevel11 = "";
        this.archetypeFeatureLevel13 = "";
        this.archetypeFeatureLevel14 = this.druideArchetypes[this.selectedArchetype].archetypeFeatureLevel14;
        this.archetypeFeatureLevel15 = "";
        this.archetypeFeatureLevel17 = "";
        this.archetypeFeatureLevel18 = "";
        this.archetypeFeatureLevel20 = "";
        break;
        case 'Ensorceleur':
          this.selectedArchetypeName =   this.ensorceleurArchetypes[this.selectedArchetype].name;
          this.subClassSource = this.ensorceleurArchetypes[this.selectedArchetype].source; 
          this.archetypeFeatureLevel1  = this.ensorceleurArchetypes[this.selectedArchetype].archetypeFeatureLevel1;
          this.archetypeFeatureLevel2  = "";
          this.archetypeFeatureLevel3  = "";
          this.archetypeFeatureLevel6  = this.ensorceleurArchetypes[this.selectedArchetype].archetypeFeatureLevel6;
          this.archetypeFeatureLevel7  = "";
          this.archetypeFeatureLevel8  = "";
          this.archetypeFeatureLevel9  = "";
          this.archetypeFeatureLevel10 = "";
          this.archetypeFeatureLevel11 = "";
          this.archetypeFeatureLevel13 = "";
          this.archetypeFeatureLevel14 = this.ensorceleurArchetypes[this.selectedArchetype].archetypeFeatureLevel14;
          this.archetypeFeatureLevel15 = "";
          this.archetypeFeatureLevel17 = "";
          this.archetypeFeatureLevel18 = this.ensorceleurArchetypes[this.selectedArchetype].archetypeFeatureLevel18;
          this.archetypeFeatureLevel20 = "";
          break;
          case 'Guerrier':
            this.subClassSkillMasteries = "";
            this.subClassToolMasteries = "";
            this.selectedArchetypeName =   this.guerrierArchetypes[this.selectedArchetype].name;
            this.subClassSource = this.guerrierArchetypes[this.selectedArchetype].source; 
            this.archetypeFeatureLevel1  = "";
            this.archetypeFeatureLevel2  = "";
            this.archetypeFeatureLevel3  = this.guerrierArchetypes[this.selectedArchetype].archetypeFeatureLevel3;
            this.archetypeFeatureLevel6  = "";
            this.archetypeFeatureLevel7  = this.guerrierArchetypes[this.selectedArchetype].archetypeFeatureLevel7;
            this.archetypeFeatureLevel8  = "";
            this.archetypeFeatureLevel9  = "";
            this.archetypeFeatureLevel10 = this.guerrierArchetypes[this.selectedArchetype].archetypeFeatureLevel10;
            this.archetypeFeatureLevel11 = "";
            this.archetypeFeatureLevel13 = "";
            this.archetypeFeatureLevel14 = "";
            this.archetypeFeatureLevel15 = this.guerrierArchetypes[this.selectedArchetype].archetypeFeatureLevel15;
            this.archetypeFeatureLevel17 = "";
            this.archetypeFeatureLevel18 = this.guerrierArchetypes[this.selectedArchetype].archetypeFeatureLevel18;
            this.archetypeFeatureLevel20 = "";
            if (this.selectedArchetypeName == "Chevalier du dragon pourpre" && this._caracteristicsService.level>6) {
              this.subClassSkillMasteries = "Persuasion, ou une parmi Dressage, Intimidation, Perspicacité et Représentation si vous l'avez déjà; Expertise dans Persuasion";
            } else if (this.selectedArchetypeName == "Maître de guerre" && this._caracteristicsService.level>2) {
              this.subClassToolMasteries = "Un outil d'artisan de votre choix";
            } 
            break;
            case 'Magicien':
              this.subClassSkillMasteries = "";
                this.subClassWeaponMasteries = "";
                this.lightArmorMastery = false;
              this.selectedArchetypeName =   this.magicienArchetypes[this.selectedArchetype].name;
              this.subClassSource = this.magicienArchetypes[this.selectedArchetype].source; 
              this.archetypeFeatureLevel1  = "";
              this.archetypeFeatureLevel2  = this.magicienArchetypes[this.selectedArchetype].archetypeFeatureLevel2;
              this.archetypeFeatureLevel3  = "";
              this.archetypeFeatureLevel6  = this.magicienArchetypes[this.selectedArchetype].archetypeFeatureLevel6;
              this.archetypeFeatureLevel7  = "";
              this.archetypeFeatureLevel8  = "";
              this.archetypeFeatureLevel9  = "";
              this.archetypeFeatureLevel10 = this.magicienArchetypes[this.selectedArchetype].archetypeFeatureLevel10;
              this.archetypeFeatureLevel11 = "";
              this.archetypeFeatureLevel13 = "";
              this.archetypeFeatureLevel14 = this.magicienArchetypes[this.selectedArchetype].archetypeFeatureLevel14;
              this.archetypeFeatureLevel15 = "";
              this.archetypeFeatureLevel17 = "";
              this.archetypeFeatureLevel18 = "";
              this.archetypeFeatureLevel20 = "";
              if (this.selectedArchetypeName == "Chantelame" && this._caracteristicsService.level>1) {
                this.subClassSkillMasteries = "Représentation";
                this.subClassWeaponMasteries = "Une arme de corps à corps à une main de votre choix";
                this.lightArmorMastery = true;
              } 
              break;
              case 'Moine':
                this.subClassSkillMasteries = "";
                this.subClassToolMasteries = "";
                this.selectedArchetypeName =   this.moineArchetypes[this.selectedArchetype].name;
                this.subClassSource = this.moineArchetypes[this.selectedArchetype].source; 
                this.archetypeFeatureLevel1  = "";
                this.archetypeFeatureLevel2  = this.moineArchetypes[this.selectedArchetype].archetypeFeatureLevel2;
                this.archetypeFeatureLevel3  = "";
                this.archetypeFeatureLevel6  = this.moineArchetypes[this.selectedArchetype].archetypeFeatureLevel6;
                this.archetypeFeatureLevel7  = "";
                this.archetypeFeatureLevel8  = "";
                this.archetypeFeatureLevel9  = "";
                this.archetypeFeatureLevel10 = "";
                this.archetypeFeatureLevel11 = this.moineArchetypes[this.selectedArchetype].archetypeFeatureLevel11;
                this.archetypeFeatureLevel13 = "";
                this.archetypeFeatureLevel14 = "";
                this.archetypeFeatureLevel15 = "";
                this.archetypeFeatureLevel17 = this.moineArchetypes[this.selectedArchetype].archetypeFeatureLevel17;
                this.archetypeFeatureLevel18 = "";
                this.archetypeFeatureLevel20 = "";
                if (this.selectedArchetypeName == "Miséricorde" && this._caracteristicsService.level>2) {
                  this.subClassSkillMasteries = "Intuition et Médecine";
                  this.subClassToolMasteries = "Matériel d'herboriste";
                } 
                
                break;
                case 'Paladin':
                  this.selectedArchetypeName =   this.paladinArchetypes[this.selectedArchetype].name;
                  this.subClassSource = this.paladinArchetypes[this.selectedArchetype].source; 
                  this.archetypeFeatureLevel1  = "";
                  this.archetypeFeatureLevel2  = "";
                  this.archetypeFeatureLevel3  = this.paladinArchetypes[this.selectedArchetype].archetypeFeatureLevel3;
                  this.archetypeFeatureLevel6  = "";
                  this.archetypeFeatureLevel7  = this.paladinArchetypes[this.selectedArchetype].archetypeFeatureLevel7;
                  this.archetypeFeatureLevel8  = "";
                  this.archetypeFeatureLevel9  = "";
                  this.archetypeFeatureLevel10 = "";
                  this.archetypeFeatureLevel11 = "";
                  this.archetypeFeatureLevel13 = "";
                  this.archetypeFeatureLevel14 = "";
                  this.archetypeFeatureLevel15 = this.paladinArchetypes[this.selectedArchetype].archetypeFeatureLevel15;
                  this.archetypeFeatureLevel17 = "";
                  this.archetypeFeatureLevel18 = this.paladinArchetypes[this.selectedArchetype].archetypeFeatureLevel18;
                  this.archetypeFeatureLevel20 = this.paladinArchetypes[this.selectedArchetype].archetypeFeatureLevel20;
                  this.paladinCanalisationDivine = this.paladinArchetypes[this.selectedArchetype].paladinCanalisationDivine;
                  break;
                  case 'Rôdeur':
                    this.subClassSkillMasteries = "";
                    this.selectedArchetypeName =   this.rodeurArchetypes[this.selectedArchetype].name;
                    this.subClassSource = this.rodeurArchetypes[this.selectedArchetype].source; 
                    this.archetypeFeatureLevel1  = "";
                    this.archetypeFeatureLevel2  = "";
                    this.archetypeFeatureLevel3  = this.rodeurArchetypes[this.selectedArchetype].archetypeFeatureLevel3;
                    this.archetypeFeatureLevel6  = "";
                    this.archetypeFeatureLevel7  = this.rodeurArchetypes[this.selectedArchetype].archetypeFeatureLevel7;
                    this.archetypeFeatureLevel8  = "";
                    this.archetypeFeatureLevel9  = "";
                    this.archetypeFeatureLevel10 = "";
                    this.archetypeFeatureLevel11 = this.rodeurArchetypes[this.selectedArchetype].archetypeFeatureLevel11;
                    this.archetypeFeatureLevel13 = "";
                    this.archetypeFeatureLevel14 = "";
                    this.archetypeFeatureLevel15 = this.rodeurArchetypes[this.selectedArchetype].archetypeFeatureLevel15;
                    this.archetypeFeatureLevel17 = "";
                    this.archetypeFeatureLevel18 = "";
                    this.archetypeFeatureLevel20 = "";
                    if (this.selectedArchetypeName == "Vagabond féérique" && this._caracteristicsService.level>2) {
                      this.subClassSkillMasteries = "Persuasion, Représentation ou Tromperie";
                    } 
                    break;
                      case 'Roublard':
                        this.selectedArchetypeName =   this.roublardArchetypes[this.selectedArchetype].name;
                        this.subClassSource = this.roublardArchetypes[this.selectedArchetype].source; 
                        this.archetypeFeatureLevel1  = "";
                        this.archetypeFeatureLevel2  = "";
                        this.archetypeFeatureLevel3  = this.roublardArchetypes[this.selectedArchetype].archetypeFeatureLevel3;
                        this.archetypeFeatureLevel6  = "";
                        this.archetypeFeatureLevel7  = "";
                        this.archetypeFeatureLevel8  = "";
                        this.archetypeFeatureLevel9  = this.roublardArchetypes[this.selectedArchetype].archetypeFeatureLevel9;
                        this.archetypeFeatureLevel10 = "";
                        this.archetypeFeatureLevel11 = "";
                        this.archetypeFeatureLevel13 = this.roublardArchetypes[this.selectedArchetype].archetypeFeatureLevel13;
                        this.archetypeFeatureLevel14 = "";
                        this.archetypeFeatureLevel15 = "";
                        this.archetypeFeatureLevel17 = this.roublardArchetypes[this.selectedArchetype].archetypeFeatureLevel17;
                        this.archetypeFeatureLevel18 = "";
                        this.archetypeFeatureLevel20 = "";
                        if (this.selectedArchetypeName == "Assassin" && this._caracteristicsService.level>2) {
                          this.subClassToolMasteries = "Accessoires de déguisement et matériel d'empoisonneur";
                        } else 
                        this.subClassToolMasteries = "";

                        break;
                        case 'Sorcier':
                          this.selectedArchetypeName =   this.sorcierArchetypes[this.selectedArchetype].name;
                          this.subClassSource = this.sorcierArchetypes[this.selectedArchetype].source; 
                          this.archetypeFeatureLevel1  = this.sorcierArchetypes[this.selectedArchetype].archetypeFeatureLevel1;
                          this.archetypeFeatureLevel2  = "";
                          this.archetypeFeatureLevel3  = "";
                          this.archetypeFeatureLevel6  = this.sorcierArchetypes[this.selectedArchetype].archetypeFeatureLevel6;
                          this.archetypeFeatureLevel7  = "";
                          this.archetypeFeatureLevel8  = "";
                          this.archetypeFeatureLevel9  = "";
                          this.archetypeFeatureLevel10 = this.sorcierArchetypes[this.selectedArchetype].archetypeFeatureLevel10;
                          this.archetypeFeatureLevel11 = "";
                          this.archetypeFeatureLevel13 = "";
                          this.archetypeFeatureLevel14 = this.sorcierArchetypes[this.selectedArchetype].archetypeFeatureLevel14;
                          this.archetypeFeatureLevel15 = "";
                          this.archetypeFeatureLevel17 = "";
                          this.archetypeFeatureLevel18 = "";
                          this.archetypeFeatureLevel20 = "";
                          break;
  }

}


bardSkills = () => {
  if (this._caracteristicsService.level>9){
    this.classSkillMasteries = "Trois au choix, Expertise dans quatre compétences de votre choix";
    } else if (this._caracteristicsService.level>2){
      this.classSkillMasteries = "Trois au choix, Expertise dans deux compétences de votre choix";
      } else {
        this.classSkillMasteries = "Trois au choix";
        } 
}

  updateClass = () => {
    this.classLangages ="";
    switch (this.selectedClassName) {
      case 'Barbare':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = true;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = false;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = true;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = true;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = false;
        break;
      case 'Barde':
        // this.bardSkills();
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = true;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = true;
        if (this._caracteristicsService.level>9){
          this.classSkillMasteries = "Trois au choix, Expertise dans quatre compétences de votre choix";
          } else if (this._caracteristicsService.level>2){
            this.classSkillMasteries = "Trois au choix, Expertise dans deux compétences de votre choix";
            } else {
              this.classSkillMasteries = "Trois au choix";
              } 

        break;
      case 'Clerc':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = false;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = true;
        this._caracteristicsService.charismaCheck = true;
        



        break;
      case 'Druide':
        this.commonWeaponsMastery = false;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = false;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = true;
        this._caracteristicsService.wisdomCheck = true;
        this._caracteristicsService.charismaCheck = false;
        this.classLangages = "Druidique";

        break;
      case 'Ensorceleur':
        this.commonWeaponsMastery = false;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = false;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = true;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = true;
        break;
      case 'Guerrier':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = true;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = true;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = true;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = true;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = false;
        break;
      case 'Magicien':
        this.commonWeaponsMastery = false;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = false;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = true;
        this._caracteristicsService.wisdomCheck = true;
        this._caracteristicsService.charismaCheck = false;
        break;
      case 'Moine':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = false;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        if (this._caracteristicsService.level>13){
          this._caracteristicsService.forceCheck = true;
          this._caracteristicsService.dexterityCheck = true;
          this._caracteristicsService.constitutionCheck = true;
          this._caracteristicsService.intelligenceCheck = true;
          this._caracteristicsService.wisdomCheck = true;
          this._caracteristicsService.charismaCheck = true;
          } else {
            this._caracteristicsService.forceCheck = true;
            this._caracteristicsService.dexterityCheck = true;
            this._caracteristicsService.constitutionCheck = false;
            this._caracteristicsService.intelligenceCheck = false;
            this._caracteristicsService.wisdomCheck = false;
            this._caracteristicsService.charismaCheck = false;
            } 




        break;
      case 'Paladin':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = true;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = true;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = true;
        this._caracteristicsService.charismaCheck = true;
        break;
      case 'Rôdeur':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = true;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = false;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = true;
        this._caracteristicsService.dexterityCheck = true;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = false;
        this.classLangages = "Une langue de votre choix parlée par votre ennemi juré";
        break;
      case 'Roublard':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = true;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = true;
        this._caracteristicsService.charismaCheck = false;
        this.classLangages = "Argot des voleurs";
        if (this._caracteristicsService.level>14){
          this._caracteristicsService.wisdomCheck = true;
          this.classSkillMasteries = "Expertise dans quatre compétences que vous maîtrisez, ou dans trois compétences et vos outils de voleur";
          } else if (this._caracteristicsService.level>5){
          this._caracteristicsService.wisdomCheck = false;
            this.classSkillMasteries = "Expertise dans quatre compétences que vous maîtrisez, ou dans trois compétences et vos outils de voleur";
            } else if (this._caracteristicsService.level>2){
          this._caracteristicsService.wisdomCheck = false;
              this.classSkillMasteries = "Expertise dans deux compétences que vous maîtrisez, ou dans une compétence et vos outils de voleur";
              } else {
                this._caracteristicsService.wisdomCheck = false;
                this.classSkillMasteries = "";
                }


        break;
      case 'Sorcier':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = false;
        this.heavyArmorMastery = false;
        this.shieldMastery = false;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = false;
        this._caracteristicsService.intelligenceCheck = false;
        this._caracteristicsService.wisdomCheck = true;
        this._caracteristicsService.charismaCheck = true;
        break;
    }
  };

//   updateSpellLevelTable(){

// }




  // updateClassFeature = () => {
  //   return this._classFeaturesService.classFeature;
  // };

  updateBonusSkill = () => {
    // return this._classFeaturesService.archetypeFeatureLevel10;
    return this._classFeaturesService.bonusSkill;
  };

  public classFeaturesList = [] as any[];
  // this._classFeaturesService.classFeature = this.classFeaturesList[this.level-1];

  updateLevel = () => {
    // const ul = document.querySelector('#featureListd') as HTMLElement;
    // const ul2 = document.querySelector('#featureList2d') as HTMLElement;
    // let affichage = '<ul>';
    // let affichage2 = '<ul>';
    // this._classFeaturesService.bonusSkill = this.classFeatures[this._classesService.selectedId].bonusSkillLevel[this.level];

    switch (this._caracteristicsService.level) {
      case 1:
        this._classFeaturesService.bonusSkill =          this.classFeatures[this._classesService.selectedClass].bonusSkillLevel1;
        // affichage = `<ul> <li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage = ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel1} ` + "\n";
        break;
      case 2:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel2;
        // affichage += ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel1} ` + "\n";
        // affichage2 += ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel2} ` + "\n";

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        break;
      case 3:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel3;
        // affichage += ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel1} ` + "\n";
        // affichage2 += ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel2} ` + "\n";
        // affichage += ` ${this.classFeatures[this._classesService.selectedId].classFeatureLevel3} ` + "\n";
        // affichage += `<li> ${
        //   this.barbareArchetypes[this._classFeaturesService.selectedArchetype]
        //     .archetypeFeatureLevel3
        // } </li> `;
        // this._classFeaturesService.archetypeFeatureLevel3
        

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage += `<li> ${
        //   this._classFeaturesService.archetypeFeatureLevel3
        // } </li> `;
        break;
      case 4:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel4;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        break;
      case 5:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel5;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        break;
      case 6:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel6;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        break;
      case 7:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel7;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        break;
      case 8:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel8;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        break;
      case 9:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel9;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        break;
      case 10:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel10;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        break;
      case 11:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel11;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel11
        // } </li> `;
        break;
      case 12:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel12;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel11
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel12
        // } </li> `;
        break;
      case 13:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel13;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel11
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel12
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel13
        // } </li> `;
        break;
      case 14:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel14;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel11
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel12
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel13
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel14
        // } </li> `;
        break;
      case 15:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel15;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel11
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel12
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel13
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel14
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel15
        // } </li> `;
        break;
      case 16:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel16;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel11
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel12
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel13
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel14
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel15
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel16
        // } </li> `;
        break;
      case 17:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel17;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel11
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel12
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel13
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel14
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel15
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel16
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel17
        // } </li> `;
        break;
      case 18:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel18;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel11
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel12
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel13
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel14
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel15
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel16
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel17
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel18
        // } </li> `;
        break;
      case 19:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel19;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel11
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel12
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel13
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel14
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel15
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel16
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel17
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel18
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel19
        // } </li> `;
        break;
      case 20:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel20;

        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel1
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel2
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel3
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel4
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel5
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel6
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel7
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel8
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel9
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel10
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel11
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel12
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel13
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel14
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel15
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel16
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel17
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel18
        // } </li> `;
        // affichage += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel19
        // } </li> `;
        // affichage2 += `<li> ${
        //   this.classFeatures[this._classesService.selectedClass]
        //     .classFeatureLevel20
        // } </li> `;
        break;
    }
    // affichage += '</ul>';
    // affichage2 += '</ul>';
    // ul.innerHTML = affichage;
    // ul2.innerHTML = affichage2;
  };

  public races = [] as any[];
  public armors = [] as any[];
  public spells = [] as any[];
  public classFeatures = [] as any[];
  public backgrounds = [] as any[];

  ngOnInit(): void {
    this._racesService.getRaces().subscribe((data) => (this.races = data));
    this._spellsService.getSpells().subscribe((data) => (this.spells = data));
    this._classesService
      .getClasses()
      .subscribe((data) => (this.classes = data));
    this._armorsService.getArmors().subscribe((data) => (this.armors = data));
    this._classFeaturesService
      .getClassFeatures()
      .subscribe((data) => (this.classFeatures = data));
    this._backgroundsService
      .getBackgrounds()
      .subscribe((data) => (this.backgrounds = data));
      this.barbareArchetypes = this._classFeaturesService.getBarbareArchetypes();
      this.bardeArchetypes = this._classFeaturesService.getBardeArchetypes();
      this.clercArchetypes = this._classFeaturesService.getClercArchetypes();
      this.druideArchetypes = this._classFeaturesService.getDruideArchetypes();
      this.ensorceleurArchetypes = this._classFeaturesService.getEnsorceleurArchetypes();
      this.guerrierArchetypes = this._classFeaturesService.getGuerrierArchetypes();
      this.magicienArchetypes = this._classFeaturesService.getMagicienArchetypes();
      this.moineArchetypes = this._classFeaturesService.getMoineArchetypes();
      this.paladinArchetypes = this._classFeaturesService.getPaladinArchetypes();
      this.rodeurArchetypes = this._classFeaturesService.getRodeurArchetypes();
      this.roublardArchetypes = this._classFeaturesService.getRoublardArchetypes();
      this.sorcierArchetypes = this._classFeaturesService.getSorcierArchetypes();
    this.updateClass();
    this._randomizerService.getNames().subscribe((data) => (this._randomizerService.names = data));

    // this.updateLevel();
    this.updatedArmorClass = 9;
    this._classesService.selectedClassType = 'Fighter';
    this._classesService.selectedCantripGroup = 'A';
    this._classesService.selectedClassName = 'Barbare';
    this.selectedArchetype = 0;
    // this.updateSubClass();
    this.updateClassFeatures();
    this.updateSubClassFeatures();
    // this.selectedRace = 0;
    // this.selectedClass = 0;
    // this.selectedBackground = 0;
    // this._backgroundsService.selectedBackground = 0;
    // this.updateBackground();
    this._spellsService.level1SpellsKnown = '0';
    this.updateSpellsKnown;
    this.reset();
    // this.selectedRace = 0
  }

  ngAfterViewInit(): void {
    this.updateSpellsKnown = this.child.updateSpellsKnown();
    // this.updateSpellLevelTable = this.child.updateSpellLevelTable();
    // this.updateSpellsKnown = this.child.updateSpellsKnown()
    this.updateSpellLevel = this.child.updateSpellLevel();
    // this.calculatePreparedSpells = this.child.calculatePreparedSpells();
    // this.updatedSpellsSlots = this.child.updatedSpellsSlots();
    this.updateSpellsInUI = this.child.updateSpellsInUI();
    // this.refresh = this.child.refresh();
  }
}

let pvRoll = 1;
let pv = 1;
let level = 1;
let basePV = 1;
let currentProficiency = 2;
let currentPv = 5;
let levelFeatures = '';
let updatedArmorClass = 1;


@Component({
  selector: 'about',
  templateUrl: 'about.html',
})
export class About {}