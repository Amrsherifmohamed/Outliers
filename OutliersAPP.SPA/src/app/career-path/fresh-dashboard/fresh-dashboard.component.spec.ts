import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshDashboardComponent } from './fresh-dashboard.component';

describe('FreshDashboardComponent', () => {
  let component: FreshDashboardComponent;
  let fixture: ComponentFixture<FreshDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
