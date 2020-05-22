import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFollowingcardComponent } from './member-followingcard.component';

describe('MemberFollowingcardComponent', () => {
  let component: MemberFollowingcardComponent;
  let fixture: ComponentFixture<MemberFollowingcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberFollowingcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFollowingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
