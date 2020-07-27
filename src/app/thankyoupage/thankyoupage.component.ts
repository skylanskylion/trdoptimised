import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-thankyoupage',
  templateUrl: './thankyoupage.component.html',
  styleUrls: ['./thankyoupage.component.css']
})
export class ThankyoupageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  success(message: string) { 
   alert("Thanks for Your Valuable Feedback!!!")
}

toggle = true;
status = 'Enable'; 

toggle1 = true;
status1 = 'Enable'; 

toggle2 = true;
status2 = 'Enable'; 

toggle3 = true;
status3 = 'Enable'; 

toggle4 = true;
status4 = 'Enable'; 


enableDisableRule(job) {
  this.toggle = !this.toggle;
  this.status = this.toggle ? 'Enable' : 'Disable';
  alert("Thanks for Your Valuable Feedback!!!")
  this.router.navigate(['/AOC-2020-Live-Update-Live-Streaming']);

}
enableDisableRule1(job) {
  this.toggle1 = !this.toggle1;
  this.status1 = this.toggle1 ? 'Enable' : 'Disable';
  alert("Thanks for Your Valuable Feedback!!!")
  this.router.navigate(['/AOC-2020-Live-Update-Live-Streaming']);

}
enableDisableRule2(job) {
  this.toggle2 = !this.toggle2;
  this.status2 = this.toggle2 ? 'Enable' : 'Disable';
  alert("Thanks for Your Valuable Feedback!!!")
  this.router.navigate(['/AOC-2020-Live-Update-Live-Streaming']);

}
enableDisableRule3(job) {
  this.toggle3 = !this.toggle3;
  this.status3 = this.toggle3 ? 'Enable' : 'Disable';
  alert("Thanks for Your Valuable Feedback!!!")
  this.router.navigate(['/AOC-2020-Live-Update-Live-Streaming']);

}
enableDisableRule4(job) {
  this.toggle4 = !this.toggle4;
  this.status4 = this.toggle4 ? 'Enable' : 'Disable';
  alert("Thanks for Your Valuable Feedback!!!")

  this.router.navigate(['/IAGES-2020-Question-of-the-Talk']);

}
}
