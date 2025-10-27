import { Component, OnInit } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role:any
  constructor() { }

  ngOnInit(): void {
   
  }

  isLoggedIn() {
    const token = sessionStorage.getItem('connectedUser');
    if (token) {
      const decoded = jwtDecode(token)
      if (decoded) {
            // @ts-ignore: Unreachable code error
            this.role=decoded.user.role                    
      }
    
    }    
    return !!token;
  }


  logout(){
    sessionStorage.removeItem('connectedUser')
  }





}
