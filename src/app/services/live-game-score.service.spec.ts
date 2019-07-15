import { TestBed } from '@angular/core/testing';

import { LiveGameScoreService } from './live-game-score.service';

describe('LiveGameScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveGameScoreService = TestBed.get(LiveGameScoreService);
    expect(service).toBeTruthy();
  });
});
