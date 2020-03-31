import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/_models/job';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { JobService } from 'src/app/_services/job.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent implements OnInit {
  model: Job;
  jobForm: FormGroup;
  constructor(private router: Router, private fp: FormBuilder, private authjob: JobService, private authService: AuthService, private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.createJobForm();
  }

  createJobForm() {
    this.jobForm = this.fp.group({
      jobTitle: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      salary:['', Validators.required],
      experienceNeeded:['', Validators.required],
      vacancies: ['', Validators.required],
      jobRole: ['', Validators.required],
      CareerLevel: ['', Validators.required],
      JobType: ['', Validators.required],
      JobDescription: ['', Validators.required],
      jobRequirements: ['', Validators.required],
    });

  }

  addJob() {
    if (this.jobForm.valid) {
      this.model = Object.assign({}, this.jobForm.value);
      this.authjob.addJob(this.model, this.authService.decodedToken.nameid).subscribe(
        () => { this.alertify.success('Add Is Done');
        this.router.navigate(['/jobs']);
      }
        , error => this.alertify.error(error)
      );
    }


  }
}
