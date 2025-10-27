import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-table-players',
  templateUrl: './table-players.component.html',
  styleUrls: ['./table-players.component.css']
})
export class TablePlayersComponent implements OnInit {

  players:any=[]

  constructor(private pService:PlayersService) { }

  ngOnInit(): void {
    this.getAllPlayers()
  }

  getAllPlayers(){
    this.pService.getAllPlayers().subscribe((result)=>{
      this.players=result.players
    })
  }



}
