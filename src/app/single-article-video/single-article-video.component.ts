import {APP_ID, Component, Inject, OnInit, PLATFORM_ID, ViewChild,Renderer2} from '@angular/core';
import {isPlatformBrowser, Location} from '@angular/common';
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
import {ArticleService} from '../article.service';
import {VgAPI} from 'videogular2/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import {NgForm, FormGroupDirective, FormControl, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";
import {UserServiceService} from "../user-service.service";
import { DOCUMENT } from '@angular/platform-browser';
import {AdItem} from "../dynamic/ad-item";
import {AdService} from "../dynamic/ad.service";
import {HeroProfileComponent} from "../dynamic/hero-profile.component";
import {ScrollEvent} from "ngx-scroll-event";
import * as moment from 'moment';
// import {AngularFireAuth} from 'angularfire2/auth';

/** Error when invalid control is dirty, touched, or submitted. */
export class new_like {
    id = '';
    name_liked = '';
    name_liker = '';
}

export class new_follow {
  id = '';
  followed = '';
  follower = '';
}

export class new_addList {
    id = '';
    video_added = '';
    video_adder = '';
}

export class new_comment {
  name=JSON.parse(localStorage.getItem('currentUser')).username
  userid = JSON.parse(localStorage.getItem('currentUser')).user_id;
  response='None';
  replies = [{name:'one'}];
}
export class new_reply {
  name=JSON.parse(localStorage.getItem('currentUser')).username
  response='';
  replyto_id:'';
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-single-article-video',
  templateUrl: './single-article-video.component.html',
  styleUrls: ['./single-article-video.component.css'],

})

export class SingleArticleVideoComponent implements OnInit {
  ads: AdItem[] = [];
  inputChecking = new FormControl('', [
      Validators.required
  ]);
  matcher = new MyErrorStateMatcher();

  @ViewChild('video') video: any;

  //Comments variable
  pip : any;
  show:boolean = true;
  buttonName:any;
  does: any;
  p_list: any;
  reply_toggle=0;
  faltu = '';
  private p= '';
  private popp: new_comment;
  private reply_user: any;
  index:any;
  private reply_temp: new_reply;
  private I: any;
  private J: any;
  private recom_toggle: number;
  private IC: any;
  private recom_user: any;
  final: any;
  username: string;
  image_url: string;
  headline: string;
  sub_headline: string;
  c_like: any;
  category: string;
  event : string;
  flag: boolean = true;
  load_data: any;
  inc: number=0;
  like_list: any[] = [];
  follow_list: any[] = [];
  v_data: any;
  counter: number=0;
  private temp_like: new_like;
  private temp_follow: new_follow;
  add_count: number=0;
  odd_even: number=0;
  video_list: object[] = [];
  s_list: object[] = [];
  a_list: object[] = [];
  w_list: object[]= [];
  c_list: object[]=[];
  wc_list: object[]=[];
  cs_list: object[]=[];
  video_list1: object[] = [];
  s_list1: object[] = [];
  a_list1: object[] = [];
  w_list1: object[]= [];
  c_list1: object[]=[];
  wc_list1: object[]=[];
  cs_list1: object[]=[];

  slug: string;
  single_article: any;
  isbrowser: boolean;
  preload: string = 'auto';
  api: VgAPI;
  sources: Array<Object>=[];
    
  like_variable: any;
  toggle1: any;
  follow_toggle: any;
  playlist_toggle: any;
  gus: any;

  slug_list = ["Dr-SantanuGuha-endorsement-therightdoctors",
    "Dr-PPMohanan-endorsement-therightdoctors", "Dr-SCManchanda-endorsement-therightdoctors",
    "Dr-VenkatSRam-endorsement-therightdoctors", "Dr-saminsharma-endorsement-therightdoctors",
    "Dr-alaincreibier-endorsement-therightdoctors","Dr-davidholmes-endorsement-therightdoctors",
    "Dr-JOHNSIMPSON-endorsement-therightdoctors","Dr-yamane-endorsement-therightdoctors"];

  add_video_list = ["https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/DrSantanuGuha/DrSantanuGuha-360p.mp4",
    "https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/DrPPMohanan/DrPPMohanan-360p.mp4",
    "https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/DrSCManchanda/DrSCManchanda-360p.mp4",
    "https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/BPCON/Venkat%20S%20Ram/Venkat%20S%20Ram-360p.mp4",
    "https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/WCCPCI16/samin%20sharma/samin%20sharma-360p.mp4",
    "https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/C3/alain%20creibier/alain%20creibier-360p.mp4",
    "https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/C3/david%20holmes/david%20holmes-360p.mp4",
    "https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/C3/JOHN%20SIMPSON/JOHN%20SIMPSON-360p.mp4",
    "https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/C3/yamane/yamane-360p.mp4"];

  sing_art: any ;
  isvalid: any ;
  model: any = {};
  Shorturl: any;
  vi_list: object[] = [];
  pop_specials: any;
  end_date: any;
  userss: any;
  visited: boolean= false;
  today: any;
  id: any;
  user: any;
  iframe_html: any;
  private pip2: number;
  showrecom: any;
  articles: any;
 notagrecom: any;
 temp_addList: new_addList;
  addtoList_list: any;
  constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document,
              @Inject(PLATFORM_ID) private platformId: Object,
              private dialog: MatDialog,
              @Inject(APP_ID) private appId: string,private router:Router, private route: ActivatedRoute, public service: ArticleService, private titleService: Title,
              private meta: Meta,private DS:DomSanitizer, private location:Location, private adService: AdService, private users: UserServiceService) {
    this.isbrowser = isPlatformBrowser(platformId) ?
      true : false
    //this.dialog.open(SinglePopup, {panelClass:'myapp-no-padding-dialog'})
  }

  ngOnInit() {
    //comments ngonit
    this.pip=0;
    this.pip2=0;
    this.toggle1 = 0;
    this.follow_toggle = 0;
    this.playlist_toggle = 0;
    this.route.params.subscribe(params => {
      console.log('this is llovwee,',params);
      this.slug = params['slug'];
      this.category = params['catagory'];
      this.event = params['event'];
    });
    console.log(this.category);
      this.service.get_single_video(this.slug, this.category).subscribe(
          data => {
            if(data['success'])
            {
              
              console.log('acascascascasc',data['data']);
              this.takevalue(data['data']);
              this.takevalue0(data['data']['comments'])
            }
          });


    this.username=localStorage.getItem('CurrentName');

    this.c_like = false;
    this.load_data = false;
    this.gus = false;
    this.like_variable = {number_of_likes: -1, name_liked: "", name_liker: [""]};
    this.v_data = false;
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      //   this.slug = 'emcure-csi-tv-dr-pk-dep-ACE-inhibitor-or-ARNI-what-should-be-used-in-heart-failure-with-reduced-ejection-fraction';
      this.category = params['catagory'];
      this.isvalid = this.category ;
      // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      //updates
    });
    this.get_single_video(this.slug, this.category);
    this.toggle();
    this.get_your_list();
    console.log(this.s_list1);
    console.log(this.a_list1);
    // this.id = setTimeout(()=>{
    //     this.call_to_action()
    // },3000);
  }

  ngOnDestroy() {
    if(this.id) {
        clearInterval(this.id);
    }
  }

/*  initialize_like_list(temp_like: any){
  	this.temp_like = temp_like;
  }*/
  //comments function started
  toggle()
  {
   //this.pip= (this.pip +1)%2;
    //   this.pip = 1;
    //   this.pip = true;
      this.show = !this.show;
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show)
          this.buttonName = "Hide";
      else
          this.buttonName = "Show";
  }


  untoggle()
  {
    this.pip=0;
  }

  takevalue(final: any){
    this.final=final;
    console.log('this issf rgsv',this.final)
    // console.log('this is goiung funcking greatr',this.final)
  }

  add_comment() {
      this.popp=new new_comment();

      this.popp.replies.splice(0,1);
      this.popp.response=this.p;
    console.log(this.p);
    console.log('fgdfg',this.popp);
    this.p_list.push(this.popp);
    this.p='';
    console.log('levnthg',this.popp.replies.length,this.popp.replies);
    this.show=true;
    this.buttonName="Hide";
    this.loveeit();
  }
  toggle_reply(i,j){
    if(localStorage.getItem('currentUser')) {
      this.reply_toggle = 1;
      this.I = i;
      this.J = j;
      this.reply_user = this.p_list[i].replies[j].name;
      this.reply_temp = new new_reply();
    }
    else{
      this.openDialog();
    }
  }

  add_reply(i) {
    this.reply_temp.replyto_id=this.reply_user;
    // this.reply_temp.name=this.p_list[i].name;
    this.p_list[i].replies.push(this.reply_temp);
    this.reply_toggle=0;
    this.recom_toggle=0;
    this.loveeit();
  }
  reply_comment(i){
    this.recom_toggle=1;
    this.IC=i;
    this.reply_user=this.p_list[i].name;
    this.reply_temp=new new_reply();
  }
  loveeit() {
    //console.log(single_article['anchor']) ;
    this.final['comments']=this.p_list;
    this.service.update_comments(this.final,this.slug).subscribe(
        data => {
          console.log(data['data']) ;
          //this.editform = data['data'] ;
        });
  }

  takevalue0(p_list: any) {
    this.p_list=p_list
  }

  comment_delete(i: number) {
    this.p_list.splice(i,1);
    this.loveeit();
  }

  reply_delete(i,j) {
    this.p_list[i].replies.splice(j,1);
    this.loveeit();
  }
  
  cmmnt_btn(){
    if(localStorage.getItem('currentUser')){

      this.add_comment()
    }
    else{
      this.openDialog();  
    }
  }

  reply_btn(i){
    if(localStorage.getItem('currentUser')){
      this.reply_comment(i);
    }
    else{
      this.openDialog();  
    }
  }
  //comments function ended

  get_embed_code(url){
    console.log(this.single_article['video_url']);
    this.iframe_html = '&lt;iframe src="'+this.single_article['video_url']+'" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;';
  }
  close_embed_code(){
    this.iframe_html ='';
  }

  call_to_action(){
    this.today = moment(new Date()).add(0, 'days');
    this.today = this.today.valueOf();
    this.pop_specials = localStorage.getItem('pop_specials');
    //console.log(this.pop_specials);
    if (this.pop_specials === null) {
      this.dialog.open(SinglePopup, {
        width: '800px',
        panelClass: 'myapp-no-padding-dialog',
        data: {}
      });
      var contractMoment = new Date();
      var end = moment(contractMoment).add(15, 'days');
      var myObj = {date: end, visit: false};
      localStorage.setItem('pop_specials', JSON.stringify(myObj));
    } 
    else if (this.pop_specials.length > 0) {
      this.userss = JSON.parse(localStorage.getItem('pop_specials'));
      this.end_date = JSON.parse(JSON.stringify(this.userss['date']));
      this.visited = JSON.parse(JSON.stringify(this.userss['visit']));
      this.end_date = moment(this.end_date).valueOf();
      if (this.end_date < this.today) {
        console.log('Time over, we can remove now...' + this.end_date);
        localStorage.removeItem('pop_specials');
        this.dialog.open(SinglePopup, {
            width: '750px',
            panelClass: 'myapp-no-padding-dialog',
            data: {}
        });
        var contractMoment = new Date();
        var end = moment(contractMoment).add(15, 'days');
        var myObj = {date: end, visit: false};
        localStorage.setItem('pop_specials', JSON.stringify(myObj));
      } 
      else {
        console.log('Wait for next few days to show popup ' + this.today);
      }
    }
      /*end of call to action popup*/
  }

  public handleScroll(event: ScrollEvent) {
    alert('ya its');
  }
  
  pauseOrPlay(event:any){
    if(this.video.nativeElement.paused){
      this.video.nativeElement.play() ;
    }
    else{
      this.video.nativeElement.pause();
    }
  }

  forward(video) {
      video.currentTime = video.currentTime + 10;
  }
  backward(video) {
      video.currentTime = video.currentTime - 10;
  }

  Download(event:any){
    this.video.nativeElement.download;
  }

  loveit(loveit) {
    loveit++ ;
    console.log(loveit) ;
    this.model.anchor =  loveit ;
    //console.log(single_article['anchor']) ;
    console.log(this.slug) ;

    this.service.update_totalviews(this.model,this.slug).subscribe(
      data => {
        console.log(data['data']) ;
        //this.editform = data['data'] ;
      });
  }
  // --------------------------------------Changes made 30/6/19---------------------------------------------
    add_to_your_list() {
        console.log("I am in the list");
        this.model.slug = this.slug;
        this.model.category = this.category;
        this.model.event = this.event;
        this.model.image_url = this.single_article['image_url'];
        this.model.headline = this.single_article['headline'];
        this.model.sub_headline = this.single_article['sub_headline'];
        console.log('iybuyvbuyvt', this.model);
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.service.add_to_list(this.model, this.user['p_id']).subscribe(
            data => {
                //console.log(data['data'])
            });
    }

    add_to_list(){
        if(localStorage.getItem('currentUser')){
            if(this.single_article['add_to_list'].length > 0){
                for(let k = 0; k< this.single_article['add_to_list'].length; k++){
                    if(this.single_article['add_to_list'][k].id == JSON.parse(localStorage.getItem('currentUser')).p_id){
                        console.log("continue");
                        this.playlist_toggle = 1;
                    }
                }
                if(this.playlist_toggle == 0){
                    this.temp_addList = new new_addList();
                    console.log("Temp_follow", this.temp_addList);
                    this.playlist_toggle = 1;
                    this.update_list(this.temp_addList);
                    // this.add_to_your_list();
                }
            }
            else{
                this.playlist_toggle = 1;
                console.log(this.single_article['add_to_list'].length);
                console.log("Add_to_list is empty",this.single_article['add_to_list']);
                this.temp_addList = new new_addList();
                console.log("Temp_addList", this.temp_addList);
                this.update_list(this.temp_addList);
                // this.add_to_your_list();
            }
        }
        else{
            this.openDialog();
        }
    }

    update_list(addToList_details) {
        console.log(addToList_details);
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        console.log(JSON.parse(localStorage.getItem('currentUser')).p_id);
        addToList_details.id = JSON.parse(localStorage.getItem('currentUser')).p_id;
        addToList_details.video_added = this.single_article['guest1'];
        addToList_details.video_adder = JSON.parse(localStorage.getItem('currentUser')).username;
        this.addtoList_list.push(addToList_details);
        this.model['add_to_list'] = this.addtoList_list;
        console.log(this.slug);
        console.log(this.model);
        this.service.update_addToList(this.model, this.slug).subscribe(
            data => {
        console.log(data['data']);
    });
    }

    update_addToList_list_value(add_to_list: any){
        this.addtoList_list = add_to_list;
    }
    // -----------------------------------------------------------------------------------------------------

  // --------------------------------------Changes made 12/6/19---------------------------------------------
  follow(){
    if(localStorage.getItem('currentUser')){
      if(this.single_article['follow_details'].length > 0){
        for(let k = 0; k< this.single_article['follow_details'].length; k++){
          if(this.single_article['follow_details'][k].id == JSON.parse(localStorage.getItem('currentUser')).p_id){
            console.log("continue");
            this.follow_toggle = 1;
          }
        }
        if(this.follow_toggle == 0){
          this.temp_follow = new new_follow();
          console.log("Temp_follow", this.temp_follow);
          this.follow_toggle = 1;
          this.update_follow(this.temp_follow);
        }
      }
      else{
        this.follow_toggle = 1;
        console.log(this.single_article['follow_details'].length);
        console.log("follow_details are empty",this.single_article['follow_details']);
        this.temp_follow = new new_follow();
        console.log("Temp_follow", this.temp_follow);
        this.update_follow(this.temp_follow);
      }
    }
    else{
      this.openDialog();
    }
  }

  update_follow(follow_details){
    console.log(follow_details);
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    console.log(JSON.parse(localStorage.getItem('currentUser')).p_id);
    follow_details.id = JSON.parse(localStorage.getItem('currentUser')).p_id;
    follow_details.followed = this.single_article['guest1'];
    follow_details.follower = JSON.parse(localStorage.getItem('currentUser')).username;
    this.follow_list.push(follow_details);
    this.model['follow_details'] = this.follow_list;
    console.log(this.slug);
    console.log(this.model);
    this.service.update_follows(this.model, this.slug).subscribe(
        data => {
          console.log(data['data']);
        });
  }
  update_follow_list_value(follow_list: any){
    this.follow_list = follow_list;
  }
  //--------------------------------------------------------------------------------------------------------
  update_list_value(like_list: any) {
    this.like_list = like_list;
  }

  like_btn(){
    if(localStorage.getItem('currentUser')){
      if(this.single_article['like_details'].length > 0){
        for(let k = 0; k < this.single_article['like_details'].length; k++){
          console.log(this.single_article['like_details'].length);
          console.log('1',this.single_article['like_details'][0].id);
          console.log('Local storage',JSON.parse(localStorage.getItem('currentUser')).p_id);
          console.log('Fetched data',this.single_article['like_details'][k].id);
          if(this.single_article['like_details'][k].id == JSON.parse(localStorage.getItem('currentUser')).p_id){
            console.log("continue");
            this.toggle1 = 1;
          }
        }
        if(this.toggle1 == 0){
          if(this.single_article['like'] === null){
            this.single_article['like'] = 0;
            this.likeit(this.single_article['like']);
            console.log(this.single_article['like_details'].length);
            console.log("Like details are not empty", this.single_article['like_details']);
            this.temp_like = new new_like();
            console.log("Temp_like", this.temp_like);
            this.update_likeit(this.temp_like);
          }
          else{
            console.log("step_4");
            console.log("step_5");
            this.likeit(this.single_article['like']);
            console.log(this.single_article['like_details'].length);
            console.log("Like details are not empty", this.single_article['like_details']);
            this.temp_like = new new_like();
            console.log("Temp_like", this.temp_like);
            this.update_likeit(this.temp_like);
          }
        }
      }
      else{
        if(this.single_article['like'] === null){
          this.single_article['like'] = 0;
          this.likeit(this.single_article['like']);
          console.log(this.single_article['like_details'].length);
          console.log("like_details are empty",this.single_article['like_details']);
          this.temp_like = new new_like();
          console.log("Temp_like", this.temp_like);
          this.update_likeit(this.temp_like);
        }
        else{
          this.likeit(this.single_article['like']);
          console.log(this.single_article['like_details'].length);
          console.log("like_details are empty",this.single_article['like_details']);
          this.temp_like = new new_like();
          console.log("Temp_like", this.temp_like);
          this.update_likeit(this.temp_like);
        }
      }
    }
    else{
      this.openDialog();
    }
  }

  likeit(likeit){
    this.counter++;
    console.log(likeit);
    this.model.like =  likeit + this.counter;
    console.log(this.slug);
    console.log(this.category);
    console.log(this.event);
    console.log(this.model);
    console.log(this.single_article['sub_headline']);
    this.service.update_likes(this.model, this.slug).subscribe(
      data => {
        console.log(data['data']);
      });
  }

  update_likeit(like_details){
    console.log(like_details);
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    console.log(JSON.parse(localStorage.getItem('currentUser')).p_id);
    // console.log(JSON.parse(localStorage.getItem('currentUser')['username']));
    like_details.id = JSON.parse(localStorage.getItem('currentUser')).p_id;
    like_details.name_liked = this.single_article['guest1'];
    like_details.name_liker = JSON.parse(localStorage.getItem('currentUser')).username;
    this.like_list.push(like_details);
    this.model['like_details'] = this.like_list;
    console.log(this.slug);
    console.log(this.model);
    // this.service.update_likes(this.model, this.slug).subscribe(
    //   data => {
    //     console.log(data['data']);
    //   });
  }

  get_your_list() {

    if(JSON.parse(localStorage.getItem('currentUser'))){
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  
    this.service.get_your_list(this.user['p_id']).subscribe(
      data => {
        if(data['success']){
          console.log(data['data']);
          this.v_data =  true;
        }
        if(data['data'].length>100){
        for(let k = 0; k < data['data'].length; k++){
          if(data['data'][k]['video_event_name'] === 'aicog-2018' || data['data'][k]['video_event_name'] === 'stemi-india-lucknow-2018' ||
            data['data'][k]['video_event_name'] === 'csi-2017' || data['data'][k]['video_event_name'] === 'wcce-2017' ||
            data['data'][k]['video_event_name'] === 'wccicc-2017' || data['data'][k]['video_event_name'] === 'csikochi-2016') {
              this.video_list1.push(data['data'][k]);
          }
          if(data['data'][k]['video_event_name'] === 'aicog-2018'){
            this.a_list1.push(data['data'][k]);
          }
          if(data['data'][k]['video_event_name'] === 'stemi-india-lucknow-2018'){
            this.s_list1.push(data['data'][k]);
          }
          if(data['data'][k]['video_event_name'] === 'csi-2017'){
            this.c_list1.push(data['data'][k]);
          }
          if(data['data'][k]['video_event_name'] === 'wcce-2017'){
            this.w_list1.push(data['data'][k]);
          }
          if(data['data'][k]['video_event_name'] === 'wccicc-2017'){
            this.wc_list1.push(data['data'][k]);
          }
          if(data['data'][k]['video_event_name'] === 'csikochi-2016'){
            this.cs_list1.push(data['data'][k]);
          }
        }
        console.log(this.s_list1);
      }
      else{
        console.log('else consition -------');
        this.service.get_next_video('the-interview', 'details').subscribe(
          data => {
            if(data['success']){
              this.v_data = true;
            }
            console.log(data['data'].length);
            for(let k = 0; k < data['data'].length; k++){
              if(data['data'][k]['event'] === 'aicog-2018' || data['data'][k]['event'] === 'stemi-india-lucknow-2018' ||
                data['data'][k]['event'] === 'csi-2017' || data['data'][k]['event'] === 'wcce-2017' ||
                data['data'][k]['event'] === 'wccicc-2017' || data['data'][k]['event'] === 'csikochi-2016') {
                  this.video_list1.push(data['data'][k]);
              }
              if(data['data'][k]['event'] === 'aicog-2018'){
                this.a_list.push(data['data'][k]);
              }
              if(data['data'][k]['event'] === 'stemi-india-lucknow-2018'){
                this.s_list.push(data['data'][k]);
              }
              if(data['data'][k]['event'] === 'csi-2017'){
                this.c_list.push(data['data'][k]);
              }
              if(data['data'][k]['event'] === 'wcce-2017'){
                this.w_list.push(data['data'][k]);
              }
              if(data['data'][k]['event'] === 'wccicc-2017'){
                this.wc_list.push(data['data'][k]);
              }
              if(data['data'][k]['event'] === 'csikochi-2016'){
                this.cs_list.push(data['data'][k]);
              }
            }
            console.log('I CANT SEE DATA HERE in single componenet next video : ', this.video_list);
          });
      }
      });
    }
    else{
      this.service.get_next_video('the-interview', 'details').subscribe(
            data => {
              if(data['success']){
                this.v_data = true;
              }
              console.log(data['data'].length);
              for(let k = 0; k < data['data'].length; k++){
                if(data['data'][k]['event'] === 'aicog-2018' || data['data'][k]['event'] === 'stemi-india-lucknow-2018' ||
                  data['data'][k]['event'] === 'csi-2017' || data['data'][k]['event'] === 'wcce-2017' ||
                  data['data'][k]['event'] === 'wccicc-2017' || data['data'][k]['event'] === 'csikochi-2016') {
                    this.video_list1.push(data['data'][k]);
                }
                if(data['data'][k]['event'] === 'aicog-2018'){
                  this.a_list.push(data['data'][k]);
                }
                if(data['data'][k]['event'] === 'stemi-india-lucknow-2018'){
                  this.s_list.push(data['data'][k]);
                }
                if(data['data'][k]['event'] === 'csi-2017'){
                  this.c_list.push(data['data'][k]);
                }
                if(data['data'][k]['event'] === 'wcce-2017'){
                  this.w_list.push(data['data'][k]);
                }
                if(data['data'][k]['event'] === 'wccicc-2017'){
                  this.wc_list.push(data['data'][k]);
                }
                if(data['data'][k]['event'] === 'csikochi-2016'){
                  this.cs_list.push(data['data'][k]);
                }
              }
              console.log('I CANT SEE DATA HERE in single componenet next video : ', this.video_list);
            });
    }
  }
 
  playlist(){
    this.playlist_toggle = 1;
  }
 
  player_video_list(){
    this.service.get_next_video('the-interview', 'event').subscribe(
      data => {
        if(data['success']){
         // this.v_data = true;
         for(let k = 0; k < data['data'].length; k++){
          
              this.video_list.push(data['data'][k]);
          }
        }
        
        console.log('I CANT SEE DATA HERE in single componenet next video : ', this.video_list);
      });
    
  }



    get_next_video(){
        this.service.get_next_video2().subscribe(
            data => {
                console.log('k',data)
                this.notagrecom=data['data'].splice(0,5);
            });
        console.log('this is not happefn                                  ing', this.single_article)
        console.log('ths si salso not hap                          iny ', this.single_article.similar_topic.split(','))
        console.log('this is not happefn                                  ing', this.single_article)
        console.log('ths si salso not hap                          iny ', this.single_article.similar_topic.split(','))
        // console.log('this ',this.single_article.similar_topic.split(',')[0])
        // this.get_all_articles();
        if (this.single_article.similar_topic.split(',').length >1) {
            console.log('tis is nfsdl')
            this.showrecom=true;
            console.log(this.single_article.similar_topic.split(',')[0])
            this.get_all_articles(this.single_article.similar_topic.split(',')[0])
        }
    }

  get_all_articles(tag) {
    console.log('tag')
    this.service.all_tags(tag).subscribe(
        data => {
          console.log('articles datacccccc', data);
          this.articles = data['data'].splice(0,5);
        }
    )
  }

  get_single_video(slug, category) {
    console.log('get one video calling');
    this.service.get_single_video(slug, category).subscribe(
      data => {
        if(data['success']){
          this.load_data = true;
          if(data['data']['guest3'].length > 0 || data['data']['guest4'].length > 0){
              this.gus = true;
          }
        }
        this.single_article = data['data'];
       // let ab = this.single_article['headline'];
       // let str = ab.split(' ');
  // for(var i = 0; i < str.length; i++){
  //   console.log(str[i]);
  //   str[i][0] = str[i][0].toUpperCase(); 
  //   str[i] = str[i].charAt(0).toUpperCase();
  //   //str[i] = str[i].join('');
  // }
  //  str.join(' ');

        console.log('single video page final data' + this.single_article);
        this.service.get_short_url('https://therightdoctors.com/' + this.single_article['category'] + '/' + this.single_article['slug']).subscribe(data=>{
            console.log('short Url responce from database');
            this.Shorturl = data['hash'];
        });

        //this.single_article['headline'] = str;
        this.update_list_value(data['data']['like_details']);
        // --------------------------------------Changes made 12/6/19---------------------------------------------
        this.update_follow_list_value(data['data']['follow_details']);
        //--------------------------------------------------------------------------------------------------------
          // --------------------------------------Changes made 30/6/19---------------------------------------------
          this.update_addToList_list_value(data['data']['add_to_list']);
          //--------------------------------------------------------------------------------------------------------
        let s = this._renderer2.createElement('script');
        s.type = `application/ld+json`;
        s.text = `
          {
          "@context": "http://schema.org",
          "@type": "VideoObject",
          "name":"`+this.single_article['sub_headline']+`",
          "description": "`+this.single_article['headline']+`",
          "thumbnailUrl": "`+this.single_article['image_url']+`",
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
          "contentUrl": "`+this.single_article['video_url']+`",
          "embedUrl": "https://therightdoctors.com/`+this.single_article['event']+`/`+this.single_article['category']+`/`+this.single_article['slug']+`",
          "interactionCount": "2347"
          }`;
        this._renderer2.appendChild(this._document.body, s);
        if(this.single_article['image_url1'] === 'false'){
          console.log("If Condition get single article Image_url1= :",this.single_article['image_url1']);
          this.single_article['image_url1']=this.single_article['image_url'];
        }
        else{
          console.log("Else Condition get single article Image_url= :",this.single_article['image_url']);
          this.single_article['image_url1']=this.single_article['image_url1'];
        }
        /* this.sing_art = this.single_article['transcript'].replaceAll('</b>','').split('<b>');*/
        console.log("transcript=",this.single_article['transcript']);
        this.sing_art = this.single_article['transcript'].replace('<b>','').split('<b>');
        console.log("single art= ",this.sing_art);
        this.sources = new Array<Object>();
        /*this.isvalid = category ;*/
        this.sources.push({
          src: this.DS.bypassSecurityTrustResourceUrl(this.single_article['video_url']),
          type: "video/mp4"
        });
        console.log('I CANT SEE DATA HERE in single componenet NUT i: ', this.single_article);

        this.titleService.setTitle(this.single_article['sub_headline'] +  ' | ' + this.single_article['headline'] + ' | TheRightDoctors');
        this.meta.updateTag({name: 'description', content: this.single_article['sub_headline']+ ' ' + this.single_article['headline'] + 'TheRightDoctors'});
        this.meta.updateTag({name: 'keywords', content: this.single_article['sub_headline'] + '' +this.single_article['seo_keywords']});
        /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
        this.meta.updateTag({
          property: 'vr:canonical',
          content: 'https://therightdoctors.com/' + this.single_article['event'] + '/' + this.single_article['category'] + '/' + this.single_article['slug']
        });
        this.meta.updateTag({property: 'og:title', content: this.single_article['sub_headline']});
        this.meta.updateTag({property: 'og:description', content: this.single_article['headline']});
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://therightdoctors.com/'+this.single_article['event'] + '/' + this.single_article['category'] + '/' + this.single_article['slug']
        });
        this.meta.updateTag({property: 'og:image', content: this.single_article['image_url']});
        this.meta.updateTag({property: 'og:image:secure_url', content: this.single_article['image_url']});

        this.meta.updateTag({name: 'twitter:title', content: this.single_article['sub_headline'] + ':' +this.single_article['headline']});
        this.meta.updateTag({name: 'twitter:description', content: this.single_article['headline2']});
        /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
        this.meta.updateTag({name: 'twitter:image', content: this.single_article['image_url']});
        this.meta.updateTag({
          name: 'twitter:url',
          content: 'https://therightdoctors.com/'+this.single_article['event'] + '/' + this.single_article['category'] + '/' + this.single_article['slug']});
        this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});
        this.player_video_list();
        this.get_next_video();
          

        this.adService.get_next_video(this.single_article['category'], this.single_article['event']).subscribe(data => {
          console.log('dynamic videos from rest api');
          console.log(data);
          if(data['success']){
            for(let k1=0; k1< data['data'].length; k1++){
              if(data['data'][k1]['event']==='aicog-2018' || data['data'][k1]['event']==='stemi-india-lucknow-2018' ||
                  data['data'][k1]['event']==='csi-2017' || data['data'][k1]['event']==='wcce-2017' ||
                  data['data'][k1]['event']==='wccicc-2017' || data['data'][k1]['event']==='csikochi-2016') {
                this.vi_list.push(data['data'][k1]);
              }

            }
            for (let i = 0; i < data['data'].length; i++) {
              if(data['data'][i]['event']==='aicog-2018' || data['data'][i]['event']==='stemi-india-lucknow-2018' ||
                  data['data'][i]['event']==='csi-2017' || data['data'][i]['event']==='wcce-2017' ||
                  data['data'][i]['event']==='wccicc-2017' || data['data'][i]['event']==='csikochi-2016') {
                let x = data['data'][i]['transcript'].replace('<b>', '').split('<b>');
                console.log('hgjghjh' + x.length);
                this.ads.push(new AdItem(HeroProfileComponent, data['data'][i], x, this.vi_list, data['data'][i]['event'] + '/' + data['data'][i]['category'] + '/' + data['data'][i]['slug']));
              }
            }
          }}, err => {
          console.log('error');
          console.log(err);
        })

        for(let k = 0; k < this.single_article['like_details'].length; k++){
          console.log(this.single_article['like_details'].length);
          console.log('1',this.single_article['like_details'][0].id);
          console.log('2',this.single_article['like_details'][k].id);
          if(this.single_article['like_details'][k].id == JSON.parse(localStorage.getItem('currentUser')).p_id){
            console.log('id detailssss  cc');
            // this.c_like = true;
             this.toggle1 = 1;
          }
        }

          // --------------------------------------Changes made 12/6/19---------------------------------------------
          for(let k = 0; k < this.single_article['follow_details'].length; k++) {
              if (this.single_article['follow_details'][k].id == JSON.parse(localStorage.getItem('currentUser')).p_id) {
                  console.log('id detailssss  cc');
                  // this.c_like = true;
                  this.follow_toggle = 1;
              }
          }
          //-------------------------------------------------------------------------------------------------------
          // --------------------------------------Changes made 30/6/19---------------------------------------------
          for(let k = 0; k < this.single_article['add_to_list'].length; k++) {
              if (this.single_article['add_to_list'][k].id == JSON.parse(localStorage.getItem('currentUser')).p_id) {
                  console.log('id detailssss  cc');
                  // this.c_like = true;
                  this.playlist_toggle = 1;
              }
          }
          //-------------------------------------------------------------------------------------------------------
      }
    );
  }

  onPlayerReady(api: VgAPI) {
    console.log('on player redy method');
    console.log('on player ready called and api inislized');
    this.api = api;
    api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  playVideo() {
    //this.api.play();
  }

  nextVideo() {
    console.log('in next video calling');
    this.odd_even++;
    console.log(this.odd_even);
    var x = this.odd_even;
    if(x%2 === 0) {
      this.inc++;
      console.log('in next video');
      if (this.video_list[this.inc]['video_url']) {
        console.log('next video url having');
        console.log(this.location.path());
        this.location.replaceState(this.video_list[this.inc]['category'] + '/' + this.video_list[this.inc]['slug']);
        this.single_article = this.video_list[this.inc];
        if (this.single_article['image_url1'].length > 0) {
          console.log("If Condition next  single article Image_url1= :", this.single_article['image_url1']);
          this.single_article['image_url1'] = this.single_article['image_url1'];
        } else {
          console.log("Else Condition next single article Image_url= :", this.single_article['image_url']);
          this.single_article['image_url1'] = this.single_article['image_url'];
        }
        this.sources = new Array<Object>();
        this.sources.push({
          src: this.DS.bypassSecurityTrustResourceUrl(this.video_list[this.inc]['video_url']),
          type: "video/mp4"
        });
      }
    }
    /*else{
      console.log('next video url not having');
      this.inc++;
      this.location.replaceState(this.video_list[this.inc]['category']+'/'+ this.video_list[this.inc]['slug']);
      this.single_article=this.video_list[this.inc];
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.DS.bypassSecurityTrustResourceUrl(this.video_list[this.inc]['video_url']),
        type: "video/mp4"
      });
    }*/
    else{
      console.log('in add count');
      this.add_count++;
      /*  this.single_article=this.add_video_list[this.add_count];*/
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.add_video_list[this.add_count],
        type: "video/mp4"
      });
    }
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
        items.push(i);
    }

    return items;
  }

  next_subs(){
    console.log('on next subs methos');
    this.inc++;
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
        // Set the video to the beginning
        console.log('end called');
        this.inc++;
        console.log("Incremented value", this.inc) ;
        console.log("Here next video",this.video_list[this.inc]) ;

        if(this.video_list[this.inc]['video_url']){
          this.sources = new Array<Object>();
          this.sources.push({
            src: this.video_list[this.inc]['video_url'],
            type: "video/mp4"
          });

        }else{
          this.inc++;
          this.sources = new Array<Object>();
          this.sources.push({
            src: this.video_list[this.inc]['video_url'],
            type: "video/mp4"
          });
        }
      }
    );
  }

  onComplete(){
    console.log('on complte');
  }

  changeUrl(){
    this.location.replaceState(this.single_article['event']+`/`+this.single_article['category']+`/`+this.single_article['slug'])
  }

  onsrcChanged(source){
    console.log('on source changed');
  }
  subscribe_email(){
    if(JSON.parse(localStorage.getItem('mail_subscribed'))==null) {
        this.model.headline = this.single_article['headline'];
        this.model.headline2 = this.single_article['headline2'];
        this.model.guest1 = this.single_article['guest1'];
        this.model.guest1_designation = this.single_article['guest1_designation'];
        this.model.guest1_hospital = this.single_article['guest1_hospital'];
        this.model.guest1_image_url = this.single_article['guest1_image_url'];
        this.model.link = 'https://therightdoctors.com/' + this.single_article['event'] + '/' + this.single_article['category'] + '/' + this.single_article['slug'];
        this.model.image_url = this.single_article['image_url'];
        console.log(this.model);
        if (this.model.email) {
            this.users.subscribe_mail(JSON.stringify(this.model))
                .subscribe(data => {
                    console.log(data);
                    if (data['success']) {
                        let myObj = {email: "verified"};
                        localStorage.setItem('mail_subscribed', JSON.stringify(myObj));
                        alert('Thank you for subscribing...');
                    } else {
                        alert('Please enter correct email address');
                    }
                });
        }
    } 
    else{
      alert('Already subscribed');
    }
  }
   
  openDialog(): void {
    const dialogRef = this.dialog.open(LikeComment, {
      width: '450px',
      panelClass: 'like-comment',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  /*openDialog(): void {
    const dialogRef = this.dialog.open(SinglePopup, {
      width: '750px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
*/
  toggled() {
    this.pip2 =(this.pip2+1)%2;

  }
}

@Component({
  selector: 'single-popup',
  templateUrl: 'single-popup.html',
})

export class SinglePopup {
  model: any ={};
  constructor(
    public dialogRef: MatDialogRef<SinglePopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  close() {
    this.dialogRef.close();
  }
}

// @Component({
//   selector: 'like-comment',
//   templateUrl: 'like-comment.html',
// })

// export class LikeComment {
//   constructor(
//     public dialogRef: MatDialogRef<LikeComment>,
//     @Inject(MAT_DIALOG_DATA) public data: any) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
// @ts-ignore
//@Component({
//  selector: 'single-popup',
//  templateUrl: 'single-popup.html',
//})
//export class SinglePopup {
//    model: any ={};
//    load: boolean = false;
//  constructor(
//      private users: UserServiceService,
//    public dialogRef: MatDialogRef<SinglePopup>,
//    @Inject(MAT_DIALOG_DATA) public data: any) {}
//
//  onNoClick(): void {
//    this.dialogRef.close();
//  }
//  close() {
//      this.dialogRef.close();
//  }
//    subscribe_email(){
//        this.load = true;
//        this.model.headline = this.data['headline'];
//        this.model.headline2 = this.data['headline2'];
//        this.model.guest1 = this.data['guest1'];
//        this.model.guest1_designation = this.data['guest1_designation'];
//        this.model.guest1_hospital = this.data['guest1_hospital'];
//        this.model.guest1_image_url = this.data['guest1_image_url'];
//        //this.model.guest2 = this.data['guest2'];
//        //this.model.guest2_designation = this.data['guest2_designation'];
//        //this.model.guest2_hospital = this.data['guest2_hospital'];
//        //this.model.guest2_image_url = this.data['guest2_image_url'];
//        //this.model.guest3 = this.data['guest3'];
//        //this.model.guest3_designation = this.data['guest3_designation'];
//        //this.model.guest3_hospital = this.data['guest3_hospital'];
//        //this.model.guest3_image_url = this.data['guest3_image_url'];
//        //this.model.guest4 = this.data['guest4'];
//        //this.model.guest4_designation = this.data['guest4_designation'];
//        //this.model.guest4_hospital = this.data['guest4_hospital'];
//        //this.model.guest4_image_url = this.data['guest4_image_url'];
//        //this.model.guest5 = this.data['guest5'];
//        //this.model.guest5_designation = this.data['guest5_designation'];
//        //this.model.guest5_hospital = this.data['guest5_hospital'];
//        //this.model.guest5_image_url = this.data['guest5_image_url'];
//        //this.model.guest6 = this.data['guest6'];
//        //this.model.guest6_designation = this.data['guest6_designation'];
//        //this.model.guest6_hospital = this.data['guest6_hospital'];
//        //this.model.guest6_image_url = this.data['guest6_image_url'];
//        this.model.link = this.data['link'];
//        this.model.image_url = this.data['image_url'];
//        console.log(this.model);
//        if (this.model.email) {
//            this.users.subscribe_mail(JSON.stringify(this.model))
//                .subscribe(data => {
//                        if (data['success']) {
//                            this.load = false;
//                            let myObj = { email: "verified"};
//                            localStorage.setItem('mail_subscribed', JSON.stringify(myObj));
//                            alert('Thank you for subscribing...');
//                            this.close();
//                        } else {
//                            this.load = false;
//                            alert('Please enter correct email address');
//                        }
//                    });
//        }
//    }
//}

@Component({
    selector: 'like-comment',
    templateUrl: 'like-comment.html',
})

export class LikeComment{
    model:any={};
    users : any;
    returnUrl: any;

    constructor(
        private service: UserServiceService,
        public dialogRef: MatDialogRef<LikeComment>,
        @Inject(MAT_DIALOG_DATA) public data:any,
        private route: Router,
        private router: ActivatedRoute,
        private dialog: MatDialog){
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    register_popup(): void{
        this.onNoClick();
        this.openDialog()
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(RegistrationComponent, {
            width: '450px',
            panelClass: 'app-registration',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    ngOnInit() {
        this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '';
    }

    login_validation(){
        console.log(this.model.user_id);
        this.service.mail_checking_login(this.model.user_id,this.model.password).subscribe(data => {
            if(data['success']){
                console.log(data['data'][0]);
                // let users = data['data'];
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log("I am coming");
                localStorage.setItem('currentUser', JSON.stringify(data['data'][0]));
                alert('Logged in Successfully');
                // this.route.navigate(['/event-details/wccmm-2019']);
                this.onNoClick();
            }
            else{
                alert('Credentials are incorrect, please try again');
            }
        })
    }
}

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
 // model1: any = {};
  model2: any = {};
  confirmpassword1 : any;
  @ViewChild(NgForm) f: NgForm;
  inputChecking = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();
  returnUrl: string;
  message: any;
  user: any;
  countrycode: any;
  temp: any;
  selected: any;
  constructor( private userservice: UserServiceService,private router: Router,private route: ActivatedRoute, public dialogRef: MatDialogRef<RegistrationComponent>,
               private dialog: MatDialog) { }
  selecte = new FormControl('',[
      Validators.required,
      Validators.email,
  ])
  ngOnInit() {
    console.log('jhgkfgh');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  function(value) {
    this.countrycode = value;
    this.temp = value;
  }

  register() {
    console.log('hiii');
    console.log(this.model2);
    this.userservice.registration(JSON.stringify(this.model2))
        .subscribe(
            data =>{
              console.log(data);
              if(data['success']){
                alert('Registered Successfully');
              }
            },
            error =>{
              console.log(error);
            });
  }


    /*phone: any;
    countrycode: any;
    model2: any ={};
    model3: any ={};
    mobile_verified: any;
    verified: any;
    mail_checked: any;
    p_voted: any;
    option1: any;
    option2: any;
    option3: any;
    opt1: any;
    opt2: any;
    opt3: any;
    opp1: any;
    opp2: any;
    opp3: any;
    model: any ={};
    today: any;
    question: any;
    option: any;
    total: any;
    isLogin: boolean = false;
    isRegister:boolean = false;
    m_verify: boolean = false;
    verification_code: boolean = false;
    users: any = {};
    phone2: any;
    slug: any;
    category: any;
    event: any;*/
    /*constructor(private route: ActivatedRoute,
                private user: UserServiceService,
                public dialogRef: MatDialogRef<RegistrationComponent>,
                private dialog: MatDialog) {
        // this.af.authState.subscribe(
        //     (auth) =>{
        //         if(auth!=null){
        //             this.users=af.authState;
        //             console.log(this.users);
        //         }
        //     }
        // );
    }*/

    /*ngOnInit() {
        this.route.params.subscribe(params => {
            console.log('this is llovwee,',params);
            this.slug = params['slug'];
            this.category = params['catagory'];
            this.event= params['event'];
            // this.p_list=params['comments'];
            // this.takevalue0(this.p_list);
        });
    }*/

    // mail_check() {
    //     console.log(this.model2.user_id);
    //     delete this.model2.phone_number;
    //     delete this.model2.country_code;
    //     delete this.model2.via;
    //     delete this.model2.token;
    //     if (this.model2.username && this.model2.email) {
    //         this.user.mail_checking_details(this.model2.email).subscribe
    //         (data=> {
    //             console.log(data);
    //             if(data['success']==false) {
    //                 this.user.mail_checkingadd(JSON.stringify(this.model2)).subscribe
    //                 (data=> {
    //                     console.log(data);
    //                     if (data['success']) {
    //                         alert('Registered successfully...');
    //                         this.isRegister = false;
    //                         this.isLogin = false;
    //                         this.mobile_verified = true;
    //                         let myObj = {phone_number: this.model2.email};
    //                         localStorage.setItem('verified_mobile_number', JSON.stringify(myObj));
    //                         this.model.user_id = this.model2.email;
    //                         this.phone = this.model2.email;
    //                     } else {
    //                         alert('Error');
    //                         // alert('failed');
    //                         // this.verified = true;
    //                         // this.phone_btn_onclick();
    //                     }
    //                 });
    //             } else{
    //                 alert('Already registered with this email');
    //             }
    //         });
    //     } else{
    //         alert('Please fill all fields');
    //     }
    // }
    //
    // verify_code(){
    //     this.user.verify_code(this.model2.token,this.model2.user_id).subscribe
    //     (data=> {
    //         console.log(data);
    //         if(data['success']){
    //             alert('Verification Done');
    //             this.verification_code = false;
    //             this.m_verify=true;
    //         } else{
    //             alert('Already Verified this number...Try with another number');
    //             this.verification_code = true;
    //             this.m_verify=false;
    //         }
    //     });
    // }

    // phone_btn_onclick() {
    //     this.user.mail_checking(this.model2.user_id).subscribe
    //     (data=> {
    //         console.log(data);
    //         if (data['success']) {
    //             alert('Already registered with this mobile number');
    //         } else{
    //             //alert('Processing....');
    //             this.model2.phone_number = this.model2.user_id;
    //             this.model2.country_code ='+91';
    //             this.model2.via ='sms';
    //             this.user.verification_code_send(this.model2.phone_number).subscribe
    //             (data=> {
    //                 console.log(data);
    //                 if(data['success']){
    //                     //alert('Verification code sent to your mobile number');
    //                     this.verification_code = true;
    //                     this.m_verify = true;
    //                 } else{
    //                     alert('Error');
    //                 }
    //             });
    //         }
    //     });
    // }

    onNoClick(): void {
        this.dialogRef.close();
    }

    login_popup(): void{
        this.onNoClick();
        this.openDialog()
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(LikeComment, {
            width: '450px',
            panelClass: 'like-comment',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
