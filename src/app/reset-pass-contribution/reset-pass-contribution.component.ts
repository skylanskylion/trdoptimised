import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../login.service';
import { ResetService } from '../reset.service'
@Component({
  selector: 'app-reset-pass-contribution',
  templateUrl: './reset-pass-contribution.component.html',
  styleUrls: ['./reset-pass-contribution.component.css']
})
export class ResetPassContributionComponent implements OnInit {
  constructor(
    private router:Router,
    private loginService:LoginService,
    private resetService: ResetService
  ) { }

  resetForm = new FormGroup({
    email: new FormControl(''),
  });

  response:any;

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ])
    });
    if(this.loginService.getToken()!=null){
      this.router.navigate(['/plan']);
     alert('You are logged in as '+this.loginService.getUser().name)
    }
  }

  onSubmit(){
    console.log(this.resetForm.value)
    this.resetService.reset(this.resetForm.value).subscribe(
      responseData=>{
        console.log(responseData)
        this.response=responseData;
        if(this.response.message=='User exists'){
         alert('A Mail has been sent to '+this.resetForm.value.email)
          this.router.navigate(['../login'])
        }else{
          alert(this.response.message)
        }
      },
      err=>{
        console.log(err)
      }
    )
  }

}

