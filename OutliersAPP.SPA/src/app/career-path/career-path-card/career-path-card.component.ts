import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Careerpath } from 'src/app/_models/Careerpath';
import { CareerDetails } from 'src/app/_models/CareerDetails';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-career-path-card',
  templateUrl: './career-path-card.component.html',
  styleUrls: ['./career-path-card.component.css']
})
export class CareerPathCardComponent implements OnInit {
@Input() careerpath:Careerpath;
@ViewChild('editForm') editForm: NgForm;
// careerpaths:Careerpath;
newrating:any={};
user:User
// @Input() careerDetails:CareerDetails[];
careerdetails:Array<CareerDetails>=[];
  constructor(private userservice:UserService,private route: ActivatedRoute,private alertify:AlertifyService,public authservice:AuthService) { }
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
  // crearecareepath(career){
  //   // this.user.careerpath=career;
  //   // this.newrating=career;
  //   // this.user = Object.assign({}, this.editForm.value);
  //   // this.user.careerpath=valus;
  //   this.user.careerpath=career;
  //   this.userservice.createcareerpath(this.authservice.currentUser.id,this.user).subscribe(
  //     ()=>{
  //       this.alertify.success("sellected success"); 
  //     },
  //     error=>{
  //       console.log('Value of star', this.newrating); 
  //       this.alertify.error("hello")
  //     }
  //   );
  // }

}
