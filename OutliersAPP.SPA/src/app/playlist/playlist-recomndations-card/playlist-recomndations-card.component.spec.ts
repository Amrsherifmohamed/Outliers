import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistRecomndationsCardComponent } from './playlist-recomndations-card.component';

describe('PlaylistRecomndationsCardComponent', () => {
  let component: PlaylistRecomndationsCardComponent;
  let fixture: ComponentFixture<PlaylistRecomndationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistRecomndationsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistRecomndationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
