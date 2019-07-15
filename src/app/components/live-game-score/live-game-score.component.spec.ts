import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveGameScoreComponent } from './live-game-score.component';

describe('LiveGameScoreComponent', () => {
  let component: LiveGameScoreComponent;
  let fixture: ComponentFixture<LiveGameScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveGameScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveGameScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
