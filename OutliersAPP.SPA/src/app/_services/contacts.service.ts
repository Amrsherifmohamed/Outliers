import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { PaginationResult } from '../_models/Pagination';
import { map } from 'rxjs/operators';
import { Message } from '../_models/message';
import { Post } from '../_models/Post';
import {Comment} from '../_models/Comment'
import { UserContact } from '../_models/usercontact';
import { AdminContact } from '../_models/admincontact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  basUrlUserContact = environment.apiUrl + 'contact/';
  basUrlAdmin = environment.apiUrl + 'adminmsg/';

  constructor(private http: HttpClient) { }

  getUserContact(id): Observable<UserContact> {
    return this.http.get<UserContact>(this.basUrlUserContact + id);
  }
  GetAllUserContacts(): Observable<UserContact> {
    return this.http.get<UserContact>(this.basUrlUserContact + 'allcontacts/');
  }
  GetContactsUnRead(): Observable<UserContact> {
    return this.http.get<UserContact>(this.basUrlUserContact);
  }
  addUserContact(userContact: UserContact, id: string) {
    return this.http.post(this.basUrlUserContact + 'createcontact/' + id, userContact);
  }
  ReadMsg(id: number, userContact: UserContact){
    return this.http.put(this.basUrlUserContact + 'read/' + id, userContact);
  }
  deletelUserContact(id: number){
    return this.http.delete(this.basUrlUserContact + 'deletecontact/' + id, {});
  }

  // Admin Contact
  getAdminContact(id): Observable<AdminContact> {
    return this.http.get<AdminContact>(this.basUrlAdmin + id);
  }
  GetAllAdminContacts(): Observable<AdminContact> {
    return this.http.get<AdminContact>(this.basUrlAdmin + 'allcontacts/');
  }
  GetAdminContactsUnRead(): Observable<AdminContact> {
    return this.http.get<AdminContact>(this.basUrlAdmin);
  }
  addAdminContact(userContact: AdminContact, id: string) {
    return this.http.post(this.basUrlAdmin + 'sendmsg/' + id, userContact);
  }
  ReadMsgFromAdmin(id: number, userContact: AdminContact){
    return this.http.put(this.basUrlAdmin + 'read/' + id, userContact);
  }
  deleteAdminContact(id: number){
    return this.http.delete(this.basUrlAdmin + 'deletecontact/' + id, {});
  }

}
