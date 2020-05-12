import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPlaylistComponent } from './details-playlist.component';

describe('DetailsPlaylistComponent', () => {
  let component: DetailsPlaylistComponent;
  let fixture: ComponentFixture<DetailsPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
