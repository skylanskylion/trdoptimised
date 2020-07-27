//import { Component, OnInit } from '@angular/core';
import {CatagoryServiceService} from "../catagory-service.service";
//import {AngularFireDatabase} from "angularfire2/database";
import {Live_Details} from "../live_details";
import {FirebaseServiceService} from "../firebase-service.service";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Location } from '@angular/common';
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-covid-live-updates',
  templateUrl: './covid-live-updates.component.html',
  styleUrls: ['./covid-live-updates.component.css']
})
export class CovidLiveUpdatesComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef;
  catagory: any;
    live_details: AngularFireList<Live_Details[]>;
    public now: Date = new Date();
    ld: any;
    conv : any ;
    cateogry : any = ['All', 'Coronavirus' ,'Cardiology' , 'Diabetes'];
    livetitle : any ; 
    finaldata1 : object[] = [];              
    finaldata2 : object[] = [];
    finaldata : object[] = [];
    url:any ;
    ask : any ;
    private dbPath = '/live-updates';
    //private dbPath = '/live_updates';
    customersRef: AngularFireList<Live_Details> = null;
    //ld: any;
  constructor(private service: CatagoryServiceService, private fbs: FirebaseServiceService, private db: AngularFireDatabase ,private location: Location ,private meta: Meta) {
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
changeUrl(d){
  console.log('Change URL IS Called'); 
  console.log("This has come :" + d);
  this.url = d.replace(/\s+/g, '-').toLowerCase(); 
  this.location.replaceState('/live-updates/'+this.url);

}
sharebutton(image,title , description){
  console.log("In Sharing Function");
        this.meta.updateTag({name: 'description', content: description});
        //this.meta.updateTag({name: 'keywords', content: this.single_article['sub_headline'] + '' +this.single_article['seo_keywords']});
        /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
        this.meta.updateTag({
          property: 'vr:canonical',
          content: 'https://therightdoctors.com/live-updates' 
        });
        this.meta.updateTag({property: 'og:title', content: title});
        this.meta.updateTag({property: 'og:description', content: description});
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://therightdoctors.com/live-updates'
        });
        this.meta.updateTag({property: 'og:image', content: image});
        this.meta.updateTag({property: 'og:image:secure_url', content: image});

        this.meta.updateTag({name: 'twitter:title', content: title});
        this.meta.updateTag({name: 'twitter:description', content: description});
        /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
        this.meta.updateTag({name: 'twitter:image', content: image});
        this.meta.updateTag({
          name: 'twitter:url',
          content: 'https://therightdoctors.com/live-updates'});
        this.meta.updateTag({name: 'twitter:text:description', content:description})
}
  ngOnInit() {
    const splashScreen: HTMLElement = document.getElementById('splashScreenClass');
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
          console.log('datafinal', this.conv);
          console.log('datafinalfj ', this.finaldata);
      });
    this.get_catagory('stemi-india-lucknow-2018');
  }
 
  get_catagory(event) {
    this.service.event_home(event).subscribe(
        data => {
          this.catagory = data['data'];
        })
  }

  
}
