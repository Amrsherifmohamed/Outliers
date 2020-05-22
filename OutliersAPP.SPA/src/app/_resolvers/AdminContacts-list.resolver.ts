import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Post } from "../_models/Post";
import { AuthService } from "../_services/auth.service";
import { ContactsService } from "../_services/contacts.service";
import { UserContact } from "../_models/usercontact";
import { AdminContact } from "../_models/admincontact";

@Injectable()
export class AdminContactsListResolver implements Resolve<AdminContact[]>{
    constructor(private userService:ContactsService,private router:Router,private alertify:AlertifyService
        ,private authservice:AuthService){}
    resolve(route:ActivatedRouteSnapshot):Observable<AdminContact[]>{
        return this.userService.GetAllAdminContacts().pipe(
          catchError(error => {
              this.alertify.error('Problem to show posts');
              this.router.navigate(['']);
              return of(null);
          })  
        )
    }
}