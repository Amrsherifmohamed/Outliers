import { Component, OnInit, Input } from '@angular/core';
import { Careerpath } from 'src/app/_models/Careerpath';
import { CareerDetails } from 'src/app/_models/CareerDetails';

@Component({
  selector: 'app-career-path-card',
  templateUrl: './career-path-card.component.html',
  styleUrls: ['./career-path-card.component.css']
})
export class CareerPathCardComponent implements OnInit {
@Input() careerpath:Careerpath;
// careerpaths:Careerpath;

// @Input() careerDetails:CareerDetails[];
careerdetails:Array<CareerDetails>=[];
  constructor() { }
  currentIndex = 0;
  currentItem: CareerDetails = this.careerdetails[this.currentIndex];
  ngOnInit() {

   // return this.details;
   this.getDetailscareeerpath();
  }
  getDetailscareeerpath(){
    for (let index = 0; index < this.careerpath.paths.length; index++) {
      this.careerdetails.push({
        name:this.careerpath.paths[index].name,
        id:this.careerpath.paths[index].id
      }) 
    }
  }


}
