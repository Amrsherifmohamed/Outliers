import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Careerpath } from '../_models/Careerpath';
import { CareerDetails } from '../_models/CareerDetails';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl + 'admin/';
  baseUrl2=environment.apiUrl+'users/'
  constructor(private http: HttpClient) { }
  getUsersWithRoles(){
    return this.http.get(this.baseUrl+'usersWithRoles');
  }
  updateUserRoles(user:User,roles:{}){
    return this.http.post(this.baseUrl+'editRoles/'+user.userName,roles);
  }

  getPhotosForApproval() {
    return this.http.get(this.baseUrl + 'photosForModeration');
  }

  approvePhoto(photoId) {
    return this.http.post(this.baseUrl + 'approvePhoto/' + photoId, {});
  }

  rejectPhoto(photoId) {
    return this.http.post(this.baseUrl + 'rejectPhoto/' + photoId, {});
  }
  Addcareerpath(careerpath:Careerpath){
    return this.http.post(this.baseUrl2+"Careerpath",careerpath);
  }
  getallcareerpath()
  {
    return this.http.get(this.baseUrl2+"Careerpath");
  }
  Deletecareerpath(id:number){
    return this.http.delete(this.baseUrl2+"Careerpath/"+id);
  }
  Getcareerpath(id:number){
    return this.http.get(this.baseUrl2+"Careerpath/"+id);
  }
  Updatecareerpath(id:number,userid:number,careerpath:Careerpath){
    return this.http.put(this.baseUrl2+"Careerpath/"+userid+"/"+id,careerpath);
  }
  
  deletepathdetails(careerpathid:number,patid:number){
    return this.http.delete(this.baseUrl2+"Careerpath/PathDetails/"+careerpathid+"/"+patid);
  }
  createpathdetails(careerpathid:number,carerdtails:CareerDetails){
    return this.http.post(this.baseUrl2+"Careerpath/PathDetails/"+careerpathid,carerdtails);
  }
}
