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
import { Playlist } from "../_models/playlist";
import { CoursesService } from "../_services/courses.service";

@Injectable()
export class PlaylistEditResolver implements Resolve<Playlist>{
    constructor(private coursesService:CoursesService,private authService:AuthService
        ,private router:Router,private alertify:AlertifyService){}
    resolve(route:ActivatedRouteSnapshot):Observable<Playlist>{
        return this.coursesService.getPlaylist(route.params['id']).pipe(
          catchError(error => {
              this.alertify.error('يوجد مشكلة في عرض البيانات');
              this.router.navigate(['']);
              return of(null);
          })
        );
    }
}

// import { Injectable } from "@angular/core";
// import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
// import { AlertifyService } from "../_services/alertify.service";
// import { Observable, of } from "rxjs";
// import { catchError } from "rxjs/operators";
// import { CoursesService } from "../_services/courses.service";
// import { Playlist } from "../_models/playlist";

// @Injectable()
// export class PlaylistEditResolver implements Resolve<Playlist>{
//     constructor(private PlaylistService: CoursesService
//         , private router: Router, private alertify: AlertifyService) { }
//     resolve(route: ActivatedRouteSnapshot): Observable<Playlist> {
//         return this.PlaylistService.getPlaylist(route.params['id']).pipe(
//             catchError(error => {
//                 this.alertify.error('يوجد مشكلة في عرض البيانات');
//                 this.router.navigate(['/profdashboard']);
//                 return of(null);
//             })
//         );
//     }
// }
