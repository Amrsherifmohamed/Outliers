import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRecomndationsListComponent } from './job-recomndations-list.component';

describe('JobRecomndationsListComponent', () => {
  let component: JobRecomndationsListComponent;
  let fixture: ComponentFixture<JobRecomndationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRecomndationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRecomndationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
