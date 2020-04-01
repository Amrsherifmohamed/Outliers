import { Component, OnInit, ViewChild, HostListener, ElementRef, Input } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Post } from 'src/app/_models/Post';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { NgForm } from '@angular/forms';
import { error } from 'util';
import { Comment } from 'src/app/_models/Comment';
import { Message } from 'src/app/_models/message';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr'
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
@Component({
  selector: 'app-member-chatdetail',
  templateUrl: './member-chatdetail.component.html',
  styleUrls: ['./member-chatdetail.component.css']
})
export class MemberChatdetailComponent implements OnInit {
  user: User;
  created: string;
  age: string;
  showIntro: boolean = true;
  showLook: boolean = true;
  paid: boolean = false;
  photoUrl: string;
  countfollwers: string;
  countfollwing: string;
  users:User[];
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


  constructor(private userService: UserService, private authService: AuthService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.paid = this.authService.paid;
    }, 0);
  }

  ngOnInit() {
    // this.loadUser();
    this.paid = this.authService.paid;
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    // this.userService.userFollowering(this.authService.decodedToken.nameid).
    //   subscribe(
    //     res=>{this.authService.firstfollower.next(res.toString());
    //     this.authService.latestfollowercount.subscribe(res=>{this.countfollwers=res;});
    //     }
    //   );


    this.userService.userFollowering(this.user.id).
      subscribe(
        res => {
          this.authService.firstfollower.next(res.toString());
          this.authService.latestfollowercount.subscribe(res => { this.countfollwers = res; });
        }
      );
    this.userService.getnumberofollwers(this.user.id).subscribe(
      res => {
        this.authService.firstfollwering.next(res.toString());
        this.authService.latestfolloweringcount.subscribe(res => { this.countfollwing = res; });
      }
    );
    this.created = new Date(this.user.created).toLocaleString('ar-EG', this.options).replace('،', '');
    this.age = this.user.age.toLocaleString('ar-EG');


  }

  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.user.photos.length; i++) {
      imageUrls.push({
        small: this.user.photos[i].url,
        medium: this.user.photos[i].url,
        big: this.user.photos[i].url,
      })
    };
    return imageUrls;
  }

  deselect() {
    this.authService.hubConnection.stop()
  }

  // loadUser(){
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe(
  //     (user:User)=>{this.user=user},
  //     error=>{this.alertify.error(error)}
  //   )
  // }


}
