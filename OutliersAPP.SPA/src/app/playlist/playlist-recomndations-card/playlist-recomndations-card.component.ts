import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from 'src/app/_models/playlist';

@Component({
  selector: 'app-playlist-recomndations-card',
  templateUrl: './playlist-recomndations-card.component.html',
  styleUrls: ['./playlist-recomndations-card.component.css']
})
export class PlaylistRecomndationsCardComponent implements OnInit {
@Input() playlist:Playlist
  constructor() { }

  ngOnInit() {
  }

}
