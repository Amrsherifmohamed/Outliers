import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-create-careerpath',
  templateUrl: './create-careerpath.component.html',
  styleUrls: ['./create-careerpath.component.css']
})
export class CreateCareerpathComponent implements OnInit {
  model: any = {};
  constructor(private adminservice:AdminService,private alertify:AlertifyService) { }

  ngOnInit() {
  }
  createcareerpath(){
    this.adminservice.Addcareerpath(this.model).subscribe(
      ()=>this.alertify.success("created"),
      error=>this.alertify.error(error)
    )
  }

}
