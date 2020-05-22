import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllmessagesComponent } from './admin-allmessages.component';

describe('AdminAllmessagesComponent', () => {
  let component: AdminAllmessagesComponent;
  let fixture: ComponentFixture<AdminAllmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
