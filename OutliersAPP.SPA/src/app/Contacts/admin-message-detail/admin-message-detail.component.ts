import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserContact } from 'src/app/_models/usercontact';
import { ContactsService } from 'src/app/_services/contacts.service';
import { AdminContact } from 'src/app/_models/admincontact';

@Component({
  selector: 'app-admin-message-detail',
  templateUrl: './admin-message-detail.component.html',
  styleUrls: ['./admin-message-detail.component.css']
})
export class AdminMessageDetailComponent implements OnInit {
  contacts: AdminContact;
  constructor(private contactsService: ContactsService, private alirtefy: AlertifyService, private alertify: AlertifyService,
    private route: ActivatedRoute,private router:Router) { }
    
  ngOnInit() {
    this.route.data.subscribe(
      data => { this.contacts = data['contact']}
    );
    this.readMsg();
  }

  readMsg() {
    this.contactsService.ReadMsgFromAdmin(this.contacts.id, this.contacts).subscribe(() => {
      console.log('done');
    }, error => this.alertify.error(error));

  }
  deletecontact(id:number){
    this.contactsService.deleteAdminContact(id).subscribe(
      ()=>{ this.router.navigate(['/msgfromadmin'])},
      error=>this.alirtefy.error(error)
    );
  }
}
