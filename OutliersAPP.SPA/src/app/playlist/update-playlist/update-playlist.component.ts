import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Job } from 'src/app/_models/job';
import { JobService } from 'src/app/_services/job.service';
import { Playlist } from 'src/app/_models/playlist';
import { CoursesService } from 'src/app/_services/courses.service';
@Component({
  selector: 'app-update-playlist',
  templateUrl: './update-playlist.component.html',
  styleUrls: ['./update-playlist.component.css']
})
export class UpdatePlaylistComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  
  playlist: Playlist;
  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private playlistService: CoursesService, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.playlist = data['playlists'];
    });
  }
  updateplaylist() {
    this.playlistService.updateplaylist(this.playlist.id, this.playlist).subscribe(() => {
      this.alertify.success('updated Is Done');
      this.editForm.reset(this.playlist);
    }, error => this.alertify.error(error));

  }
}
