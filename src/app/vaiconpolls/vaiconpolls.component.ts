import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';


import {UserServiceService} from "../user-service.service";
import * as moment from 'moment';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// import { MessageService } from '../message.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }


@Component({
  selector: 'app-vaiconpolls',
  templateUrl: './vaiconpolls.component.html',
  styleUrls: ['./vaiconpolls.component.css']
})
export class VaiconpollsComponent implements OnInit {

  [x: string]: any;

  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    select = new FormControl('', [
      Validators.required,
      Validators.email,
    ])
phone: any;
countrycode: any;
model2: any ={};
  model3: any ={};
  mobile_verified: any;
verified: any;
mail_checked: any;
p_voted: any;
option1: any;
option2: any;
option3: any;
opt1: any;
opt2: any;
opt3: any;
opp1: any;
opp2: any;
opp3: any;
model: any ={};
today: any;
question: any;
option: any;
total: any;
isLogin: boolean = false;
isRegister:boolean = false;
m_verify: boolean = false;
verification_code: boolean = false;
users: any = {};
phone2: any;
expireDate: any;
constructor(private user: UserServiceService,
  // private messageService : MessageService,
            public af: AngularFireAuth,
            private dialog: MatDialog, ) {
    this.af.authState.subscribe(
        (auth) =>{
            if(auth!=null){
                this.users=af.authState;
                console.log(this.users);
            }
        }
    );
}

ngOnInit() {
  
    // AccountKit.init({
    //     appId: '1066226316760891',
    //     state: 'awse#456tfg',
    //     version: 'v1.1'
    // });
  
    this.p_voted = false;
    this.today = moment(new Date().setMinutes(0));
    this.today.set('second', 0);
    this.today = this.today.format('DD-MM-YYYY HH:mm:ss');
    console.log(this.today);

    this.expireDate = moment(new Date()).add(1,'hours');
    this.expireDate.set('minute', 0);
    this.expireDate.set('second', 0);
    this.expireDate = this.expireDate.format('HH:mm:ss');
    console.log("expire date"+this.expireDate);
  this.questions(this.today);
    this.phone2 = JSON.parse(localStorage.getItem('verified_mobile_number'));
    if(this.phone2!=null){
        this.phone = JSON.parse(localStorage.getItem('verified_mobile_number'))['phone_number'];
        this.isLogin = false;
        this.isRegister = false;
        this.mobile_verified = true;
        this.model.user_id = this.phone;
    } else{
        this.isLogin = true;
        this.isRegister = false;
        this.mobile_verified = false;
    }
}

  //social media api login
  //facebook login
  async loginfb(){
      console.log('hahhsgah');
      const g = await this.lf();
      console.log('facebook results came');
      /*sending data into database*/
      const user_mail =JSON.parse(JSON.stringify(g['user']['email']));
      this.model2.username = JSON.parse(JSON.stringify(g['user']['displayName']));
      this.model2.email = user_mail;
      
      this.user.mail_checking_details(this.model2.email).subscribe
      (data=> {
          if(data['success']){
              //alert('Login successful');
              let myObj = {phone_number: user_mail};
              localStorage.setItem('verified_mobile_number', JSON.stringify(myObj));
              this.model.user_id = user_mail;
              this.phone = user_mail;
              this.isLogin = false;
              this.isRegister = false;
              this.mobile_verified = true;
          } else{
              //alert('New user....Going to register now');
              this.user.mobile_add(JSON.stringify(this.model2)).subscribe
              (data2=> {
                  if(data2['success']){
                      alert('Registered Successfully....');
                      let myObj = {phone_number: user_mail};
                      localStorage.setItem('verified_mobile_number', JSON.stringify(myObj));
                      this.model.user_id = user_mail;
                      this.phone = user_mail;
                      this.isLogin = false;
                      this.isRegister = false;
                      this.mobile_verified = true;
                  } else{
                      alert('Error');
                  }
              });
          }
      });
      /*end of data sending*/
  }
  async lf() {
      const facebook = this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
      return facebook;
  }
  //twitter login
  async logintwitter() {
      var t= await this.tw();
  }
  async tw() {
      const twitter = this.af.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
      return twitter;
  }
  //gmail login
  async email_login() {
      console.log('hi');
      var c = await this.lg();
      console.log('results are coming....');
      /*sending data into database*/
      const user_mail =JSON.parse(JSON.stringify(c['user']['email']));
      this.model2.username = JSON.parse(JSON.stringify(c['user']['displayName']));
      this.model2.email = user_mail;
      this.user.mail_checking_details(this.model2.email).subscribe
      (data=> {
          if(data['success']){
              //alert('Login successful');
              let myObj = {phone_number: user_mail};
              localStorage.setItem('verified_mobile_number', JSON.stringify(myObj));
              this.model.user_id = user_mail;
              this.phone = user_mail;
              this.isLogin = false;
              this.isRegister = false;
              this.mobile_verified = true;
          } else{
              //alert('New user....Going to register now');
              this.user.mobile_add(JSON.stringify(this.model2)).subscribe
              (data2=> {
                  if(data2['success']){
                      alert('Registered Successfully....');
                      let myObj = {phone_number: user_mail};
                      localStorage.setItem('verified_mobile_number', JSON.stringify(myObj));
                      this.model.user_id = user_mail;
                      this.phone = user_mail;
                      this.isLogin = false;
                      this.isRegister = false;
                      this.mobile_verified = true;
                  } else{
                      alert('Error');
                  }
              });
          }
      });
      /*end of data sending*/
  }
  async lg() {
      var google = this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      return google;
  }

  change_number(){
      this.isLogin = true;
      this.isRegister = false;
      this.mobile_verified = false;
  }
  //checking the number has been logged in or not before voting
  check_verified(){
      if(this.mobile_verified){
          //alert('voting...');
          this.polling();
      } else if(!this.isLogin || !this.isRegister && !this.mobile_verified) {
          //alert('Please Register to vote');
          this.isRegister = true;
          this.isLogin = false;
      }
  }

questions(today){
  this.user.poll_questions(today).subscribe(
      data=>{
        this.question=data['data'][0];
        this.option=data['data'];
          this.opt1=data['data'][0]['option'];
          this.opt2=data['data'][1]['option'];
          this.opt3=data['data'][2]['option'];
          this.option1=data['data'][0]['votes'];
          this.option2=data['data'][1]['votes'];
          this.option3=data['data'][2]['votes'];
        this.total = this.option1+this.option2+this.option3;
          this.opp1=Math.round((this.option1/this.total)*100);
          this.opp2=Math.round((this.option2/this.total)*100);
          this.opp3=Math.round((this.option3/this.total)*100);
          if(this.option1==0 && this.option2==0 && this.option3==0){
              this.opp1=0;
              this.opp2=0;
              this.opp3=0;
          }
        console.log(this.opp1);
          console.log(this.opp2);
          console.log(this.opp3);

      });
}
mail_check1(){
    if(this.model2.password==this.model2.confirmpassword){
        return true;
    }
    else{
        return false;
    }    
    }

mail_check() {
    var x= this.mail_check1();
   // alert('Passwords Matching check')
    if(x==true){
      
 
  
  console.log(this.model2.user_id);
  delete this.phone_number;
  this.model2.mobile=this.model2.user_id;
  this.model2.username=this.model2.firstname +" " + this.model2.lastname;
  //alert(this.model2.password);
  delete this.model2.via;
  delete this.model2.token;
  
 
 // alert('RTGYGG')
  if (this.model2.username && this.model2.email) {
 // alert('iN IF')
      
      this.user.mail_checking_details(this.model2.email).subscribe
      (data=> {
          console.log(data);
          if(data['success']==false) {
              //alert(JSON.stringify(this.model2));
              this.user.registration(JSON.stringify(this.model2)).subscribe
              (data=> {
                  console.log(data);
                  if (data['success']) {
                      alert('Registered successfully...');
                      this.isRegister = false;
                      this.isLogin = false;
                      this.mobile_verified = true;
                      let myObj = {mobile: this.model2.email};
                      localStorage.setItem('verified_mobile_number', JSON.stringify(myObj));
                      this.model.user_id = this.model2.email;
                      this.phone = this.model2.email;
                //      this.messageService.getPermission();

                  } else {
                      alert('Error');
                      // alert('failed');
                      // this.verified = true;
                      // this.phone_btn_onclick();
                  }
              });
          } else{
              alert('Already registered with this email');
          }
      });
  } } else if(x==false){
     alert('Passwords Do not Match');
  }
}
  login_validation(){
      console.log(this.model3.user_id);
      if(this.model3.user_id.length>3) {
          this.user.mail_checking_login(this.model3.user_id,this.model3.password).subscribe
          (data=> {
              console.log(data);
              if (data['success']) {
                  //alert('found');
                  this.isLogin = false;
                  this.isRegister = false;
                  this.mobile_verified = true;
                  let myObj = { phone_number: this.model3.user_id};
                  localStorage.setItem('verified_mobile_number', JSON.stringify(myObj));
                  this.model.user_id = this.model3.user_id;
                  this.phone = this.model3.user_id;
              } else {
                  alert('Wrong email and password');
                  // alert('failed');
                  // this.verified = true;
                  // this.phone_btn_onclick();
              }
          });
      }
  }
  verify_code(){
      this.user.verify_code(this.model2.token,this.model2.user_id).subscribe
      (data=> {
          console.log(data);
          if(data['success']){
              alert('Verification Done');
              this.verification_code = false;
              this.m_verify=true;
          } else{
              alert('Already Verified this number...Try with another number');
              this.verification_code = true;
              this.m_verify=false;
          }
      });
  }
  phone_btn_onclick() {
      this.user.mail_checking(this.model2.user_id).subscribe
      (data=> {
          console.log(data);
          if (data['success']) {
             alert('Already registered with this mobile number');
          } else{
              //alert('Processing....');
              this.model2.mobile = this.model2.user_id;
              // this.model2.country_code ='+91';
              this.model2.via ='sms';
              this.user.verification_code_send(this.model2.mobile, this.model2.country_code).subscribe
              (data=> {
                  console.log(data);
                  if(data['success']){
                      //alert('Verification code sent to your mobile number');
                      this.verification_code = true;
                      this.m_verify = true;
                  } else{
                      alert('Error');
                  }
              });
          }
      });
  }

  set_var=false;
notify(){
//  this.messageService.getPermission();
  // const dialogConfig = new MatDialogConfig();
  // dialogConfig.disableClose = false;
  // dialogConfig.autoFocus = true;
  // dialogConfig.height = '240px';
  // dialogConfig.width = '240px';
  // this.dialog.open(AocNotificationComponent, dialogConfig);

}

 
polling(){
 // this.messageService.getPermission();
  this.model.q_id=this.question['q_id'].toString();
    console.log(JSON.stringify(this.model));
  //this.model.votes=1;
  this.user.poll(JSON.stringify(this.model)).subscribe(
      data=>{
        //console.log(data);
          console.log(data['success']);
          if(data['success']){

              const dialogConfig = new MatDialogConfig();
              dialogConfig.disableClose = false;
              dialogConfig.autoFocus = true;
              dialogConfig.height = '180px';
              dialogConfig.width = '180px';
              dialogConfig.data= {contentToDisplay:"You are on. Results will be announced in the next hour"};
              this.dialog.open(VaiconPollsQuizComponent, dialogConfig);
  
              // alert('Thank you for participation');
              this.user.poll_questions(this.today).subscribe(
                  data=>{
                      this.question=data['data'][0];
                      this.option=data['data'];
                      this.opt1=data['data'][0]['option'];
                      this.opt2=data['data'][1]['option'];
                      this.opt3=data['data'][2]['option'];
                      this.option1=data['data'][0]['votes'];
                      this.option2=data['data'][1]['votes'];
                      this.option3=data['data'][2]['votes'];
                      this.total = this.option1+this.option2+this.option3;
                      this.opp1=Math.round((this.option1/this.total)*100);
                      this.opp2=Math.round((this.option2/this.total)*100);
                      this.opp3=Math.round((this.option3/this.total)*100);
                      console.log(this.opp1);
                      console.log(this.opp2);
                      console.log(this.opp3);

                  });
              this.p_voted = true;
          } else{
              const dialogConfig = new MatDialogConfig();
              dialogConfig.disableClose = false;
              dialogConfig.autoFocus = true;
              dialogConfig.height = '180px';
              dialogConfig.width = '180px';
              dialogConfig.data= {contentToDisplay:"You have already answered  the question."};
              this.dialog.open(VaiconPollsAttempted, dialogConfig);
  
              this.p_voted = true;
          }
  });
  
}


}

// @Component({
//   selector: 'app-aoc-mumbai',
//   templateUrl: './aoc-mumbai-polls.app.component.html',
 // styleUrls: ['./aoc-mumbai.component.css']
 @Component({
  selector: 'app-aoc-mumbai',
  templateUrl: './vaicon-polls-quiz-component.html',
  styleUrls: ['./vaicon-polls-quiz-component.css']
})
export class VaiconPollsQuizComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef  <VaiconPollsQuizComponent >, private router: Router,private dialog: MatDialog) { }
// export class QuizPopupComponent {
  //constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef  <QuizPopupComponent >, private router: Router,private dialog: MatDialog) { }
dclose(){
  this.router.navigate(['/thankyoupage']);
  this.dialog.closeAll();
}
}


@Component({
  selector: 'app-aoc-mumbai',
  templateUrl: './vaicon-polls-attempted-component.html',
  styleUrls: ['./vaicon-polls-attempted-component.css']
})
export class VaiconPollsAttempted {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef  <VaiconPollsQuizComponent >, private router: Router,private dialog: MatDialog) { }
// export class QuizPopupComponent {
  //constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef  <QuizPopupComponent >, private router: Router,private dialog: MatDialog) { }
dclose(){
  this.router.navigate(['/thankyoupage']);
  this.dialog.closeAll();
}
}

@Component({
  selector: 'app-aoc-mumbai',
  templateUrl: './vaicon-notification.app.component.html',
  styleUrls: ['./vaicon-notification.app.component.css'] 
})
export class VaiconNotificationComponent{
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef  <VaiconNotificationComponent >, private router: Router,private dialog: MatDialog) { }
// export class QuizPopupComponent {
  //constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef  <QuizPopupComponent >, private router: Router,private dialog: MatDialog) { }
dclose(){
  this.dialog.closeAll();
}
}