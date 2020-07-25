import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { CoursesService } from "../_services/courses.service";
import { Video } from "../_models/video";

@Injectable()
export class PlaylistvideosResolver implements Resolve<Video>{
  constructor(private coursesService: CoursesService, private router: Router, private alertify: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Video> {
    return this.coursesService.getvideoplaylist(route.params['id']).pipe(
      catchError(() => {
        this.alertify.error(' There is a problem displaying the data amr');
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}