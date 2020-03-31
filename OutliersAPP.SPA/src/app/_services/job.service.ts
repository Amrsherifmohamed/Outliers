import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../_models/job';
import { User } from '../_models/user';
import { ApplyForJob } from '../_models/applyForJob';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  basUrl = environment.apiUrl + 'company/';
  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.basUrl);
  }

  getjob(id): Observable<Job> {
    return this.http.get<Job>(this.basUrl + id);
  }

  addJob(job: Job, id: string) {
    return this.http.post(this.basUrl + 'addjob/' + id, job);
  }

  getMyPostedJob(): Observable<Job[]> {
    return this.http.get<Job[]>(this.basUrl + 'getmypostedjob/');
  }

  mySponserApplied(): Observable<ApplyForJob[]> {
    return this.http.get<ApplyForJob[]>(this.basUrl + 'mysponser/');
  }
  applyJob(applyForJob: ApplyForJob, id: number) {
    return this.http.post(this.basUrl + 'apply/' + id, applyForJob);
  }


  updateJob(id: number, job: Job) {
    return this.http.put(this.basUrl + 'updatejob/' + id, job);
  }
  deleteJob(id: number) {
    return this.http.delete(this.basUrl + 'deletejob/' + id, {});
  }

}
