import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVideComponent } from './details-vide.component';

describe('DetailsVideComponent', () => {
  let component: DetailsVideComponent;
  let fixture: ComponentFixture<DetailsVideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsVideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
