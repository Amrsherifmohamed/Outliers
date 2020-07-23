import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Job } from "../_models/job";
import { JobService } from "../_services/job.service";
import { AuthService } from "../_services/auth.service";

@Injectable()
export class JopRecomendationResolver implements Resolve<Job[]>{
  constructor(private jobService: JobService, private router: Router, private alertify: AlertifyService,private authservice:AuthService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Job[]> {
    return this.jobService.joprecomndation(this.authservice.currentUser.careerpath).pipe(
      catchError(error => {
        this.alertify.error(' There is a problem displaying the data');
        this.router.navigate(['']);
        return of(null);

      })
    )
  }
}
