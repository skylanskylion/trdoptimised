import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service'
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
export interface User{
  name:string;
  email:string;
  password:string;
  mobile:number;
}

@Component({
  selector: 'app-register-contribution',
  templateUrl: './register-contribution.component.html',
  styleUrls: ['./register-contribution.component.css']
})
export class RegisterContributionComponent implements OnInit {

  constructor(
    private userService:UserServiceService,
    private route: ActivatedRoute,
    private router: Router,
    // private toastr: ToastrService,
    private loginService: LoginService
  ) { }
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

  latitude:any;
  longitude:any;

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password:new FormControl(''),
    mobile:new FormControl('')
  });

  onSubmit() {
    this.registerForm.value.latitude=this.latitude;
    this.registerForm.value.longitude=this.longitude;
    this.userService.addUser(this.registerForm.value).subscribe(response=>{
      console.log(response.message)
      if(response.message=='successful' || response.message == undefined){
        
        alert('User Registered');
        this.router.navigate(['/contribution-login']);
        

      }else{
        // this.router.navigate['/plan'];
        alert('Unsuccessfull')
      }
      
    },
    err=>{
      // this.notReg=true;
      // this.toastr.error(err);
      // setTimeout(()=>this.notReg=false,4000);

    }
        
        
    );
   
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

    this.getLocation();

    if(this.loginService.getToken()!=null){
      this.router.navigate(['/plan']);
      alert('You are logged in as '+this.loginService.getUser().name)
    }

  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;
          console.log(this.longitude)
          // this.callApi(longitude, latitude);
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  get name() { return this.registerForm.get('name')};

  get email() { return this.registerForm.get('email')};

  get password() { return this.registerForm.get('password')};

  get mobile() { return this.registerForm.get('mobile')};


}
