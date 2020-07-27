import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-send-email-for-transcript',
  templateUrl: './send-email-for-transcript.component.html',
  styleUrls: ['./send-email-for-transcript.component.css']
})
export class SendEmailForTranscriptComponent implements OnInit {
id:any;
  constructor(private userService: UserServiceService, private route: Router) { }

  ngOnInit() {
  }
  
  sendEmail(){
    var em_list = this.id.replace( /\n/g,',').split(",");
    em_list = {...em_list};
    console.log(em_list);
    alert(em_list);
    alert(typeof(em_list));
    this.userService.sendEmailForTranscriptEdit(em_list) .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
          alert("Mail Sent For Transcript Edit");
          this.route.navigate(['']); 
  }
}
