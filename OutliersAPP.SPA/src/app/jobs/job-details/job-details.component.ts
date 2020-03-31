import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/_models/job';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyForJob } from 'src/app/_models/applyForJob';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { JobService } from 'src/app/_services/job.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job: Job;
  model: ApplyForJob;
  jobForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private fp: FormBuilder,
    private authjob: JobService, private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => { this.job = data['job'] }
    );
    this.createApplyForm();
  }
  createApplyForm() {
    this.jobForm = this.fp.group({
      msg: ['', Validators.required],
    });
  }

  apply(){
    if (this.jobForm.valid) {
      this.model = Object.assign({}, this.jobForm.value);
      this.authjob.applyJob(this.model,this.job.id).subscribe(
        () => { this.alertify.success('Add Is Done');
        this.router.navigate(['/jobs']);
      }
        , error => this.alertify.error(error)
      );
    }

  }
}
