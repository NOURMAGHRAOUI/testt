import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-table-match',
  templateUrl: './table-match.component.html',
  styleUrls: ['./table-match.component.css']
})
export class TableMatchComponent implements OnInit {

  matches: any = []
  constructor(private router:Router , private mService:MatchesService) { }

  ngOnInit(): void {
    this.getAllMatches()
  }




  getAllMatches() {
    this.mService.getAllMatches().subscribe((rst)=>{
      this.matches=rst.matches
    
    })

  }

  deleteMatch(id: any) {

    
    this.mService.deleteMatch(id).subscribe((res)=>{

      console.log(res.message);
      this.getAllMatches()
    })
  }



  navigateTo(id: any , path:any){
    this.router.navigate([path +id])
  }



}
