import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChooseTournamentComponent } from './pages/choose-tournament/choose-tournament.component';

const routes: Routes = [{
  path:"",
  component: ChooseTournamentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
