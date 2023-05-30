import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-classdetails',
  templateUrl: './classdetails.component.html',
  styleUrls: ['./classdetails.component.css']
})
export class ClassdetailsComponent implements OnInit {



  constructor(private _classesService: ClassesService) { }

  ngOnInit(): void {
    // this._classesService.getClasses().subscribe(data => (this.classes= data))
  }
  
}
