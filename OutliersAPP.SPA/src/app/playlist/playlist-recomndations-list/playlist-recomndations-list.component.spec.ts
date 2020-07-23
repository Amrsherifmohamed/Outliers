import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistRecomndationsListComponent } from './playlist-recomndations-list.component';

describe('PlaylistRecomndationsListComponent', () => {
  let component: PlaylistRecomndationsListComponent;
  let fixture: ComponentFixture<PlaylistRecomndationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistRecomndationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistRecomndationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
