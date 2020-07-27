import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../log-in-contribution/log-in-contribution.component'
// import { UserServiceService } from '../user-service.service'
import { LoginService } from '../login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PlanService } from '../plan.service'
import { WindowRef } from './WindowRef';
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
  selector: 'app-plan-contribution',
  templateUrl: './plan-contribution.component.html',
  styleUrls: ['./plan-contribution.component.css']
})
export class PlanContributionComponent implements OnInit {

  pipe = new DatePipe('en-US');

  now =new Date();
  

  amount=1000;
  

  date:any;
  expDate:any;

  // card:userCard={
  //   cardNumber:'',
  //   cvv:null,
  //   expiry:'',
  //   holderName:'',
  //   email:'',
  //   mobile:null,
  //   amount: null,
  //   plan:'',
  //   country:''
  // };

  currency= { 'USA':'$', 'India':'₹', 'UK':'£', 'Canada':'CA$', 'Australia':'AU$', 'Europe':'€', 'International':'$' }

  currencyRZR={ 'USA':'USD', 'India':'INR', 'UK':'GBP', 'Canada':'CAD', 'Australia':'AUD','Europe':'EUR', 'International':'USD'  }

  plan={'USA': { 
                'Single': [25,50,100],
                'Monthly': [5, 10, 20],
                'Annual': [60,100,500]
                },
          'India':{
            'Single': [1000,2000,5000],
                'Monthly': [100, 200, 300],
                'Annual': [1000,1800,5000]
          },
          'UK':{
            'Single': [30,60,120],
                'Monthly': [3, 7, 12],
                'Annual': [60,120,240]
          },
          'Australia':{
            'Single': [60,100,250],
                'Monthly': [10, 20, 40],
                'Annual': [80,250,500]
          },
          'Europe':{
            'Single': [25,50,100],
                'Monthly': [6, 10, 20],
                'Annual': [50,100,250]
          },
          'Canada':{
            'Single': [25,50,100],
                'Monthly': [5, 10, 20],
                'Annual': [60,100,250]
          },
          'International':{ 
            'Single': [25,50,100],
            'Monthly': [5, 10, 20],
            'Annual': [60,100,500]
            },
        } ;

  selectedPlan='Single';

  alreadySelectedPlan:boolean;
  
  selectedIndex=0;

  currencySelected=this.currency['India'];

  countrySelected='India';

  selectOther=false;

  canPay:boolean;

  planForm = new FormGroup({
    email: new FormControl(''),
    name:new FormControl(''),
    mobile:new FormControl('')
  });

  onSelect(value:any){
    console.log(value);
    this.countrySelected=value;
    if(!this.selectOther){
      this.amount=this.plan[value][this.selectedPlan][this.selectedIndex];
      this.options.amount=(this.plan[this.countrySelected][this.selectedPlan][this.selectedIndex]*100).toString();
    }
    this.options.currency=this.currencyRZR[value];
    
    
  }

  planDict={
    'Single':'One Time',
    'Monthly':'Monthly',
    'Annual':'Annually'
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

  // AuthenticateUser(){
  //   return (this.loginService.getToken()!=null);
  // }

  constructor(
    // private loginService:LoginService,
    private planService:PlanService,
    private winRef: WindowRef,
    ) {
  }

  ngOnInit(): void {
    // this.user=this.loginComponent.user;
    // this.user=User.user
    // console.log(this.loginComponent.user);

    this.planForm = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'name': new FormControl('',[
        Validators.required,
        // Validators.minLength(8),
      ]),
      'mobile':new FormControl('',[
        Validators.required
      ])
    });

    console.log(this.now)
    // this.date=this.now.setMonth(this.now.getMonth()+1);
    this.date=new Date();
    this.expDate=new Date();
    // this.date = this.pipe.transform(Date(),'long');
    // this.date = this.date.add(5,'')
    console.log(this.date.toString())
    // this.user=this.loginService.getUser();
    // this.selectCountry(this.loginService.getUser().country)
    // this.options["prefill.contact"]=this.loginService.getUser().mobile.toString();
    // this.options["prefill.email"]=this.loginService.getUser().email;
    console.log(this.options["prefill.contact"]);
    // this.options.name=this.loginService.getUser().name;
    // this.canPay=false;
    // console.log(this.loginService.getUser());
    // this.card=this.loginService.getCard();
  }

  euro=['Austria',
    'Belgium',
    'Cyprus',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Ireland',
    'Italy',
    'Latvia',
    'Lithuania',
    'Luxembourg',
    'Malta',
    'Netherlands',
    'Portugal',
    'Slovakia',
    'Slovenia',
    'Spain',]

    country=['USA','India','Canada','UK','Australia']

  selectCountry(value:any){
    if(this.euro.indexOf(value)!=-1){
      this.countrySelected='Europe'
    }else if(this.country.indexOf(value)!=-1){
      this.countrySelected=value
    }else if(value=="United Kingdom"){
      this.countrySelected='UK'
    }else if(value=="United States of America"){
      this.countrySelected='USA'
    }else{
      this.countrySelected='International'
    }
  }

  rzp1:any;
    options = {
       "key": "rzp_live_ADxXvgyamm3gCq",//API Key
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
      'expiry':null,
      'name':null,
      'mobile':null
    }

    // Ctrl($scope){
    // $scope.date = new Date();
    // }

    addPlan(response:any){
      console.log(response.razorpay_payment_id);
      // console.log(this.planForm.value)
      alert("Payment Successful")
      this.payDetails.email=this.planForm.value.email;
      this.payDetails.name=this.planForm.value.name;
      this.payDetails.mobile=this.planForm.value.mobile;
      this.payDetails.razorpay_payment_id=response.razorpay_payment_id;
      this.payDetails.period=this.selectedPlan;
      this.payDetails.amount=this.amount;
      this.payDetails.country=this.countrySelected;
      // // this.payDetails.expiry=this.expDate;
      // this.loginService.setPeriod(this.selectedPlan);
      this.planService.addContributor(this.payDetails);
    }

    public initPay():void {
      this.options.name=this.planForm.value.name
      this.options["prefill.email"]=this.planForm.value.email
      this.options["prefill.contact"]=this.planForm.value.mobile


       this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.options);
       this.rzp1.open();
    }

}