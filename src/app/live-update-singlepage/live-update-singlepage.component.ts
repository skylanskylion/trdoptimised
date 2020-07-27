//import { Component, OnInit } from '@angular/core';
import {CatagoryServiceService} from "../catagory-service.service";
//import {AngularFireDatabase} from "angularfire2/database";
import {Live_Details} from "../live_details";
import {FirebaseServiceService} from "../firebase-service.service";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
import { IMedia } from "../live/live.component";

@Component({
  selector: 'app-live-update-singlepage',
  templateUrl: './live-update-singlepage.component.html',
  styleUrls: ['./live-update-singlepage.component.css']
})
export class LiveUpdateSinglepageComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef;
  catagory: any;
    live_details: AngularFireList<Live_Details[]>;
    public now: Date = new Date();
    ld: any;
    slug :any;
    conv : any ;
    cateogry : any = ['All', 'Coronavirus' ,'Cardiology' , 'Diabetes'];
    livetitle : any ; 
    finaldata1 : object[] = [];              
    finaldata2 : object[] = [];
    finaldata : object[] = [];
    data_need : any ; 
    url:any ;
    newurl:any;
    ask : any ;
    private dbPath = '/live-updates';
    video_list: any = [];
    inc: number = 0;
    currentItem: IMedia = this.video_list[this.inc];
    i: any;
    res : string ; 

    sources: Array<Object>;
    //private dbPath = '/live_updates';
    customersRef: AngularFireList<Live_Details> = null;
  id: string;
  final_id: string;
  newdate: string;
  finalurl: string;
    //ld: any;
  constructor(private service: CatagoryServiceService, private fbs: FirebaseServiceService, private db: AngularFireDatabase ,private location: Location ,private meta: Meta,private route: ActivatedRoute) {
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
   this.fbs.onGetUsersDocuments().subscribe(data => {
          this.conv = data;
          for(var j=data.length-2; j>=data.length-5 ; j--){
            this.finaldata1.push(data[j]);
          }
          console.log('datafinal', this.conv);
          console.log('datafinalfj ', this.finaldata);
      });
}
firststory(){
  this.fbs.onGetUsersDocumentsMain().subscribe(data => {
    this.conv = data;
    var j = data.length-1 ; 
    
      this.finaldata2.push(data[j]);
    
    console.log('datafinalhgefdheg', this.conv);
    console.log('datafinalfjsdgergtyt', this.finaldata2);
});

}
changeUrl(d , i){
  console.log('Change URL IS Called'); 
  console.log("This has come :" + d + 'and index'+i);
  this.url = d.replace(/\s+/g, '-').toLowerCase(); 
  this.url = this.url.replace(',' , '');
  this.url = this.url.replace(':' , ''); 
  this.location.replaceState('/live-updates/'+this.url+'/'+i);
  console.log('NewURL:'+this.url);

}
sharebutton(image,title , description){
  console.log("In Sharing Function");
  //       this.meta.updateTag({name: 'description', content: description});
  //       //this.meta.updateTag({name: 'keywords', content: this.single_article['sub_headline'] + '' +this.single_article['seo_keywords']});
  //       /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
  //       this.meta.updateTag({
  //         property: 'vr:canonical',
  //         content: 'https://therightdoctors.com/live-updates' 
  //       });
  //       this.meta.updateTag({property: 'og:title', content: title});
  //       this.meta.updateTag({property: 'og:description', content: description});
  //       this.meta.updateTag({
  //         property: 'og:url',
  //         content: 'https://therightdoctors.com/live-updates'
  //       });
  //       this.meta.updateTag({property: 'og:image', content: image});
  //       this.meta.updateTag({property: 'og:image:secure_url', content: image});

  //       this.meta.updateTag({name: 'twitter:title', content: title});
  //       this.meta.updateTag({name: 'twitter:description', content: description});
  //       /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
  //       this.meta.updateTag({name: 'twitter:image', content: image});
  //       this.meta.updateTag({
  //         name: 'twitter:url',
  //         content: 'https://therightdoctors.com/live-updates'});
  //       this.meta.updateTag({name: 'twitter:text:description', content:description})
}
  ngOnInit() {
    const splashScreen: HTMLElement = document.getElementById('splashScreenClass');
    this.id = this.route.snapshot.paramMap.get('slug');
    this.final_id = this.id.replace('-',' ')
    this.final_id = this.route.snapshot.paramMap.get('date') +'/'+this.final_id;
    console.log('I got the slug    ' ,  this.id.split('-').join(' ')); 
    //this.ngAfterViewInit();
    this.firststory();
    this.topstories();
    
    if (splashScreen) {
      splashScreen.remove();
    }
      this.fbs.onGetUsersDocuments().subscribe(data => {
          this.conv = data;
          for(var j=data.length-1; j>=0 ; j--){
            this.finaldata.push(data[j]);
          }
          for(var i = 0  ; i < this.finaldata.length ; i++){
            this.res = this.finaldata[i]['f_title'].replace(/\s+/g, '-').toLowerCase(); 
            this.res = this.res.replace(',' , ''); 
            this.res = this.res.replace(':' , ''); 
            this.newdate = new Date(this.finaldata[i]['f_date']).toISOString().slice(0,10);
            this.finalurl = '/live-updates/'+this.newdate+'/'+this.res ;
            console.log(this.finalurl)
          //  console.log(this.res); 
            if(this.res == this.id){
               this.data_need = this.finaldata[i]; 
              // console.log(this.data_need);   
              //  break ; 
            }
          }
          console.log("Data " , this.data_need)
          console.log("Data " , this.data_need)
          var regex = /(<([^>]+)>)/ig  ; 
          let des = this.data_need['f_description'].replace(regex , "");
          
        this.meta.updateTag({name: 'description', content: des });
        this.meta.updateTag({name: 'keywords', content: "TheRightDoctors  Live Updates "+ " " + this.data_need['f_title'] + " " + des  });
        /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
        this.meta.updateTag({
          property: 'vr:canonical',
          content: 'https://therightdoctors.com/live-updates/'+this.res  
        });
        this.meta.updateTag({property: 'og:title', content: this.data_need['f_title']});
        this.meta.updateTag({property: 'og:description', content: des});
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://therightdoctors.com/live-updates/'+this.res 
        });
        this.meta.updateTag({property: 'og:image', content: this.data_need['f_image_url']});
        this.meta.updateTag({property: 'og:image:secure_url', content: this.data_need['f_image_url']});

        this.meta.updateTag({name: 'twitter:title', content: this.data_need['f_title']});
        this.meta.updateTag({name: 'twitter:description', content: des});
        /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
        this.meta.updateTag({name: 'twitter:image', content: this.data_need['f_image_url']});
        this.meta.updateTag({
          name: 'twitter:url',
          content: 'https://therightdoctors.com/live-updates/'+this.res });
        this.meta.updateTag({name: 'twitter:text:description', content:des})
          
      });
        

  }
 
}
