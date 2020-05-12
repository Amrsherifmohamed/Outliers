import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../_services/auth.service";
import { Job } from "../_models/job";
import { JobService } from "../_services/job.service";

@Injectable()
export class JobEditResolver implements Resolve<Job>{
    constructor(private userService:JobService,private authService:AuthService
        ,private router:Router,private alertify:AlertifyService){}
    resolve(route:ActivatedRouteSnapshot):Observable<Job>{
        return this.userService.getjob(route.params['id']).pipe(
          catchError(error => {
              this.alertify.error('يوجد مشكلة في عرض البيانات');
              this.router.navigate(['/jobs']);
              return of(null);
          })
        );
    }
}
