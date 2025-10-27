import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  imagePreview=""
  teams:any=[]
  addPlayerForm!:FormGroup
  player:any={}
  fileImage:any
  constructor( private teamService:TeamsService , private playerService:PlayersService  ) { }

  ngOnInit(): void {
    this.getAllTeams()
  }

  addPlayer(){
    this.playerService.addPlayer(this.player , this.fileImage ).subscribe((rst)=>{
      console.log(rst.message);
      
    })

  }

  getAllTeams(){
    this.teamService.getAllTeams().subscribe((res)=>{
      
      this.teams=res.teams
    })
  }

  onImageSelected(event:any){
    // const file = (event.target as HTMLInputElement).files[0];
    const file =  event.target.files[0]
    this.fileImage=file

 
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
