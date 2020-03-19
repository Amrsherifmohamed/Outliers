import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {
  user: User;
  created:string;
  age:string;
  photoUrl:string;
  options = {weekday : 'long' , year :'numeric' , month : 'long',day:'numeric'};
  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private userService:UserService,private authService:AuthService) { }

    ngOnInit() {
      this.route.data.subscribe(data => {
        this.user = data['user'];
      });

      this.authService.currentPhotoUrl.subscribe(photoUrl=>this.photoUrl=photoUrl);
      this.created = new Date(this.user.created).toLocaleString('ar-EG',this.options).replace('،','');
      this.age = this.user.age.toLocaleString('ar-EG');
    }

    
  }

