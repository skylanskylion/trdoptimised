import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-select-to-send-mailer-to-pharma',
  templateUrl: './select-to-send-mailer-to-pharma.component.html',
  styleUrls: ['./select-to-send-mailer-to-pharma.component.css']
})
export class SelectToSendMailerToPharmaComponent implements OnInit {
  constructor(private userService: UserServiceService, private route: Router) { }
  model: any;
  ntrd: any;
  event: any;
  isNonTrade: boolean = false
  checkAllNonTrades: boolean = false
  marked = false;
  id:any;

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.userService.getDataForKnowledPartnerEvents().subscribe(
      data => {
        console.log("Show Data ::: " + data);
        this.model = data['data'];
       // alert(JSON.stringify(data))
        // alert(data);
        // alert(data.length);
        // alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      },
      error => {
        console.log(error);
      });
  }
  // toggleVisibility(e){
  //   this.marked= e.target.checked;
  //   this.id= e.target.checked.id;
  // }
  // send()
  // {
  //   let result = this.model.filter((ch) => { return ch.selected })
  //     .map((ch) => { return ch.Id });
  //   console.log("Result is ;" + result);
  //   let f_d = {
  //     data: result
  //   }
  //   console.log(f_d);
  //   alert(f_d['data'][0])
  //   this.id  =f_d['data'][0];
  //   this.route.navigate(['/send-mailer-kp-pharma/'+this.id]);
  //   //, { queryParams: { id: f_d['data'][0] }}
  // //  alert(this.isNonTrade)
  // //  alert(f_d['data'][0])
  // }
  changeTradesByCategory(event) {
    if (event.target.name == 'nontrades') {
      this.isNonTrade = true
    let result = this.model.filter((ch) => { return ch.selected })
      .map((ch) => { return ch.Id });
    console.log("Result is ;" + result);
    let f_d = {
      data: result
    }
    console.log(f_d);
    alert(f_d['data'][0])
    this.id  =f_d['data'][0];
    }

    if (this.isNonTrade && this.checkAllNonTrades) {
      event.target.checked = true
    }
  }
}
