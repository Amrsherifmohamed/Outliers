import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/_services/courses.service';
import { Playlist } from 'src/app/_models/playlist';
@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {
  model: Playlist;
  playlistForm: FormGroup;
  constructor(private router: Router, private fp: FormBuilder, private playlistService: CoursesService
    , private authService: AuthService, 
    private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.createplaylistForm();
  }

  createplaylistForm() {
    this.playlistForm = this.fp.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });

  }

  addPlaylist() {
    if (this.playlistForm.valid) {
      this.model = Object.assign({}, this.playlistForm.value);
      this.playlistService.addPlaylist(this.model, this.authService.decodedToken.nameid).subscribe(
        () => { this.alertify.success('Add Is Done');
        this.router.navigate(['/profdashboard']);
      }
        , error => this.alertify.error(error)
      );
    }


  }

}
