import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-classdetails',
  templateUrl: './classdetails.component.html',
  styleUrls: ['./classdetails.component.css']
})
export class ClassdetailsComponent implements OnInit {
  selectedPerso = '';
	onSelected(value:string): void {
    this.selectedPerso = value;
	}
  public classes = [] as any[];


  readonly json = '"/assets/data/detailsclasses.json"';
  readonly obj = JSON.parse(this.json);


  constructor(private _classesService: ClassesService) { }

  




  ngOnInit(): void {
    this._classesService.getClasses().subscribe(data => (this.classes= data))
  }
  
}
