import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAppliersComponent } from './company-appliers.component';

describe('CompanyAppliersComponent', () => {
  let component: CompanyAppliersComponent;
  let fixture: ComponentFixture<CompanyAppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
