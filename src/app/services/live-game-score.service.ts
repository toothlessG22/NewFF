import { Injectable } from '@angular/core';
import { LiveGameScore, Player, Team, Position, PositionType } from './live-game-score';

@Injectable({
  providedIn: 'root'
})
export class LiveGameScoreService {

  constructor() { }

  public getCurrentScore(): LiveGameScore {
    const positions = new Map<string, Position>();
    positions.set('wr1', new Position('WR', PositionType.STARTING));
    positions.set('wr2', new Position('WR', PositionType.STARTING));
    positions.set('wr3', new Position('WR', PositionType.STARTING));
    positions.set('wr4', new Position('WR', PositionType.STARTING));

    const players1 = new Array<Player>();
    players1.push(new Player('Julio Jones', 'https://placebeard.it/64x64/1', 69.1, 'wr1', 'ATL', '1st 15:00 @CLE', '1000 YDs, 69 TDs'));
    players1.push(new Player('Julio Jones', 'https://placebeard.it/64x64/2', 69.2, 'wr2', 'ATL', '1st 15:00 @CLE', '1000 YDs, 69 TDs'));
    players1.push(new Player('Julio Jones', 'https://placebeard.it/64x64/3', 69.3, 'wr3', 'ATL', '1st 15:00 @CLE', '1000 YDs, 69 TDs'));
    players1.push(new Player('Julio Jones', 'https://placebeard.it/64x64/4', 69.4, 'wr4', 'ATL', '1st 15:00 @CLE', '1000 YDs, 69 TDs'));
    const team1 = new Team(0, players1);

    const players2 = new Array<Player>();
    players2.push(new Player('Odell Beckham Jr.', 'https://placebeard.it/64x64/5', 62.5, 'wr1', 'CLE', '1st 15:00 ATL', '-1 YDs, 1 Fum'));
    players2.push(new Player('Odell Beckham Jr.', 'https://placebeard.it/64x64/6', 62.6, 'wr2', 'CLE', '1st 15:00 ATL', '-1 YDs, 1 Fum'));
    players2.push(new Player('Odell Beckham Jr.', 'https://placebeard.it/64x64/7', 62.7, 'wr3', 'CLE', '1st 15:00 ATL', '-1 YDs, 1 Fum'));
    players2.push(new Player('Odell Beckham Jr.', 'https://placebeard.it/64x64/8', 62.8, 'wr4', 'CLE', '1st 15:00 ATL', '-1 YDs, 1 Fum'));
    const team2 = new Team(1, players2);

    const liveGameScore = new LiveGameScore(positions, team1, team2);

    return liveGameScore;
  }
}
