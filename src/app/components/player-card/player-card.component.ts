import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/services/live-game-score';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

}
