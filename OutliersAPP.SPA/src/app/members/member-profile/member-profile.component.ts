import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { Post } from 'src/app/_models/Post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {
  @ViewChild('PostForm') PostForm: NgForm
  user: User;
  post:Post;
  created:string;
  age:string;
  photoUrl:string;
  countfollwers:string;
  countfollwing:string;
  options = {weekday : 'long' , year :'numeric' , month : 'long',day:'numeric'};
  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private userService:UserService,private authService:AuthService) { }

    ngOnInit() {
      this.route.data.subscribe(data => {
        this.user = data['user'];
      });
      // this.route.data.subscribe(data=>{
      //   this.post=data['post'];
      // })
      this.authService.currentPhotoUrl.subscribe(photoUrl=>this.photoUrl=photoUrl);
      this.userService.userFollowering(this.authService.decodedToken.nameid).
      subscribe(
        res=>{this.authService.firstfollower.next(res.toString());
        this.authService.latestfollowercount.subscribe(res=>{this.countfollwers=res;});
        }
      );
      this.userService.getnumberofollwers(this.authService.decodedToken.nameid).subscribe(
        res=>{this.authService.firstfollwering.next(res.toString());
        this.authService.latestfolloweringcount.subscribe(res=>{this.countfollwing=res;});}
      );
      this.created = new Date(this.user.created).toLocaleString('ar-EG',this.options).replace('،','');
      this.age = this.user.age.toLocaleString('ar-EG');
    }
    //
  }

