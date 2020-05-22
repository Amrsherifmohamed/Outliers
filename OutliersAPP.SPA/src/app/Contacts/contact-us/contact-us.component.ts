import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/_models/job';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { JobService } from 'src/app/_services/job.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserContact } from 'src/app/_models/usercontact';
import { ContactsService } from 'src/app/_services/contacts.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  model: UserContact;
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
      email: ['', Validators.required],
      content: ['', Validators.required],
    });

  }
  addContact() {
    if (this.contactForm.valid) {
      this.model = Object.assign({}, this.contactForm.value);
      this.contactsService.addUserContact(this.model, this.authService.decodedToken.nameid).subscribe(
        () => { this.alertify.success('Add Is Done');
        this.router.navigate(['/profdashboard']);
      }
        , error => this.alertify.error(error)
      );
    }


  }
}
