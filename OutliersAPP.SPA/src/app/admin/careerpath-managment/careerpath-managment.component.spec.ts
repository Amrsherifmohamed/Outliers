import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerpathManagmentComponent } from './careerpath-managment.component';

describe('CareerpathManagmentComponent', () => {
  let component: CareerpathManagmentComponent;
  let fixture: ComponentFixture<CareerpathManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerpathManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerpathManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
