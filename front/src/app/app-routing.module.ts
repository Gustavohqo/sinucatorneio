import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChooseTournamentComponent } from './pages/choose-tournament/choose-tournament.component';
import { TournamentComponent } from './pages/tournament/tournament.component';

const routes: Routes = [{
  path:"",
  component: ChooseTournamentComponent
},
{
  path:"tournament",
  component: TournamentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
