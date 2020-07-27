import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-send-email-for-interview-video-edit',
  templateUrl: './send-email-for-interview-video-edit.component.html',
  styleUrls: ['./send-email-for-interview-video-edit.component.css']
})
export class SendEmailForInterviewVideoEditComponent implements OnInit {
id : any;
url:any;
video_id :any;
  constructor(private userService: UserServiceService, private route: Router) { }

  ngOnInit() {
  }
 getNumberFromString (str) {
      return str.match(/\d+/);
  }
  sendEmail(){
    this.video_id = this.getNumberFromString(this.url);
    this.userService.sendEmailForInterviewVideoEdit(this.id,this.video_id) .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
          alert("Successfully Mail Sent For Interview Video Edit");
        //  this.route.navigate(['']); 
  }
}
