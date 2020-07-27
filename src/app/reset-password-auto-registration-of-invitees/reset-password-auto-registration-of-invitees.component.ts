import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";
import {NgForm, FormGroupDirective, FormControl, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-reset-password-auto-registration-of-invitees',
  templateUrl: './reset-password-auto-registration-of-invitees.component.html',
  styleUrls: ['./reset-password-auto-registration-of-invitees.component.css']
})
export class ResetPasswordAutoRegistrationOfInviteesComponent implements OnInit {


  id: any;
  model: any = {};
  load: boolean = false;
  sent: boolean = false;
  result: string;
  inputChecking = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(private route: ActivatedRoute, private users: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param['id'];
      //this.id = 178;
    });
    
  }
  create_password(){
    this.load = true;
    this.sent = false;
    this.result = '';
    console.log('data');
    console.log('ID-----'+this.id);
    console.log('PASSWORD'+this.model['password']);
    console.log('CONFIRM PASSWORD'+this.model['cpassword']);
    if(this.model['password']===this.model['cpassword']){
      this.users.updatePasswordAfterAutoRegistration(JSON.stringify(this.model['password']), this.id)
        .subscribe(data=>{
          console.log(data['success']);
          console.log('result data' + JSON.stringify(data));

          if(data['success']==true){
            this.load = false;
            this.sent = true;
            this.result = 'Password created successfully...';
            alert('Password created successfully...');
            this.router.navigate(['']);
          } else{
            this.load = false;
            this.result = 'Server Error';
            alert('Server Error');
          }
        })
    } else{
      this.load = false;
      this.result = 'Passwords are not matching';
      alert('Passwords are not matching');
    }
  }
}
