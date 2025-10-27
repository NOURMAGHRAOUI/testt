import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  count: number = 0
  path: string = "https://f.hellowork.com/blogdumoderateur/2013/10/google-logo.png"

  constructor() { }

  ngOnInit(): void {
    console.log("here into contact");
    this.count = 1
  }

  setCount(parm:any) {
    console.log("here param", parm);


  }




}
