import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/_models/job';
import { JobService } from 'src/app/_services/job.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-job-recomndations-list',
  templateUrl: './job-recomndations-list.component.html',
  styleUrls: ['./job-recomndations-list.component.css']
})
export class JobRecomndationsListComponent implements OnInit {
  jobs:Job[];
  user:User;
  constructor(private jopservice:JobService,private alertify:AlertifyService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.jobs=data['job']}
    );

    
  }

}
