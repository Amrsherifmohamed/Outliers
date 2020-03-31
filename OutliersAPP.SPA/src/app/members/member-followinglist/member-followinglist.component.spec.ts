import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFollowinglistComponent } from './member-followinglist.component';

describe('MemberFollowinglistComponent', () => {
  let component: MemberFollowinglistComponent;
  let fixture: ComponentFixture<MemberFollowinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberFollowinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFollowinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
