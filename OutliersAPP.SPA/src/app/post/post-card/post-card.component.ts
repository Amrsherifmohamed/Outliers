import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/_models/Post';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import {Comment} from'src/app/_models/Comment'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
 @Input() post:Post
 comments: Comment[];
 newComment: any = {};
 user:User
 showinput:boolean=false;
 countcomments:string
  constructor(private userservice:UserService,
    private authservice:AuthService,
    private alertify:AlertifyService,
    private router:Router) { }

  ngOnInit() {
    // this.loadComments();
    // this.userservice.getnumberofComment(this.post.id,this.authservice.decodedToken.nameid).
    //   subscribe(
    //     res=>{this.authservice.countcomment.next(res.toString());
    //     this.authservice.lastetcountcoment.subscribe(res=>{this.countcomments=res;});
    //     }
    //   );
  }
  deletepost(id:number){
    this.userservice.deletpost(this.authservice.decodedToken.nameid,id).subscribe(
      ()=>{this.alertify.success("Posted deleted")
    this.router.navigate(['/members/profile']);
    //signalR
    },
      error=>{this.alertify.error("Cant Delete this Post")}
    );
  }
  // loadComments() {
  //   // const currentUserId = +this.authService.decodedToken.nameid;
  //   this.userservice.getcommnetforpost(this.post.id,this.authservice.decodedToken.nameid).pipe(
  //     tap(comments=>{
     
  //         for (const comment of comments) {
  //           if(comment.postId==this.post.id)
  //           {return true}
  //            };
        
  //     })
  //   ).subscribe(
  //     comments => {
  //       this.comments = comments.reverse();
  //     },
  //     error => { this.alertify.error(error); },
  //     ()=>{ 
  //       setTimeout(() => {
  //        this.userservice.getcommnetforpost(this.post.id,this.authservice.decodedToken.nameid);
  //        }, 1000);
  //        }
  //   )
  // }
  sendComment() {
    this.userservice.createcomment(this.post.id,this.authservice.decodedToken.nameid,this.newComment).subscribe(
     ()=>{this.alertify.success("comment createted")
        this.newComment.description=''},
     error=>{this.alertify.error(error)})
  }
  show(){
    this.showinput=true;
  }
}
