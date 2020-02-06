import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { ChooseTournamentComponent } from './pages/choose-tournament/choose-tournament.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainHeaderComponent,
    MainFooterComponent,
    ChooseTournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }