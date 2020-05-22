import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Careerpath } from 'src/app/_models/Careerpath';

@Component({
  selector: 'app-career-path-list',
  templateUrl: './career-path-list.component.html',
  styleUrls: ['./career-path-list.component.css']
})
export class CareerPathListComponent implements OnInit {
careerpath:Careerpath[];
  constructor(private authservice:AuthService,private userservice:UserService,private router:ActivatedRoute,
    private alertify:AlertifyService) { }

  ngOnInit() {
    this.router.data.subscribe(data=>{
      this.careerpath=data["careerpath"]
    })
  }

}
