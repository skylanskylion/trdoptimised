import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send-periodic-mailers',
  templateUrl: './send-periodic-mailers.component.html',
  styleUrls: ['./send-periodic-mailers.component.css']
})
export class SendPeriodicMailersComponent implements OnInit {
  buttonDisabled = false;

  constructor(private userService: UserServiceService, private route: Router,private router :ActivatedRoute) { }
  model: any;
  ntrd: any;
  event: any;
  isNonTrade: boolean = false
  checkAllNonTrades: boolean = false
  id_of_user:any;

  ngOnInit() {
    this.getData();
    this.router.params.subscribe(params => {
      //   console.log('this is llovwee,',params);
      this.id_of_user = params['id'];
      //alert("Doctor id is :: "+this.id_of_user)
      //     alert("All Docs"+this.id_of_event);
      //  localStorage.setItem('Mail_slug', this.all_doc);
    });
  }

  getData() {
    this.userService.getDataForKnowledPartner().subscribe(
      data => {
        console.log("Show Data ::: " + data);
        this.model = data['data'];
        // alert(data);
        // alert(data.length);
        // alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      },
      error => {
        console.log(error);
      });
  }
  changeTradesByCategory(event) {
    if (event.target.name == 'nontrades') {
      this.isNonTrade = true
    }

    if (this.isNonTrade && this.checkAllNonTrades) {
      event.target.checked = true
    }
  }
  send() {
    this.buttonDisabled = true;
    // var em_list = this.email.replace( /\n/g,',').split(",");
    // em_list = {...em_list};
    let result = this.model.filter((ch) => { return ch.selected })
      .map((ch) => { return ch.id });
    console.log("Result is ;" + result);
    let f_d = {
      data: result
    }
    console.log(f_d);
    if(this.id_of_user=="pre-event"){
      alert("Id : "+this.id_of_user)
      this.userService.send_email_event_for_kp_with_response_mailer_link(f_d).subscribe(
        data => {
          if (data) {
            console.log("DATA IN TS FILE  RESPONSE MAILER:: " + data);
          }
        }
      )
      alert("Mail Sent ");
      window.location.reload();
    }
    else if(this.id_of_user=="post-event"){
      alert("Id : "+this.id_of_user)

      this.userService.send_email_event_for_kp_with_response_mailer_link_proposal(f_d).subscribe(
        data => {
          if (data) {
            console.log("DATA IN TS FILE  RESPONSE MAILER:: " + data);
          }
        }
      )
      alert("Mail Sent ");
      window.location.reload();
    }
else if(this.id_of_user=="proposal"){
  this.userService.send_email_event_for_kp(f_d).subscribe(
    data => {
      if (data) {
        console.log("DATA IN TS FILE :: " + data);
      }
    }
  )
 alert("Mail Sent ");
 window.location.reload();
}
else if(this.id_of_user=="last-minute"){
  alert("Id : "+this.id_of_user)

  this.userService.send_email_event_for_kp_with_response_mailer_link_last_minute(f_d).subscribe(
    data => {
      if (data) {
        console.log("DATA IN TS FILE  RESPONSE MAILER:: " + data);
      }
    }
  )
  alert("Mail Sent ");
  window.location.reload();
}

  }

  SelectAll(event) {
    const checked = event.target.checked;
    this.model.forEach(item => item.selected = checked);
  }

}


