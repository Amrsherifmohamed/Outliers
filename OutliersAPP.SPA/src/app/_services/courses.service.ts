import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Playlist } from '../_models/playlist';
import { Observable } from 'rxjs';
import { Video } from '../_models/video';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  basUrl = environment.apiUrl + 'playlist/';
  currentPlaylist:Playlist;
  constructor(private http: HttpClient) { }

  getPlaylist(id): Observable<Playlist> {
    return this.http.get<Playlist>(this.basUrl + id);
  }
  getmyPlaylist(): Observable<Playlist> {
    return this.http.get<Playlist>(this.basUrl + 'myplaylists/' );
  }
  addPlaylist(playlist: Playlist, id: string) {
    return this.http.post(this.basUrl + 'addplaylist/' + id, playlist);
  }

  deletePlaylist(id: number){
    return this.http.delete(this.basUrl + 'deleteplaylist/' + id, {});
  }
  updateplaylist(id: number, playlist: Playlist){
    return this.http.put(this.basUrl + 'updateplaylist/' + id, playlist);
  }

  // video
  addVideo(video: Video, id: string,playlistid: string) {
    return this.http.post(this.basUrl + 'addplaylist/' + id + playlistid, video);
  }

}
