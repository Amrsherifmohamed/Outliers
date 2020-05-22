import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { CoursesService } from 'src/app/_services/courses.service';
import { UserContact } from 'src/app/_models/usercontact';
import { ContactsService } from 'src/app/_services/contacts.service';
import { AdminContact } from 'src/app/_models/admincontact';

@Component({
  selector: 'app-admin-allmessages',
  templateUrl: './admin-allmessages.component.html',
  styleUrls: ['./admin-allmessages.component.css']
})
export class AdminAllmessagesComponent implements OnInit {

  contacts:AdminContact[];
  constructor( private contactsService: ContactsService,private alirtefy: AlertifyService,
    private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.route.data.subscribe(
        data => { this.contacts = data['contact']}
      );
    }
    deletecontact(id:number){
      this.contactsService.deleteAdminContact(id).subscribe(
        ()=>{this.alirtefy.success('Deleted')},
        error=>this.alirtefy.error(error)
      );
    }
}
