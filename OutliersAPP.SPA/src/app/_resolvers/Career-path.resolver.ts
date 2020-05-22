import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Post } from "../_models/Post";
import { AuthService } from "../_services/auth.service";
import { Careerpath } from "../_models/Careerpath";

@Injectable()
export class CareerpathResolver implements Resolve<Careerpath[]>{
    constructor(private userService:UserService,private router:Router,private alertify:AlertifyService
        ,private authservice:AuthService){}
    resolve(route:ActivatedRouteSnapshot):Observable<Careerpath[]>{
        return this.userService.getcareerpath().pipe(
          catchError(error => {
              this.alertify.error('Problem to show career path');
              this.router.navigate(['profile']);
              return of(null);
          })  
        )
    }
}