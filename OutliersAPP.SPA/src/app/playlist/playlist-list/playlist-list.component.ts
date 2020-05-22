import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/_models/playlist';
import { AuthService } from 'src/app/_services/auth.service';
import { CoursesService } from 'src/app/_services/courses.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {
playlists:Playlist[];

  constructor(private authservice:AuthService,private courseservice:CoursesService,
    private alrtifyservice:AlertifyService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(
      data=>{this.playlists=data["playlist"]}
    );
  }

}
