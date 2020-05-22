import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllcontactsComponent } from './user-allcontacts.component';

describe('UserAllcontactsComponent', () => {
  let component: UserAllcontactsComponent;
  let fixture: ComponentFixture<UserAllcontactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAllcontactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
