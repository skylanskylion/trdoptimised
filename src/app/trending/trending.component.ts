import { Component, OnInit, ViewChild } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../article.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import {Meta, Title} from "@angular/platform-browser";
import {Location} from '@angular/common';
export class new_comment {
  name=JSON.parse(localStorage.getItem('currentUser')).username
  userid = JSON.parse(localStorage.getItem('currentUser')).user_id;
  response='None';
  replies = [{name:'one'}];
}
export class new_like {
  id = '';
  name_liked = '';
  name_liker = '';
}
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  [x: string]: any;
    audio_list: object[] = [];
    eve : any;
    disp_com : boolean;
    single_podcast: any;
    Shorturl:any;
    sing_podcast:any;
    event:any;
    slug:any;
    category:any;
    ConnList:any; 
    playlist_toggle: any;
    single_article: any;
    toggle1: any;
    like_list: any[] = [];
    private temp_like: new_like;
    counter: number=0;
    // like_details:any ={};
    model: any = {};
    final: any;
    p_list: any;
    loggedIn:boolean=false;
    pip : any;
    private p= '';
    show:boolean = true;
    private popp: new_comment;
    private pip2: number;
    buttonName: any;
    path : any;
    path_val:any;
    returnUrl: any;
    loop: any;
    liked:any;
    commentshow: any;
    localsto:any;
  constructor(private service:UserServiceService,private route:ActivatedRoute,private aservice:ArticleService,private titleService: Title,
              private meta: Meta,public dialog: MatDialog) { }

  ngOnInit() {
    this.disp_com =false;
    this.commentshow=0;
    this.loop=0;
    this.pip=0;
    this.pip2=0;
    this.liked = 0;//------
    this.route.params.subscribe(params=>{
      this.event = 'rssdi-jaipur-2019';
      this.slug = params['slug'];
      // alert(this.event);
      // alert(this.slug)
      this.audiofiles('rssdi-jaipur-2019');
      this.path = this.router.url;
      console.log("this is path", this.path)    
      console.log("this is path", this.path['value'][0]['path'])
      this.path_val=this.path['value'][0]['path']
      this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '';
     // alert(this.event);single_podcast
      if(this.event) {
        console.log("I have something");
      } else {
        console.log("Nothing here...");
        this.event = "";
      }
    //   if(this.event == ""){
    //       this.event = 'rssdi-jaipur-2019';
    //   }
  });//------
    // this.follow_toggle = 0;
    // this.playlist_toggle = 0;
      this.route.params.subscribe(params => {
          this.slug = params['slug'];
          // this.event = params['event'];
          // this.category = params['catagory'];
          });
      console.log('event',this.event);
      console.log('slug',this.slug);
      this.category='podcast';
    this.podcast('corona-virus',this.slug);
    this.service.get_single_video(this.slug, this.category).subscribe(
      data => {
        if(data['success'])
        {
          this.single_article = data['data'];
          console.log('acascascascasc',data['data']);
         // this.likedornot();
          // this.takevalue(data['data']);
          // this.takevalue0(data['data']['comments'])
        }
      });
      if(localStorage.getItem('currentUser')){
        this.loggedIn=true;
      }else{
        this.loggedIn=false;
      }
   
   this.likedornot();   
  }

  display_comment()
  {
    console.log('before value',this.disp_com)
    this.disp_com=(!this.disp_com);
    console.log('after value',this.disp_com)

  }

  logout(){
    console.log('in logout fuction');
    // remove user from local storage to log user out
   const lostruser = JSON.parse(localStorage.getItem('currentUser'));
   console.log(lostruser);
    // alert(lostruser);
    // alert(temp);
      localStorage.removeItem('currentUser');
      window.location.reload();
  }

  podcast(event,slug) {
    this.service.single_podcast1(event,slug).subscribe(
        data=>{
          if(data['success']){
            this.single_podcast = data['data'];
            console.log('single podcast data coronavirus',this.single_podcast);
            // alert("Data :: "+JSON.stringify(this.single_podcast));
            if(this.single_podcast['event']=='rssdi-jaipur-2019'||this.single_podcast['event']=='rssdi-ahmedabad-2018')
            {
              this.eve='RSSDI tv'
            }
            if(this.single_podcast['event']=='dr-ulhas-pandurangi-fifteenth-annual-electrocardiology-course-basics-and-beyond-madras-medical-mission-2018')
            {
              this.eve='ECG course'
            }
            if(this.single_podcast['event']=='dr-ulhas-pandurangi-sixth-live-cardiac-electrophysiology-workshop-madras-medical-mission-2018')
            {
              this.eve='Electrophysiology Workshop'
            }
            if(this.single_podcast['event']=='aicog-2018')
            {
              this.eve= 'AICOG tv'
            }
            if(this.single_podcast['event']=='stemi-india-lucknow-2018')
            {
              this.eve = 'STEMI India tv'
            }
            if(this.single_podcast['event']=='wcce-2017')
            {
              this.eve= 'WCCE tv'
            }
            if(this.single_podcast['event']=='csi-2017')
            {
              this.eve = 'CSI tv'
            }
            if(this.single_podcast['event']=='wccicc-2017')
            {
              this.eve= 'WCCICC tv'
            }
          }
          
        console.log('single-podcast data',this.single_podcast);
            console.log("transcript=",this.single_podcast['transcript']);
            this.sing_podcast = this.single_podcast['transcript'].replace('<b>','').split('<b>');
            console.log("single art= ",this.sing_podcast);
            this.aservice.get_short_url('https://podcast.therightdoctors.com/'  + this.single_podcast['slug']).subscribe(data=>{
                console.log('short Url responce from database');
                this.Shorturl = data['hash'];
            });

            
            this.titleService.setTitle('Podcast: '+this.single_podcast['sub_headline'] + ' | TheRightDoctors');
            this.meta.updateTag({name: 'description', content: this.single_podcast['sub_headline']+ ' ' + this.single_podcast['headline'] + 'TheRightDoctors'});
            this.meta.updateTag({name: 'keywords', content: this.single_podcast['sub_headline'] + '' +this.single_podcast['seo_keywords']});
            
            console.log('single podcast for cornoa',this.sing_podcast);

            this.meta.updateTag({
                property: 'vr:canonical',
                content: 'https://therightdoctors.com/' + this.single_podcast['event'] + '/' + this.single_podcast['category'] + '/' + this.single_podcast['slug']
            });
          

 
            this.meta.updateTag({property: 'og:title', content: 'Podcast: '+this.single_podcast['sub_headline']+' on COVID-19'});
            this.meta.updateTag({property: 'og:description', content: this.single_podcast['headline']});
            this.meta.updateTag({
                property: 'og:url',
                content: 'https://therightdoctors.com/'+this.single_podcast['event'] + '/' + this.single_podcast['category'] + '/' + this.single_podcast['slug']
            });

            this.meta.updateTag({property: 'og:image', content: this.single_podcast['image_url']});
            this.meta.updateTag({property: 'og:image:secure_url', content: this.single_podcast['image_url']});
            // console.log('image of corona',this.single_podcast['image_url'])

            this.meta.updateTag({name: 'twitter:title', content: 'Podcast: '+this.single_podcast['sub_headline']+' on COVID-19'});
            this.meta.updateTag({name: 'twitter:description', content: this.single_podcast['headline2']});
            /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_podcast['headline2']});*/
            this.meta.updateTag({name: 'twitter:image', content: this.single_podcast['image_url']});
            this.meta.updateTag({
                name: 'twitter:player',
                content: this.single_podcast['video_url']});
            this.meta.updateTag({name: 'twitter:player:stream', content: this.single_podcast['video_url']});
        }
    );
  }
  audiofiles(event)
  { 
    //alert('nitin'+event);
    this.service.podcast_audio_files(event).subscribe(
        data=>{
          // alert("JSON DATA :: "+JSON.stringify(data['data']))
            console.log('data',data);
          if(data['success']){
              this.audio_list = data['data'];
              // alert("Single audio :: "+JSON.stringify(this.audio_list[0]))
          }
          console.log('podcast files data',this.audio_list);
        }
    );
  }
    createRange(number)
    {
      var items : number[] = [];
      for(var  i=1; i<= number ;i++)
      {
        items.push(i);
      }
      return items;
    }
    onSubmit(){

      console.log(this.model);
      // alert(JSON.stringify(this.model));
      // alert("Before Login");
  
      this.service.mail_checking_login(this.model.email, this.model.password).subscribe(data => {
        alert("Logging In");
        console.log('data: ', data);
        if(data['success']){
          let user = data;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          // this._location.back(); 
          location.reload();
        }
        else{
          alert('Credentials are incorrect, please try again');
        }
      })
    }
    navigat()
    {
      this.dialog.closeAll();
    }
    // navigat_reg()
    // {
    //   this.dialog.closeAll();
    //   this.route.navigate(['/register']);
    // }
  

}
