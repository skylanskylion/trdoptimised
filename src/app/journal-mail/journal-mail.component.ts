import { Component, OnInit } from '@angular/core';
import {AdService} from "../dynamic/ad.service";
import {Http, Response} from "@angular/http";
import {UserServiceService} from "../user-service.service";


@Component({
  selector: 'app-journal-mail',
  templateUrl: './journal-mail.component.html',
  styleUrls: ['./journal-mail.component.css']
})
export class JournalMailComponent implements OnInit {
  article_url: string;
  allarticles: any;
  event: any;
  category: any;
  p: any[];
  x: any;
  pp: boolean;
  doc = [];
  all_doc = [];
  docname: any;
  doc_name: any;
  doc_image: any;
  events: any;
  output: any;
  email: any;
  acc_id: any;
  template: any;
  cat = [];
  event_list = [];
  cat_list = [];
  wccmm: boolean;
  doc_list = [];
  wccmm1: boolean;
  model: any = {};
  docs: any;
  from_name: any;

  
  

  constructor( private adService: AdService, private http: Http, private service: UserServiceService) { }

  ngOnInit() {
    this.template = '';
      this.email = '';
      this.wccmm1 = false;
      this.pp = false;
      this.wccmm = false;
      this.article_url = 'https://therightdoctors.com/api/beta/article/new/home/assets/test?day=Friday&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
      console.log('set articles calling');
      this.http.get(this.article_url)
          .map((res: Response) => res.json()).subscribe(data => {
              this.allarticles = data;
              console.log('this is amusing', this.allarticles);
              for (var key in this.allarticles.data)
                  this.cat.push(key);
              console.log(this.cat);
              

          })
    
  }

send_email() {

    let f_d = {
        acc_no: this.acc_id,
        from_name: this.from_name
    }
    console.log(f_d);
    this.service.send_email_special(f_d).subscribe(
        data => {
            console.log(data);
        }
    )
}

send_email_db() {

  let f_d = {
      from_name: this.from_name
  }
  console.log(f_d);
  this.service.send_email_from_db(f_d).subscribe(
      data => {
          console.log(data);
      }
  )
}





}
