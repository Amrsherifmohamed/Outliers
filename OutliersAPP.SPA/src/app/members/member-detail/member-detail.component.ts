import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TabsetComponent } from 'ngx-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit , AfterViewChecked {

  @ViewChild('memberTabs') memberTabs:TabsetComponent;
  user: User;
  created:string;
  age:string;
  showIntro:boolean=true;
  showLook:boolean=true;
  paid:boolean=false;
  photoUrl:string;
  countfollwers:string;
  countfollwing:string;
  options = {weekday : 'long' , year :'numeric' , month : 'long',day:'numeric'};

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private userService: UserService,private authService:AuthService, private alertify: AlertifyService,
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
    this.route.queryParams.subscribe(
     params=>{
       const selectedTab = params['tab'];
       this.memberTabs.tabs[selectedTab>0?selectedTab:0].active=true;
     }
    )
    this.userService.userFollowering(this.user.id).
    subscribe(
      res=>{this.authService.firstfollower.next(res.toString());
      this.authService.latestfollowercount.subscribe(res=>{this.countfollwers=res;});
      }
    );
    this.userService.getnumberofollwers(this.user.id).subscribe(
      res=>{this.authService.firstfollwering.next(res.toString());
      this.authService.latestfolloweringcount.subscribe(res=>{this.countfollwing=res;});}
    );
    this.created = new Date(this.user.created).toLocaleString('ar-EG',this.options).replace('،','');
    this.age = this.user.age.toLocaleString('ar-EG');
    this.galleryOptions = [{ "previewFullscreen": true, "previewForceFullscreen": true },
    { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
    { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }];

    this.galleryImages=this.getImages();
    this.created = new Date(this.user.created).toLocaleString('ar-EG',this.options).replace('،','');
    this.age = this.user.age.toLocaleString('ar-EG');
    this.showIntro=true;
    this.showLook=true;


  }
  selectTab(tabId:number){
    this.memberTabs.tabs[tabId].active=true;
  }
  getImages(){
    const imageUrls=[];
    for(let i =0;i<this.user.photos.length;i++){
      imageUrls.push({
        small:this.user.photos[i].url,
        medium:this.user.photos[i].url,
        big:this.user.photos[i].url,
      })
    };
    return imageUrls;
  }

  deselect(){
this.authService.hubConnection.stop()
  }

  // loadUser(){
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe(
  //     (user:User)=>{this.user=user},
  //     error=>{this.alertify.error(error)}
  //   )
  // }



}
