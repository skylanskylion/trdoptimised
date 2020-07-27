import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-profile-contribution',
  templateUrl: './profile-contribution.component.html',
  styleUrls: ['./profile-contribution.component.css']
})
export class ProfileContributionComponent implements OnInit {
constructor(
    private loginService:LoginService,
    private detailsService:DetailsService,
  ) { }

  user:any;

  changePassword=false;

  profileForm = new FormGroup({
    name: new FormControl(''),
    password:new FormControl(''),
    newPassword:new FormControl(''),
    mobile:new FormControl('')
  });

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'name': new FormControl(this.loginService.getUser().name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'password': new FormControl('',[
        Validators.required,
        // Validators.minLength(8),
      ]),
      'newPassword':new FormControl('',[
        
      ]),
      'mobile': new FormControl(this.loginService.getUser().mobile,[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5)
      ])
      
    });

    this.user=this.loginService.getUser();
  }

  response:any;

  onSubmit(){
    this.profileForm.value.email=this.loginService.getUser().email;
    console.log(this.profileForm.value);
    this.detailsService.update(this.profileForm.value).subscribe(
      responseData=>{
        this.response=responseData
        console.log(responseData)
        if(this.response.message=='mobile'){
          alert('Error: Details haven\'t changed. Mobile number is already used by someone else.')
        }else if(this.response.message=='password'){
          alert('Error: Details haven\'t changed. Password not correct.')
        }else if(this.response.message=='successful'){
          alert('Details Updated')
          this.user.name=this.profileForm.value.name
          this.loginService.setName(this.profileForm.value.name)
          this.loginService.setMobile(this.profileForm.value.mobile)
          this.user.mobile=this.profileForm.value.mobile
        }

      },
      err=>{
        // this.toastr.error(err)
      }
    )
  }

  toggle(){
    this.changePassword=!this.changePassword;
  }

  get name() { return this.profileForm.get('name')};

  get password() { return this.profileForm.get('password')};

  get mobile() { return this.profileForm.get('mobile')};

}
