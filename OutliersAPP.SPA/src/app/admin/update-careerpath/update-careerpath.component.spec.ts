import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCareerpathComponent } from './update-careerpath.component';

describe('UpdateCareerpathComponent', () => {
  let component: UpdateCareerpathComponent;
  let fixture: ComponentFixture<UpdateCareerpathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCareerpathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCareerpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
