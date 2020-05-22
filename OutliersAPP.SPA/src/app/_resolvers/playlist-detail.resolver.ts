import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { CoursesService } from "../_services/courses.service";
import { Playlist } from "../_models/playlist";

@Injectable()
export class PlaylistDetailResolver implements Resolve<Playlist>{
  constructor(private coursesService: CoursesService, private router: Router, private alertify: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Playlist> {
    return this.coursesService.getPlaylist(route.params['id']).pipe(
      catchError(() => {
        this.alertify.error(' There is a problem displaying the data');
        this.router.navigate(['']);
        return of(null);

      })
    );
  }
}
