import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/_models/playlist';

@Component({
  selector: 'app-playlist-recomndations-list',
  templateUrl: './playlist-recomndations-list.component.html',
  styleUrls: ['./playlist-recomndations-list.component.css']
})
export class PlaylistRecomndationsListComponent implements OnInit {
  playlists:Playlist[];
  constructor(private alertify:AlertifyService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data=>{this.playlists=data["playlists"]}
    );
  }

}
