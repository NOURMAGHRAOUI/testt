import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() match:any
  @Output() newEvent : EventEmitter <any>= new EventEmitter() 
  constructor() { }
  ngOnInit(): void {
  }
  passId(){
    console.log("here into child");
    this.newEvent.emit(this.match.id)
  }

}
