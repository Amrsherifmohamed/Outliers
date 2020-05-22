import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Playlist } from "../_models/playlist";
import { CoursesService } from "../_services/courses.service";
import { ContactsService } from "../_services/contacts.service";
import { UserContact } from "../_models/usercontact";

@Injectable()
export class ContactsEditReadmsgResolver implements Resolve<UserContact>{
  constructor(private PlaylistService: ContactsService, private router: Router, private alertify: AlertifyService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<UserContact> {
    return this.PlaylistService.getUserContact(route.params['id']).pipe(
      catchError(error => {
        this.alertify.error(' There is a problem displaying the data');
        this.router.navigate(['']);
        return of(null);

      })
    )
  }
}
