import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeUsercontactsReadComponent } from './make-usercontacts-read.component';

describe('MakeUsercontactsReadComponent', () => {
  let component: MakeUsercontactsReadComponent;
  let fixture: ComponentFixture<MakeUsercontactsReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeUsercontactsReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeUsercontactsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
