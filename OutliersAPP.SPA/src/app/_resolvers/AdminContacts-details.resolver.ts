import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { JobService } from "../_services/job.service";
import { ContactsService } from "../_services/contacts.service";
import { AdminContact } from "../_models/admincontact";

@Injectable()
export class AdminContactsDetailResolver implements Resolve<AdminContact>{
  constructor(private contactsService: ContactsService, private router: Router, private alertify: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<AdminContact> {
    return this.contactsService.getAdminContact(route.params['id']).pipe(
      catchError(error => {
        this.alertify.error(' There is a problem displaying the data');
        this.router.navigate(['']);
        return of(null);

      })
    );
  }
}
