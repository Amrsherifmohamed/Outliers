import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Playlist } from "../_models/playlist";
import { CoursesService } from "../_services/courses.service";

@Injectable()
export class ProfDashboardResolver implements Resolve<Playlist[]>{
  constructor(private PlaylistService: CoursesService, private router: Router, private alertify: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Playlist[]> {
    return this.PlaylistService.getmyPlaylist().pipe(
      catchError(error => {
        this.alertify.error(' There is a problem displaying the data');
        this.router.navigate(['']);
        return of(null);

      })
    )
  }
}
