import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { JobService } from "../_services/job.service";
import { CoursesService } from "../_services/courses.service";
import { Playlist } from "../_models/playlist";

@Injectable()
export class PlaylistCategoryResolver implements Resolve<Playlist>{
  constructor(private coursesService: CoursesService, private router: Router, private alertify: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Playlist> {
    return this.coursesService.getplaylistcategory(route.params['category']).pipe(
      catchError(error => {
        this.alertify.error(' There is a problem displaying the data');
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}
