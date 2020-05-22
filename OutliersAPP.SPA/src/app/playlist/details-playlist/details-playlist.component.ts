import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/_models/playlist';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-details-playlist',
  templateUrl: './details-playlist.component.html',
  styleUrls: ['./details-playlist.component.css']
})
export class DetailsPlaylistComponent implements OnInit {
  playlist: Playlist;

  constructor(private route: ActivatedRoute ,
    private playlistService: CoursesService) { }

    ngOnInit() {
      this.route.data.subscribe(
        data => { this.playlist = data['playlists']}
      );
    }
  

}
