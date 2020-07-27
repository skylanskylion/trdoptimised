import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// import { UserServiceService } from '../user-service.service'
import { LoginService } from '../login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PlanService } from '../plan.service'
import { WindowRefSub } from './WindowRefSub';

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
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.css']
})
export class SubscriptionPlanComponent implements OnInit {
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
                'Monthly': [80, 100, 260],
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
    private planService:PlanService,
    private winRef: WindowRefSub
    ) {
  }

 

  ngOnInit(): void {
    // this.user=this.loginComponent.user;
    // this.user=User.user
    // console.log(this.loginComponent.user);
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
    }

    // Ctrl($scope){
    // $scope.date = new Date();
    // }

    addPlan(response:any){
      console.log(response.razorpay_payment_id);
      this.payDetails.email=this.user.email;
      this.payDetails.razorpay_payment_id=response.razorpay_payment_id;
      this.payDetails.period=this.selectedPlan;
      this.payDetails.amount=this.amount;
      this.payDetails.country=this.countrySelected;
      // this.payDetails.expiry=this.expDate;
      this.loginService.setPeriod(this.selectedPlan);
      this.planService.addPlan(this.payDetails);
    }

    public initPay():void {
       this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.options);
       this.rzp1.open();
    }

    

  // getCard(card:any){
  //   this.cardNumber=card.cardNumber;
  //   this.cvv=card.cvv;
  //   this.expiry=card.expiry;
  //   this.holderName=card.holderName;
  // }

  // saveCard(){
  //   this.card.cardNumber=this.cardNumber.toString();
  //   this.card.cvv=this.cvv;
  //   this.card.mobile=this.user.mobile;
  //   this.card.email=this.user.email;
  //   this.card.expiry=this.expiry;
  //   this.card.holderName=this.holderName;
  //   this.card.amount=this.amount;
  //   this.card.plan=this.selectedPlan;
  //   this.card.country=this.countrySelected;
  //   this.planService.addCard(this.card);
  // }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogCard, {
  //     width: '250px',
  //     data: {currency:this.currency[this.countrySelected],amount: this.amount, cardNumber: this.cardNumber, expiry:this.expiry, name:this.name, cvv:this.cvv}
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);

  //     if(result){
  //       this.holderName = result['name'];
  //       this.amount = result['amount'];
  //       this.cardNumber = result['cardNumber'];
  //       console.log(this.cardNumber)
  //       this.cvv = result['cvv'];
  //       this.expiry = result['expiry'];
  //       this.currencySelected=result['currency'];
  //       this.canPay=true;
  //     }else{
  //       this.canPay=false;
  //     }

      
  //     // console.log(result['cvv']);

  //   });
  // }

}

// @Component({
//   selector: 'dialog-card',
//   templateUrl: 'dialogCard.html',
// })
// export class DialogCard implements OnInit{

//   payForm=new FormGroup({
//     cardNumber: new FormControl(''),
//     expiry: new FormControl(''),
//     cvv: new FormControl(''),
//     holderName: new FormControl(''),
//   })

//   constructor(
//     public dialogRef: MatDialogRef<DialogCard>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//     // public plan:PlanComponent
//     ) {}

//   onNoClick(): void {

//     this.dialogRef.close();
//   }

//   ngOnInit(){
//     this.payForm = new FormGroup({
//       'cardNumber': new FormControl('',[
//         Validators.required,
//       ]),
//       'cvv': new FormControl('',[
//         Validators.required,
//         Validators.minLength(3),
//         Validators.maxLength(4)
//       ]),
//       'holderName': new FormControl('',[
//         Validators.required,
//         Validators.minLength(4)
//       ]),
//       'expiry': new FormControl('',[
//         Validators.required,
//         // Validators.minLength(8),
//       ]),
//     });
//   }

//   onSubmit(){
//     console.log(this.payForm.value);
//     this.dialogRef.close();
    
//   }

//   get cardNumber() { return this.payForm.get('cardNumber')};

//   get cvv() { return this.payForm.get('cvv')};

//   get expiry() { return this.payForm.get('expiry')};

//   get holderName() { return this.payForm.get('holderName')};

// }
