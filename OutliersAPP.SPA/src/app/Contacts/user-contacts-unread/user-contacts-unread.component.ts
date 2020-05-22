import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { CoursesService } from 'src/app/_services/courses.service';
import { UserContact } from 'src/app/_models/usercontact';
import { ContactsService } from 'src/app/_services/contacts.service';

@Component({
  selector: 'app-user-contacts-unread',
  templateUrl: './user-contacts-unread.component.html',
  styleUrls: ['./user-contacts-unread.component.css']
})
export class UserContactsUnreadComponent implements OnInit {
  contacts:UserContact[];
  constructor(private contactsService:ContactsService, private alirtefy: AlertifyService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.data.subscribe(
      data => { this.contacts = data['contactus']}
    );
  }
}
