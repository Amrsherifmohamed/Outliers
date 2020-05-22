import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistWithVideoViewComponent } from './playlist-with-video-view.component';

describe('PlaylistWithVideoViewComponent', () => {
  let component: PlaylistWithVideoViewComponent;
  let fixture: ComponentFixture<PlaylistWithVideoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistWithVideoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistWithVideoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
