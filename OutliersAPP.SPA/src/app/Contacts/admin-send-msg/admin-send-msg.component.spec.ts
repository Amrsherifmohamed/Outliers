import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSendMsgComponent } from './admin-send-msg.component';

describe('AdminSendMsgComponent', () => {
  let component: AdminSendMsgComponent;
  let fixture: ComponentFixture<AdminSendMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSendMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSendMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
