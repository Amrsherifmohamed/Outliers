import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rating } from '../_models/Rating';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  basUrl = environment.apiUrl + 'Rate/';
constructor(private http: HttpClient) { }
createrating(userid:number,playlistid:number,rating:Rating){
  return this.http.post(this.basUrl+userid+'/'+playlistid,rating);
}
getratingforplaylist(playlistid:number){
  return this.http.get(this.basUrl+playlistid+"/"+"playlist");
}
getoneratrforplyalist(id:number){
return this.http.get(this.basUrl+id);
}
getratingforplaylistfromuser(userid:number,playlistid:number){
  return this.http.get(this.basUrl+userid+"/"+playlistid);
}

}
