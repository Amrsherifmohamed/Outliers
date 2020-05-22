import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberChatdetailComponent } from './member-chatdetail.component';

describe('MemberChatdetailComponent', () => {
  let component: MemberChatdetailComponent;
  let fixture: ComponentFixture<MemberChatdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberChatdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberChatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
