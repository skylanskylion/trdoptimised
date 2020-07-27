import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../shared.service';
//import {CatagoryServiceService} from '../catagory-service.service';
import {UserServiceService} from "../user-service.service";
import {IMedia} from "../live/live.component";
import { AngularFireList } from 'angularfire2/database';
import {CatagoryServiceService} from "../catagory-service.service";
import {AngularFireDatabase} from "angularfire2/database";
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
import {Live_Details} from "../live_details";
import {AngularFireModule} from "angularfire2";
import {FirebaseServiceService} from "../firebase-service.service";
import { environment } from '../../environments/environment';
import * as firebase from 'firebase';
import {Http, Response} from "@angular/http";
import {MessageService} from '../message.service' 
// import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
//import { Component, OnInit } from "@angular/core";

@Component({
 selector: 'app-top-home',
 templateUrl: './top-home.component.html',
 styleUrls: ['./top-home.component.css']
})
export class TopHomeComponent implements OnInit {
 @Input() $toparticles: any;
 @Input() $topimpactarticles :any ; 
 @Input() $popularstory : any ; 
 sources: Array<Object>;
 articles: any;
 inc: number = 0;
 blogdata_c: any;

 audio_list1: object[] = [];
 video_list: any = [];
 conv_image:any;
 imagesSrcs = [];
 audio_list5: object[]=[];

 routerLinks = [];
 currentItem: IMedia = this.video_list[this.inc];
 catagory: any;
 // live_details: AngularFireList<Live_Details[]>;
 public now: Date = new Date();
 ld: any;
 conv : any ;
 finaldata : object[] = [];
 finaldata_other: object[] = [];
 finaldata_oye: object[] = []; 
 data_we_need: object[] = [];
 data_final: object[] = []; 
 lastdata : object[] = []; 
 d : any ; 
 h1 : string ;
 h2 : string ; 
 h3 : string ; 
 finaldata_all : object[] = [] ;
 private dbPath = '/live-updates';
 //private dbPath = '/live_updates';
 customersRef: AngularFireList<Live_Details> = null;
 isplay : boolean = true ; 
 isplay2 : boolean = true ; 
 url : any;
 blogdata : any;
 blogdata_corna : any ; 
 corona_v :any ;
 finaldata1= [];
 cat = [];
 event: string;
 finaldata2 = [];
 finaldata3 =[]; 
 audio_list: any;
 finaldata_two: object[] = [];
 audio_list_two: object[]=[];
 exclusive: any;
 exclusive_story: any ;
 main_block2: any;
 block2_category: any;
 block2_data: any;
 url2: string;
 block2_link: string;
 main_block3: any;
 block3_category: any;
 block3_data: any;
 intr: object[] = [];
 url1: string;

 block3_link: string;
 main_block4: any;
 block4_category: any;
 block4_data: any;
 block4_link: string;
 top_stories: any;
 block1_category: any;
 main_block1: any;
 block1_data: any;
 block1_link: string;
    exclusive_paras = [];
 //ld: any;
// gallery
// currentIndex = 0;
// speed = 5000;
// infinite = true;
// direction = 'right';
// directionToggle = true;
// autoplay = true;
// avatars = '1234567891234'.split('').map((x, i) => {
// const num = i;
// // const num = Math.floor(Math.random() * 1000);
// return {
// url: `https://storage.googleapis.com/web-assets/videos/VAICON%202019%20Hyderabad/Thumbnails/Welcome-to-VAICON/Welcome-to-VAICON-large.jpg?${num}`,
// title: `${num}`
// };
// });
 constructor(public _sharedservice: SharedService, public router: Router, private feedService: UserServiceService, private service: CatagoryServiceService,
 // private db: AngularFireDatabase, 
 private fbs: FirebaseServiceService, private db: AngularFireDatabase ,private http: Http , private meta : Meta , private titleService : Title 
, private messaging : MessageService ) {
 this.customersRef = db.list(this.dbPath); 
 }


 ngOnInit() {

  this.ppt()

  this.BlogData()
this.podcast()
this.video_feature()
    this.get_block3()
 const splashScreen: HTMLElement = document.getElementById('splashScreenClass');
 if (splashScreen) {
 splashScreen.remove();
 }
//  this.messaging.receiveMessage() ; 
 this.titleService.setTitle('COVID-19 Live Updates | TheRightDoctors');
 this.meta.updateTag({name: 'description', content: 'EXCLUSIVE: COVID 19 Treatment Success Story From SMS Medical College, Jaipur, India' + 'Pulmonology experts perspective on Coronavirus, Dr.Ravindra Mehta'+ 'People with Diabetes and Hypertension are more susceptible to COVID-19, Dr. V Mohan' + 'Vitamin C, Hydration, and a healthy diet are key in the fight against coronavirus, Dr.Pradeep Seth' + 'COVID-19: Panic liberates stress hormones leading to HIGH BP, Dr. HK Chopra' + 'COVID 19: Understanding the bugs and breaking some of the myths with Dr. Shashank Joshi' + 'COVID-19 Pandemic: A detailed analysis by leading cardiologists Dr. Ravi Kasliwal and Dr. Hardeep Kaur Grewal'
 + 'COVID-19 Treatment Success Story | Dr. Sudhir Bhandari In Conversation With Dr. Anil Pareek' + 'COVID-19 fatalities may be more than 3 times in Diabetic patients | Dr CM Batra' +'COVID 19: Impact on Pregnancy & Nursing Mothers' + 'The only way to prevent COVID-19 is to flatten the curve of the spread'});
 
 this.meta.updateTag({name: 'keywords', content: 'EXCLUSIVE: COVID 19 Treatment Success Story From SMS Medical College, Jaipur, India' 
 + 'COVID-19 Treatment' + 'Coronavirus' + 'Coronavirus Pregnancy'+ 'Coronavirus heart diseases'+'Coronavirus live updates' + '21 days lockdown'
 });
 console.log("checking top" + this.$toparticles['data']);
 console.log("checking top" + this.$topimpactarticles['data']);
 this.live_home();
 this.imagesSrcs=[
 'https://storage.googleapis.com/web-assets/presentations/wccpci_2016/Day_2/O.P.YADAVA/Slide1.JPG',
 'https://storage.googleapis.com/web-assets/presentations/wccpci_2016/Day_2/O.P.YADAVA/Slide2.JPG',
 'https://storage.googleapis.com/web-assets/presentations/wccpci_2016/Day_2/O.P.YADAVA/Slide3.JPG'
 ];
 this.sources = new Array<Object>();
 this.sources.push({
 src: "https://storage.googleapis.com/web-assets/RSSDI_2019/Day-1/Day-0-and-1_360.mp4",
 type: "video/mp4"
 });
 // setTimeout(this.getLiveUpdatesData, 5000);
 //getLiveUpdatesData(){
 
 this.fbs.onGetUsersDocuments().subscribe(data => {
 console.log("In Function Data")
 
 this.conv = data;
 let islive1 = false ; 
 for(var j=0; j < data.length ; j++){
 //console.log("AAAAAAAA",data[j])
 // console.log("AAAAAAAA",data[j]['f_category']);
 this.finaldata_all.push(data[j]); 
//  console.log("AAAAAAAA",data[j]['f_category']);
 if(data[j]['f_category'] == 'Coronavirus' && data[j]['is_home_live'] == 'Yes'){
 islive1 = true ;
 this.finaldata.push(data[j]); 
 }
 else if(data[j]['f_category'] != 'Coronavirus' && data[j]['is_home_live'] == 'Yes'){
 this.finaldata_other.push(data[j]);
 this.data_we_need.push(data[j]); 
 }

 else if(data[j]['f_category'] != 'Coronavirus')
 this.finaldata_oye.push(data[j]); 
 }
 if(islive1 == false){ 
 this.d = this.finaldata_all[data.length-1]; 
 console.log("I CAN SEE EEEEEEEEE",this.d); 
 }
 else{
 this.d = this.finaldata[this.finaldata.length-1];
 }
 if(this.finaldata_other.length == 0){
 for(let i = this.finaldata_oye.length-1 ; i > this.finaldata_oye.length-3 ; i--)
 this.data_we_need.push(this.finaldata_oye[i]); 
 }
 else if(this.finaldata_other.length == 1){
 this.data_we_need.push(this.finaldata_oye[this.finaldata_oye.length-1]); 
 }
 else if(this.finaldata_other.length > 1){
 for(let i = this.finaldata_other.length-1 ; i > this.finaldata_other.length-3 ; i--)
 this.data_we_need.push(this.finaldata_other[i]);
 }

 if(this.data_we_need[0]['f_category'] == this.data_we_need[1]['f_category']){
 for(let i = this.finaldata_oye.length-1 ; i > 0 ; i--){
 if(this.data_we_need[0]['f_category'] != this.finaldata_oye[i]['f_category']){
 this.data_we_need[1] = this.finaldata_oye[i]; 
 break ; 
 }

 }

 }
 this.data_final.push( this.data_we_need[this.data_we_need.length-1])
 this.data_final.push( this.data_we_need[this.data_we_need.length-2])
 
 console.log("ATTT" , this.data_final)
 this.h1 = this.d['f_category'].toLowerCase() ; 
 this.h2 = this.data_we_need[0]['f_category'].toLowerCase();
 this.h3 = 'https://therightdoctors.com/'+this.data_we_need[1]['f_category'].toLowerCase()+'/live-updates';

 // console.log("AASSAS", this.finaldata_all[2]['f_category']); 


 console.log('datafinal', this.conv);
 console.log('datafinalfj ', this.finaldata);
 });
 this.audiofiles1();
 this.CoronaVideos();
 this.exclusiveStory(); 
 this.get_topStories();
 this.get_block1(); 
 this.get_block2();
 this.get_block3(); 
 this.get_block4()
 // setTimeout(() => {
 // this.compare()
 // }, 1000);
 
 
 // this.BlogDataCorona(); 
 // }
 
 
 }
 ppt()
  {
    this.service.the_last_word_iages().subscribe(
      data=>{
        let da = data.json();
        if(da['success']){
          this.conv_image = da['data'];
        }

  
      }
    );
  }

 BlogData() {

  // this.event='rssdi-jaipur-2019';
// this.url = 'https://therightdoctors.com/api/beta/article?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&category=cme';
this.url='https://therightdoctors.com/api/beta/article?category=cme&event=rssdi-jaipur-2019&is_live=true&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'
console.log('set articles calling');
this.http.get(this.url)
  .map((res: Response) => res.json()).subscribe(data => {
    
    this.blogdata = data['data'];
    // console.log("DARTATA " , this.blogdata)
    for(var i = 0 ; i < this.blogdata.length ; i++){
      if(this.blogdata[i]['image_url'] != '' && this.blogdata[i]['headline'] != '' && this.blogdata[i]['sub_headline'] != '' && this.blogdata[i]['transcript'] != '' && this.blogdata[i]['sub_headline'] != 'Dr. AG Unni Krishnan' && this.blogdata[i]['sub_headline'] != 'Dr. Rajeev Chawla'&& this.blogdata[i]['category']=='cme' && this.blogdata[i]['blog_category']=='the-interview')
      this.finaldata.push(this.blogdata[i]);


    } 
    for(var i = 0 ; i <this.blogdata.length; i++){
      let temp ;
      temp= this.finaldata[i]['transcript'].split('<b>');
      let tem_st = '';
      for(let j = 0 ; j < temp.length ; ++j){
        tem_st += temp[j];
      }
      this.finaldata[i]['transcript'] = tem_st;
      // console.log('hi i am final data',this.finaldata[i]['transcript']);
    
    }
    
    this.blogdata = this.finaldata ;
    // console.log('hi this is blog data',this.blogdata[0]['transcript'])
    // this.blogdata['transcript']= this.blogdata['transcript'].replace('<b>',' ');

    // console.log("FINAKL " , this.blogdata)
    // console.log('this is amusing',this.blogdata.length);
  })
  this.url1 = 'https://therightdoctors.com/api/beta/article?category=cme&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
  this.http.get(this.url1)
  .map((res: Response) => res.json()).subscribe(data1 => {
    
    this.blogdata_c= data1['data'];
    // console.log("DARTATA Corona " , this.blogdata_c)
    for(var i = 0 ; i < this.blogdata_c.length ; i++){
      if(this.blogdata_c[i]['blog_category'] == 'in-conversation' || this.blogdata_c[i]['blog_category'] == 'column')
      this.finaldata.push(this.blogdata_c[i]);

    } 


    this.blogdata = this.finaldata ; 
 
  

    console.log("FINAKL " , this.blogdata)
    console.log('this is amusing',this.blogdata.length);
    // alert('hello')
    console.log('blog data is',this.blogdata)

  })
  // alert('i am blog data')
  // if (this.today_date == this.prev_date+1){   

  //   this.shuffleArray(this.blogdata);
  //   console.log('shuffled array', this.blogdata)
  //   this.prev_date=this.prev_date+1;
  //   }
  //   if(this.prev_date==30 && this.month== 4 && this.month== 4 && this.month== 6 && this.month== 9 && this.month== 11){
      
  //      this.prev_date=1;          
  //   } 

  //   if(this.prev_date==31) {
  //     this.prev_date=1;}
  // } 
 
 
// alert('hello')
}
 video_feature(){
    console.log('get catagory calling');
    this.feedService.feature().subscribe(
      data => {
        let da = data.json();
        this.conv=da['data']
for(var i=0;i<this.conv.length;i++){

this.intr.push(this.conv[i])
  
}
        console.log('yes',this.intr)
       
        console.log('I CANT SEE DATA HERE in single componenet : ', this.intr);
      }
    );


  }

 podcast()
 {
   this.feedService.podcast_audio_files_cor().subscribe(
       data=>{
           console.log('podcast listen to journal',data);
         if(data['success']){
             this.audio_list5 = data['data'];
         }
         console.log('audio files data for cornonavirus',this.audio_list5[0]['video_url']);
       }
   );
 }

 exclusiveStory(){
 this.url = 'https://therightdoctors.com/api/beta/article?is_exclusive=true&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&limit=2'
 // this.url='https://therightdoctors.com/api/beta/article?category=cme&blog_category=column&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'
 this.http.get(this.url)
 .map((res: Response) => res.json()).subscribe(data => {
 console.log('IDK',data);
 if(data['success']){
 this.exclusive = data['data'];
 }
 // this.audio_list = data['data'];
 // for(var i = 0 ; i < this.aeo.length ; i++){
 // console.log(i); 
 // if(this.audio_list_two[i]['blog_category'] == 'column'){
 // this.finaldata_two.push(this.audio_list_two[i]);
 // console.log('HHHH',this.finaldata_two.length); 
 // }
 // } 
 // console.log('FFFinal two' , this.finaldata_two)
 this.exclusive.sort(function(a, b) {
 a = new Date(a.updated_at);
 b = new Date(b.updated_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 this.exclusive_story = this.exclusive[0]
 console.log('Exclusive ',this.exclusive_story);
 var count = 0 , i =0 ; 
 console.log('PARA',this.exclusive_story['transcript_list'].length)
//  if(this.exclusive_story['transcript_list'][2]['question'] === "")
 for(let i = 0 ; i < this.exclusive_story['transcript_list'].length ; i++){
     console.log('Count' , count)
     if(count >= 2)
     break ; 
     if(this.exclusive_story['transcript_list'][i]['question'] !== ""){
         this.exclusive_paras[count] = this.exclusive_story['transcript_list'][i]['question'];
         count++ ;
         console.log("MainPara" ,this.exclusive_paras[count]) 
     }
 }
 // this.audio_list_two = this.finaldata_two ; 
 // console.log('Top two Stories',this.audio_list_two.length);
 })
 }
 get_topStories(){
 this.url = 'https://therightdoctors.com/api/beta/article?is_top_story=true&event=corona-virus&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&limit=6'
 this.http.get(this.url)
 .map((res:Response) => res.json()).subscribe(data =>{
 if(data['success']){
 this.top_stories = data['data']; 
 
 this.top_stories.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 console.log('LOL' , this.top_stories[0]);
 for(let i = 0 ; i < 10 ; i++){
 if(this.top_stories[i]['category'] == 'cme'){
 this.top_stories[i]['href_link'] = 'https://insights.therightdoctors.com/cme/' + this.top_stories[i]['blog_category'] + '/' + this.top_stories[i]['slug']; 
 }
 else if(this.top_stories[i]['category'] == 'podcast'){
 this.top_stories[i]['href_link'] = 'https://podcast.therightdoctors.com/'+ this.top_stories[i]['slug'];
 }
 else{
 this.top_stories[i]['href_link'] = 'https://therightdoctors.com/' + this.top_stories[i]['event'] + '/' +this.top_stories[i]['category'] + '/' + this.top_stories[i]['slug']; 
 }
 }

 }
 
 })
}
 get_block1(){
 /// Need to code.
 this.url = 'https://therightdoctors.com/api/beta/article?&homepage_block=b1&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'
 this.http.get(this.url)
 .map((res:Response) => res.json()).subscribe(data =>{
 if(data['success']){	
 
 this.main_block1 = data['data']; 
 this.main_block1.sort(function(a, b) {
 a = new Date(a.updated_at);
 b = new Date(b.updated_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 this.main_block1 = this.main_block1[0];

 }
 this.block1_category = this.main_block1['category']; 
 if(this.block1_category == 'cme'){
 if(this.main_block1['blog_category'] == 'the-interview')
 this.block1_category = 'The Interview'; 
 else if (this.main_block1['blog_category'] == 'in-conversation')
 this.block1_category = 'In Conversation';
 else if (this.main_block1['blog_category'] == 'column')
 this.block1_category = 'Column';
 else if (this.main_block1['blog_category'] == 'opinion-editorial')
 this.block1_category = 'Opinion and Editorial';
 else if (this.main_block1['blog_category'] == 'q-and-a')
 this.block1_category = 'Q & A';
 else if (this.main_block1['blog_category'] == 'survey')
 this.block1_category = 'Survey';
 else if (this.main_block1['blog_category'] == 'guidelines')
 this.block1_category = 'Guidelines';
 else if (this.main_block1['blog_category'] == 'feature')
 this.block1_category = 'Feature';
 else if (this.main_block1['blog_category'] == 'reviews')
 this.block1_category = 'Reviews';
 else if (this.main_block1['blog_category'] == 'journal-scan')
 this.block1_category = 'Journal Scan';

 this.url2 = 'https://therightdoctors.com/api/beta/article?category=cme&blog_category='+ this.main_block1['blog_category'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block1_data = data2['data']; 
 this.block1_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block1 DATA ::: ', this.block1_data); 
 for(let i = 0 ; i < this.block1_data.length ; ++i){
 // if(this.block1_data.lenght-1 >= i){
 this.block1_data[i]['href_link']= 'https://insights.therightdoctors.com/cme/'+ this.main_block1['blog_category'] + '/' + this.block1_data[i]['slug'] ; }
 // }
 }
 })
 this.block1_link = 'https://insights.therightdoctors.com/cme/'+ this.main_block1['blog_category'] + '/' ; 
 }
 else if(this.block1_category == 'podcast'){
 this.block1_category = 'Podcast'
 this.url2 = 'https://therightdoctors.com/api/beta/article?category=podcast&event='+ this.main_block1['event'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block1_data = data2['data']; 
 this.block1_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block1 DATA ::: ', this.block1_data);
 for(let i = 0 ; i < this.block1_data.length ; ++i){
 // if(this.block1_data.lenght-1 >= i){
 this.block1_data[i]['href_link']= 'https://podcast.therightdoctors.com/' + this.block1_data[i]['slug'] ; }
 // } 
 }
 })
 this.block1_link = 'https://podcast.therightdoctors.com/'; // Currently for covid-19, need to change 
 }
 else{
 this.block1_category = 'The Interview'
 this.url2 = 'https://therightdoctors.com/api/beta/article?category=the-interview&event='+ this.main_block1['event'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
     console.log('why data 6', data2)
 this.block1_data = data2['data']; 
 this.block1_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block1 DATA ::: ', this.block1_data); 
 for(let i = 0 ; i < this.block1_data.length ; ++i){
 // if(this.block1_data.lenght-1 >= i){
 this.block1_data[i]['href_link']= 'https://therightdoctors.com/'+this.main_block1['event'] + '/the-interview/' + this.block1_data[i]['slug'] ; }
 // } 
 }
 })
 this.block1_link = 'https://therightdoctors.com/'+this.main_block1['event'] + '/the-interview/'; 
 }
 console.log('blog data 1', this.block1_data)

 
 })
//  console.log('blog data 2', this.block1_data)

 }
 get_block2(){
 this.url = 'https://therightdoctors.com/api/beta/article?&homepage_block=b2&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'
 this.http.get(this.url)
 .map((res:Response) => res.json()).subscribe(data =>{
 if(data['success']){
 this.main_block2 = data['data']; 
 this.main_block2.sort(function(a, b) {
 a = new Date(a.updated_at);
 b = new Date(b.updated_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 this.main_block2 = this.main_block2[0];
 
 }
 this.block2_category = this.main_block2['category']; 
 if(this.block2_category == 'cme'){
 if(this.main_block2['blog_category'] == 'the-interview')
 this.block2_category = 'The Interview'; 
 else if (this.main_block2['blog_category'] == 'in-conversation')
 this.block2_category = 'In Conversation';
 else if (this.main_block2['blog_category'] == 'column')
 this.block2_category = 'Column';
 else if (this.main_block2['blog_category'] == 'opinion-editorial')
 this.block2_category = 'Opinion and Editorial';
 else if (this.main_block2['blog_category'] == 'q-and-a')
 this.block2_category = 'Q & A';
 else if (this.main_block2['blog_category'] == 'survey')
 this.block2_category = 'Survey';
 else if (this.main_block1['blog_category'] == 'guidelines')
 this.block2_category = 'Guidelines';
 else if (this.main_block1['blog_category'] == 'feature')
 this.block2_category = 'Feature';
 else if (this.main_block1['blog_category'] == 'reviews')
 this.block2_category = 'Reviews';
 else if (this.main_block1['blog_category'] == 'journal-scan')
 this.block2_category = 'Journal Scan';

 this.url2 = 'https://therightdoctors.com/api/beta/article?category=cme&blog_category='+ this.main_block2['blog_category'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block2_data = data2['data']; 
 this.block2_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block2 DATA ::: ', this.block2_data); 
 }
 })
 this.block2_link = 'https://insights.therightdoctors.com/cme/'+ this.main_block2['blog_category'] + '/' ; 
 }
 else if(this.block2_category == 'podcast'){
 this.block2_category = 'Podcast'
 this.url2 = 'https://therightdoctors.com/api/beta/article?category=podcast&event='+ this.main_block2['event'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block2_data = data2['data']; 
 this.block2_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block2 DATA ::: ', this.block2_data); 
 }
 })
 this.block2_link = 'https://podcast.therightdoctors.com/'; // Currently for covid-19, need to change 
 }
 else{
 this.block2_category = 'The Interview'
 this.url2 = 'https://therightdoctors.com/api/beta/article?category=the-interview&event='+ this.main_block2['event'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block2_data = data2['data']; 
 this.block2_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block2 DATA ::: ', this.block2_data); 
 }
 })
 this.block2_link = 'https://therightdoctors.com/'+this.main_block2['event'] + '/the-interview/'; 
 }
 
 })
 }
 get_block3(){
 this.url = 'https://therightdoctors.com/api/beta/article?&homepage_block=b3&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'
 this.http.get(this.url)
 .map((res:Response) => res.json()).subscribe(data =>{
 if(data['success']){
 this.main_block3 = data['data']; 
 this.main_block3.sort(function(a, b) {
 a = new Date(a.updated_at);
 b = new Date(b.updated_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 this.main_block3 = this.main_block3[0];
 }
 this.block3_category = this.main_block3['category']; 
 if(this.block3_category == 'cme'){
 if(this.main_block3['blog_category'] == 'the-interview')
 this.block3_category = 'The Interview';
 else if (this.main_block3['blog_category'] == 'in-conversation')
 this.block3_category = 'In Conversation';
 else if (this.main_block3['blog_category'] == 'column')
 this.block3_category = 'Column';
 else if (this.main_block3['blog_category'] == 'opinion-editorial')
 this.block3_category = 'Opinion and Editorial';
 else if (this.main_block3['blog_category'] == 'q-and-a')
 this.block3_category = 'Q & A';
 else if (this.main_block3['blog_category'] == 'survey')
 this.block3_category = 'Survey';
 else if (this.main_block1['blog_category'] == 'guidelines')
 this.block3_category = 'Guidelines';
 else if (this.main_block1['blog_category'] == 'feature')
 this.block3_category = 'Feature';
 else if (this.main_block1['blog_category'] == 'reviews')
 this.block3_category = 'Reviews';
 else if (this.main_block1['blog_category'] == 'journal-scan')
 this.block3_category = 'Journal Scan';

 this.url2 = 'https://therightdoctors.com/api/beta/article?category=cme&blog_category='+ this.main_block3['blog_category'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block3_data = data2['data']; 
 this.block3_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block3 DATA ::: ', this.block3_data); 
 }
 })
 this.block3_link = 'https://insights.therightdoctors.com/cme/'+ this.main_block3['blog_category'] + '/' ; 
 }
 else if(this.block3_category == 'podcast'){
 this.block3_category = 'Podcast'
 this.url2 = 'https://therightdoctors.com/api/beta/article?category=podcast&event='+ this.main_block3['event'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block3_data = data2['data']; 
 this.block3_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block3 DATA ::: ', this.block3_data); 
 }
 })
 this.block3_link = 'https://podcast.therightdoctors.com/'; // Currently for covid-19, need to change 
 }
 else{
 this.block3_category = 'The Interview'
 this.url2 = 'https://therightdoctors.com/api/beta/article?category=the-interview&event='+ this.main_block3['event'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block3_data = data2['data']; 
 this.block3_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block3 DATA ::: ', this.block3_data); 
 }
 })
 this.block3_link = 'https://therightdoctors.com/'+this.main_block3['event'] + '/the-interview/'; 
 }
 
 })
 }
 get_block4(){
 this.url = 'https://therightdoctors.com/api/beta/article?&homepage_block=b4&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'
 this.http.get(this.url)
 .map((res:Response) => res.json()).subscribe(data =>{
 if(data['success']){
 this.main_block4 = data['data']; 
 this.main_block4.sort(function(a, b) {
 a = new Date(a.updated_at);
 b = new Date(b.updated_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 this.main_block4 = this.main_block4[0];
 }
 this.block4_category = this.main_block4['category']; 
 if(this.block4_category == 'cme'){
 if(this.main_block4['blog_category'] == 'the-interview')
 this.block4_category = 'The Interview';
 else if (this.main_block4['blog_category'] == 'in-conversation')
 this.block4_category = 'In Conversation';
 else if (this.main_block4['blog_category'] == 'column')
 this.block4_category = 'Column';
 else if (this.main_block4['blog_category'] == 'opinion-editorial')
 this.block4_category = 'Opinion and Editorial';
 else if (this.main_block4['blog_category'] == 'q-and-a')
 this.block4_category = 'Q & A';
 else if (this.main_block4['blog_category'] == 'survey')
 this.block4_category = 'Survey';
 else if (this.main_block1['blog_category'] == 'guidelines')
 this.block4_category = 'Guidelines';
 else if (this.main_block1['blog_category'] == 'feature')
 this.block4_category = 'Feature';
 else if (this.main_block1['blog_category'] == 'reviews')
 this.block4_category = 'Reviews';
 else if (this.main_block1['blog_category'] == 'journal-scan')
 this.block4_category = 'Journal Scan';


 this.url2 = 'https://therightdoctors.com/api/beta/article?category=cme&blog_category='+ this.main_block4['blog_category'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block4_data = data2['data']; 
 this.block4_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block4 DATA ::: ', this.block4_data); 
 }
 })
 this.block4_link = 'https://insights.therightdoctors.com/cme/'+ this.main_block4['blog_category'] + '/' ; 
 }
 else if(this.block4_category == 'podcast'){
 this.block4_category = 'Podcast'
 this.url2 = 'https://therightdoctors.com/api/beta/article?category=podcast&event='+ this.main_block4['event'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block4_data = data2['data']; 
 this.block4_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block4 DATA ::: ', this.block4_data); 
 }
 })
 this.block4_link = 'https://podcast.therightdoctors.com/'; // Currently for covid-19, need to change 
 }
 else{
 this.block4_category = 'The Interview'
 this.url2 = 'https://therightdoctors.com/api/beta/article?category=the-interview&event='+ this.main_block4['event'] + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'; 
 this.http.get(this.url2)
 .map((res:Response) => res.json()).subscribe(data2 => {
 if(data['success']){
 this.block4_data = data2['data']; 
 this.block4_data.sort(function(a, b) {
 a = new Date(a.created_at);
 b = new Date(b.created_at);
 return a>b ? -1 : a<b ? 1 : 0;
 });
 // this.block2_data = this.block2_data.reverse(); 
 console.log('Block4 DATA ::: ', this.block4_data); 
 }
 })
 this.block4_link = 'https://therightdoctors.com/'+this.main_block4['event'] + '/the-interview/'; 
 }
 
 })
 }

BlogDataCorona() {
 // this.event='rssdi-jaipur-2019';
// this.url = 'https://therightdoctors.com/api/beta/article?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&category=cme';
this.url='https://therightdoctors.com/api/beta/article?category=cme&event=corona-virus&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4'
console.log('set articles calling');
this.http.get(this.url)
 .map((res: Response) => res.json()).subscribe(data => {
 
 this.blogdata_corna = data['data'];
 console.log("DARTATA " , this.blogdata_corna)
 for(var i = 0 ; i < this.blogdata_corna.length ; i++){
 // if(this.blogdata[i]['image_url'] != '' && this.blogdata[i]['headline'] != '' && this.blogdata[i]['sub_headline'] != '' && this.blogdata[i]['transcript'] != '' && this.blogdata[i]['sub_headline'] != 'Dr. AG Unni Krishnan' && this.blogdata[i]['sub_headline'] != 'Dr. Rajeev Chawla')
 this.finaldata1.push(this.blogdata[i]);

 } 
 this.blogdata_corna = this.finaldata3 ; 
 console.log("Coronal " , this.finaldata3)
 console.log('this is amusing',this.blogdata_corna.length);
 
 })
}

CoronaVideos() {
 // this.event='rssdi-jaipur-2019';
// this.url = 'https://therightdoctors.com/api/beta/article?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&category=cme';
this.url='https://therightdoctors.com/api/beta/article?category=the-interview&event=corona-virus&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&limit=5'
console.log('set articles calling');
this.http.get(this.url)
 .map((res: Response) => res.json()).subscribe(data => {
 
 this.corona_v = data['data'];
 console.log("DARTATA " , this.corona_v)
 for(var i = 0 ; i < this.corona_v.length ; i++){
 // if(this.corona_v[i]['image_url'] != '' && this.corona_v[i]['headline'] != '' && this.corona_v[i]['sub_headline'] != '' && this.corona_v[i]['transcript'] != '' && this.corona_v[i]['sub_headline'] != 'Dr. AG Unni Krishnan' && this.corona_v[i]['sub_headline'] != 'Dr. Rajeev Chawla')
 this.finaldata2.push(this.corona_v[i]);

 } 
 this.corona_v = this.finaldata2 ; 
 console.log("Corona Videos " , this.finaldata2)
 console.log('this is amusing',this.corona_v.length);
 
 })
}

 nextVideo1() {
 this.sources = new Array<Object>();
 this.sources.push({
 src: "https://storage.googleapis.com/web-assets/RSSDI_2019/Day-1/Day-0-and-1_360.mp4",
 type: "video/mp4"
 });
 
 }

 createRange(number) {
 var items: number[] = [];
 for (var i = 1; i <= number; i++) {
 items.push(i);
 }
 return items;
 }

 navigate_single(catagory, slug) {
 this._sharedservice.totReqsMade = 5;
 this.router.navigate([{outlets: {single: '/' + catagory + '/' + slug}}]);
 }

 live_home() {
 let slug1: string;
 console.log('get one video calling live home');
 this.service.get_live_category2().subscribe(
 data => {
 this.articles = data['data'];
 this.video_list = data['data'];
//  console.log('I CANT SEE DATA HERE : ', this.articles);
 slug1 = this.articles[0]['slug'];
//  console.log('hghgjhsdesaws ' + this.articles[0]['slug']);
 /*this.isvalid = catagory ;*/
 // this.sources = new Array<Object>();
 // this.sources.push({
 // src: this.articles[0]['video_url'],
 // type: 'video/mp4'
 // });

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
 audiofiles1()
 {
 this.service.podcast_audio_files_cor().subscribe(
 data=>{
 console.log('data',data);
 if(data['success']){
 this.audio_list1 = data['data'];
 }
 console.log('audio files data for cornonavirus',this.audio_list1);
 }
 );
 }
//f
 click(i) {
 alert(`${i}`);
 }

}