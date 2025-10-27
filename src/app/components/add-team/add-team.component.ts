import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm!:FormGroup
  team:any={}
  constructor( private tService:TeamsService) { }

  ngOnInit(): void {
  }

  addTeam(){
    
    this.tService.addTeam(this.team).subscribe((rst)=>{
      console.log(rst.message);
      
    })

  }

}
