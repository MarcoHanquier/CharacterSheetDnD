import { Component, OnInit } from '@angular/core';
import { RacesService } from 'src/app/services/races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  public selectedRace = 0;

  updatedRaceFeatures =  () => {
    return this._racesService.selectedRaceFeatures;
  };

  updatedRaceCaracteristics =  () => {
    return this._racesService.selectedRaceCaracteristics;
  };

  update(e:any) {
  
    this._racesService.selectedRace = this.races[this.selectedRace].name;
    this._racesService.selectedRaceSpeed = this.races[this.selectedRace].speed;
    this._racesService.selectedRaceFeatures = this.races[this.selectedRace].raceFeatures;
    this._racesService.selectedRaceCaracteristics = this.races[this.selectedRace].caracteristics;
 
}

  constructor(private _racesService: RacesService) {   }
  public races = [] as any[];

  
  
  
  ngOnInit(): void {
    this._racesService.getRaces().subscribe(data => (this.races= data))
    this.selectedRace = 0;
  }

}
