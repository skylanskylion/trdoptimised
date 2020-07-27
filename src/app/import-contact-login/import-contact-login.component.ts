import {APP_ID, Component, Inject, OnInit, PLATFORM_ID, ViewChild,Renderer2} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import {UserServiceService} from "../user-service.service";
import {ErrorStateMatcher} from "@angular/material";
import {NgForm, FormGroupDirective, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-import-contact-login',
  templateUrl: './import-contact-login.component.html',
  styleUrls: ['./import-contact-login.component.css']
})

export class ImportContactLoginComponent implements OnInit {

    model:any={};
    users : any;
    returnUrl: any;
    slug: any;
    constructor(
        private service: UserServiceService,
        private route: Router,
        private router: ActivatedRoute,
        private dialog: MatDialog){
    }

    ngOnInit() {
      this.router.params.subscribe(params => {
        console.log('this is llovwee,',params);
        this.slug = params['slug'];
        localStorage.setItem('Mail_slug', this.slug);
      });
        this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '';
    }

    login_validation(){
        console.log(this.model.user_id);
        this.service.mail_checking(this.model.user_id).subscribe(data => {
            if(data['success']){
                console.log(data['data'][0]);
                console.log("I am coming");
                localStorage.setItem('currentUser', JSON.stringify(data['data'][0]));
                alert('Logged in Successfully');
                this.route.navigate(['/import-contact']);
            }
            else{
                alert('Your email id is not registered, please signup with your email is and sign in again');
            }
        })
    }
}

@Component({
    selector: 'app-import-contact-register',
    templateUrl: './import-contact-register.html',
     styleUrls: ['./import-contact-login.component.css']
})
export class ImportContactRegisterComponent implements OnInit {
 // model1: any = {};
  model2: any = {};
  confirmpassword1 : any;
  @ViewChild(NgForm) f: NgForm;

  inputChecking = new FormControl('', [
    Validators.required
  ]);
  returnUrl: string;
  message: any;
  user: any;
  countrycode: any;
  temp: any;
  selected: any;
  slug: any;
  constructor( private userservice: UserServiceService,private router: Router,private route: ActivatedRoute) { }
  selecte = new FormControl('',[
      Validators.required,
      Validators.email,
  ])
  ngOnInit() {
    console.log('jhgkfgh');
    this.route.params.subscribe(params => {
        console.log('this is llovwee,',params);
        this.slug = params['slug'];
        localStorage.setItem('Mail_slug', this.slug);
      });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  function(value) {
    this.countrycode = value;
    this.temp = value;
  }

  register() {
    console.log('hiii');
    console.log(this.model2);
    this.userservice.registration(JSON.stringify(this.model2))
        .subscribe(
            data =>{
              console.log(data);
              if(data['success']){
                alert('Registered Successfully');
                this.router.navigate(['/import-contact-login/'+this.slug]);
              }
            },
            error =>{
              console.log(error);
            });
  }
   
}
