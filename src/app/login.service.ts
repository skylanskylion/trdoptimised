
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './log-in-contribution/log-in-contribution.component'
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { userCard } from '../plan/plan.component';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    ) {

  }

  setName(value:string){
    localStorage.setItem('name',value)
  }

  setMobile(value:string){
    localStorage.setItem('mobile',value)
  }

  // card:userCard={
  //   cardNumber:null,
  //   cvv:null,
  //   expiry:null,
  //   holderName:null,
  //   email:null,
  //   mobile:null,
  //   amount: null,
  //   plan:null,
  //   country:null
  // }

  situation=false;
  notReg:boolean;
  successful:boolean;

  response:any={};

  token=localStorage.getItem('token');

  user:User= {
    'name':'',
    'email':'',
    'amount':null,
    'country':'',
    'mobile':null,
    'password':null,
    'period':null,
    'expiry':null
  }

  saveUser(user:User){
    this.user=user;
    localStorage.setItem("name",user.name);
      localStorage.setItem("email",user.email);
      if(user.mobile!=null){
        localStorage.setItem("mobile",this.user.mobile.toString());
      }else{
        localStorage.setItem("mobile",null);
      }
      if(user.amount!=null){
        localStorage.setItem("amount",this.user.amount.toString());
      }else{
        localStorage.setItem("amount",null);
      }
      localStorage.setItem("country",user.country);
      localStorage.setItem("expiry",user.expiry);
      localStorage.setItem("period",user.period);
    // localStorage.setItem('token',token);
  }

  getUser(){

    this.user.name=localStorage.getItem("name");
    this.user.email=localStorage.getItem("email");
    this.user.mobile=+localStorage.getItem("mobile");
    this.user.country=localStorage.getItem("country");
    this.user.amount=+localStorage.getItem("amount");
    this.user.period=localStorage.getItem("period");
    this.user.expiry=localStorage.getItem("expiry");
    return this.user;
  }

  setAmount(amount:number){
    this.user.amount=amount;
    localStorage.setItem('amount',amount.toString());
  }

  setCountry(country:string){
    this.user.country=country;
    localStorage.setItem('country',country);
  }



  setPeriod(plan:string){
    this.user.period=plan;
    localStorage.setItem('period',plan);
  }

  setExpiry(date:string){
    this.user.expiry=date;
    localStorage.setItem('expiry',date);
  }


  getToken(){
    return localStorage.getItem('token');
  }

  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("mobile");
    localStorage.removeItem("amount");
    localStorage.removeItem("country");
    localStorage.removeItem('period');
    localStorage.removeItem('expiry')
  }

  offUser(){
    this.user.name='';
    this.user.email='';
    this.user.amount=null;
    this.user.mobile=null;
    this.user.password='';
    this.user.country=null;
  }

  // getCard(){
  //   this.card.cardNumber=localStorage.getItem('cardNumber');
  //   this.card.cvv=+localStorage.getItem('cvv');
  //   this.card.expiry=localStorage.getItem('expiry');
  //   this.card.mobile=+localStorage.getItem('mobile');
  //   this.card.email=localStorage.getItem('email');
  //   this.card.country=localStorage.getItem('country');
  //   this.card.plan=localStorage.getItem('plan');
  //   this.card.amount=+localStorage.getItem('amount');
  //   this.card.holderName=localStorage.getItem('holderName');
  //   return this.card;
  // }

  // saveCard(card: userCard){
  //   localStorage.setItem('cardNumber',card.cardNumber);
  //   if(card.cvv!=null){
  //     localStorage.setItem('cvv',card.cvv.toString());
  //   }else{
  //     localStorage.setItem('cvv',null);
  //   }
  //   localStorage.setItem('expiry',card.expiry);
  //   if(card.mobile!=null){
  //     localStorage.setItem('mobile',card.mobile.toString());
  //   }else{
  //     localStorage.setItem('mobile',null);
  //   }
  //   localStorage.setItem('email',card.email);
  //   localStorage.setItem('country',card.country);
  //   localStorage.setItem('plan',card.plan);
  //   if(card.amount!=null){
  //     localStorage.setItem('amount',card.amount.toString());
  //   }else{
  //     localStorage.setItem('amount',null);
  //   }
  //   localStorage.setItem('holderName',card.holderName);
    
  // }

  getSituation(){
    return this.situation;
  }
  subscription_login(user : any){
     this.situation=true;
    console.log(user.email);
    this.http.post('https://therightdoctors.com/api/beta/contribution/getUser?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',user).subscribe(responseData=>{


      this.response=responseData;
      // this.userService.setToken(response['token']);
      console.log(this.response.message);

      if(this.response.message=='Logged in Successfully'){
        console.log(this.response);
        
        this.user.name=this.response.user;
        this.user.email=this.response.email;
        this.user.mobile=this.response.mobile;
        this.user.amount=this.response.amount;
        this.user.country=this.response.country;

        // this.card.cardNumber=this.response.cardNumber;
        // this.card.plan=this.response.plan;
        // this.card.amount=this.response.amount;



        // if( this.response.cardNumber!=null){
        //   this.saveCard(this.card);
        // }

        
        this.setToken(this.response.token);
        this.saveUser(this.user);
        localStorage.setItem("name",this.response.user);
        localStorage.setItem("email",this.response.email);
        localStorage.setItem("mobile",this.response.mobile);
        localStorage.setItem("amount",this.response.amount);
        localStorage.setItem("country",this.response.country);
        localStorage.setItem("period",this.response.period);
        localStorage.setItem("expiry",this.response.expiry);
        localStorage.setItem("pay_id",this.response.pay_id);

        localStorage.setItem("token",this.response.token);


        console.log(localStorage.getItem("email"));
        // this.userService.saveUser(this.user,response.token);

        this.situation=true;
        localStorage.setItem('logToken',this.response.token);
        setTimeout(()=>this.situation=false,6000);
        alert('Welcome ' +this.response.user)
        // this.router.navigate(['/']);
        setTimeout(()=>this.router.navigate(['/subscription-newsletter']),1000);
        this.successful=true;
        return true
      }else{
        this.situation=false;
        this.notReg=true;
        setTimeout(()=>this.notReg=false,1000);
        alert("Email or Password incorrect")
        return false;
        // setTimeout(()=>this.router.navigate(['/login']),4000);
      }
      
    },
    err=>{
      // this.notReg=true;
      // this.toastr.error(err.error.message);
      // this.errormessage=err.error.join('<br/>');
      setTimeout(()=>this.notReg=false,4000);
      return false;

    }
        
        
    );

  }
  login(user:any){
    this.situation=true;
    console.log(user.email);
    this.http.post('https://therightdoctors.com/api/beta/contribution/getUser?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',user).subscribe(responseData=>{


      this.response=responseData;
      // this.userService.setToken(response['token']);
      console.log(this.response.message);

      if(this.response.message=='Logged in Successfully'){
        console.log(this.response);
        
        this.user.name=this.response.user;
        this.user.email=this.response.email;
        this.user.mobile=this.response.mobile;
        this.user.amount=this.response.amount;
        this.user.country=this.response.country;

        // this.card.cardNumber=this.response.cardNumber;
        // this.card.plan=this.response.plan;
        // this.card.amount=this.response.amount;



        // if( this.response.cardNumber!=null){
        //   this.saveCard(this.card);
        // }

        
        this.setToken(this.response.token);
        this.saveUser(this.user);
        localStorage.setItem("name",this.response.user);
        localStorage.setItem("email",this.response.email);
        localStorage.setItem("mobile",this.response.mobile);
        localStorage.setItem("amount",this.response.amount);
        localStorage.setItem("country",this.response.country);
        localStorage.setItem("period",this.response.period);
        localStorage.setItem("expiry",this.response.expiry);
        localStorage.setItem("pay_id",this.response.pay_id);

        localStorage.setItem("token",this.response.token);


        console.log(localStorage.getItem("email"));
        // this.userService.saveUser(this.user,response.token);

        this.situation=true;
        localStorage.setItem('logToken',this.response.token);
        setTimeout(()=>this.situation=false,1000);
        alert('Welcome ' +this.response.user)
        // this.router.navigate(['/']);
        setTimeout(()=>this.router.navigate(['/plan']),1000);
        this.successful=true;
        return true
      }else{
        this.situation=false;
        this.notReg=true;
        setTimeout(()=>this.notReg=false,6000);
        alert("Email or Password incorrect")
        return false;
        // setTimeout(()=>this.router.navigate(['/login']),4000);
      }
      
    },
    err=>{
      // this.notReg=true;
      // this.toastr.error(err.error.message);
      // this.errormessage=err.error.join('<br/>');
      setTimeout(()=>this.notReg=false,4000);
      return false;

    }
        
        
    );
  }

  setToken(token : string){
    console.log(token);
    localStorage.setItem('token',token);
  }
}
