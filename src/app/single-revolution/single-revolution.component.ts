import {APP_ID, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ArticleService} from '../article.service';
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
import {VgAPI} from 'videogular2/core';
import {isPlatformBrowser, Location} from '@angular/common';

@Component({
  selector: 'app-single-revolution',
  templateUrl: './single-revolution.component.html',
  styleUrls: ['./single-revolution.component.css']
})
export class SingleRevolutionComponent implements OnInit {
  /*catagory: string;
  slug: string;
  single_article: any ;
  revolution: any ;
  constructor(private route: ActivatedRoute, private service: ArticleService, private titleService: Title, private serviceh: CatagoryServiceService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.titleService.setTitle(params['slug'] + '|TheRighDoctors');
      this.slug = params['slug'];
      this.catagory = 'revolution-talk'; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
    this.get_single_video(this.slug, this.catagory);
    // this.titleService.setTitle(single_article['sub_headline'] + '|TheRighDoctors');
    this.get_catagory('revolution-talk');
  }
  get_single_video(slug, catagory) {
    console.log('get one video calling');
    this.service.get_single_video(slug, catagory).subscribe(
      data => {
        this.single_article = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet : ', this.single_article);
        this.titleService.setTitle(this.single_article['sub_headline'] + ' | TheRighDoctors');
      }
    );
  }

  createRange(number) {
    var items: number[] = [];
    for( var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
  get_catagory(slug) {
    console.log('get catagory calling');
    this.serviceh.get_single_catagory(slug).subscribe(
      data => {
        this.revolution = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet : ', this.revolution);
      }
    );
  }*/

  //@ViewChild('video') video: any;
  catagory: string;
  inc: number = 0;
  add_count: number = 0;
  odd_even: number = 0;
  video_list: any = [];
  slug: string;
  single_article: any;
  isbrowser: boolean;
  preload: string = 'auto';
  api: VgAPI;
  sources: Array<Object> = [];

  slug_list = ['Dr-SantanuGuha-endorsement-therightdoctors',
    'Dr-PPMohanan-endorsement-therightdoctors', 'Dr-SCManchanda-endorsement-therightdoctors',
    'Dr-VenkatSRam-endorsement-therightdoctors', 'Dr-saminsharma-endorsement-therightdoctors',
    'Dr-alaincreibier-endorsement-therightdoctors', 'Dr-davidholmes-endorsement-therightdoctors',
    'Dr-JOHNSIMPSON-endorsement-therightdoctors', 'Dr-yamane-endorsement-therightdoctors'];

  add_video_list = ['https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/DrSantanuGuha/DrSantanuGuha-360p.mp4',
    'https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/DrPPMohanan/DrPPMohanan-360p.mp4',
    'https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/DrSCManchanda/DrSCManchanda-360p.mp4',
    'https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/BPCON/Venkat%20S%20Ram/Venkat%20S%20Ram-360p.mp4',
    'https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/WCCPCI16/samin%20sharma/samin%20sharma-360p.mp4',
    'https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/C3/alain%20creibier/alain%20creibier-360p.mp4',
    'https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/C3/david%20holmes/david%20holmes-360p.mp4',
    'https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/C3/JOHN%20SIMPSON/JOHN%20SIMPSON-360p.mp4',
    'https://storage.googleapis.com/web-assets/videos/Youarewatchingtrd/C3/yamane/yamane-360p.mp4'];

  sing_art: any;
  isvalid: any;
  model: any = {};

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(APP_ID) private appId: string, private router: Router, private route: ActivatedRoute, private service: ArticleService, private titleService: Title, private meta: Meta, private DS: DomSanitizer, private location: Location) {
    this.isbrowser = isPlatformBrowser(platformId) ?
      true : false;
  }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.catagory = params['catagory'];
      this.isvalid = this.catagory;
      // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      //updates
    });
    this.get_single_video(this.slug, this.catagory);

  }

  pauseOrPlay(event: any) {
    /*if(this.video.nativeElement.paused){
      this.video.nativeElement.play() ;
    }
    else{
      this.video.nativeElement.pause();
    }
*/
  }

  Download(event: any) {
    // this.video.nativeElement.download;
  }

  loveit(loveit) {
    loveit++;
    console.log(loveit);
    this.model.anchor = loveit;
    //console.log(single_article['anchor']) ;
    console.log(this.slug);
    this.service.update_totalviews(this.model, this.slug).subscribe(
      data => {
        console.log(data['data']);
        //this.editform = data['data'] ;
      });
  }

  get_next_video(category, event) {
    this.service.get_next_video(category, event).subscribe(
      data => {
        this.video_list = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet next video : ', this.video_list);
      });
  }

  get_single_video(slug, catagory) {
    console.log('get one video calling');
    this.service.get_single_video(slug, catagory).subscribe(
      data => {
        this.single_article = data['data'];
        if (this.single_article['image_url1'] === 'false') {
          console.log('If Condition get single article Image_url1= :', this.single_article['image_url1']);
          this.single_article['image_url1'] = this.single_article['image_url'];
        }
        else {
          console.log('Else Condition get single article Image_url= :', this.single_article['image_url']);
          this.single_article['image_url1'] = this.single_article['image_url1'];
        }
        /* this.sing_art = this.single_article['transcript'].replaceAll('</b>','').split('<b>');*/
        console.log('transcript=', this.single_article['transcript']);
        this.sing_art = this.single_article['transcript'].replace('<b>', '').split('<b>');
        console.log('single art= ', this.sing_art);
        this.sources = new Array<Object>();
        /*this.isvalid = catagory ;*/
        this.sources.push({
          src: this.DS.bypassSecurityTrustResourceUrl(this.single_article['video_url']),
          type: 'video/mp4'
        });

        console.log('I CANT SEE DATA HERE in single componenet NUT i: ', this.single_article);
        this.titleService.setTitle(this.single_article['sub_headline'] + ' | TheRightDoctors');
        this.meta.updateTag({
          name: 'description',
          content: ' TheRightDoctors ' + ' ' + this.single_article['sub_headline'] + ' ' + this.single_article['headline']
        });
        this.meta.updateTag({name: 'keywords', content: this.single_article['seo_keywords']});
        /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
        this.meta.updateTag({
          property: 'vr:canonical',
          content: 'https://therightdoctors.com/' + this.single_article['category'] + '/' + this.single_article['slug']
        });
        this.meta.updateTag({property: 'og:title', content: this.single_article['sub_headline']});
        this.meta.updateTag({property: 'og:description', content: this.single_article['headline']});
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://therightdoctors.com/' + this.single_article['category'] + '/' + this.single_article['slug']
        });
        this.meta.updateTag({property: 'og:image', content: this.single_article['image_url']});
        this.meta.updateTag({property: 'og:image:secure_url', content: this.single_article['image_url']});
        this.meta.updateTag({name: 'twitter:title', content: this.single_article['headline']});
        this.meta.updateTag({name: 'twitter:description', content: this.single_article['headline2']});
        this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});
        this.meta.updateTag({name: 'twitter:image', content: this.single_article['image_url']});
        this.meta.updateTag({
          name: 'twitter:url',
          content: 'https://therightdoctors.com/' + this.single_article['category'] + '/' + this.single_article['slug']
        });
        this.get_next_video(this.single_article['category'], this.single_article['event']);
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
    if (x % 2 === 0) {
      this.inc++;
      console.log('in next video');
      if (this.video_list[this.inc]['video_url']) {
        console.log('next video url having');
        console.log(this.location.path());
        this.location.replaceState(this.video_list[this.inc]['category'] + '/' + this.video_list[this.inc]['slug']);
        this.single_article = this.video_list[this.inc];
        if (this.single_article['image_url1'].length > 0) {
          console.log('If Condition next  single article Image_url1= :', this.single_article['image_url1']);
          this.single_article['image_url1'] = this.single_article['image_url1'];
        } else {
          console.log('Else Condition next single article Image_url= :', this.single_article['image_url']);
          this.single_article['image_url1'] = this.single_article['image_url'];
        }
        this.sources = new Array<Object>();
        this.sources.push({
          src: this.DS.bypassSecurityTrustResourceUrl(this.video_list[this.inc]['video_url']),
          type: 'video/mp4'
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
    else {
      console.log('in add count');
      this.add_count++;
      /*  this.single_article=this.add_video_list[this.add_count];*/
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.add_video_list[this.add_count],
        type: 'video/mp4'
      });
    }

  }

  next_subs() {
    console.log('on next subs methos');
    this.inc++;
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
        // Set the video to the beginning
        console.log('end called');
        this.inc++;
        console.log('Incremented value', this.inc);
        console.log('Here next video', this.video_list[this.inc]);

        if (this.video_list[this.inc]['video_url']) {
          this.sources = new Array<Object>();
          this.sources.push({
            src: this.video_list[this.inc]['video_url'],
            type: 'video/mp4'
          });

        } else {
          this.inc++;
          this.sources = new Array<Object>();
          this.sources.push({
            src: this.video_list[this.inc]['video_url'],
            type: 'video/mp4'
          });
        }
      }
    );


  }


  onComplete() {
    console.log('on complte');
  }

  onsrcChanged(source) {
    console.log('on source changed');

  }

}
