import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { AuthenticationService } from '../authentication.service';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-login-live-updates',
  templateUrl: './login-live-updates.component.html',
  styleUrls: ['./login-live-updates.component.css']
})
export class LoginLiveUpdatesComponent implements OnInit {
  user : any ;
  pass :any ;
  constructor( public dialog: MatDialog ,private router:Router, private route: ActivatedRoute, private uservice: UserServiceService, public auth: AuthenticationService ) { }

  ngOnInit() {
  }
    login() {
      this.auth.login_live_updates(this.user,this.pass).subscribe(
        data => {
          console.log(data['success']);
          if(data['success']) {
            //alert(JSON.stringify(data['data']))
            localStorage.setItem("currentUser", data['data'][0]);
            alert('Logged in Successfull !');

            this.router.navigate(['/live-update-dashboard']);
            // this.router.navigate(['/live-update-dashboard'])
            // if(!(JSON.parse(localStorage.getItem('currentUser')))){
            //   this.dialog.closeAll();
            // }
          }
          else {
            alert('Credentials are incorrect, please try again');
          }
        }
      )
    }
    // navigate(){
    //   location.reload()
    //   // this.router.navigate(['/live-update-dashboard'])
    // }
    // login1() {
    //   this.auth.login_req1(this.user,this.pass).subscribe(
    //     data => {
    //       console.log(data['success']);
    //       if(data['success']) {
    //         localStorage.setItem("currentUser", JSON.stringify(data['data'][0]));
    //         alert('Logged in Successfully');
    //         this.router.navigate(['quality-editor-dashboard/erroneous-videos']);
    //       }
    //       else {
    //         alert('Credentials are incorrect, please try again');
    //       }
    //     }
    //   )
    // }

}

