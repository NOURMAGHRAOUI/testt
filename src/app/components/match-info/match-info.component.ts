import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  id:any

  match:any={}

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('idMatch')

    this.getMatchById()
    
  }

  getMatchById(){
    let matches= JSON.parse(localStorage.getItem("matches") || '[]')
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].id === Number(this.id)) {
        this.match=matches[i]
      }     
    }

  }

  compare(a:any,b:any){   
    if (Number(a)>Number(b)) {
      return ['Win' , 'green']  
    }else if (Number(a)<Number(b)) {
      return ['Loss','blue']
    }else{
      return ['Draw','yellow']
    }

  }

}
