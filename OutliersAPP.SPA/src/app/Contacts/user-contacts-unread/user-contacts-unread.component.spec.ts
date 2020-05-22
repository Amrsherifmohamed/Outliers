import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactsUnreadComponent } from './user-contacts-unread.component';

describe('UserContactsUnreadComponent', () => {
  let component: UserContactsUnreadComponent;
  let fixture: ComponentFixture<UserContactsUnreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactsUnreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactsUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
