import { Component, OnInit } from '@angular/core';
import {AdService} from "../dynamic/ad.service";
import {Http, Response} from "@angular/http";
import {UserServiceService} from "../user-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-automation-of-mailers',
  templateUrl: './automation-of-mailers.component.html',
  styleUrls: ['./automation-of-mailers.component.css']
})
export class AutomationOfMailersComponent implements OnInit {
  event_list= [];
  event_list_s = [];
  article_url: string;
  allarticles: any;
  event: any = 'false';
  category: any = 'false';
  p: any[];
  x: any;
  pp: boolean;
  doc = [];
  all_doc = [];
  all_doc_selected: string = 'false';
  mailers_list=[];
  mailers_info : any;
  mailer_id : any;
  // overall_event = [];
  // overall_category = [];
  // overall_all_doc_selected = [];
  docname: any;
  doc_name: any;
  doc_image: any;
  events: any;
  output: any;
  email: any;
  from_name: any;
  sms_template: any;
  template: any;
  cat = [];
  cat_list = [];
  wccmm: boolean;
  doc_list = [];
  wccmm1: boolean;
  model: any = {};
  docs: any;
  isNonTrade: boolean = false
  checkAllNonTrades: boolean = false
  mailer:any;
  
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
  

  constructor(private adService: AdService,  private router: Router, private http: Http, private service: UserServiceService) {
  }

  ngOnInit() {
    this.template='';
    this.email='';
    this.wccmm1 = false;
    this.pp=false;
    this.wccmm = false;
    this.article_url = 'https://therightdoctors.com/api/beta/article?category=cme&blog_category=column&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
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
        this.mailers_list_info();
  }
  eventlist() {
    for (var i = 0; i < this.cat.length; i++) {
      console.log(this.cat[i]);
      for (var j = 0; j < this.allarticles.data[this.cat[i]].length; j++) {
        let elem = [this.allarticles.data[this.cat[i]][j].event];
        let elems = elem[0];
        if (this.event_list_s.includes(elems) == false && elems != null && elems != "") {
          this.event_list.push(elem);
          this.event_list_s.push(elems);
        }
      }
    }
    this.event_list.forEach(item => item.selected = false);
    console.log(this.event_list);
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
  get_doctors(category, event) {
    this.wccmm1 = false;
    this.wccmm = false;
    this.pp=false;
    this.all_doc=[];
    this.doc=[];
    this.pp = true;
    this.doc = [];
      for(var j=0;j<this.allarticles.data[category].length;j++) {
        let ev_name = this.allarticles.data[category][j].event;
       // console.log(ev_name);
        if(ev_name == event) {
          this.doc.push(this.allarticles.data[category][j].guest1);
          this.all_doc.push(this.allarticles.data[category][j]);
        }
      }
    this.all_doc.forEach(item => item.selected = false);
    console.log(this.all_doc);
      console.log(this.doc);
    
    }
    SelectAll(event) {
      const checked = event.target.checked;
      this.all_doc.forEach(item => item.selected = checked);
    }
    
    SelectAllEvents(event) {
      const checked = event.target.checked;
      this.event_list.forEach(item => item.selected = checked);
    }
  
    changeTradesByCategory(event) {
      if (event.target.name == 'trades') {
        this.isNonTrade = true
      }
  
      if (this.isNonTrade && this.checkAllNonTrades) {
        event.target.checked = true
      }
    }
    mailers_list_info(){
      this.service.get_mailer_info().subscribe(  
        data1 => {
          this.mailers_info = data1['data'];
          console.log("Data : Mailers Info"+JSON.stringify(this.mailers_info));
          for(var i=0;i<=this.mailers_info.length;i++){
            this.mailers_list.push(this.mailers_info[i]['mailer_name'])
          }
          alert(this.mailers_list);
        });


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

  // addCode() {
  //   for(const i of this.all_doc){
  //     if(i.selected==true){
  //       this.all_doc_selected.push(i);
  //     }
  //   }
  //   this.overall_event.push(this.event);
  //   this.overall_category.push(this.category);
  //   this.overall_all_doc_selected.push(this.all_doc_selected);
  //   this.all_doc_selected = [];
  //   console.log(this.overall_all_doc_selected, "grint");
  //   console.log(this.overall_event, "grint");
  //   console.log(this.overall_category, "grint");
  // (<HTMLInputElement>document.getElementById("add_to_me")).reset();
  // this.pp = false;
  // this.all_doc=[];
  // }

  addCode() {
    for(const i of this.all_doc){
      if(i.selected==true){
        this.all_doc_selected += ','+i.slug;
      }
    }
    console.log(this.all_doc_selected);
    this.pp = false;
    this.all_doc=[];
    // this.service.update_mailer_list(this.event, this.category, this.all_doc_selected).subscribe(
    //   data => {
    //     console.log("ask");
    //   }
    // )
    var x = (document.getElementById("add_to_me") as HTMLFormElement).reset();
    // this.service.gethier().subscribe(
    //   data => {
    //     console.log(data,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    //   }
    // );
  for(var j=0;j<this.mailers_list.length;j++){
     if(this.mailers_info[j]['mailer_name']==this.mailer){
      this.mailer_id=this.mailers_info[j]['id'];
}
  }
    alert(this.mailer_id);
    alert(this.mailer);
  }

  addCode_new() {
    for(const i of this.all_doc){
      if(i.selected==true){
        this.all_doc_selected += ','+i.slug;
        this.router.navigate(['/automation/'+this.all_doc_selected]);
      }
    }
  }

}
