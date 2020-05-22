import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessagesUnreadComponent } from './admin-messages-unread.component';

describe('AdminMessagesUnreadComponent', () => {
  let component: AdminMessagesUnreadComponent;
  let fixture: ComponentFixture<AdminMessagesUnreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessagesUnreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessagesUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
