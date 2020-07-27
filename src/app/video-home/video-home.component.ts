import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
import {Location} from '@angular/common';
import {CatagoryServiceService} from '../catagory-service.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {VgAPI} from "videogular2/core";

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.css']
})
export class VideoHomeComponent implements OnInit {

  catagory: any ;
  inc:number=0;
  video_list:object[]= [];
  single_article: any;
  sources : Array<Object>=[];
  preload:string = 'auto';
  model: any={};
  isvalid:any ;
  slug: any;
  sing_art:any;
  conv: object[]= [];
  api:VgAPI;

  constructor(private service: CatagoryServiceService, private services: ArticleService,private router:Router, private route: ActivatedRoute, private titleService: Title, private meta: Meta,private DS:DomSanitizer, private location:Location ) {}
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.catagory = params['catagory'];
      this.isvalid = this.catagory ;
      // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      //updates
    });
    this.get_catagory('the-interview');
  }
  createRange(number) {
    var items: number[] = [];
    for( var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }


  nextVideo() {
    this.inc++;
    console.log('in next video');
    if (this.video_list[this.inc]['video_url']) {
      console.log('next video url having');
      console.log(this.location.path());
      /*this.location.replaceState(this.video_list[this.inc]['category'] + '/' + this.video_list[this.inc]['slug']);*/
      this.single_article = this.video_list[this.inc];
      if(this.single_article['image_url1'] === 'false')
      {
        console.log("If Condition get single article Image_url1= :",this.single_article['image_url1']);
        this.single_article['image_url1']=this.single_article['image_url'];
      }
      else{
        console.log("Else Condition get single article Image_url= :",this.single_article['image_url']);
        this.single_article['image_url1']=this.single_article['image_url1'];
      }
      console.log("single_article",this.single_article);
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.DS.bypassSecurityTrustResourceUrl(this.video_list[this.inc]['video_url']),
        type: "video/mp4"
      });

    } else {
      console.log('next video url not having');
      this.inc++;
      this.location.replaceState(this.video_list[this.inc]['category'] + '/' + this.video_list[this.inc]['slug']);
      this.single_article = this.video_list[this.inc];
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.DS.bypassSecurityTrustResourceUrl(this.video_list[this.inc]['video_url']),
        type: "video/mp4"
      });
    }
  }
  get_catagory(slug) {
    console.log('get catagory calling');
    this.service.get_live_category().subscribe(
      data => {
        this.catagory = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet : ', this.catagory);
        /*this.sing_art = this.catagory['transcript'].replace('<b/>','').split('<b>');*/
        this.sources = new Array<Object>();
        /*this.isvalid = catagory ;*/
        this.sources.push({
          src: this.DS.bypassSecurityTrustResourceUrl(this.catagory[0]['video_url']),
          type: "video/mp4"
        });
        for(var i=1 ; i<this.catagory.length;i++){
          this.video_list.push(this.catagory[i]);
        }
        console.log(this.video_list);
      }
    );

  }

  onPlayerReady(api:VgAPI) {
    console.log('on player redy method');
    console.log('on player ready called and api inislized');
    this.api = api;
    api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }
  playVideo() {
    //this.api.play();
  }



}
