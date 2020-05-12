import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Job } from "../_models/job";
import { JobService } from "../_services/job.service";

@Injectable()
export class CompanyDashboardResolver implements Resolve<Job[]>{
  constructor(private jobService: JobService, private router: Router, private alertify: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Job[]> {
    return this.jobService.getMyPostedJob().pipe(
      catchError(error => {
        this.alertify.error(' There is a problem displaying the data');
        this.router.navigate(['']);
        return of(null);

      })
    )
  }
}
