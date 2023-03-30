import { Component, OnInit } from '@angular/core';
import { CaracteristicsService } from 'src/app/services/caracteristics.service';
import { ArmorsService } from 'src/app/services/armors.service';
import { RacesService } from 'src/app/services/races.service';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-caracteristics',
  templateUrl: './caracteristics.component.html',
  styleUrls: ['./caracteristics.component.css'],
})
export class CaracteristicsComponent implements OnInit {
  public selectedPool = 19;
  statsPools = [
    { id: 1, name: 'Courageux', pool: 19 },
    { id: 2, name: 'Héroique', pool: 27 },
    { id: 3, name: 'Légendaire', pool: 36 },
  ];

  public force = this._caracteristicsService.force;
  public dexterity = 8;
  public constitution = 8;
  public intelligence = 8;
  public wisdom = 8;
  public charisma = 8;

  public forceModifier = 0;
  public dexterityModifier = 0;
  public constitutionModifier = 0;
  public intelligenceModifier = 0;
  public wisdomModifier = 0;
  public charismaModifier = 0;

  public forceSave = 0;
  public dexteritySave = 0;
  public constitutionSave = 0;
  public intelligenceSave = 0;
  public wisdomSave = 0;
  public charismaSave = 0;

  public proficiency = 2;
  public updatedArmorClass = 7;

  public forceCheck = false;
  public dexterityCheck = false;
  public constitutionCheck = false;
  public intelligenceCheck = false;
  public wisdomCheck = false;
  public charismaCheck = false;

  public acrobatieCheck1 = false;
  public acrobatieCheck2 = false;
  public arcanesCheck1 = false;
  public arcanesCheck2 = false;
  public athletismCheck1 = false;
  public athletismCheck2 = false;
  public discretionCheck1 = false;
  public discretionCheck2 = false;
  public dressageCheck1 = false;
  public dressageCheck2 = false;
  public escamotageCheck1 = false;
  public escamotageCheck2 = false;
  public histoireCheck1 = false;
  public histoireCheck2 = false;
  public intimidationCheck1 = false;
  public intimidationCheck2 = false;
  public investigationCheck1 = false;
  public investigationCheck2 = false;
  public medecineCheck1 = false;
  public medecineCheck2 = false;
  public natureCheck1 = false;
  public natureCheck2 = false;
  public perceptionCheck1 = false;
  public perceptionCheck2 = false;
  public perspicaciteCheck1 = false;
  public perspicaciteCheck2 = false;
  public persuasionCheck1 = false;
  public persuasionCheck2 = false;
  public religionCheck1 = false;
  public religionCheck2 = false;
  public representationCheck1 = false;
  public representationCheck2 = false;
  public supercherieCheck1 = false;
  public supercherieCheck2 = false;
  public survieCheck1 = false;
  public survieCheck2 = false;

  onChange(e: any) {
    this.selectedPool = e.target.value;
    this.force = 8;
    this.dexterity = 8;
    this.constitution = 8;
    this.intelligence = 8;
    this.wisdom = 8;
    this.charisma = 8;
  }

  constructor(
    private _caracteristicsService: CaracteristicsService,
    private _armorsService: ArmorsService,
    private _racesService: RacesService,
    private _classesService: ClassesService
  ) {}

updateForceInUI() {
    if (this._classesService.selectedClassName == 'Barbare' && this._caracteristicsService.level>19) {
    this.barbareChampionPrimitif();
  return this.force+4
  } else return this.force
}

updateConstitutionInUI() {
  if (this._classesService.selectedClassName == 'Barbare' && this._caracteristicsService.level>19) {
return this.constitution+4
} else return this.constitution
}

barbareChampionPrimitif() {
  let newForceMod = this.force +4;
  let newConMod = this.constitution +4;
  this.forceModifier = this.calculateModifier(newForceMod);
  this.constitutionModifier = this.calculateModifier(newConMod);
}

updateForceModifierInUI() {
  if (this._classesService.selectedClassName == 'Barbare' && this._caracteristicsService.level>19) {
return this.forceModifier
} else return this.calculateModifier(this.force)
}

updateConstitutionModifierInUI() {
  if (this._classesService.selectedClassName == 'Barbare' && this._caracteristicsService.level>19) {
return this.constitutionModifier
} else return this.calculateModifier(this.constitution)
}

  forceUp = () => {
    this.force++;
    this._caracteristicsService.force = this.force;
    this.selectedPool = this.selectedPool - this.removeStatPool(this.force);
  };

  proficiencyInUI = () => {
    return this._caracteristicsService.proficiency;
  };

  speedInUI = () => {
    return this._racesService.selectedRaceSpeed;
  };

  updateInitiative = () => {
    this._caracteristicsService.initiativeBonus = this.calculateModifier(
      this.dexterity
    );
  };

  forceDown = () => {
    this.force--;
    this.selectedPool = this.selectedPool + this.addStatPool(this.force);
  };

  dexterityUp = () => {
    this.dexterity++;
    this.selectedPool = this.selectedPool - this.removeStatPool(this.dexterity);
  };

  dexterityDown = () => {
    this.dexterity--;
    this.selectedPool = this.selectedPool + this.addStatPool(this.dexterity);
  };

  constitutionUp = () => {
    this.constitution++;
    this.selectedPool =
      this.selectedPool - this.removeStatPool(this.constitution);
  };

  constitutionDown = () => {
    this.constitution--;
    this.selectedPool = this.selectedPool + this.addStatPool(this.constitution);
  };

  intelligenceUp = () => {
    this.intelligence++;
    this.selectedPool =
      this.selectedPool - this.removeStatPool(this.intelligence);
  };

  intelligenceDown = () => {
    this.intelligence--;
    this.selectedPool = this.selectedPool + this.addStatPool(this.intelligence);
  };

  wisdomUp = () => {
    this.wisdom++;
    this.selectedPool = this.selectedPool - this.removeStatPool(this.wisdom);
  };

  wisdomDown = () => {
    this.wisdom--;
    this.selectedPool = this.selectedPool + this.addStatPool(this.wisdom);
  };

  charismaUp = () => {
    this.charisma++;
    this.selectedPool = this.selectedPool - this.removeStatPool(this.charisma);
  };

  charismaDown = () => {
    this.charisma--;
    this.selectedPool = this.selectedPool + this.addStatPool(this.charisma);
  };

  addStatPool = (x: number) => {
    if (x < 13) {
      return 1;
    } else if (x < 15) {
      return 2;
    }
    return 3;
  };

  removeStatPool = (x: number) => {
    if (x > 15) {
      return 3;
    } else if (x > 13) {
      return 2;
    }
    return 1;
  };

  calculateModifier = (x: number) => {
    if (x < 2) {
      return -5;
    } else if (x < 4) {
      return -4;
    } else if (x < 6) {
      return -3;
    } else if (x < 8) {
      return -2;
    } else if (x < 10) {
      return -1;
    }

    if (x < 12) {
      return 0;
    } else if (x < 14) {
      return 1;
    } else if (x < 16) {
      return 2;
    } else if (x < 18) {
      return 3;
    } else if (x < 20) {
      return 4;
    } else if (x < 22) {
      return 5;
    } else if (x < 24) {
      return 6;
    } else if (x < 26) {
      return 7;
    } else if (x < 28) {
      return 8;
    } else if (x < 30) {
      return 9;
    }
    return 10;
  };

  calculateDexterityModifier = (x: number) => {
    if (x < 2) {
      this._caracteristicsService.dexterityModifier = -5;
    } else if (x < 4) {
      this._caracteristicsService.dexterityModifier = -4;
    } else if (x < 6) {
      this._caracteristicsService.dexterityModifier = -3;
    } else if (x < 8) {
      this._caracteristicsService.dexterityModifier = -2;
    } else if (x < 10) {
      this._caracteristicsService.dexterityModifier = -1;
    }

    if (x < 12) {
      this._caracteristicsService.dexterityModifier = 0;
    } else if (x < 14) {
      this._caracteristicsService.dexterityModifier = 1;
    } else if (x < 16) {
      this._caracteristicsService.dexterityModifier = 2;
    } else if (x < 18) {
      this._caracteristicsService.dexterityModifier = 3;
    } else if (x < 20) {
      this._caracteristicsService.dexterityModifier = 4;
    } else if (x < 22) {
      this._caracteristicsService.dexterityModifier = 5;
    } else if (x < 24) {
      this._caracteristicsService.dexterityModifier = 6;
    } else if (x < 26) {
      this._caracteristicsService.dexterityModifier = 7;
    } else if (x < 28) {
      this._caracteristicsService.dexterityModifier = 8;
    } 
    this._caracteristicsService.dexterityModifier = 9;
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
          this._armorsService.selectedShieldValue +
          this._armorsService.armorBonus +
          this._armorsService.shieldBonus;
        break;
      case 'Armure intermédiaire':
        if (dexterityModifier > 2) {
          this.updatedArmorClass =
            this._armorsService.selectedArmorValue +
            2 +
            this._armorsService.selectedShieldValue +
            this._armorsService.armorBonus +
            this._armorsService.shieldBonus;
        } else {
          this.updatedArmorClass =
            this._armorsService.selectedArmorValue +
            dexterityModifier +
            this._armorsService.selectedShieldValue +
            this._armorsService.armorBonus +
            this._armorsService.shieldBonus;
        }
        break;
      case 'Armure lourde':
        this.updatedArmorClass =
          this._armorsService.selectedArmorValue +
          this._armorsService.selectedShieldValue +
          this._armorsService.armorBonus +
          this._armorsService.shieldBonus;
        break;
    }
    this._armorsService.selectedArmor = this.updatedArmorClass;
    return this._armorsService.selectedArmor;
  };

  armorClass = () => {
    return this._armorsService.selectedArmorValue;
  };

  updateDexterityModifier = () => {
    this._caracteristicsService.dexterityModifier = this.calculateModifier(
      this.dexterity
    );
    this._caracteristicsService.initiativeBonus = this.calculateModifier(
      this.dexterity
    );
  };

  updateConstitutionModifier = () => {
    this._caracteristicsService.constitutionModifier = this.calculateModifier(
      this.constitution
    );
  };

  updateIntelligenceModifier = () => {
    this._caracteristicsService.intelligenceModifier = this.calculateModifier(
      this.intelligence
    );
  };

  updateWisdomModifier = () => {
    this._caracteristicsService.wisdomModifier = this.calculateModifier(
      this.wisdom
    );
  };

  updateCharismaModifier = () => {
    this._caracteristicsService.charismaModifier = this.calculateModifier(
      this.charisma
    );
  };



  checkForce = (x: any) => {
    this.forceCheck = this._caracteristicsService.forceCheck;
    if (this._caracteristicsService.forceCheck) {
      return (
        this.calculateModifier(this.force) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.force);
    }
  };

  checkDexterity = (x: any) => {
    this.dexterityCheck = this._caracteristicsService.dexterityCheck;

    if (this._caracteristicsService.dexterityCheck) {
      return (
        this.calculateModifier(this.dexterity) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.dexterity);
    }
  };

  checkConstitution = (x: any) => {
    this.constitutionCheck = this._caracteristicsService.constitutionCheck;

    if (this._caracteristicsService.constitutionCheck) {
      return (
        this.calculateModifier(this.constitution) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.constitution);
    }
  };

  checkIntelligence = (x: any) => {
    this.intelligenceCheck = this._caracteristicsService.intelligenceCheck;

    if (this._caracteristicsService.intelligenceCheck) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.intelligence);
    }
  };

  checkWisdom = (x: any) => {
    this.wisdomCheck = this._caracteristicsService.wisdomCheck;

    if (this._caracteristicsService.wisdomCheck) {
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.wisdom);
    }
  };

  checkCharisma = (x: any) => {
    this.charismaCheck = this._caracteristicsService.charismaCheck;

    if (this._caracteristicsService.charismaCheck) {
      return (
        this.calculateModifier(this.charisma) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.charisma);
    }
  };
  checkAcrobatie = (x: any) => {
    if (this.acrobatieCheck1 && this.acrobatieCheck2) {
      return (
        this.calculateModifier(this.dexterity) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.acrobatieCheck1 || this.acrobatieCheck2) {
      return (
        this.calculateModifier(this.dexterity) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.dexterity);
    }
  };

  checkArcanes = (x: any) => {
    if (this.arcanesCheck1 && this.arcanesCheck2) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.arcanesCheck1 || this.arcanesCheck2) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.intelligence);
    }
  };

  checkAthletisme = (x: any) => {
    if (this.athletismCheck1 && this.athletismCheck2) {
      return (
        this.calculateModifier(this.force) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.athletismCheck1 || this.athletismCheck2) {
      return (
        this.calculateModifier(this.force) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.force);
    }
  };
  checkDiscretion = (x: any) => {
    if (this.discretionCheck1 && this.discretionCheck2) {
      return (
        this.calculateModifier(this.dexterity) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.discretionCheck1 || this.discretionCheck2) {
      return (
        this.calculateModifier(this.dexterity) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.dexterity);
    }
  };
  checkDressage = (x: any) => {
    if (this.dressageCheck1 && this.dressageCheck2) {
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.dressageCheck1 || this.dressageCheck2) {
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.wisdom);
    }
  };
  checkEscamotage = (x: any) => {
    if (this.escamotageCheck1 && this.escamotageCheck2) {
      return (
        this.calculateModifier(this.dexterity) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.escamotageCheck1 || this.escamotageCheck2) {
      return (
        this.calculateModifier(this.dexterity) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.dexterity);
    }
  };
  checkHistoire = (x: any) => {
    if (this.histoireCheck1 && this.histoireCheck2) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.histoireCheck1 || this.histoireCheck2) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.intelligence);
    }
  };
  checkIntimidation = (x: any) => {
    if (this.intimidationCheck1 && this.intimidationCheck2) {
      return (
        this.calculateModifier(this.charisma) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.intimidationCheck1 || this.intimidationCheck2) {
      return (
        this.calculateModifier(this.charisma) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.charisma);
    }
  };
  checkInvestigation = (x: any) => {
    if (this.investigationCheck1 && this.investigationCheck2) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.investigationCheck1 || this.investigationCheck2) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.intelligence);
    }
  };
  checkMedecine = (x: any) => {
    if (this.medecineCheck1 && this.medecineCheck2) {
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.medecineCheck1 || this.medecineCheck2) {
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.wisdom);
    }
  };
  checkNature = (x: any) => {
    if (this.natureCheck1 && this.natureCheck2) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.natureCheck1 || this.natureCheck2) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.intelligence);
    }
  };
  checkPerception = (x: any) => {
    if (this.perceptionCheck1 && this.perceptionCheck2) {
      this._caracteristicsService.passivePerception =
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency * 2;
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.perceptionCheck1 || this.perceptionCheck2) {
      this._caracteristicsService.passivePerception =
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency;
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency
      );
    } else {
      this._caracteristicsService.passivePerception = this.calculateModifier(
        this.wisdom
      );
      return this.calculateModifier(this.wisdom);
    }
  };
  checkPerspicacite = (x: any) => {
    if (this.perspicaciteCheck1 && this.perspicaciteCheck2) {
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.perspicaciteCheck1 || this.perspicaciteCheck2) {
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.wisdom);
    }
  };
  checkPersuasion = (x: any) => {
    if (this.persuasionCheck1 && this.persuasionCheck2) {
      return (
        this.calculateModifier(this.charisma) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.persuasionCheck1 || this.persuasionCheck2) {
      return (
        this.calculateModifier(this.charisma) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.charisma);
    }
  };
  checkReligion = (x: any) => {
    if (this.religionCheck1 && this.religionCheck2) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.religionCheck1 || this.religionCheck2) {
      return (
        this.calculateModifier(this.intelligence) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.intelligence);
    }
  };
  checkRepresentation = (x: any) => {
    if (this.representationCheck1 && this.representationCheck2) {
      return (
        this.calculateModifier(this.charisma) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.representationCheck1 || this.representationCheck2) {
      return (
        this.calculateModifier(this.charisma) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.charisma);
    }
  };
  checkSupercherie = (x: any) => {
    if (this.supercherieCheck1 && this.supercherieCheck2) {
      return (
        this.calculateModifier(this.charisma) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.supercherieCheck1 || this.supercherieCheck2) {
      return (
        this.calculateModifier(this.charisma) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.charisma);
    }
  };
  checkSurvie = (x: any) => {
    if (this.survieCheck1 && this.survieCheck2) {
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency * 2
      );
    } else if (this.survieCheck1 || this.survieCheck2) {
      return (
        this.calculateModifier(this.wisdom) +
        this._caracteristicsService.proficiency
      );
    } else {
      return this.calculateModifier(this.wisdom);
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

  ngOnInit(): void {}
}

let pv = 1;
