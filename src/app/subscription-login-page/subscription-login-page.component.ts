import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service'
import { LoginService } from '../login.service'
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
  selector: 'app-subscription-login-page',
  templateUrl: './subscription-login-page.component.html',
  styleUrls: ['./subscription-login-page.component.css']
})
export class SubscriptionLoginPageComponent implements OnInit {
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
    public loginService: LoginService,
    private userService:UserServiceService,
    private route: ActivatedRoute,
    private router: Router,
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
      this.router.navigate(['/subscription-plan-page']);
      alert('You are logged in as '+this.loginService.getUser().name)
    }
    this.fbLibrary();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.log(this.registerForm.value);
    this.submitted=true;
    this.loginService.subscription_login(this.loginForm.value);
    // setTimeout(()=>this.router.navigate(['/login']),6000);
  }

  get email() { return this.loginForm.get('email')};

  get password() { return this.loginForm.get('password')};

  fbLibrary() {
 
    (window as any).fbAsyncInit = function() {
      window['FB'].init({
        appId      : '2693659777581368',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      window['FB'].AppEvents.logPageView();
    };
 
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
 
}
login() {
 
  window['FB'].login((response) => {
      console.log('login response',response);
      if (response.authResponse) {

        window['FB'].api('/me', {
          fields: 'last_name, first_name, email'
        }, (userInfo) => {

          console.log("user information");
          console.log(userInfo);
        });
         
      } else {
        console.log('User login failed');
      }
  }, {scope: 'email'});
}

}

