import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPathCardComponent } from './career-path-card.component';

describe('CareerPathCardComponent', () => {
  let component: CareerPathCardComponent;
  let fixture: ComponentFixture<CareerPathCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerPathCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerPathCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
