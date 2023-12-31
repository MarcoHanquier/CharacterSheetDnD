import { NgIf, NgSwitch } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RacesService } from 'src/app/services/races.service';
import { ClassesService } from 'src/app/services/classes.service';
import { SpellsService } from 'src/app/services/spells.service';
import { ArmorsService } from 'src/app/services/armors.service';
import { CaracteristicsService } from 'src/app/services/caracteristics.service';
import { SpellsComponent } from '../spells/spells.component';
import { ClassFeaturesService } from 'src/app/services/class-features.service';
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
  public artificierArchetypes = [] as any[];
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
public selectedArchetypeName = "Alchimiste";
  public selectedArmor = 14;
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
  public warWeaponsMastery = false;
  public lightArmorMastery = true;
  public mediumArmorMastery = true;
  public heavyArmorMastery = false;
  public shieldMastery = true;
  public classWeaponMasteries = '';
  public subClassWeaponMasteries = '';
  public raceWeaponMasteries = '';
  public classToolMasteries = "Outils de bricoleur, outils de voleur, un type d'outils d'artisan de votre choix";
  public raceToolMasteries = '';

  public raceSource = 'Manuel des Joueurs';
  public classSource = 'Le Chaudron des Merveilles de Tasha';
  public subClassSource = 'Le Chaudron des Merveilles de Tasha';
  public backgroundSource = 'La Côte des Épées';

  public classFeatureLevel1 = "Bricolage magique";
  public classFeatureLevel2 = "Influx d'objet";
  public classFeatureLevel3 = "Artificier spécialisé, L'outil de circonstance";
  public classFeatureLevel4 = "Amélioration de caractéristiques";
  public classFeatureLevel5 = "";
  public classFeatureLevel6 = "Expertise de l'outillage";
  public classFeatureLevel7 = "Trait de génie";
  public classFeatureLevel8 = "Amélioration de caractéristiques";
  public classFeatureLevel9 = "";
  public classFeatureLevel10 = "Adepte des objets magiques";
  public classFeatureLevel11 = "Objet de stockage de sort";
  public classFeatureLevel12 = "Amélioration de caractéristiques";
  public classFeatureLevel13 = "";
  public classFeatureLevel14 = "Érudit des objets magiques";
  public classFeatureLevel15 = "";
  public classFeatureLevel16 = "Amélioration de caractéristiques";
  public classFeatureLevel17 = "";
  public classFeatureLevel18 = "Maître des objets magiques";
  public classFeatureLevel19 = "Amélioration de caractéristiques";
  public classFeatureLevel20 = "Âme de l'artifice";



  public archetypeFeatureLevel1 = "";
  public archetypeFeatureLevel2 = "";
  public archetypeFeatureLevel3 = "Maîtrise d'outils, Sorts d'Alchimiste, Élixir expérimental";
  public archetypeFeatureLevel4 = "";
  public archetypeFeatureLevel5 = "Érudit alchimique";
  public archetypeFeatureLevel6 = "";
  public archetypeFeatureLevel7 = "";
  public archetypeFeatureLevel8 = "";
  public archetypeFeatureLevel9 = "Ingrédients revigorants";
  public archetypeFeatureLevel10 = "";
  public archetypeFeatureLevel11 = "";
  public archetypeFeatureLevel12 = "";
  public archetypeFeatureLevel13 = "";
  public archetypeFeatureLevel14 = "";
  public archetypeFeatureLevel15 = "Maîtrise chimique";
  public archetypeFeatureLevel16 = "";
  public archetypeFeatureLevel17 = "";
  public archetypeFeatureLevel18 = "";
  public archetypeFeatureLevel19 = "";
  public archetypeFeatureLevel20 = "";


  public clercCanalisationDivine = "";
  public clercCanalisationDivine2 = "";
  public paladinCanalisationDivine ="";


  public classSkillMasteries =
    'Deux au choix parmi Arcanes, Escamotage, Histoire, Investigation, Médecine, Nature et Perception';
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
  public selectedClassName = "Artificier";

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

reset() {

  this.selectedClass = 0;

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
    this._racesService.selectedRaceName = this.races[this.selectedRace].name;
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

  this.updateSubClassFeatures();
  this._classFeaturesService.selectedArchetypeName = this.selectedArchetypeName;
  this._spellsService.selectedArchetypeName = this.selectedArchetypeName;
  this._spellsService.level = this._caracteristicsService.level;
  this._spellsService.updateSpellLevelTable();
  this.updateDwarfArmorMasteries();
}

}



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
    this.pv = 8;

    this.level = 1;
    this.classPv = 2;
    this.levelFeatures = '';
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
      
    this.updateProficiency();
    this.currentProficiency = this._caracteristicsService.proficiency;
    this.updateLevel();
    this.updateClass();
    this.updateSubClassFeatures();

    this._spellsService.level = this._caracteristicsService.level;

    this._spellsService.updateSpellLevelTable();

  };


  levelDown = () => {
    this._caracteristicsService.level--;
    this._caracteristicsService.currentPV =
      this._caracteristicsService.currentPV - pvRoll;

    if (this._caracteristicsService.level === 1) {
      this._caracteristicsService.currentPV =
        this._classesService.selectedClassBasePv;
    }
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
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }



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
    case 'Artificier':
      this.selectedArchetypeName   =  this.artificierArchetypes[this.selectedArchetype].name;   
      this.subClassSource = this.artificierArchetypes[this.selectedArchetype].source; 
      this.archetypeFeatureLevel1  =  "";
      this.archetypeFeatureLevel2  =  "";
      this.archetypeFeatureLevel3  =  this.artificierArchetypes[this.selectedArchetype].archetypeFeatureLevel3;
      this.archetypeFeatureLevel5  =  this.artificierArchetypes[this.selectedArchetype].archetypeFeatureLevel5;
      this.archetypeFeatureLevel6  =  "";
      this.archetypeFeatureLevel7  =  "";
      this.archetypeFeatureLevel8  =  "";
      this.archetypeFeatureLevel9  = this.artificierArchetypes[this.selectedArchetype].archetypeFeatureLevel9;
      this.archetypeFeatureLevel10 =  "";
      this.archetypeFeatureLevel11 =  "";
      this.archetypeFeatureLevel13 = this.artificierArchetypes[this.selectedArchetype].archetypeFeatureLevel13;
      this.archetypeFeatureLevel14 =  "";
      this.archetypeFeatureLevel15 =  "";
      this.archetypeFeatureLevel17 =  "";
      this.archetypeFeatureLevel18 =  "";
      this.archetypeFeatureLevel20 =  "";
      if (this.selectedArchetypeName == "Alchimiste" && this._caracteristicsService.level>2) {
        this.subClassToolMasteries = "Matériel d'alchimiste ou un autre type d'outils d'artisan de votre choix";
        this.heavyArmorMastery = false;
        this.warWeaponsMastery = false;
      } else if (this.selectedArchetypeName == "Armurier" && this._caracteristicsService.level>2) {
        this.subClassToolMasteries = "Outils de forgeron ou un autre type d'outils d'artisan de votre choix";
        this.heavyArmorMastery = true;
        this.warWeaponsMastery = false;
      } else if (this.selectedArchetypeName == "Artilleur" && this._caracteristicsService.level>2) {
        this.subClassToolMasteries = "Outils de menuisier ou un autre type d'outils d'artisan de votre choix";
        this.heavyArmorMastery = false;
        this.warWeaponsMastery = false;
      } if (this.selectedArchetypeName == "Forgeron de guerre" && this._caracteristicsService.level>2) {
        this.subClassToolMasteries = "Outils de forgeron ou un autre type d'outils d'artisan de votre choix";
        this.heavyArmorMastery = false;
        this.warWeaponsMastery = true;
      }
      break;
    case 'Barbare':
      this.selectedArchetypeName   =  this.barbareArchetypes[this.selectedArchetype].name;   
      this.subClassSource = this.barbareArchetypes[this.selectedArchetype].source; 
      this.archetypeFeatureLevel1  =  "";
      this.archetypeFeatureLevel2  =  "";
      this.archetypeFeatureLevel3  =  this.barbareArchetypes[this.selectedArchetype].archetypeFeatureLevel3;
      this.archetypeFeatureLevel5  =  "";
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
      this.archetypeFeatureLevel5  =  "";
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
      this.archetypeFeatureLevel5  =  "";
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
        this.archetypeFeatureLevel5  =  "";
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
          this.archetypeFeatureLevel5  =  "";
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
            this.archetypeFeatureLevel5  =  "";
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
              this.subClassSkillMasteries = "Persuasion, ou une parmi Dressage, Intimidation, Intuition et Représentation si vous l'avez déjà; Expertise dans Persuasion";
            } else if (this.selectedArchetypeName == "Maître de guerre" && this._caracteristicsService.level>2) {
              this.subClassToolMasteries = "Un outil d'artisan de votre choix";
            } else if (this.selectedArchetypeName == "Samurai" && this._caracteristicsService.level>2) {
              this.subClassSkillMasteries = "Histoire, Intuition, Représentation, Persuasion ou une langue de votre choix";
            } else if (this.selectedArchetypeName == "Chevalier runique" && this._caracteristicsService.level>2) {
              this.subClassToolMasteries = "Outils de forgeron";
              this.subClassLangages = "Géant";


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
              this.archetypeFeatureLevel5  =  "";
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
                this.archetypeFeatureLevel2  = "";
                this.archetypeFeatureLevel3  = this.moineArchetypes[this.selectedArchetype].archetypeFeatureLevel3;
                this.archetypeFeatureLevel5  =  "";
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
                  this.archetypeFeatureLevel5  =  "";
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
                    this.archetypeFeatureLevel5  =  "";
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
                        this.archetypeFeatureLevel5  =  "";
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
                        case 'Occultiste':
                          this.selectedArchetypeName =   this.sorcierArchetypes[this.selectedArchetype].name;
                          this.subClassSource = this.sorcierArchetypes[this.selectedArchetype].source; 
                          this.archetypeFeatureLevel1  = this.sorcierArchetypes[this.selectedArchetype].archetypeFeatureLevel1;
                          this.archetypeFeatureLevel2  = "";
                          this.archetypeFeatureLevel3  = "";
                          this.archetypeFeatureLevel5  =  "";
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
      case 'Artificier':
        this.commonWeaponsMastery = true;
        this.warWeaponsMastery = false;
        this.lightArmorMastery = true;
        this.mediumArmorMastery = true;
        this.heavyArmorMastery = false;
        this.shieldMastery = true;
        this._caracteristicsService.forceCheck = false;
        this._caracteristicsService.dexterityCheck = false;
        this._caracteristicsService.constitutionCheck = true;
        this._caracteristicsService.intelligenceCheck = true;
        this._caracteristicsService.wisdomCheck = false;
        this._caracteristicsService.charismaCheck = false;
        break;
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
      case 'Occultiste':
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

  updateBonusSkill = () => {
    return this._classFeaturesService.bonusSkill;
  };

  public classFeaturesList = [] as any[];

  updateLevel = () => {

    switch (this._caracteristicsService.level) {
      case 1:
        this._classFeaturesService.bonusSkill =          this.classFeatures[this._classesService.selectedClass].bonusSkillLevel1;
        break;
      case 2:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel2;
        break;
      case 3:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel3;
        break;
      case 4:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel4;

        break;
      case 5:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel5;
        break;
      case 6:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel6;

        break;
      case 7:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel7;

        break;
      case 8:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel8;

        break;
      case 9:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel9;

        break;
      case 10:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel10;

        break;
      case 11:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel11;
        break;
      case 12:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel12;
        break;
      case 13:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel13;
        break;
      case 14:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel14;
        break;
      case 15:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel15;

        break;
      case 16:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel16;

        break;
      case 17:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel17;

        break;
      case 18:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel18;

        break;
      case 19:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel19;

        break;
      case 20:
        this._classFeaturesService.bonusSkill =
          this.classFeatures[
            this._classesService.selectedClass
          ].bonusSkillLevel20;

        break;
    }
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
      this.artificierArchetypes = this._classFeaturesService.getArtificierArchetypes();
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

    this.updatedArmorClass = 9;
    this._classesService.selectedClassType = 'Fighter';
    this._classesService.selectedCantripGroup = 'E';
    this._classesService.selectedClassName = 'Artificier';
    this.selectedArchetype = 0;
    this.updateClassFeatures();
    this.updateSubClassFeatures();
    // this._spellsService.updateSpellLevelTable();
    this._spellsService.level1SpellsKnown = '1';
    this.updateSpellsKnown;
    this.reset();
  }

  ngAfterViewInit(): void {
    this.updateSpellsKnown = this.child.updateSpellsKnown();
    this.updateSpellLevel = this.child.updateSpellLevel();
    this.updateSpellsInUI = this.child.updateSpellsInUI();
  }
}

let pvRoll = 1;
let currentProficiency = 2;
let levelFeatures = '';


@Component({
  selector: 'about',
  templateUrl: 'about.html',
})
export class About {}