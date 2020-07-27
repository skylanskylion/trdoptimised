//import { Component, OnInit } from '@angular/core';
import {CatagoryServiceService} from "../catagory-service.service";
//import {AngularFireDatabase} from "angularfire2/database";
import {Live_Details} from "../live_details";
import {isPlatformBrowser} from '@angular/common';
import {ArticleService} from '../article.service';
import {VgAPI} from 'videogular2/core';
import {Pipe , PipeTransform} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import {NgForm, FormGroupDirective, FormControl, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";
import {UserServiceService} from "../user-service.service";
import {FirebaseServiceService} from "../firebase-service.service";
import * as firebase from 'firebase/app'; 
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
import { IMedia } from "../live/live.component";
import { DOCUMENT } from '@angular/platform-browser';
import {AdItem} from "../dynamic/ad-item";
import {AdService} from "../dynamic/ad.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {HeroProfileComponent} from "../dynamic/hero-profile.component";
import {ScrollEvent} from "ngx-scroll-event";
import * as moment from 'moment';
import * as _ from 'lodash';
import {last}  from 'lodash';
import {dropRight} from 'lodash';
import { Observable } from "rxjs";
@Component({
  selector: 'app-live-updates',
  templateUrl: './live-updates.component.html',
  styleUrls: ['./live-updates.component.css']
})
export class LiveUpdatesComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef;
  catagory: any;
    live_details: AngularFireList<Live_Details[]>;
    public now: Date = new Date();
    ld: any;
    slug :any;
    loadspinnerdata: boolean = true;
    loadspinnerdata1: boolean = true; 
    loadspinnerdata2: boolean = true; 
    allEntry: Array<any[]> = []; 
    firstEntry = []; 
    lastEntry ;
    prevkeys : any[] = []
    conv : any ;
    title: 'Cronavirus Live Updates: Insights from the worlds best doctors' ;
    cateogry : any = ['All'];
    livetitle : any ; 
    finaldata1 : object[] = [];              
    finaldata2 : object[] = [];
    finaldata4 = new Array();
    finaldata : object[] ; 
    Key_array : string[] = []; 
    url:any ;
    newurl:any;
    live_category :any ; 
    ask : any ;
    private dbPath = '/live-updates';
    video_list: any = [];
    inc: number = 0;
    currentItem: IMedia = this.video_list[this.inc];
    i: any;
    sources: Array<Object>;
    //private dbPath = '/live_updates';
    customersRef: AngularFireList<Live_Details> = null;
  newdate: string;
  finalurl: string;
  final_new_url: string;
  finaldata1_temp: [] = [];
    //ld: any;
    constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document, private service: CatagoryServiceService, private fbs: FirebaseServiceService, private db: AngularFireDatabase ,private route: ActivatedRoute, private titleService: Title, private meta: Meta,private DS:DomSanitizer, private location:Location, private adService: AdService, private users: UserServiceService) {
      this.customersRef = db.list(this.dbPath); 
    }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
topstories(){
  // for(var i = 0 ; i < this.finaldata.length; i++ ){ 
  //   this.finaldata1.push(this.finaldata[i]); 
  // }
  var need_arr = []
 var keyarray = []
  firebase.database().ref('/live-updates').orderByKey().limitToLast(5).once("value").then(function(snapshot){
       
    snapshot.forEach(function( child){
      var agent_id = child.key ; 
      var agent = child.val(); 
      need_arr.unshift(agent)
      keyarray.unshift(agent_id)
      console.log("ID --->" , agent_id  ); 
      console.log("Value-->" , need_arr ) ; 
      // this.Key_array.push(agent_id);
    })
  })
  this.finaldata1 = need_arr ; 
      console.log('TOP Stories' , this.finaldata1); 
  // for(var i =0 ; i < this.finaldata1_temp.length && i < 5; i++){
    
  //   this.finaldata1.push(); 
  // }
}
firststory(){
  this.fbs.onGetUsersDocuments().subscribe(data => {
    this.conv = data;
    var j = data.length-1 ; 
    this.conv = data;
          for(var j=data.length-1; j>=0  ; j--){
            if(data[j]['f_category'].toLowerCase() == this.live_category && data[j]['is_main_story'] == 'Yes'){
             this.finaldata2.push(data[j]);
            break ; 
            }
          }
    
     
      this.titleService.setTitle(this.finaldata2[0]['f_title']);
    //  this.meta.addTag({name: 'author', content: '"Janata curfew" to be followed on March 22 between 7 am and 9 pm: PM Modi, Seven Indonesians test positive for COVID-19 in Telangana,  Governments grapple with virus border closures, lockdowns, Effect of COVID-19: 80 trains cancelled because of low occupancy, West Bengal registered first Coronavirus case'});
     // this.meta.addTag({name: 'robots', content: 'index, follow'});
    console.log('datafinalhgefdheg', this.finaldata2[0]['f_title']);
    console.log('datafinalfjsdgergtyt', this.finaldata2[0]);

    this.url = this.finaldata2[0]['f_title'].replace(/\s+/g, '-').toLowerCase();
    this.url = this.url.replace(',' , '') ; 
    this.url = this.url.replace(':' , ''); 
    this.newdate = new Date(this.finaldata2[0]['f_date']).toISOString().slice(0,10);
    this.finalurl = this.live_category+'/live-updates/'+this.newdate+'/'+this.url ;
    this.final_new_url = "https://therightdoctors.com/"+this.finalurl;
    this.location.replaceState(this.finalurl);






    var regex = /(<([^>]+)>)/ig  ; 
    let des = this.finaldata2[0]['f_description'].replace(regex , "");

console.log('I CANT SEE DATA HERE in single componenet NUT i SEO CONTEXT: ' ,this.finaldata2[0]['f_title']);
let s = this._renderer2.createElement('script');
        s.type = `application/ld+json`;
        s.text = `
          {
          "@context": "http://schema.org",
          "@type": "VideoObject", 
          "description": "`+this.finaldata2[0]['f_title']+`",
          "thumbnailUrl": "`+this.finaldata2[0]['f_image_url']+`",
          "uploadDate": "2018-08-10T08:00:00+08:00",
          "duration": "PT1M33S",
          "publisher": {
            "@type": "Organization",
            "name": "TheRightDoctors",
            "logo": {
              "@type": "ImageObject",
              "url": "https://therightdoctors.com/assets/new-home-page/single/images/logo.jpg",
              "width": 600,
              "height": 60
            }
          },
         
          "embedUrl": "https://therightdoctors.com/`+this.finalurl+`",
          "interactionCount": "2347"
          }`;
        this._renderer2.appendChild(this._document.body, s);
        // if(this.finaldata2[0]['f_image_url'] === 'false'){
        //   console.log("If Condition get single article Image_url1= :",this.finaldata[0]['f_image_url']);
        //   this.finaldata2[0]['f_image_url']=this.finaldata2[0]['f_image_url'];
        // }
        // else{
        //   console.log("Else Condition get single article Image_url= :",this.finaldata2[0]['f_image_url']);
        //   this.finaldata2[0]['f_image_url']=this.finaldata2[0]['f_image_url'];
        // }
        /* this.sing_art = this.single_article['transcript'].replaceAll('</b>','').split('<b>');*/
       
        // this.sources = new Array<Object>();
        /*this.isvalid = category ;*/
        // this.sources.push({
        //   src: this.DS.bypassSecurityTrustResourceUrl(this.single_article['video_url']),
        //   type: "video/mp4"
        // });
   

    this.titleService.setTitle(this.finaldata2[0]['f_title'] +  ' | ' + this.finaldata2[0]['f_subheadline'] + ' | TheRightDoctors');
    this.meta.updateTag({name: 'description', content: this.finaldata2[0]['f_subheadline']+ ' ' + this.finaldata2[0]['f_title']  + 'TheRightDoctors'});
    this.meta.updateTag({name: 'keywords', content: this.finaldata2[0]['f_subheadline'] + '' +this.finaldata2[0]['f_description']});
    /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
    this.meta.updateTag({
      property: 'vr:canonical',
      content: 'https://therightdoctors.com/' + this.finalurl 
    });
    this.meta.updateTag({property: 'og:title', content: this.finaldata2[0]['f_title']});
    this.meta.updateTag({property: 'og:description', content: this.finaldata2[0]['f_description']});
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://therightdoctors.com/'+ this.finalurl 
    });
    this.meta.updateTag({property: 'og:image', content: this.finaldata2[0]['f_image_url']});
    this.meta.updateTag({property: 'og:image:secure_url', content: this.finaldata2[0]['f_image_url']});

    this.meta.updateTag({name: 'twitter:title', content: this.finaldata2[0]['f_subheadline'] + ':' +this.finaldata2[0]['f_title']});
    this.meta.updateTag({name: 'twitter:description', content: this.finaldata2[0]['f_description']});
    /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
    this.meta.updateTag({name: 'twitter:image', content: this.finaldata2[0]['f_image_url']});
    this.meta.updateTag({
      name: 'twitter:url',
      content: 'https://therightdoctors.com/'+ this.finalurl});
    this.meta.updateTag({name: 'twitter:text:description', content: this.finaldata2[0]['f_title']});

    this.loadspinnerdata1 = false ; 

  });

//     this.meta.updateTag({name: 'description', content:des });
//     this.meta.updateTag({name: 'keywords', content: "TheRightDoctors "+ "Live Updates" + " " + this.finaldata2[0]['f_title'] + ' ' + des});
//     /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
//     this.meta.updateTag({
//       property: 'vr:canonical',
//       content: 'https://therightdoctors.com/live-updates/'  
//     });
//     this.meta.updateTag({property: 'og:title', content: 'TheRightDoctors | Live Updates |' + this.finaldata2[0]['f_title']});
//     this.meta.updateTag({property: 'og:description', content: des});
//     this.meta.updateTag({
//       property: 'og:url',
//       content: 'https://therightdoctors.com/live-updates/'
//     });
//     this.meta.updateTag({property: 'og:image', content: this.finaldata2[0]['f_image_url']});
//     this.meta.updateTag({property: 'og:image:secure_url', content: this.finaldata2[0]['f_image_url']});

//     this.meta.updateTag({name: 'twitter:title', content:'TheRightDoctors | Live Updates |' +  this.finaldata2[0]['f_title']});
//     this.meta.updateTag({name: 'twitter:description', content:des});
//     /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
//     this.meta.updateTag({name: 'twitter:image', content: this.finaldata2[0]['f_image_url']});
//     this.meta.updateTag({
//       name: 'twitter:url',
//       content: 'https://therightdoctors.com/live-updates/'});
//     this.meta.updateTag({name: 'twitter:text:description', content: des})
// });

}
changeUrl(d){
  console.log('Change URL IS Called'); 
  console.log("This has come :" + d);
  this.url = d['f_title'].replace(/\s+/g, '-').toLowerCase();
  this.url = this.url.replace(',' , '') ; 
  this.url = this.url.replace(':' , ''); 
  this.newdate = new Date(d['f_date']).toISOString().slice(0,10);
  this.finalurl = this.live_category+'/live-updates/'+this.newdate+'/'+this.url ;
  this.final_new_url = "https://therightdoctors.com/"+this.finalurl;
  this.location.replaceState(this.finalurl);
  console.log('NewURL:'+this.url);
          var regex = /(<([^>]+)>)/ig  ; 
          let des = d['f_description'].replace(regex , "");

        this.meta.updateTag({name: 'description', content: des});
        this.meta.updateTag({name: 'keywords', content: "TheRightDoctors "+ "Coronavirus Live Updates" + " " + d['f_title'] + ' ' +des});
        /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
        this.meta.updateTag({
          property: 'vr:canonical',
          content: 'https://therightdoctors.com/'+this.finalurl   
        });
        this.meta.updateTag({property: 'og:title', content:'TheRightDoctors | Coronavirus Live Updates |' +  d['f_title']});
        this.meta.updateTag({property: 'og:description', content: des});
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://therightdoctors.com/'+this.finalurl 
        });
        this.meta.updateTag({property: 'og:image', content: d['f_image_url']});
        this.meta.updateTag({property: 'og:image:secure_url', content: d['f_image_url']});

        this.meta.updateTag({name: 'twitter:title', content:'TheRightDoctors | Coronavirus Live Updates |'+ d['f_title']});
        this.meta.updateTag({name: 'twitter:description', content: des});
        /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
        this.meta.updateTag({name: 'twitter:image', content: d['f_image_url']});
        this.meta.updateTag({
          name: 'twitter:url',
          content: 'https://therightdoctors.com/'+this.finalurl });
        this.meta.updateTag({name: 'twitter:text:description', content:des })

}
  ngOnInit() {
    const splashScreen: HTMLElement = document.getElementById('splashScreenClass');
    this.live_category = this.route.snapshot.paramMap.get('category');
    this.titleService.setTitle(this.live_category + ' Live Updates');
    this.meta.updateTag({name: 'description', content: 'Coronavirus Live Updates from TheRightDoctors'});
    this.meta.updateTag({name: 'keywords', content: "Coronavirus, TheRightDoctors, Covid-19 , Live Updates , Coronavirus Live updates"});
    
    //this.ngAfterViewInit();
    this.getStories(); 
    this.firststory();
    this.topstories();
    
    if (splashScreen) {
      splashScreen.remove();
    }
      
    this.get_catagory('stemi-india-lucknow-2018');
    this.route.paramMap.subscribe(params => {
      this.slug = params.get("slug");
      console.log('shucbsujhcn', this.slug);
    })

    this.live_home();
    this.get_next_video();
  }
  nextPage(){
    var need_arr = [];
    var keyarray = [];
    var start = this.Key_array[this.Key_array.length-1]; 
    console.log('STart ', start); 
    firebase.database().ref('/live-updates').endAt(start).orderByKey().limitToLast(5).once("value").then(function(snapshot){
      console.log('Im here Snapshot' , snapshot)
      snapshot.forEach(function(child){
        console.log('Im here')
        var agent_id = child.key ; 
        var agent = child.val(); 
        need_arr.unshift(agent)
        keyarray.unshift(agent_id)
        console.log("ID --->" , agent_id  ); 
        console.log("Value-->" , need_arr ) ; 

      })
    })
    this.finaldata = need_arr ; 
    this.Key_array = keyarray ;

  }
  prevPage(){
    var need_arr = [];
    var keyarray = [];
    var start = this.Key_array[this.Key_array.length-1]; 
    console.log('STart ', start); 
    firebase.database().ref('/live-updates').startAt(start).orderByKey().limitToLast(5).once("value").then(function(snapshot){
      console.log('Im here Snapshot' , snapshot)
      snapshot.forEach(function(child){
        console.log('Im here')
        var agent_id = child.key ; 
        var agent = child.val(); 
        need_arr.unshift(agent)
        keyarray.unshift(agent_id)
        console.log("ID --->" , agent_id  ); 
        console.log("Value-->" , need_arr ) ; 

      })
    })
    this.finaldata = need_arr ; 
    this.Key_array = keyarray ;
  }
  getMainEntry(){
    return 
  }
  
  getStories(){ 
    var need_arr = [];
    var keyarray = [];
    firebase.database().ref('/live-updates').orderByKey().limitToLast(5).once("value").then(function(snapshot){
       
      snapshot.forEach(function( child){
        var agent_id = child.key ; 
        var agent = child.val(); 
        need_arr.unshift(agent)
        keyarray.unshift(agent_id)
        console.log("ID --->" , agent_id  ); 
        console.log("Value-->" , need_arr ) ; 
        // this.Key_array.push(agent_id);
      })
    })
    this.finaldata = need_arr ; 
    console.log(this.finaldata); 
    this.Key_array = keyarray ;
    console.log(this.Key_array)
  }
 
  get_catagory(event) {
    this.service.event_home(event).subscribe(
        data => {
          this.catagory = data['data'];
        })
  }
  get_next_video() {
    console.log('get next video');
    this.service.get_next_live().subscribe(
      data => {
        this.video_list = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet next video : ', this.video_list);
      }
    );
  }
  nextVideo() {
    console.log('in next video');
    this.inc++;
    if (this.video_list[this.inc]['video_url']) {
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.video_list[this.inc]['video_url'],
        type: 'video/mp4'

      });
    }
    else {
      this.inc++;
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.video_list[this.inc]['video_url'],
        type: 'video/mp4'
      });
    }

  }
  live_home(){
    this.sources = new Array<Object>();
            /*this.isvalid = catagory ;*/
            this.sources.push({
              src: 'https://storage.googleapis.com/web-assets/Coronavirus-2020/Sudhir-Bandari-with-Anil-Pareek/SudhirBandariAudioCallwithAnilPareekVideoEdit-360p.mp4',
              type: 'video/mp4'
            });
    console.log("Sources" , this.sources);
  }

  
}
