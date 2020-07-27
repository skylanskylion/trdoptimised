import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../subscription-login/subscription-login.component'
// import { UserServiceService } from '../user-service.service'
import { LoginService } from '../login.service';
import {SubscriptionPlanComponent } from '../subscription-plan/subscription-plan.component'
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface DialogData {
  amount: number;
  cardNumber:number;
  cvv:number;
  expiry:string;
  name:string;
  currency:string;
}

export interface userCard{
  cardNumber:string,
  cvv:number,
  expiry:string,
  holderName:string,
  email:string,
  mobile:number,
  amount: number,
  plan:string,
  country:string
}



@Component({
  selector: 'app-newsletter-subscription',
  templateUrl: './newsletter-subscription.component.html',
  styleUrls: ['./newsletter-subscription.component.css']
})
export class NewsletterSubscriptionComponent implements OnInit {
  user=this.loginService.user;

  pipe = new DatePipe('en-US');

  now =new Date();
  

  amount=1000;
  cardNumber:number;
  cvv:number;
  expiry:string;
  name:string;
  holderName:string;

  date:any;
  expDate:any;
  expDateFinal:any;
  show: any;


  currency= { 'USA':'$', 'India':'₹', 'UK':'£', 'Canada':'CA$', 'Australia':'AU$', 'Europe':'€', 'International':'$' }

  currencyRZR={ 'USA':'USD', 'India':'INR', 'UK':'GBP', 'Canada':'CAD', 'Australia':'AUD','Europe':'EUR', 'International':'USD'  }

  plan={'USA': { 
               
                'Monthly': [5, 10, 20],
                'Annual': [60,100,500]
                },
          'India':{
         
                'Monthly': [80, 100, 260],
                'Annual': [1000,1800,5000]
          },
          'UK':{
           
                'Monthly': [3, 7, 12],
                'Annual': [60,120,240]
          },
          'Australia':{
  
                'Monthly': [10, 20, 40],
                'Annual': [80,250,500]
          },
          'Europe':{
      
                'Monthly': [6, 10, 20],
                'Annual': [50,100,250]
          },
          'Canada':{
 
                'Monthly': [5, 10, 20],
                'Annual': [60,100,250]
          },
          'International':{ 
  
            'Monthly': [5, 10, 20],
            'Annual': [60,100,500]
            },
        } ;

  selectedPlan='Monthly';

  alreadySelectedPlan:boolean;
  
  selectedIndex=0;

  currencySelected=this.currency['India'];

  countrySelected='India';

  selectOther=false;

  canPay:boolean;

  onSelect(value:any){
    console.log(value);
    this.countrySelected=value;
    if(!this.selectOther){
      this.amount=this.plan[value][this.selectedPlan][this.selectedIndex];
      this.options.amount=(this.plan[this.countrySelected][this.selectedPlan][this.selectedIndex]*100).toString();
    }
    this.options.currency=this.currencyRZR[value];
    
    
  }

  single(){
    this.selectedPlan='Single';
    this.selectedIndex=0;
    if(!this.selectOther){
      this.amount=this.plan[this.countrySelected]['Single'][this.selectedIndex];
      this.options.amount=(this.plan[this.countrySelected][this.selectedPlan][this.selectedIndex]*100).toString();
    }
    
  }

  monthly(){
    
    this.selectedPlan='Monthly';
    this.expDate=this.pipe.transform(new Date().setMonth(this.date.getMonth()+1),'long');
    this.expDateFinal=this.pipe.transform(new Date().setMonth(this.date.getMonth()+12),'long');

    console.log(this.expDate+" exp");
    if(!this.selectOther){
      this.amount=this.plan[this.countrySelected]['Monthly'][this.selectedIndex];
      this.options.amount=(this.plan[this.countrySelected][this.selectedPlan][this.selectedIndex]*100).toString();
    }
    
  }

  annual(){
    this.selectedPlan='Annual';
    this.expDate=this.pipe.transform(new Date().setMonth(this.date.getMonth()+12),'long');
    console.log("exp "+this.expDate);
    if(!this.selectOther){
      this.amount=this.plan[this.countrySelected]['Annual'][this.selectedIndex];
      this.options.amount=(this.plan[this.countrySelected][this.selectedPlan][this.selectedIndex]*100).toString();
    }
    
  }

  other(){
    this.selectOther=true;
  }

  onKey(event:any){
    this.amount=+event.target.value;
    this.options.amount=(this.amount*100).toString();
    console.log(this.amount);
  }

  notOther(index:any){
    this.amount=this.plan[this.countrySelected][this.selectedPlan][index];
    this.options.amount=(this.plan[this.countrySelected][this.selectedPlan][index]*100).toString();
    console.log(this.amount);
    this.selectOther=false;
    this.selectedIndex=index;
    // this.toastr.success('Done')
  }

  AuthenticateUser(){
    return (this.loginService.getToken()!=null);
  }

  Authenticate(){
    return (this.loginService.getToken()==null);
  }

  constructor(
    private loginService:LoginService,
    ) {
  }

 

  ngOnInit(): void {

    console.log(this.now)
    // this.date=this.now.setMonth(this.now.getMonth()+1);
    this.date=new Date();
    this.expDate=new Date();
    this.expDateFinal= new Date();
    // this.date = this.pipe.transform(Date(),'long');
    // this.date = this.date.add(5,'')
    console.log(this.date.toString())
    this.user=this.loginService.getUser();
    this.options["prefill.contact"]=this.loginService.getUser().mobile.toString();
    this.options["prefill.email"]=this.loginService.getUser().email;
    console.log(this.options["prefill.contact"]);
    this.options.name=this.loginService.getUser().name;
    this.show=false;
    this.canPay=false;
    console.log(this.loginService.getUser());
    // this.card=this.loginService.getCard();
    setTimeout(() => this.show = true, this.expDate);
    
  }

  rzp1:any;
    options = {
       "key": "rzp_test_2zR7vPYN6fZowp",//API Key
       "amount": (this.amount*100).toString(),
       "currency":this.currencyRZR[this.countrySelected],
       "name": '',
       "prefill.email":'',
       "prefill.contact":'',
       'period':this.selectedPlan,
       "handler":((response) => {
        
        this.addPlan(response);
      }),
       
    };

    payDetails={
      'email':null,
      'razorpay_payment_id':null,
      'period':null,
      'amount':null,
      'country':null,
      'expiry':null
    }



    addPlan(response:any){
      console.log(response.razorpay_payment_id);
      this.payDetails.email=this.user.email;
      this.payDetails.razorpay_payment_id=response.razorpay_payment_id;
      this.payDetails.period=this.selectedPlan;
      this.payDetails.amount=this.amount;
      this.payDetails.country=this.countrySelected;
      // this.payDetails.expiry=this.expDate;
      this.loginService.setPeriod(this.selectedPlan);
      // this.planService.addPlan(this.payDetails);
    }

}


