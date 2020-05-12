import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { JobService } from 'src/app/_services/job.service';
import { Playlist } from 'src/app/_models/playlist';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-prof-dashboard',
  templateUrl: './prof-dashboard.component.html',
  styleUrls: ['./prof-dashboard.component.css']
})
export class ProfDashboardComponent implements OnInit {

  playlists: Playlist[];
  constructor(private playlistService:CoursesService, private alirtefy: AlertifyService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => { this.playlists = data['profdashboard']}
    );
  }

  deleteplaylist(id:number){
    this.playlistService.deletePlaylist(id).subscribe(
      ()=>{this.alirtefy.success('Deleted')},
      error=>this.alirtefy.error(error)
    )
  }
}
