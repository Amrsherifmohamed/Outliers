import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Post } from 'src/app/_models/Post';
import { User } from 'src/app/_models/user';
import { Comment } from 'src/app/_models/comment';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts:Post[];
user:User;
comments:Comment[];
  constructor(private userservice:UserService,private authservice:AuthService
    ,private router:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit() {
    this.router.data.subscribe(data=>{
        this.posts=data["post"]
      });
      this.router.data.subscribe(data=>{
        this.comments=data["comment"]
      });
     // this.loadpost();
  }
  loadpost(){
    this.userservice.getpostsforuser(this.user.id).subscribe(
      (post:Post[])=>{
        this.posts=post;
      },
      error=> this.alertify.error(error)
    );
  }

}
