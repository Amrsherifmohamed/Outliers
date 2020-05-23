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
  basUrl = environment.apiUrl + 'Playlist/';
  currentPlaylist:Playlist;

constructor(private http: HttpClient) { }

  getPlaylist(id): Observable<Playlist> {
    return this.http.get<Playlist>(this.basUrl + "getplaylist/" + id);
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
  getplaylistcategory(category:string):Observable<Playlist[]>{
    return this.http.get<Playlist[]>(this.basUrl+category);
  }
  getvideoplaylist(id:number):Observable<Video[]>{
    return this.http.get<Video[]>(this.basUrl+'Getvideoforplaylist/'+id);
  }



}
