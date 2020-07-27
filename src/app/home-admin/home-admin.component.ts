import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
    if ((localStorage.getItem('isauthenticated')) != 'true') {
      var username = window.prompt('Enter your username', '');
      var password = window.prompt('Enter your password', '');
      var user1 = 'admin';
      var pass1 = 'trd123!!!';
      if (username == user1 && password == pass1) {
        alert('Success');
        localStorage.setItem('isauthenticated', 'false');
      }
      else {
        //localStorage.setItem('isauthenticated','false');
        this.router.navigate(['notfound']); // works well
      }
    }
  }

}
