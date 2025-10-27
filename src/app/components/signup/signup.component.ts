import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MustMatch } from 'src/app/shared/matching';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup

  constructor(private fb: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
    console.log(window.location);


    this.signupForm = this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.maxLength(4), Validators.required]],
      email: ['', [Validators.email, , Validators.required]],
      password: [''],
      cPassword: [''],
      role: [window.location.pathname === "/signupAdmin" ? 'admin' : 'user'   ],
    }, {
      validators: MustMatch('password', 'cPassword')
    })
  }


  signup() {

    console.log(this.signupForm.value);
    
    
    this.userService.signUp(this.signupForm.value).subscribe((res) => {
      console.log(res.message);
    })
  }

}
