import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inames } from './names';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {
  private _url: string = '/assets/data/names.json';

  // public classLock = false;
  // public subClassLock = false;
  // public raceLock = false;
  // public backgroundLock = false;
  public randomizedBackground = 0;
  public randomizedSubClass = 0;
  public selectedClassName = "";
  public randomizedClass = 0;
  public randomizedRace = 0;
  public randomizedCharacterName = "";
  public randomizedCharacterNamePart1 = "";
  public randomizedCharacterNamePart2 = "";
  public randomizedCharacterNamePart3 = "";
  public randomizedCharacterID = 0;
  public randomizedCharacterID2 = 0;
  public randomizedCharacterID3 = 0;
  public playerClass = "Barbare";
  public playerRace = "Humain";
  public names = [] as any[];
  public namesGenasi = [] as any[];

  public id = 0;
  public humanName = "";
  public humanName2 = "";
  public elfName = "";
  public elfName2 = "";
  public gnomeName = "";
  public gnomeName2 = "";
  public halfelinName = "";
  public halfelinName2 = "";
  public nainName = "";
  public nainName2 = "";
  public sangdragonName = "";
  public sangdragonName2 = "";
  public tieffelinName = "";
  public tieffelinName2 = "";
  public githName = "";
  public goliathName = "";
  public goliathName2 = "";
  public goliathName3 = "";
  public kenkuName = "";
  public lizardfolkName = "";
  public tortleName = "";
  public koboldName = "";
  public airGenasiName = "";
  public airGenasiName2 = "";
  public earthGenasiName = "";
  public earthGenasiName2 = "";
  public fireGenasiName = "";
  public fireGenasiName2 = "";
  public waterGenasiName = "";
  public waterGenasiName2 = "";




  getNamesGenasi() {
    return [
      {id:0, earthGenasiName: "Acker", earthGenasiName2: "Abeba"},
      {id:1, earthGenasiName: "Amber", earthGenasiName2: "Aleswallow"},
      {id:2, earthGenasiName: "Argil", earthGenasiName2: "Astario"},
      {id:3, earthGenasiName: "Arlo",  earthGenasiName2: "Augosto"},
      {id:4, earthGenasiName: "Ash",   earthGenasiName2: "Blackwood"},
      {id:5, earthGenasiName: "Avani", earthGenasiName2: "Bomani"},
      {id:6, earthGenasiName: "Bhumi", earthGenasiName2: "Boulderfall"},
      {id:7, earthGenasiName: "Bluff", earthGenasiName2: "Bretik"},
      {id:8, earthGenasiName: "Brick", earthGenasiName2: "Buzayue"},
      {id:9, earthGenasiName: "Bryn",  earthGenasiName2: "Chara"},
      {id:10, earthGenasiName: "Canyon",earthGenasiName2: "Clevertail"},
      {id:11, earthGenasiName: "Clay",  earthGenasiName2: "Copperhide"},
      {id:12, earthGenasiName: "Clod",  earthGenasiName2: "Crystalspire"}
    ]
  }
  





  randomizeName = () => {
    this.randomizedCharacterID = Math.floor(Math.random() * 100);
    this.randomizedCharacterID2 = Math.floor(Math.random() * 100);

    if (this.playerRace == "Humain" || this.playerRace == "Sang Maudit" || this.playerRace == "Ressuscité") {
      this.randomizedCharacterNamePart1 =  this.names[this.randomizedCharacterID].humanName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].humanName2;

    } else if (this.playerRace == "Elfe Sylvestre" || this.playerRace == "Haut-Elfe" || this.playerRace == "Demi-elfe") {
      this.randomizedCharacterNamePart1 =  this.names[this.randomizedCharacterID].elfName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].elfName2;

    } else if (this.playerRace == "Gnome des forêts" || this.playerRace == "Gnome des profondeurs" || this.playerRace == "Gnome des roches") {
      this.randomizedCharacterNamePart1 =  this.names[this.randomizedCharacterID].gnomeName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].gnomeName2;

    }else if (this.playerRace == "Halfelin Pied-Léger" || this.playerRace == "Halfelin Robuste") {
      this.randomizedCharacterNamePart1 =  this.names[this.randomizedCharacterID].halfelinName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].halfelinName2;

    } else if (this.playerRace == "Nain des montagnes" ||this.playerRace == "Nain des collines") {
      this.randomizedCharacterNamePart1 =  this.names[this.randomizedCharacterID].nainName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].nainName2;

    }   else if (this.playerRace == "Sangdragon") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].sangdragonName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].sangdragonName2;

    }   else if (this.playerRace == "Tieffelin") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].tieffelinName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].tieffelinName2;

    }   else if (this.playerRace == "Orc") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].orcName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].orcName2;

    } else if (this.playerRace == "Githyanki" || this.playerRace == "Githzerai") {
      this.randomizedCharacterNamePart1 =  this.names[this.randomizedCharacterID].githName;
      this.randomizedCharacterNamePart2 = "";

    }   else if (this.playerRace == "Goliath") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].goliathName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].goliathName2;

    }   else if (this.playerRace == "Kenku") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].kenkuName;
      this.randomizedCharacterNamePart2 = "";

    }   else if (this.playerRace == "Homme-Lézard") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].lizardfolkName;
      this.randomizedCharacterNamePart2 = "";

    }   else if (this.playerRace == "Tortle") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].tortleName;
      this.randomizedCharacterNamePart2 = "";

    }   else if (this.playerRace == "Kobold") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].koboldName;
      this.randomizedCharacterNamePart2 = "";

    }   else if (this.playerRace == "Aaracokra") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].aaracokraName;
      this.randomizedCharacterNamePart2 = "";

    }   else if (this.playerRace == "Tabaxi" || this.playerRace == "Félys") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].tabaxiName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].tabaxiName2;

    }   else if (this.playerRace == "Yuan-ti" || this.playerRace == "Homme-serpent") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].yuanTiName;
      this.randomizedCharacterNamePart2 = "";

    }   else if (this.playerRace == "Forgelier") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].warforgedName;
      this.randomizedCharacterNamePart2 = "";

    }   else if (this.playerRace == "Dhampire") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].dhampirName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].dhampirName2;

    }  else if (this.playerRace == "Génasi de l'air") {
      this.randomizedCharacterNamePart1 =  this.names[this.randomizedCharacterID].airGenasiName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].airGenasiName2;

    } else if (this.playerRace == "Génasi de l'eau") {
      this.randomizedCharacterNamePart1 =  this.names[this.randomizedCharacterID].waterGenasiName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].waterGenasiName2;

    } else if (this.playerRace == "Génasi de la terre") {
      this.randomizedCharacterNamePart1 =  this.names[this.randomizedCharacterID].earthGenasiName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].earthGenasiName2;

    } else if (this.playerRace == "Génasi du feu") {
      this.randomizedCharacterNamePart1 =  this.names[this.randomizedCharacterID].fireGenasiName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].fireGenasiName2;

    }  else if (this.playerRace == "Satyre") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].satyrName;
      this.randomizedCharacterNamePart2 = "";

    }  else if (this.playerRace == "Aasimar (D&D)" || this.playerRace == "Aasimar (H&D)" ) {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].aasimarName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].aasimarName2;

    }  else if (this.playerRace == "Centaure") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].centaurName;
      this.randomizedCharacterNamePart2 = "";

    }  else if (this.playerRace == "Changeling") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].changelingName;
      this.randomizedCharacterNamePart2 = "";

    }  else if (this.playerRace == "Conil") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].conilName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].conilName2;

    }  else if (this.playerRace == "Demi-orc") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].halfOrcName;
      this.randomizedCharacterNamePart2 = "";

    }  else if (this.playerRace == "Fadette") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].fairyName;
      this.randomizedCharacterNamePart2 = "";

    }  else if (this.playerRace == "Firbolg") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].firbolgName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].firbolgName2;

    }  else if (this.playerRace == "Gobelin") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].goblinName;
      this.randomizedCharacterNamePart2 = "";

    }  else if (this.playerRace == "Gobelours") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].bugbearName;
      this.randomizedCharacterNamePart2 = "";

    }  else if (this.playerRace == "Hiboulin") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].owlinName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].owlinName2;

    }  else if (this.playerRace == "Hobgobelin") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].hobgoblinName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].hobgoblinName2;

    }  else if (this.playerRace == "Minotaure") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].minotaurName;
      this.randomizedCharacterNamePart2 = "";

    }  else if (this.playerRace == "Shadar Kai") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].shadarKaiName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].shadarKaiName2;

    }  else if (this.playerRace == "Drow") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].drowName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].drowName2;

    }  else if (this.playerRace == "Eladrin") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].eladrinName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].eladrinName2;

    }  else if (this.playerRace == "Elfe des mers") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].seaElfName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].seaElfName2;

    }  else if (this.playerRace == "Duergar") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].duergarName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].duergarName2;

    }  else if (this.playerRace == "Triton") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].tritonName;
      this.randomizedCharacterNamePart2 =  this.names[this.randomizedCharacterID2].tritonName2;

    }  else if (this.playerRace == "Ogre" || this.playerRace == "Demi-ogre" || this.playerRace == "Demi-ogre (Sorcereux)") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].ogreName;
      this.randomizedCharacterNamePart2 = "";

    }  else if (this.playerRace == "Féral") {
      this.randomizedCharacterNamePart1 =   this.names[this.randomizedCharacterID].shifterName;
      this.randomizedCharacterNamePart2 = "";

    } else {
      this.randomizedCharacterNamePart1 = "Professor";
      this.randomizedCharacterNamePart2 = "Professorson";
    }

    this.randomizedCharacterName = this.randomizedCharacterNamePart1 + " " + this.randomizedCharacterNamePart2 + "";




    // this.randomizedCharacterNamePart2 =  this.names[0].earthGenasiName;


  }

  


  randomizeBackground() {
      this.randomizedBackground = Math.floor(Math.random() * 30);
  }

  randomizeClass() {
    this.randomizedClass = Math.floor(Math.random() * 12) ;

}

randomizeRace() {
  this.randomizedRace = Math.floor(Math.random() * 56);
}


randomizeSubClass() {
  if (this.selectedClassName == 'Clerc') {
    this.randomizedSubClass = Math.floor(Math.random() * 14) ;
  } else if (this.selectedClassName == 'Magicien') {
    this.randomizedSubClass = Math.floor(Math.random() * 13) ;
  } else if (this.selectedClassName == 'Artificier') {
    this.randomizedSubClass = Math.floor(Math.random() * 4) ;
  } else if (this.selectedClassName == 'Barbare' || this.selectedClassName == 'Barde' || this.selectedClassName == 'Rôdeur' ) {
    this.randomizedSubClass = Math.floor(Math.random() * 8) ;
  } else if (this.selectedClassName == 'Paladin' || this.selectedClassName == 'Roublard' || this.selectedClassName == 'Sorcier' ) {
    this.randomizedSubClass = Math.floor(Math.random() * 9) ;
  } else if (this.selectedClassName == 'Druide' || this.selectedClassName == 'Ensorceleur' ) {
    this.randomizedSubClass = Math.floor(Math.random() * 7) ;
  } else if (this.selectedClassName == 'Guerrier' || this.selectedClassName == 'Moine' ) {
    this.randomizedSubClass = Math.floor(Math.random() * 10) ;
  }
}





constructor(private http: HttpClient) {}

getNames(): Observable<Inames[]> {
  return this.http.get<Inames[]>(this._url);
}

ngOnInit(): void {
  this.getNames().subscribe((data) => (this.names = data));
  this.namesGenasi = this.getNamesGenasi();

}

}
