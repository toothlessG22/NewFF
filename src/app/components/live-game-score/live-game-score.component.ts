import { Component, OnInit } from '@angular/core';
import { LiveGameScoreService } from 'src/app/services/live-game-score.service';
import { LiveGameScore, Player, Position } from 'src/app/services/live-game-score';

class LiveGameScoreRow {
  constructor(private player1: Player, private position: Position, private player2: Player) {
  }
}

@Component({
  selector: 'app-live-game-score',
  templateUrl: './live-game-score.component.html',
  styleUrls: ['./live-game-score.component.scss']
})
export class LiveGameScoreComponent implements OnInit {

  private liveGameScore: LiveGameScore;
  private liveGameScoreRows = Array<LiveGameScoreRow>();
  private columnsToDisplay = ['player1image', 'player1info', 'player1score', 'position', 'player2score', 'player2info', 'player2image'];

  constructor(private liveGameScoreService: LiveGameScoreService) {}

  ngOnInit() {
    this.liveGameScore = this.liveGameScoreService.getCurrentScore();
    this.liveGameScoreRows = this.generateRows();
  }

  private generateRows(): Array<LiveGameScoreRow> {
    const rows = new Array<LiveGameScoreRow>();
    for (const [positionKey, position] of this.liveGameScore.$positions.entries()) {
      rows.push(new LiveGameScoreRow(
          this.liveGameScore.$team1.getPlayer(positionKey),
          position,
          this.liveGameScore.$team2.getPlayer(positionKey)
        ));
    }
    return rows;
  }

}


