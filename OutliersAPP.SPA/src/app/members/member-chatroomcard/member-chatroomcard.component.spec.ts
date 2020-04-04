import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberChatroomcardComponent } from './member-chatroomcard.component';

describe('MemberChatroomcardComponent', () => {
  let component: MemberChatroomcardComponent;
  let fixture: ComponentFixture<MemberChatroomcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberChatroomcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberChatroomcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
