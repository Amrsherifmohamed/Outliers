import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/_models/job';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { JobService } from 'src/app/_services/job.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  jobs: Job[];
  constructor(private auth:JobService, private alirtefy: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => { this.jobs = data['dashboard']}
    );
  }

  deleteJob(id:number){
    this.auth.deleteJob(id).subscribe(
      ()=>{this.alirtefy.success('Deleted')},
      error=>this.alirtefy.error(error)
    )
  }

}
