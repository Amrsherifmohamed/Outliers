import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRecomndationsCardComponent } from './job-recomndations-card.component';

describe('JobRecomndationsCardComponent', () => {
  let component: JobRecomndationsCardComponent;
  let fixture: ComponentFixture<JobRecomndationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRecomndationsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRecomndationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
