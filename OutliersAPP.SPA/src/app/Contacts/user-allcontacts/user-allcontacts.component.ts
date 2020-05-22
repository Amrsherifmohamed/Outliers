import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { CoursesService } from 'src/app/_services/courses.service';
import { UserContact } from 'src/app/_models/usercontact';
import { ContactsService } from 'src/app/_services/contacts.service';

@Component({
  selector: 'app-user-allcontacts',
  templateUrl: './user-allcontacts.component.html',
  styleUrls: ['./user-allcontacts.component.css']
})
export class UserAllcontactsComponent implements OnInit {
contacts:UserContact[];
constructor(private contactsService:ContactsService, private alirtefy: AlertifyService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => { this.contacts = data['contactus']}
    );
  }
  
  // deletecontact(id:number){
  //   this.playlistService.deletePlaylist(id).subscribe(
  //     ()=>{this.alirtefy.success('Deleted')},
  //     error=>this.alirtefy.error(error)
  //   )
  // }

}
