import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/_services/contacts.service';
import { AdminContact } from 'src/app/_models/admincontact';

@Component({
  selector: 'app-admin-send-msg',
  templateUrl: './admin-send-msg.component.html',
  styleUrls: ['./admin-send-msg.component.css']
})
export class AdminSendMsgComponent implements OnInit {
  @Input() recipientId;
  model: AdminContact;
  contactForm: FormGroup;
  constructor(private router: Router, private fp: FormBuilder, private contactsService: 
    ContactsService, private authService: AuthService, private route: ActivatedRoute,
     private alertify: AlertifyService) { }


  ngOnInit() {
    this.createJobForm();
  }
  createJobForm() {
    this.contactForm = this.fp.group({
      suject: ['', Validators.required],
      content: ['', Validators.required],
    });

  }
  addContact() {
    if (this.contactForm.valid) {
      this.model = Object.assign({}, this.contactForm.value);
      this.contactsService.addAdminContact(this.model, this.recipientId).subscribe(
        () => { this.alertify.success('Add Is Done');
        this.router.navigate(['/allcontacts']);
      }
        , error => this.alertify.error(error)
      );
    }

}
}