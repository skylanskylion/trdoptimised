import {Component, OnInit} from '@angular/core';
//import {ActivatedRoute} from '@angular/router';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {UserServiceService} from "../user-service.service";
import {ActivatedRoute, NavigationEnd} from '@angular/router';
import {Router} from "@angular/router";
import { Inject } from '@angular/core'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Location} from '@angular/common';
import {LikeComment} from "../single-article-video/single-article-video.component";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  home: any;
  notLogin:boolean=false;
  _isHandset: boolean = true;
  category: any;
  categoryy: any;
  categorye: any;
  isShow:boolean;
  Logged :boolean = false;
  constructor(private _breakpointObserver: BreakpointObserver, private route: ActivatedRoute, public dialog: MatDialog, private router: Router) {
    this._breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result: BreakpointState) => {
        this._isHandset = result.matches;
      });
  }

  ngOnInit() {
    this.route.data.subscribe(name => {
      console.log('Name = ', name['name']);
      this.home = name['name'];
      if(localStorage.getItem('currentUser')===null)
      this.Logged = true;
    });
    this.route.params.subscribe(category => {
      if (category) {
        console.log('category=', category);
        if (category['event'] && category['category']) {
          if (category['category']) {
            this.categoryy = category['category'];
            console.log('Category Inside If condition =', this.categoryy);
          }
          this.categorye = category['event'];
          console.log('If Condition Event=', this.categorye);
        }
        else if (category['event']) {
          this.category = category['event'];
          console.log('event naresh=', this.category);
        }
        else {
          console.log('category');
          this.category = category['category'];
          console.log('If Condition category=', this.category);
        }

        if (category['catagory']) {
          console.log('catagory');
          this.category = category['catagory'];
          console.log('else Condition category=', this.category);
        }
      }
    });
  }

  toggleSearch(){
    this.isShow=!this.isShow;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TrdLoginSignup, {
      width: '600px',
      panelClass: 'app-login-register'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout(){
    console.log('in logout fuction');
    // remove user from local storage to log user out
   const lostruser = JSON.parse(localStorage.getItem('currentUser'));
   console.log(lostruser);
    // alert(lostruser);
    // alert(temp);
      localStorage.removeItem('currentUser');
      window.location.reload();
  }


}


@Component({
  selector: 'trd-login-signup',
  templateUrl: 'trd-login-signup.html',
})
export class TrdLoginSignup{
    personRe :boolean=true;
    loginpe:boolean=false;
    model:any={};
    users : any;
    returnUrl: any;
    model2:any = {};
    countrycode: any;
  
  temp: any;
  constructor(
    private _location: Location,
    private service: UserServiceService,
    public dialogRef: MatDialogRef<TrdLoginSignup>,
    private route: Router,
    private router: ActivatedRoute,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '';
    

    //console.log(this.Logged);
}
function(value) {
  this.countrycode = value;
  this.temp = value;
}
  register(){
   // this.onNoClick()
  //  this.route.navigate(['/trd-registration-form']);
    
     this.personRe = false;
     this.loginpe = true;
     //this.model2.verification_flag = "true";
     console.log('hiii');
      console.log(this.model2);
      this.service.registration(JSON.stringify(this.model2))
          .subscribe(
              data =>{
                console.log(data);
                if(data['success']){
                  alert('Registered Successfully');
                  this.onNoClick();
                }
              },
              error =>{
                console.log(error);
              });
    }


    login_popup(): void{
        this.onNoClick();
        this.openDialog()
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(TrdLoginSignup, {
            width: '450px',
            panelClass: 'trd-login-signup',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    login(){
      this.loginpe = false;
        this.personRe = true;
        console.log(this.model.user_id);
        this.service.mail_checking_login(this.model.user_id,this.model.password).subscribe(data => {
          console.log("Data-------"+JSON.stringify(data));
            if(data['success']){
            //  if(data['data'][0]['verification_flag']=="true"){
                console.log(data['data'][0]);
            //    console.log("VERFIFICATION FLAG == "+data['data'][0]['verification_flag']);
                // let users = data['data'];
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log("I am coming");
                console.log(data);
                localStorage.setItem('currentUser', JSON.stringify(data['data'][0]));
                alert('Logged in Successfully');
                // this.route.navigate(['/event-details/wccmm-2019']);
                this.onNoClick();
                window.location.reload();
                //this.backClicked();
                // this.route.navigate(['/profile']);
                //location.reload();
                //console.log(this.isLogged);
               //this.isLogged=true;
           //   }else{
          //      alert("User Not Verified");
          //    }

            }
            else{
                alert('Credentials are incorrect, please try again');
            }
        })
    }

    // backClicked() {
    //   this._location.back();
    // }


}

