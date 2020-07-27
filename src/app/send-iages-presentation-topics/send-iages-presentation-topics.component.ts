import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send-iages-presentation-topics',
  templateUrl: './send-iages-presentation-topics.component.html',
  styleUrls: ['./send-iages-presentation-topics.component.css']
})
export class SendIagesPresentationTopicsComponent implements OnInit {

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
    this.userService.getDataForIages2020Presentations().subscribe(
      data => {
        console.log("Show Data ::: " + data);
        this.model = data['data'];
       // alert(data['data']);
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
 

  this.userService.send_email_event_for_presentation(f_d, this.id_of_user).subscribe(
    data => {
      if (data) {
        console.log("DATA IN TS FILE :: " + data);
      }
    }
  )
 //alert("Mail Sent ");
 //window.location.reload();
 alert('Done');
      // this.router.navigate(['']);
      window.location.href = "https://iages.therightdoctors.com"; 
  }

  SelectAll(event) {
    const checked = event.target.checked;
    this.model.forEach(item => item.selected = checked);
  }

}


