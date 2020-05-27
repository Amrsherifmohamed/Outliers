import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Careerpath } from 'src/app/_models/Careerpath';
import { AuthService } from 'src/app/_services/auth.service';
import { CareerDetails } from 'src/app/_models/CareerDetails';

@Component({
  selector: 'app-update-careerpath',
  templateUrl: './update-careerpath.component.html',
  styleUrls: ['./update-careerpath.component.css']
})
export class UpdateCareerpathComponent implements OnInit {
  @ViewChild('PostForm') PostForm: NgForm
  @ViewChild('editForm') editForm: NgForm
  careerpathdetails:any={};
  careerpath:Careerpath;
  careerdetails:Array<CareerDetails>=[];

  @HostListener('window:beforeunload',['$event'])
  unLoadNotification($event:any){
    if(this.editForm.dirty){
      $event.returnValue=true;
    }
    
      
     
  }
  constructor(private adminserice:AdminService,private aletiy:AlertifyService,private router:ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit() {
    this.router.data.subscribe( data=>{
      this.careerpath= data['careerpath'];
    })
    this.getDetailscareeerpath();
        console.log(this.careerpath);
  }
  updatecareerpath() {
    this.adminserice.Updatecareerpath(this.careerpath.id,this.authService.decodedToken.nameid,this.careerpath).subscribe(()=>{
     this.aletiy.success('updated Is Done ');
     this.editForm.reset(this.careerpath);
    },error=>this.aletiy.error(error))
 
   }
   getDetailscareeerpath(){
    for (let index = 0; index < this.careerpath.paths.length; index++) {
      this.careerdetails.push({
        name:this.careerpath.paths[index].name,
        id:this.careerpath.paths[index].id
      }) 
    }
  }
    deletepath(id:number){
      this.adminserice.deletepathdetails(this.careerpath.id,id).subscribe(
        ()=>this.aletiy.success("deleted success"),
        error=>this.aletiy.error(error)
      );
    }
    createpathdeats(){
      this.adminserice.createpathdetails(this.careerpath.id,this.careerpathdetails).subscribe(
        ()=>{this.aletiy.success("Created")},
        error=>this.aletiy.error(error)
      )
    }
}
