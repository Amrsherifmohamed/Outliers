import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Post } from 'src/app/_models/Post';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { NgForm } from '@angular/forms';
import { error } from 'util';
import { Comment } from 'src/app/_models/Comment';


@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.css']
})
export class MemberHomeComponent implements OnInit {
@ViewChild('PostForm') PostForm: NgForm
post:Post;
comment:Comment;
newpost:any={};
countfollwers:string;
countfollwing:string;

@HostListener('window:beforeunload',['$event'])

unLoadNotification($event:any){
  if(this.PostForm.dirty){
    $event.returnValue=true;
  }
}
  constructor(private userService:UserService,private authService:AuthService
    ,private alertify:AlertifyService) { }

  ngOnInit() {
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
  }

  
  createpost(){
      this.userService.createpost(this.newpost,this.authService.decodedToken.nameid).subscribe(
        ()=>{
          this.alertify.success("success to upload post");
          this.newpost.description='';
        },
      error=>{
          // this.alertify.error("error to uplad post"),
          this.alertify.error(error);
        }
      );
    }
}
