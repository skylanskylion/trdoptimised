import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service'
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-subscription-register',
  templateUrl: './subscription-register.component.html',
  styleUrls: ['./subscription-register.component.css']
})
export class SubscriptionRegisterComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];

  situation:boolean;
  notReg:boolean;
  errormessage:string; 
  user={
    'name':'',
    'mobile':'',
    'email':'',
    'password':'',
  };

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password:new FormControl(''),
    mobile:new FormControl('')
  });

  onSubmit() {
    
    this.userService.addUser(this.registerForm.value).subscribe(response=>{
      console.log(response.message)
      if(response.message=='successful' || response.message == undefined){

        alert('User Registered');

      }else{
        alert('User Not Registered, Email or mobile already taken by existing user');
      }
      
    },
    err=>{
      // this.notReg=true;
      
      setTimeout(()=>this.notReg=false,4000);

    }
        
        
    );
    setTimeout(()=>this.router.navigate(['/subscription-login']),4000);
  }

  // addUser(name:string,email:string,password:string,mobile:any){
  //   this.user.name=name;
  //   this.user.mobile=mobile;
  //   this.user.password=password;
  //   this.user.email=email;

  //   this.userService.addUser(this.user).subscribe(response =>
       
  //     // console.log("hello")
      
       
  //      );
  //   console.log(this.situation);
  // }

  constructor(
    private userService:UserServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { }

  showSuccess() {
    
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('',[
        Validators.required,
        // Validators.minLength(8),
      ]),
      'mobile': new FormControl('',[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5)
      ])
    });

    if(this.loginService.getToken()!=null){
      this.router.navigate(['/subscription-login']);
      alert('You are logged in as '+this.loginService.getUser().name)
    }

  }

  get name() { return this.registerForm.get('name')};

  get email() { return this.registerForm.get('email')};

  get password() { return this.registerForm.get('password')};

  get mobile() { return this.registerForm.get('mobile')};


}

