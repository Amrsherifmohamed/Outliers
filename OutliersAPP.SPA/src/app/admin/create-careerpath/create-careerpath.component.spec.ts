import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCareerpathComponent } from './create-careerpath.component';

describe('CreateCareerpathComponent', () => {
  let component: CreateCareerpathComponent;
  let fixture: ComponentFixture<CreateCareerpathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCareerpathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCareerpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
