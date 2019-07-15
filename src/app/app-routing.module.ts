import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveGameScoreComponent } from './components/live-game-score/live-game-score.component';


const routes: Routes = [
  { path: 'live-game/:id', component: LiveGameScoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
