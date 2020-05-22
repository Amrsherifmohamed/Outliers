import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactsDetailsComponent } from './user-contacts-details.component';

describe('UserContactsDetailsComponent', () => {
  let component: UserContactsDetailsComponent;
  let fixture: ComponentFixture<UserContactsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
