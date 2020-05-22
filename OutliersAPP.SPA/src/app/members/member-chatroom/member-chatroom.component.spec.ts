import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberChatroomComponent } from './member-chatroom.component';

describe('MemberChatroomComponent', () => {
  let component: MemberChatroomComponent;
  let fixture: ComponentFixture<MemberChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberChatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
