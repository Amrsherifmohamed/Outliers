import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-chatroomcard',
  templateUrl: './member-chatroomcard.component.html',
  styleUrls: ['./member-chatroomcard.component.css']
})
export class MemberChatroomcardComponent implements OnInit {
  @Input() following:User;
  constructor() { }

  ngOnInit() {
  }

}
