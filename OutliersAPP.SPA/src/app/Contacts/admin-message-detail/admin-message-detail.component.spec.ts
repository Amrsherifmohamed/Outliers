import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessageDetailComponent } from './admin-message-detail.component';

describe('AdminMessageDetailComponent', () => {
  let component: AdminMessageDetailComponent;
  let fixture: ComponentFixture<AdminMessageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
