import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';


@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {
  model: any = {};
  user:User;
  photoUrl:string;
  count:string;


  constructor(public authService: AuthService,
    public route:ActivatedRoute,private userService:UserService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
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

  }







