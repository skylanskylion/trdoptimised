import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-verification-of-registration',
  templateUrl: './verification-of-registration.component.html',
  styleUrls: ['./verification-of-registration.component.css']
})
export class VerificationOfRegistrationComponent implements OnInit {
id:any;
  constructor(private service: UserServiceService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
    this.id = param['id'];
    this.setVerificationFlag(this.id);
    });

}
setVerificationFlag(id){
  this.service.set_verification_flag(this.id).subscribe(data => {
    if(data['success']){
      alert('Verification Completed');
      // this.router.navigate(['']);
      window.location.href = "https://iages.therightdoctors.com"; 
    }
    else{
        alert('Verification Not Completed');
    }
})
}
}
