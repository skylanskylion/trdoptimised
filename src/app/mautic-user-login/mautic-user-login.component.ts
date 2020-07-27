import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-mautic-user-login',
  templateUrl: './mautic-user-login.component.html',
  styleUrls: ['./mautic-user-login.component.css']
})
export class MauticUserLoginComponent implements OnInit {

  constructor(
    private router:Router
  ) { }


  loginForm = new FormGroup({
    username: new FormControl(''),
    password:new FormControl(''),
    team : new FormControl('')
  });

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('',[
        Validators.required,
      ]),
      'password': new FormControl('',[
        Validators.required,
        // Validators.minLength(8),
      ]),
      'team': new FormControl('',[
        Validators.required,
        // Validators.minLength(8),
      ])
    });
  }

  onSubmit(){
    // console.log(this.loginForm.value)
    if(this.loginForm.value.username=='BusinessTeam' && this.loginForm.value.password=='password123'){
      this.router.navigate(['/mautic-user-dashboard/' + this.loginForm.value.username +this.loginForm.value.team])
    }else{
      alert('Incorrect Credentials')
    }
  }

}
