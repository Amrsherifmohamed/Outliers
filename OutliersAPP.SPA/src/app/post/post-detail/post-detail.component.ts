import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/Post';
import { Comment } from 'src/app/_models/Comment'
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  posts:Post[];
  comments:Comment[];
  showinput:boolean=false;

  constructor(private userservice:UserService,private authservice:AuthService
    ,private router:ActivatedRoute,private alertify:AlertifyService) { }

  ngOnInit() {
    this.router.data.subscribe(data=>{
      this.posts=data["post"]
    });
    this.router.data.subscribe(data=>{
      this.comments=data["comment"]
    });
  }
  show(){
    this.showinput=true;
  }

}
