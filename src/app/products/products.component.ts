import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public router: Router, public location: Location) {
  }

  ngOnInit() {
    localStorage.setItem('isauthenticated', 'false');
    if ((localStorage.getItem('isauthenticated')) != 'true') {
      var username = window.prompt('Enter your username', '');
      var password = window.prompt('Enter your password', '');
      var user1 = 'admin';
      var pass1 = 'trd123!!!';
      if (username == user1 && password == pass1) {
        alert('Success');
        localStorage.setItem('isauthenticated', 'true');
      }
      else {
        //localStorage.setItem('isauthenticated',false);
        this.goBack(); // works well
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}
