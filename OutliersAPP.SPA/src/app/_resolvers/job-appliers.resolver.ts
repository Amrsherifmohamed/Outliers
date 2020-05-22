import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Job } from "../_models/job";
import { JobService } from "../_services/job.service";
import { ApplyForJob } from "../_models/applyForJob";

@Injectable()
export class JobAppliersResolver implements Resolve<ApplyForJob[]>{
  constructor(private jobService: JobService, private router: Router, private alertify: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<ApplyForJob[]> {
    return this.jobService.mySponserApplied().pipe(
      catchError(error => {
        this.alertify.error(' There is a problem displaying the data');
        this.router.navigate(['']);
        return of(null);

      })
    )
  }
}
