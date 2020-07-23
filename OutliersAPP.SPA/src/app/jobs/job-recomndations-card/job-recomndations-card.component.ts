import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/_models/job';
import { JobService } from 'src/app/_services/job.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-job-recomndations-card',
  templateUrl: './job-recomndations-card.component.html',
  styleUrls: ['./job-recomndations-card.component.css']
})
export class JobRecomndationsCardComponent implements OnInit {
  @Input() job:Job
  // jobdetails:Array<Job>=[];
  // jobss:Job[];
  // currentIndex = 0;
  // currentItem: Job = this.jobdetails[this.currentIndex];
  constructor(private jobs:JobService,private auth:AuthService,private alertify:AlertifyService) { }

  ngOnInit() {
    // this.getPhotosForApproval();
  }
  
    // getPhotosForApproval(){
    //   this.jobs.joprecomndation(".net").subscribe((parr:Job[]) => {
    //     this.jobss = parr;
    //     // console.log(this.careerpath); 
    //   }, () => {
    //     this.alertify.error('توجد مشكلة في عرض الصور');
    //   });
    // }
    // getDetailscareeerpath(){
    //   for (let index = 0; index < this.jobss.length/2; index++) {
    //     this.jobdetails.push({
    //       id:this.jobss.[++index].id,
    //       jobTitle:this.jobss[index++].jobTitle
    //     }) 
    //   }

}

