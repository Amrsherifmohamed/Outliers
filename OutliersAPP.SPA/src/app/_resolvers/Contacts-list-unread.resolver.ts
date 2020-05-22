import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ContactsService } from "../_services/contacts.service";
import { UserContact } from "../_models/usercontact";

@Injectable()
export class ContactsListUnreadResolver implements Resolve<UserContact[]>{
    constructor(private userService:ContactsService,private router:Router,private alertify:AlertifyService){}
    resolve(route:ActivatedRouteSnapshot):Observable<UserContact[]>{
        return this.userService.GetContactsUnRead().pipe(
          catchError(error => {
              this.alertify.error('يوجد مشكلة في عرض البيانات');
              this.router.navigate(['']);
              return of(null);
          })
        );
    }
}
