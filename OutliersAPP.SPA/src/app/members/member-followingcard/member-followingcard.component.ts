import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-followingcard',
  templateUrl: './member-followingcard.component.html',
  styleUrls: ['./member-followingcard.component.css']
})
export class MemberFollowingcardComponent implements OnInit {
  @Input() following:User
  constructor(private userservice:UserService,
    private authservice:AuthService,
    private alertify:AlertifyService,
    private router:Router) { }

  ngOnInit() {
  }

}
