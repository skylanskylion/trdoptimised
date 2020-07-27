import { Component, OnInit, ViewChild } from '@angular/core';
import {AdService} from "../dynamic/ad.service";
import {Http, Response} from "@angular/http";
import {UserServiceService} from "../user-service.service";
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-mailer-doctor-wise',
  templateUrl: './mailer-doctor-wise.component.html',
  styleUrls: ['./mailer-doctor-wise.component.css']
})
export class MailerDoctorWiseComponent implements OnInit {

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
   from_name: any;
   template: any;
  cat = [];
  event_list = [];
  cat_list = [];
  wccmm: boolean;
  doc_list = [];
  wccmm1:boolean;
  model:any={};
  docs:any;
  dl = [
  "Dr. PC Deedwania",
  "Dr. Navin C Nanda",
  "Dr. Giuseppe Mancia",
  "Dr. Ashok Seth",
  "Dr. MK Das",
  "Dr. Anil Pareek",
  "Dr. Hassan Khammas",  
  "Dr. Thair Al-Jumaily",
  "Dr. Amrish Agrawal",
  "Dr. Abhay Pande",
  "Dr. Manish Bansal",
  "Dr. Sunil M Jain",
  "Dr. Vivek Jawali",
  "Dr. IB Vijayalakshmi",
  "Dr. Ulhas Pandurangi",
  "Dr. SN Narasingan",
  "Dr. OP Yadav",
  "Dr. Amal Banerjee",
  "Dr. Rajeev Gupta",
  "Dr. Pradeep Chowbey",
  "Dr. Sadanand Shetty",
  "Dr. Sharad Pendsey",
  "Dr. VS Narian",
  "Dr. Pankaj Manoria",
  "Dr. Satyendra Tewari",
  "Dr. Sachin Chittawar",
  "Dr. Roopesh Jain",
  "Dr. AK Pancholia",
  ]

  isNonTrade: boolean = false
  checkAllNonTrades: boolean = false

  public bankCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public bankFilterCtrl: FormControl = new FormControl();

  /** list of banks filtered by search keyword */
  public filteredBanks: ReplaySubject<[]> = new ReplaySubject<[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();
  constructor(private adService: AdService, private http: Http, private service: UserServiceService) {
  }

  ngOnInit() {
    this.template='';
    this.email='';
    this.wccmm1 = false;
    this.pp=false;
    this.wccmm = false;
    this.article_url = 'https://therightdoctors.com/api/beta/article/new/home/assets/test?day=Friday&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log('set articles calling');
    this.http.get(this.article_url)
        .map((res: Response) => res.json()).subscribe(data => {
          this.allarticles = data;
          console.log('this is amusing',this.allarticles);
          for(var key in this.allarticles.data)
          this.cat.push(key);
         console.log(this.cat);
         this.eventlist();
         this.doctor_list();
         
        })
    
  }

  // protected filterBanks() {
  //   if (!this.event_list) {
  //     return;
  //   }
  //   // get the search keyword
  //   let search = this.bankFilterCtrl.value;
  //   if (!search) {
  //     this.filteredBanks.next(this.event_list.slice());
  //     return;
  //   } else {
  //     search = search.toLowerCase();
  //   }
  //   // filter the banks
  //   this.filteredBanks.next(
  //     this.event_list.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
  //   );
  // }

  eventlist() {
    for(var i=0;i<this.cat.length;i++) {
      console.log(this.cat[i]);
      for(var j=0;j<this.allarticles.data[this.cat[i]].length;j++) {
        let elem = this.allarticles.data[this.cat[i]][j].sub_headline;
        if(this.event_list.indexOf(elem)==-1 && elem!=null && elem !="") {
          this.event_list.push(this.allarticles.data[this.cat[i]][j].sub_headline);
        }
      }
    }
    console.log(this.event_list);
  }

  fun(category: any) {
    
    this.p=[];
    this.x=this.allarticles.data[category];
    console.log('this is geat',this.x)
    for(let i=0; i<this.x.length;i++){
        if(this.p.indexOf(this.x[i].event)>-1){
        continue
      }
      else{
        if(this.x[i].event!=null){
        this.p.push(this.x[i].event);

        }}
    }
    console.log(this.p)
    console.log(this.allarticles.data[category])
  }

  fun2(category: any, event: any) {
    this.doc=[];
    this.x=this.allarticles.data[category];
    for(let i=0; i<this.x.length;i++){
      if(this.doc.indexOf(this.x[i].guest1)>-1){
        continue
      }
      else{
        if(this.x[i].event==event){
          this.doc.push(this.x[i].guest1);
          this.all_doc.push(this.x[i]);
        }}
    }
    this.all_doc.forEach(item => item.selected = false);

    console.log(this.all_doc);

  }

  SelectAll(event) {
    const checked = event.target.checked;
    this.all_doc.forEach(item => item.selected = checked);
  }

  changeTradesByCategory(event) {
    if (event.target.name == 'nontrades') {
      this.isNonTrade = true
    }

    if (this.isNonTrade && this.checkAllNonTrades) {
      event.target.checked = true
    }
  }

  fun3() {
    if(this.event==="wccmm-mumbai-2019") {
      this.wccmm1 = true;
      //console.log(this.wccmm1);
     // this.doctor_list();
     console.log(this.doc_list);
     let dol = [];
     for(var i=0;i<this.doc_list.length;i++) {
        if(this.doc_list[i]['name'].replace(/\s/g,'').split('.').join("").toLowerCase()==this.docname.replace(/\s/g,'').split('.').join("").toLowerCase()) {
          this.docs = this.doc_list[i]['data'];
          break;
        }
     }
     this.model = {};
    this.model.name=this.docname;
    this.model.event=this.event;
    this.model.head = this.docs.head;
    if(this.docs.image_sp_pod_slug!=null) {
      this.model.image_sp_pod = this.docs.image_sp_pod_slug;
      this.model.sp_pod = "https://therightdoctors.com/event-details/speaker-talk-podcast/" + this.docs.sp_pod_slug;
      this.model.sp_pod_h = this.docs.sp_pod_h;
    }
    if(this.docs.image_ppt_slug!=null) {
      this.model.image_sp_ppt = this.docs.image_ppt_slug;
      this.model.sp_ppt = "https://therightdoctors.com/event-details/presentation/" + this.docs.ppt_slug;
      this.model.sp_ppt_h = this.docs.sp_ppt_h;
    }
    if(this.docs.image_vid_slug!=null) {
      this.model.image_vid = this.docs.image_vid_slug;
      this.model.vid = "https://therightdoctors.com/the-speakers/" + this.docs.vid_slug;
      this.model.vid_h = this.docs.vid_h;
    }
    if(this.docs.image_pod_slug!=null) {
      this.model.image_pod = this.docs.image_pod_slug;
      this.model.pod = "https://therightdoctors.com/event-details/podcast/" + this.docs.pod_slug;
      this.model.pod_h = this.docs.pod_h;
    }
    if(this.docs.image_sp_vid_slug) {
      this.model.image_sp_vid = this.docs.image_sp_vid_slug;
      this.model.sp_vid = "https://therightdoctors.com/the-speakers/" + this.docs.sp_vid_slug;
      this.model.sp_vid_h = this.docs.sp_vid_h;
    }
    
    
     console.log(this.docs);
    }
    else
          this.pp=true;
  }


  fun4(i: number) {
    this.allarticles.data[this.category][i].guest1=this.doc_name;
    this.allarticles.data[this.category][i].event=this.events;

  }

  fun5(i: number) {
      this.allarticles.data[this.category][i].guest1=this.doc_name;
    this.allarticles.data[this.category][i].event=this.events;
    this.output=this.allarticles.data[this.category][i];
    this.output.email=this.email;
    this.output.template=this.template;
    console.log('this is hsdv',this.output)
    this.service.update_output(this.output).subscribe(
        data => {
          console.log(data['data']) ;
          //this.editform = data['data'] ;
        });
  }

  send_email() {
    // var em_list = this.email.replace( /\n/g,',').split(",");
    // em_list = {...em_list};
    let result = this.all_doc.filter((ch) => { return ch.selected })
    .map((ch) => { return ch.slug });
     console.log(result);
     let f_d = {
        data: result, 
        //email: em_list, 
        from_me: this.from_name
      }
    console.log(f_d);
    this.service.send_email_doctor(f_d, this.event).subscribe(
      data => {
        console.log(data);
      }
    )
  }
  get_doctors(name) {
    this.all_doc = [];
    this.wccmm1 = false;
    this.wccmm = false;
    this.pp=false;
    
    this.pp = true;
    this.doc = [];

    for(var i=0;i<this.cat.length;i++) {
      console.log(this.cat[i]);
      for(var j=0;j<this.allarticles.data[this.cat[i]].length;j++) {
        let elem = this.allarticles.data[this.cat[i]][j].event;
        if(this.allarticles.data[this.cat[i]][j].sub_headline == name) {
          this.all_doc.push(this.allarticles.data[this.cat[i]][j]);
        }
      }
    }
    this.all_doc.forEach(item => item.selected = false);
    console.log(this.all_doc);
      console.log(this.doc);
    
    }

    get_cat(event) {
      this.wccmm1 = false;
    this.wccmm = false;
      this.cat_list = [];
      for(var i=0;i<this.cat.length;i++) {
        //console.log(this.cat[i]);
        for(var j=0;j<this.allarticles.data[this.cat[i]].length;j++) {
          let elem = this.allarticles.data[this.cat[i]][j].event;
          if(elem == event) {
            this.cat_list.push(this.cat[i]);
            break;
          }
        }
      }
    }

    doctor_list() {
        const map = new Map();
        this.service.get_videos().subscribe(  
          data1 => {
            let data2 = data1.json();
            let data = data2['data'];
            //console.log(data);
            for (const item of data) {
              let st = item.sub_headline.replace(/\s/g,'').split('.').join("");
              st = st.toLowerCase();
              //if(st!=this.docname.replace(/\s/g,'').split('.').join("").toLowerCase())
              //      continue;
              if(item.category=='the-interview') {  
              if(!map.has(st)){
                console.log('headline '+ item.headline);
                  this.doc_list.push({
                  name:item.sub_headline,
                  data: {
                    image_vid_slug: item.image_url,
                    vid_slug: item.slug,
                    vid_cat: item.category,
                    spec: item.guest1_designation,
                    hosp: item.guest1_hospital,
                    head: item.headline,
                  }
                });
              } 
            }
            }
          //  console.log(this.doc_list);
            for (const item of data) {
              let st = item.sub_headline.replace(/\s/g,'').split('.').join("");
              st = st.toLowerCase();
              // if(st!=this.docname.replace(/\s/g,'').split('.').join("").toLowerCase())
              //       continue;
              if(item.category=='podcast') {  
                for(const it of this.doc_list)
                if(it['name'].replace(/\s/g,'').split('.').join("").toLowerCase()===st) {
               //   console.log(st);
                  
               if(!item.test) {
                 //console.log(it);
                  it['data']['pod_slug'] = item.slug;
                  it['data']['image_pod_slug'] = item.image_url;
                  it['data']['pod_h'] = item.headline;
                 // console.log(it['data']['pod_slug']);
               }
                }
              }
            }
            for (const item of data) {
              let st = item.sub_headline.replace(/\s/g,'').split('.').join("");
              st = st.toLowerCase();
              // if(st!=this.docname.replace(/\s/g,'').split('.').join("").toLowerCase())
              //       continue;
              if(item.category=='the-speakers') {  
                for(const it of this.doc_list)
                if(it['name'].replace(/\s/g,'').split('.').join("").toLowerCase()===st) {
               //   console.log(st);
                  it['data']['sp_vid_slug'] = item.slug;
                  it['data']['image_sp_vid_slug'] = item.image_url;
                  it['data']['sp_vid_h'] = item.headline;
                  break;
                }
              }
            }
            this.doc_list.sort(); 
            this.service.all_podcast_audio_files().subscribe(
              data1 => {
              //  console.log(this.doc_list.length);
                data1 = data1.json();
                let data = data1['data'];
                console.log(data);
             //  console.log(data);
                for (const item of data) {
                  
                  let st = item.sub_headline.replace(/\s/g,'').split('.').join("");
                  st = st.toLowerCase();
                  // if(st!=this.docname.replace(/\s/g,'').split('.').join("").toLowerCase())
                  //   continue;
                  var f = 0;
                 // console.log(t);
                 // console.log(this.doc_list.length);
               //  ['test'] === 'speaker-podcast'
                    for(const it of this.doc_list) {
                      var nm = it['name'].replace(/\s/g,'').split('.').join("").toLowerCase();
                    //  console.log(nm,st);
                    if(nm===st && item.test!='speaker-podcast')
                    it['data']['pod_slug'] = item.slug;
                    if(nm===st && item.test==='speaker-podcast') {
                      it['data']['sp_pod_slug'] = item.slug;
                      it['data']['head_t'] = item.headline;
                      it['data']['image_sp_pod_slug'] = item.image_url;
                      it['data']['sp_pod_h'] = item.headline;
                 //     console.log(st);
                      f = 1;
                      break;
                    }
                  }
              }
            }
            );
            this.service.get_presentation_all().subscribe(
              data1 => {
                let data2 = data1.json();
                let data = data2['data'];
            // console.log(data);
              // console.log(map);
                for (const item of data) {
                  if(item.doctor_name===null)
                    continue;
                 let st = item.doctor_name.replace(/\s/g, '').split('.').join("");
                 st = st.toLowerCase();
                //  if(st!=this.docname.replace(/\s/g,'').split('.').join("").toLowerCase())
                //     continue;
               //  console.log(item);
                    for(const it of this.doc_list)
                      if(it['name'].replace(/\s/g,'').split('.').join("").toLowerCase()===st) {
                 //       console.log(st);
                        it['data']['ppt_slug'] = item.slug;
                        it['data']['_id'] = item._id;
                        it['data']['image_ppt_slug'] = item.url;
                        it['data']['sp_ppt_h'] = item.headline;
                      }
                }
             //  console.log(this.doc_list);
              }
            );
            let li = [];
            for (const it of this.dl) {
              for(const it2 of this.doc_list) {
                if(it2['name'].replace(/\s/g,'').split('.').join("").toLowerCase()==it.replace(/\s/g,'').split('.').join("").toLowerCase()) {
                  li.push(it2);
                  break;
                }
              }
            }
            this.doc_list = li;
          //  this.doc_list = this.doc_list[0];
           console.log(this.doc_list);
          }
          
    
      );
      
    }

  }
