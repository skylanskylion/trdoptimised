import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  id: any;
  model: any = {};
  load: boolean = false;
  sent: boolean = false;
  result: string;

  constructor(private route: ActivatedRoute, private users: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param['email'];
    });
  }
  create_password(){
    this.load = true;
    this.sent = false;
    this.result ='';
    if(this.model['password']===this.model['cpassword']){
    delete this.model['cpassword'];
      this.users.updatePasswords(JSON.stringify(this.model), this.id)
        .subscribe(data=>{
          if(data['success']){
            this.load = false;
            this.sent = true;
            this.result = 'Password created successfully...';
            this.model.cpassword = this.model.password;
            alert('Password created successfully...');
            this.router.navigate(['/specials/dr-ulhas-pandurangi-fifteenth-annual-electrocardiology-course-basics-and-beyond-madras-medical-mission-2018']);
          }
        },
          (error)=>{
          this.load = false;
          this.result ='No Internet Connection';
            this.model.cpassword = this.model.password;
          console.log(error);
          })
    } else{
      this.load = false;
      this.result = 'Passwords are not matching';
      alert('Passwords are not matching');
    }
  }

}
