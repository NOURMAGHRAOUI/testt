import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { TableMatchComponent } from './components/table-match/table-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { LoginComponent } from './components/login/login.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TablePlayersComponent } from './components/table-players/table-players.component';

const routes: Routes = [
  {path:"",component:HomeComponent}, //http://localhost:4200
  {path:"contact",component:ContactComponent},//http://localhost:4200/contact
  {path:"add-match",component:AddMatchComponent},//http://localhost:4200/add-match
  {path:"add-team",component:AddTeamComponent},//http://localhost:4200/add-match
  {path:"add-player",component:AddPlayerComponent},//http://localhost:4200/add-match
  {path:"edit-match/:id",component:AddMatchComponent},//http://localhost:4200/add-match
  {path:"table-matches",component:TableMatchComponent},//http://localhost:4200/add-match
  {path:"table-players",component:TablePlayersComponent},//http://localhost:4200/add-match
  {path:"match-info/:idMatch",component:MatchInfoComponent},//http://localhost:4200/add-match
  {path:"signup",component:SignupComponent},//http://localhost:4200/add-match
  {path:"signupAdmin",component:SignupComponent},//http://localhost:4200/add-match
  {path:"matches",component:MatchesComponent},//http://localhost:4200/add-match
  {path:"login",component:LoginComponent},//http://localhost:4200/add-match
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
