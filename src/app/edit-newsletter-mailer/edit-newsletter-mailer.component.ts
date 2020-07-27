import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-newsletter-mailer',
  templateUrl: './edit-newsletter-mailer.component.html',
  styleUrls: ['./edit-newsletter-mailer.component.css']
})
export class EditNewsletterMailerComponent implements OnInit {
  buttonDisabled = false;
  constructor(private userService: UserServiceService,
    private router: ActivatedRoute, private route: Router) { }
  model: any;
  ntrd: any;
  event: any;
  id_of_event:any;
  isNonTrade: boolean = false
  checkAllNonTrades: boolean = false
  newsletter_list : object[] = [];

  ngOnInit() {
   // alert("In end pharma page")
    // this.router.params.subscribe(params => {
    //   //   console.log('this is llovwee,',params);
    //      this.id_of_event = params['id'];
    // //     alert("All Docs"+this.id_of_event);
    //    //  localStorage.setItem('Mail_slug', this.all_doc);
    //    });
    this.getData();
    // setInterval(()=>{
    //   // console.log('LIST 1' ,)
    //   console.log('LST 2' , this.newsletter_list);
    // },1000);
  }
  public removeItem(item: any, list: any[]): void {
    list.splice(list.indexOf(item), 1);
  }
  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

  getData() {
    this.userService.getData_articles().subscribe(
      data => {
        // console.log(JSON.stringify(data));
        
        this.model = data['data'];
        // alert(data);
        // alert(data.length);
        // alert(JSON.stringify(data));
        //console.log(JSON.stringify(data));
        this.model.sort(function(a, b) {
          a = new Date(a.created_at);
          b = new Date(b.created_at);
          return a>b ? -1 : a<b ? 1 : 0;
      });
      console.log("Show Data ::: " + this.model);
      for(let i = 0 ; i < 10 ; i++){
        this.newsletter_list.push(this.model[i]);
      }
      this.model.splice(0,10);
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
    // this.buttonDisabled = true;
    // // var em_list = this.email.replace( /\n/g,',').split(",");
    // // em_list = {...em_list};
    // let result = this.model.filter((ch) => { return ch.selected })
    //   .map((ch) => { return ch.slug});
    // console.log("Result is ;" + result);
    // let f_d = {
    //   data: result
    // }
    // console.log(f_d);
    this.userService.send_email_newsletter(this.newsletter_list).subscribe(
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

