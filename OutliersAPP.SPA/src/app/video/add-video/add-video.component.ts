import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Video } from 'src/app/_models/video';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  uploader: FileUploader;
 video: Video[]
  baseUrl = environment.apiUrl;
  hasBaseDropZoneOver = false;

  constructor(private authService: AuthService , private route:ActivatedRoute,
    private coursesService:CoursesService,
    private alertify:AlertifyService
    ){}

  ngOnInit() {
    this.initializeUploader();
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader(
      {
        url: this.baseUrl + 'videos/' + 'addvideo/' + this.authService.decodedToken.nameid,
        authToken: 'Bearer ' + localStorage.getItem('token'),
        isHTML5: true,
        allowedFileType: ['video'],
        removeAfterUpload: true,
        autoUpload: false,

      }
    );
    
    this.uploader.onAfterAddingFile=(file)=>{file.withCredentials=false;};
    // this.uploader.onSuccessItem=(item,Response,status,headers)=>{
    //   if(Response){
    //     const res: Video = JSON.parse(Response);
    //     const video ={
    //       id:res.id,
    //       url:res.url,
    //       dateAdded:res.dateAdded,
    //       description:res.description,
    //     };
    //     this.video.push(video);

    //     // if(video){
    //     //   this.authService.changeMemberPhoto(video.url);
    //     //   this.coursesService.currentPlaylist.videoUrl=video.url;
    //     //   localStorage.setItem('user',JSON.stringify(this.authService.currentUser));
    //     //     }
    
    //   }
    // };
  }


}
