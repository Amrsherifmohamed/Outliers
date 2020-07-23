import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../_services/auth.service";
import { Playlist } from "../_models/playlist";

@Injectable()
export class PlaylistRecomendationResolver implements Resolve<Playlist[]>{
  constructor(private userservice: UserService, private router: Router, private alertify: AlertifyService,private authservice:AuthService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Playlist[]> {
    return this.userservice.getplaylistrecomndation(this.authservice.decodedToken.nameid).pipe(
      catchError(() => {
        console.log(this.authservice.currentUser.id);
        this.alertify.error(' There is a problem displaying the dataamr');
        this.router.navigate(['']);
        return of(null);

      })
    )
  }
}
