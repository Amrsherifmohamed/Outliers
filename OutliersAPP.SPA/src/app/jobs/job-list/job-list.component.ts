import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/_models/job';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[];
  constructor(private auth: AuthService, private alirtefy: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => { this.jobs = data['jobs']}
    );
  }

}
