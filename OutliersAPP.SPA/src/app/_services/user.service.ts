import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { PaginationResult } from '../_models/Pagination';
import { map } from 'rxjs/operators';
import { Message } from '../_models/message';
import { Post } from '../_models/Post';
import {Comment} from '../_models/Comment'
import { Careerpath } from '../_models/Careerpath';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + 'users/';
  baseurl2=environment.apiUrl +"PlayList/";
  constructor(private http: HttpClient) { }

  getUsers(page?, itemsPerPage?, userParams?, likeParam?): Observable<PaginationResult<User[]>> {
    const paginationResult: PaginationResult<User[]> = new PaginationResult<User[]>();
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }
    if (userParams != null) {
      params = params.append('minAge', userParams.minAge);
      params = params.append('maxAge', userParams.maxAge);
      params = params.append('gender', userParams.gender);
      params = params.append('orderBy', userParams.orderBy);
    }
    if (likeParam === 'Likers') {
      params = params.append('likers', 'true');
    }
    if (likeParam === 'Likees') {
      params = params.append('likees', 'true');
    }
    return this.http.get<User[]>(this.baseUrl, { observe: 'response', params }).pipe(
      map(response => {
        paginationResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginationResult.pagination = JSON.parse(response.headers.get('Pagination'))
        }
        return paginationResult;
      })

    );
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + id);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + id, user);
  }

  setMainPhoto(userId: number, id: number) {
    return this.http.post(this.baseUrl + userId + '/photos/' + id + '/setMain', {});
  }

  deletePhoto(userId: number, id: number) {
    return this.http.delete(this.baseUrl + userId + '/photos/' + id);
  }

  sendLike(id: number, recipientId: number) {
    return this.http.post(this.baseUrl + id + '/like/' + recipientId, {});
  }

  getMessages(id: number, page?, itemsPerPage?, messageType?) {
    const paginationResult: PaginationResult<Message[]> = new PaginationResult<Message[]>();
    let params = new HttpParams();
    params = params.append('MessageType',messageType);
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }
    return this.http.get<Message[]>(this.baseUrl+ id +'/messages',{observe:'response',params}).pipe(
      map(response=>{
        paginationResult.result=response.body;
        if(response.headers.get('Pagination')!==null){
          paginationResult.pagination=JSON.parse(response.headers.get('Pagination'));
        }
        return paginationResult;
      })
    );
  }

  getConversation(id:number,recipientId:number){
    return this.http.get<Message[]>(this.baseUrl+id+'/messages/chat/'+recipientId);
  }

  sendMessage(id:number,message:Message){
    return this.http.post(this.baseUrl+id+'/messages',message);
  }

  getUnreadCount(userId){
    return this.http.get(this.baseUrl + userId + '/messages/count');
  }

  markAsRead (userId:number,messageId:number){
    return this.http.post(this.baseUrl + userId + '/messages/read/' + messageId,{}).subscribe();
  }

  deleteMessage(id:number,userId:number){
   return this.http.post(this.baseUrl+userId+'/messages/'+id,{});
  }

  charge(userId:number,stripeToken:string){
    return this.http.post(this.baseUrl + userId + '/charge/' + stripeToken , {});
  }

  getPaymentForUser(userId:number){
    return this.http.get(this.baseUrl + userId + '/payment');
  }
  userFollowering(userId:number){
    return this.http.get(this.baseUrl+userId+'/userFollowering');
  }
  getnumberofollwers(userId:number){
    return this.http.get(this.baseUrl+userId+"/getnumberofollwers")
  }
  getpostsforuser(userId:number):Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl+userId+ " /Posts");
  }
  getpostforuser(userId:number,id:number){
    return this.http.get(this.baseUrl+userId+"/posts/"+id);
  }
  createpost(post:Post,userId:number){
    return this.http.post(this.baseUrl+userId+"/posts",post);
  }
  deletpost(userId:number,id:number){
    return this.http.delete(this.baseUrl+userId+"/posts/"+id,{});
  }
  updatepost(userId:number,id:number,post:Post){
    return this.http.put(this.baseUrl+userId+"/posts/"+id,post);
  }
  getpostfollwering(userId:number){
    return this.http.get(this.baseUrl+userId+"/posts/home");
  }
  getcommnetforpost(postId:number,userId:number):Observable<Comment[]>{
    return this.http.get<Comment[]>(this.baseUrl+userId+"/Comment/"+postId);
  }
  createcomment(postId:number,userId:number,comment:Comment){
    return this.http.post(this.baseUrl+userId+"/Comment/"+postId,comment);
  }
  updatcomment(postId:number,userId:number,comment:Comment,id:number){
    return this.http.put(this.baseUrl+userId+"/Comment/"+postId+id,comment);
  }
  deletecomment(postId:number,userId:number,id:number){
    return this.http.delete(this.baseUrl+userId+"/Comment/"+postId+"/"+id);
  }
  getfollowing(userId:number){
    return this.http.get(this.baseUrl+userId+"/getfollowing");
  }
  getnumberofComment(postId:number,userId:number){
    return this.http.get(this.baseUrl+userId+"/Comment/"+postId+"getnucomment");
  }
  getcareerpath(){
    return this.http.get(this.baseUrl+"Careerpath");
  }
  getplaylistrecomndation(userid:number){
    return this.http.get(this.baseurl2+"Playlist/"+userid);
  }
  createcareerpath(userid:number,careerpath:User){
    return this.http.put(this.baseUrl+userid+"/"+"createcareerpath",careerpath);
  }
}
