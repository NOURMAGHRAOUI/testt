import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  addMatchForm !: FormGroup
  match: any = {}
  id: any
  title: string = "Add Match"
  msg:string=""
  constructor(private router: Router, private activatedRoute: ActivatedRoute , private mService: MatchesService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id !== null) {
      this.title = "Edit Match"
      this.getMatchById()
    }

  }

  addEditMatch() {
   
    if (this.id) {
      // rani fel edit
      this.mService.updateMatch(this.match).subscribe((rst)=>{

        this.msg=rst.message

        this.router.navigate(['table-matches'])
      })
    } else {
      // here into add
      this.mService.addMatch(this.match).subscribe((rst)=>{

        
        this.msg=rst.message

        this.router.navigate(['table-matches'])
      })
    }

  }


  getMatchById() {
    this.mService.getMatchById(this.id).subscribe((res)=>{
      this.match= res.match
    })
  }

}
