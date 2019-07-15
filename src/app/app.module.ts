import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveGameScoreComponent } from './components/live-game-score/live-game-score.component';
import { SharedModule } from './shared/shared.module';
import { PlayerCardComponent } from './components/player-card/player-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveGameScoreComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
