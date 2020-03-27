import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/_models/Comment';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  @Input() comment:Comment
  user:User

  constructor(private userservice:UserService,
    public authservice:AuthService,
    private alertify:AlertifyService,
    public router:Router) { }

  ngOnInit() {
  }
  deletecomment(userid:number,id:number,postid:number){
    this.userservice.deletecomment(postid,userid,id).subscribe(
      ()=>{
        this.alertify.success("Comment is deleted");
      },
      error=>{
        this.alertify.error("Cant delete this Comment");
      }
    )
  }

}
