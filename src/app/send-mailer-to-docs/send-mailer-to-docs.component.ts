import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-send-mailer-to-docs',
  templateUrl: './send-mailer-to-docs.component.html',
  styleUrls: ['./send-mailer-to-docs.component.css']
})
export class SendMailerToDocsComponent implements OnInit {
  buttonDisabled = false;
  constructor(private userService: UserServiceService,
    private router: ActivatedRoute, private route: Router) { }
  model: any;
  ntrd: any;
  event: any;
  id_of_event:any;
  isNonTrade: boolean = false
  checkAllNonTrades: boolean = false

  ngOnInit() {
   // alert("In end pharma page")
    // this.router.params.subscribe(params => {
    //   //   console.log('this is llovwee,',params);
    //      this.id_of_event = params['id'];
    // //     alert("All Docs"+this.id_of_event);
    //    //  localStorage.setItem('Mail_slug', this.all_doc);
    //    });
    this.getData();
  }

  getData() {
    this.userService.getData_interviewed_docs().subscribe(
      data => {
        console.log(JSON.stringify(data));
        console.log("Show Data ::: " + data);
        this.model = data['data'];
        // alert(data);
        // alert(data.length);
        // alert(JSON.stringify(data));
        //console.log(JSON.stringify(data));
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
    this.userService.send_email_for_inteview(f_d).subscribe(
      data => {
        if (data) {
          console.log("DATA IN TS FILE :: " + data);
        }
      }
    )
   alert("Mail Sent ");
 //  window.location.reload();
  }

  SelectAll(event) {
    const checked = event.target.checked;
    this.model.forEach(item => item.selected = checked);
  }
}
