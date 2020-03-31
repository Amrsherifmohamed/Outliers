import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-followinglist',
  templateUrl: './member-followinglist.component.html',
  styleUrls: ['./member-followinglist.component.css']
})
export class MemberFollowinglistComponent implements OnInit {
followings:User[];
constructor(private userservice:UserService,private authservice:AuthService
  ,private router:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit() {
    this.router.data.subscribe(data=>
      this.followings=data["following"]
    );
  }

}
