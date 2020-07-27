import {Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';
import {ArticleService} from '../article.service';
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-in-conversation',
  templateUrl: './in-conversation.component.html',
  styleUrls: ['./in-conversation.component.css']
})
export class InConversationComponent implements OnInit {
  @ViewChild('video') video: any;
  catagory: any;
  inc: number = 0;
  video_list: object[] = [];
  single_article: any;
  sources: Array<Object> = [];
  preload: string = 'auto';
  model: any = {};
  isvalid: any;
  slug: any;
  sing_art: any;
  conv: object[] = [];
  loading: boolean = false;

  constructor(private service: CatagoryServiceService, private services: ArticleService, private router: Router, private route: ActivatedRoute,
              private titleService: Title, private DS: DomSanitizer, private location: Location, @Inject(PLATFORM_ID) private platformId:Object, private meta: Meta) {
  }

  ngOnInit() {
    this.loading = false;
    this.titleService.setTitle('In Conversation | TheRighDoctors');

      this.meta.updateTag({name: 'description', content:  'Legendary Doctors, on what makes them tick and beyond'});
      this.meta.updateTag({name: 'keywords', content: 'therightdoctors, in conversation, Best cardiologist, top cardiac surgeon, best hospitals in India, TheRightDoctors, Emcure aicog, Stemi India lucknow 2018, Emcure csi tv, CSI 2017, CSI 2018, WCCICC 2017, Cardiac Prevent, Wccpci 2016, the right doctors'});

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
    this.get_catagory('in-conversation');
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
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
      if (this.single_article['image_url1'] === 'false') {
        console.log('If Condition get single article Image_url1= :', this.single_article['image_url1']);
        this.single_article['image_url1'] = this.single_article['image_url'];
      }
      else {
        console.log('Else Condition get single article Image_url= :', this.single_article['image_url']);
        this.single_article['image_url1'] = this.single_article['image_url1'];
      }
      console.log('single_article', this.single_article);
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.DS.bypassSecurityTrustResourceUrl(this.video_list[this.inc]['video_url']),
        type: 'video/mp4'
      });

    } else {
      console.log('next video url not having');
      this.inc++;
      this.location.replaceState(this.video_list[this.inc]['category'] + '/' + this.video_list[this.inc]['slug']);
      this.single_article = this.video_list[this.inc];
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.DS.bypassSecurityTrustResourceUrl(this.video_list[this.inc]['video_url']),
        type: 'video/mp4'
      });
    }
  }

  get_catagory(slug) {
    this.loading = true;
    console.log('get catagory calling');
    this.service.get_single_catagory(slug).subscribe(
      data => {
        this.catagory = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet : ', this.catagory);
        /*this.sing_art = this.catagory['transcript'].replace('<b/>','').split('<b>');*/
        this.sources = new Array<Object>();
        /*this.isvalid = catagory ;*/
        this.sources.push({
          src: this.DS.bypassSecurityTrustResourceUrl(this.catagory[0]['video_url']),
          type: 'video/mp4'
        });
        for (var i = 1; i < this.catagory.length; i++) {
          this.video_list.push(this.catagory[i]);
        }
        console.log(this.video_list);
        this.loading = false;
      }
    );

  }

  pauseOrPlay(event: any) {
    if (this.video.nativeElement.paused) {
      this.video.nativeElement.play();
    }
    else {
      this.video.nativeElement.pause();
    }

  }

  Download(event: any) {
    this.video.nativeElement.download;
  }

  loveit(loveit, like_slug) {
    console.log('hiiii');
    loveit++;
    console.log(loveit);
    this.model.anchor = loveit;
    //console.log(single_article['anchor']) ;
    this.slug = like_slug;
    console.log(this.slug);
    this.services.update_totalviews(this.model, this.slug).subscribe(
      data => {
        console.log(data['data']);
        //this.editform = data['data'] ;
      });
  }
}
