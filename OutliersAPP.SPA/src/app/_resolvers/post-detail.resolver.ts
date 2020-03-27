import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Post } from "../_models/Post";
import { AuthService } from "../_services/auth.service";

@Injectable()
export class PostDetailResolver implements Resolve<Post>{
    constructor(private userService:UserService,private router:Router,private alertify:AlertifyService,private authservice:AuthService){}
    resolve(route:ActivatedRouteSnapshot):Observable<Post>{
        return this.userService.getpostforuser(this.authservice.decodedToken.nameid,route.params['id']).pipe(
          catchError(error => {
              this.alertify.error('يوجد مشكلة في عرض البيانات');
              this.router.navigate(['/home']);
              return of(null);
          })
        );
    }
}
