import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { Careerpath } from 'src/app/_models/Careerpath';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-careerpath-managment',
  templateUrl: './careerpath-managment.component.html',
  styleUrls: ['./careerpath-managment.component.css']
})
export class CareerpathManagmentComponent implements OnInit {

  careerpath:Careerpath[];
  constructor(private adminService:AdminService,private alertify:AlertifyService,private router:Router) { }

  ngOnInit() {
    // this.router.data.subscribe(data=>{
    //   this.careerpath=data["careerpath"];
    // })

    this.getPhotosForApproval();

  }
  getPhotosForApproval() {
    this.adminService.getallcareerpath().subscribe((careerpahts:Careerpath[]) => {
      this.careerpath = careerpahts;
      // console.log(this.careerpath); 
    }, () => {
      this.alertify.error('توجد مشكلة في عرض الصور');
    });

  }
  deletcareerpath(id:number){
    this.adminService.Deletecareerpath(id).subscribe(
      ()=>{this.alertify.success("deleted success")
      this.router.navigate(["/admin"]);},
      error=>this.alertify.error(error)
    );
  }
  // updatecareerpath(id:number,userid:number){
  //   this.adminService.Updatecareerpath(id,userid).subscribe(
  //     ()=>{this.alertify.success("updated")},
  //     error=>this.alertify.error(error)
  //   );
  // }
  // getDetailscareeerpath(){
  //   for (let index = 0; index < this.careerpath.paths.length; index++) {
  //     this.careerdetails.push({
  //       name:this.careerpath.paths[index].name,
  //       id:this.careerpath.paths[index].id
  //     }) 
  //   }
  // }

}
