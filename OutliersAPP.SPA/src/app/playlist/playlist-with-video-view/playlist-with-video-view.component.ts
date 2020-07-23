import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/_models/video';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/_services/courses.service';
import { Playlist } from 'src/app/_models/playlist';
import { VgAPI } from 'videogular2/compiled/core';
export interface IMedia {
  title: string;
  src: string;
  type: string;
}
@Component({
  selector: 'app-playlist-with-video-view',
  templateUrl: './playlist-with-video-view.component.html',
  styleUrls: ['./playlist-with-video-view.component.css']
})

export class PlaylistWithVideoViewComponent implements OnInit {

playlist:Playlist;
videos:Array<Video>=[];  
api:VgAPI;



constructor(private router:ActivatedRoute,private couresservice:CoursesService) { }

  ngOnInit() {
    this.router.data.subscribe(data=>{
      this.playlist=data["playlist"]
    });
    this.getvideos();
    
  }
  
  
  currentIndex = 0;
  currentItem: Video = this.videos[this.currentIndex];

  onClickPlaylistItem(item: Video,index) {
      this.currentIndex = index;
      this.currentItem = item;
  }
  getvideos(){
    for (let index = 0; index < this.playlist.videos.length; index++) {
      this.videos.push({
       url:this.playlist.videos[index].url,
       dateAdded:this.playlist.videos[index].dateAdded,
       description:this.playlist.videos[index].description,
       id:this.playlist.videos[index].id
      }) 
    }
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
        this.playVideo.bind(this)
    );
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      this.nextVideo.bind(this)
   );
}
nextVideo() {
  this.currentIndex++;

  if (this.currentIndex === this.playlist.videos.length) {
      this.currentIndex = 0;
  }

  this.currentItem = this.playlist[ this.currentIndex ];
}

playVideo() {
   this.api.play();
}
// getImages(){
//    //imageUrls:Array<Video>();
//   for(let i =0;i<this.playlistss.length;i++){
//     this.playlist.push({
//       url:this.playlistss.video[i].url,
//       description:this.playlistss.video[i].description,
//       dateAdded:this.playlistss.video[i].dateAdded,
//       id:this.playlistss.video[i].id
//       // medium:this.playlistss.video[i].url,
//       // big:this.playlistss.video[i].url,
//     })
//   };
// }

}
