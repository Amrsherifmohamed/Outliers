import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserContact } from 'src/app/_models/usercontact';
import { ContactsService } from 'src/app/_services/contacts.service';

@Component({
  selector: 'app-user-contacts-details',
  templateUrl: './user-contacts-details.component.html',
  styleUrls: ['./user-contacts-details.component.css']
})
export class UserContactsDetailsComponent implements OnInit {

  contacts:UserContact;
  constructor(private contactsService:ContactsService, private alirtefy: AlertifyService,private alertify: AlertifyService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.data.subscribe(
      data => { this.contacts = data['contactus']}
    );
    this.readMsg();
  }
  readMsg() {

    this.contactsService.ReadMsg(this.contacts.id, this.contacts).subscribe(() => {
      console.log('done');
    }, error => this.alertify.error(error));

}
}