import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { JobService } from "../_services/job.service";
import { CoursesService } from "../_services/courses.service";

@Injectable()
export class PlaylistDetailResolver implements Resolve<User>{
  constructor(private coursesService: CoursesService, private router: Router, private alertify: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.coursesService.getPlaylist(route.params['id']).pipe(
      catchError(error => {
        this.alertify.error(' There is a problem displaying the data');
        this.router.navigate(['']);
        return of(null);

      })
    );
  }
}
