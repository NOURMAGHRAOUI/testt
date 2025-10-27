import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamUrl="http://localhost:3000/teams"

  constructor(private httpClient:HttpClient) { }

  addTeam(data:any){
    return this.httpClient.post<{message:any}>(this.teamUrl,data)
  }

  getAllTeams(){
    return this.httpClient.get<{teams:any}>(this.teamUrl)
  }


  
}
