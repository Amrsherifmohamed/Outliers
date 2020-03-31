import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Job } from 'src/app/_models/job';
import { JobService } from 'src/app/_services/job.service';
@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  job: Job;
  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private userService: JobService, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.job = data['job'];
    });
  }

  updateUser() {

    this.userService.updateJob(this.job.id, this.job).subscribe(() => {
      this.alertify.success('updated Is Done ');
      this.editForm.reset(this.job);
    }, error => this.alertify.error(error));

  }
}
