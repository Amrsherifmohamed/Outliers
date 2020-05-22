import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { HubConnection , HubConnectionBuilder } from '@aspnet/signalr';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  user:User;
  photoUrl:string;
  count:string;
  

  hubConnection:HubConnection;
  constructor(public authService: AuthService,
    public route:ActivatedRoute,private userService:UserService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    // this.route.data.subscribe(data => {
    //   this.user = data['user'];
    // });

    this.authService.currentPhotoUrl.subscribe(
      photoUrl =>this.photoUrl=photoUrl);
      if(this.loggedIn){
        this.userService.getUnreadCount(this.authService.decodedToken.nameid).subscribe(
          res=>{this.authService.unreadCount.next(res.toString());
          this.authService.latestUnreadCount.subscribe(res=>{this.count=res;});
          }
        );
        this.getPaymentForUser();

      }

    this.hubConnection = new HubConnectionBuilder().withUrl("http://localhost:5000/chat").build();
    this.hubConnection.start();
    this.hubConnection.on('count', () => {
      setTimeout(() => {
            this.userService.getUnreadCount(this.authService.decodedToken.nameid).subscribe(res=>{
              this.authService.unreadCount.next(res.toString());
              this.authService.latestUnreadCount.subscribe(res=>{this.count=res;});
                   });
          }, 0);
  });
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => { this.alertify.success('تم الدخول بنجاح');
      this.userService.getUnreadCount(this.authService.decodedToken.nameid).subscribe(res => {
        this.authService.unreadCount.next(res.toString());
        this.authService.latestUnreadCount.subscribe(res => {this.count = res;} );
        this.getPaymentForUser();
             });
             },
      error => { this.alertify.error(error) },
      () => { this.router.navigate(['/members']); }
    );
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !! token;
    return this.authService.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.authService.decodedToken = null;
    this.authService.paid = false;
    localStorage.removeItem('user');
    this.authService.currentUser = null;
    this.alertify.message('تم الخروج');
    this.router.navigate(['/home']);
  }

  getPaymentForUser()
  {
    this.userService.getPaymentForUser(this.authService.currentUser.id).subscribe(
      res =>{
        if(res !== null) {
          this.authService.paid = true;
        } else{
        this.authService.paid = false;
        }
      }
    );

    }
}
