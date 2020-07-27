import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service'
import { LoginService } from '../login.service';
import { Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

export interface User{
  name:string;
  email:string;
  password:string;
  mobile:number;
  amount: number;
  country: string;
  period: string;
  expiry: string;
}
@Component({
  selector: 'app-log-in-contribution',
  templateUrl: './log-in-contribution.component.html',
  styleUrls: ['./log-in-contribution.component.css']
})

export class LogInContributionComponent implements OnInit {
  situation:boolean;
  successful: boolean;
  notReg:boolean;
  errormessage:string; 
  user:User ={
    'name':'',
    'mobile':null,
    'email':'',
    'password':'',
    'amount':null,
    'country':null,
    'expiry':null,
    'period':null
  };

  loginForm = new FormGroup({
    email: new FormControl(''),
    password:new FormControl(''),
  });

  loggedIn:boolean;
  submitted:boolean;

  constructor(
  
    private router: Router,
    private loginService : LoginService
    // private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.submitted = false;
    this.loginForm = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('',[
        Validators.required,
        // Validators.minLength(8),
      ])
    });
    if(this.loginService.getToken()!=null){
      this.router.navigate(['/plan']);
      alert('You are logged in as '+this.loginService.getUser().name)
    }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.log(this.registerForm.value);
    this.submitted=true;
    this.loginService.login(this.loginForm.value);
    // setTimeout(()=>this.router.navigate(['/login']),6000);
  }

  get email() { return this.loginForm.get('email')};

  get password() { return this.loginForm.get('password')};

}
