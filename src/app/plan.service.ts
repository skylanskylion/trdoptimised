import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userCard } from './plan-contribution/plan-contribution.component'
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { LoginService } from './login.service';;

@Injectable({
  providedIn: 'root'
})
export class PlanService {
 constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {

  }

  response:any;

  res:any;

  // addCard(card:any){
  //   this.http.post('http://127.0.0.1:8081/addCard',card).subscribe(
  //     responseData => {
  //       this.response=responseData;
  //       console.log(this.response.message);

  //       if(this.response.message=='successful'){
  //         this.loginService.setAmount(card.amount);
  //         this.loginService.setCountry(card.country);
  //         this.loginService.setPlan(card.plan);
  //         this.toastr.success('Payment/Card Details Added')
  //       }else{
  //         this.toastr.error('Payment/Card Details invalid or card already is being used by another user')
  //       }

  //     },
  //     err => {

  //     }
  //   )
  // }
addContributor(payDetails:any){
    this.http.post('https://therightdoctors.com/api/beta/contribution/addContribution?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Egr',payDetails).subscribe(
      responseData => {
        this.response=responseData;
        alert("Payment Successful")
        console.log(responseData)
      },
      err => {
        alert(err);
      }
    );
  }

  addPlan(payDetails:any){
   return  this.http.post('https://therightdoctors.com/api/beta/contribution/addPlan?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',payDetails);
  }


}
