import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserContact } from 'src/app/_models/usercontact';
import { ContactsService } from 'src/app/_services/contacts.service';

@Component({
  selector: 'app-make-usercontacts-read',
  templateUrl: './make-usercontacts-read.component.html',
  styleUrls: ['./make-usercontacts-read.component.css']
})
export class MakeUsercontactsReadComponent implements OnInit {

  contacts:UserContact;
  constructor(private contactsService:ContactsService, private alirtefy: AlertifyService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.data.subscribe(
      data => { this.contacts = data['contactus']},

    );
    this.readMsg();
  }

  readMsg() {

    this.contactsService.ReadMsg(this.contacts.id, this.contacts).subscribe(() => {
      this.alertify.success('updated Is Done ');
    }, error => this.alertify.error(error));

  }

}
