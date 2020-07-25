import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Playlist } from 'src/app/_models/playlist';
import { RatingService } from 'src/app/_services/Rating.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent implements OnInit {
  @Input() playlist:Playlist
  @ViewChild('PostForm') PostForm: NgForm
  stars: number[] = [0.8, 1.2, 3.5, 4.1, 5.1];
  selectedValue:number;
  newrating:any={};

  constructor(private ratingservice:RatingService,private authservice:AuthService,private alertify:AlertifyService) { }

  ngOnInit() {
    // console.log(this.playlist.Id);
  }
  // countStar(star) {
  //   this.selectedValue = star;
  //   this.newrating.ratvalue=star;
  //   console.log('Value of star', star);
  // }
  createrating(star){
    this.selectedValue = star;
    this.newrating=star;
    this.ratingservice.createrating(this.authservice.currentUser.id,this.playlist.id,this.newrating).
    subscribe(
      ()=>{
        this.alertify.success("success to upload post");
          // this.newpost.description='';
          console.log('Value of star', this.newrating);
      },
      error=>{
        // this.alertify.error("error to uplad post"),
        this.alertify.error(error);
      }
    )
  }

}
