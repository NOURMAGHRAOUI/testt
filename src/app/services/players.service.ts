import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playerUrl="http://localhost:3000/players"
  
  constructor(private httpClient:HttpClient) { }

  addPlayer(data:any , file:File){
    const formData= new FormData()

    formData.append('image',file)
    formData.append('playerName',data.playerName)
    formData.append('playerNumber',data.playerNumber)
    formData.append('playerPost',data.playerPost)
    formData.append('teamId',data.teamId)

    return this.httpClient.post<{message:any}>(this.playerUrl,formData )
  }

  getAllPlayers(){
    return this.httpClient.get<{players:any}>(this.playerUrl)
  }

}
