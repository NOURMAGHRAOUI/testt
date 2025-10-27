import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableMatchComponent } from './components/table-match/table-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TableTeamsComponent } from './components/table-teams/table-teams.component';
import { TablePlayersComponent } from './components/table-players/table-players.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AddMatchComponent,
    TableMatchComponent,
    MatchInfoComponent,
    SignupComponent,
    MatchesComponent,
    MatchComponent,
    BannerComponent,
    ReversePipe,
    MyFilterPipe,
    LoginComponent,
    AddTeamComponent,
    AddPlayerComponent,
    TableTeamsComponent,
    TablePlayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , // TDF
    ReactiveFormsModule , // Reactive F
    HttpClientModule, // Bostagi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
