import {Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';
import {ArticleService} from '../article.service';
import {Location} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-one-more-thing',
  templateUrl: './one-more-thing.component.html',
  styleUrls: ['./one-more-thing.component.css']
})
export class OneMoreThingComponent implements OnInit {
  @ViewChild('video') video: any;
  one_catagory: any;
  model: any = {};
  slug: any;
  sources: Array<Object> = [];
  sing_art: any;
  isvalid: any;
  /*catagory: string;*/
  inc: number = 0;
  video_list: any = [];
  single_article: any;

  constructor(private cat_service: CatagoryServiceService,private titleService: Title, private services: ArticleService,
              private router: Router, private route: ActivatedRoute, private DS: DomSanitizer, private location: Location,
              @Inject(PLATFORM_ID) private platformId:Object, private meta: Meta) {
  }

  ngOnInit() {
    this.titleService.setTitle('The Interview | TheRighDoctors');

      this.meta.updateTag({name: 'description', content:  'The most important takeaways  on hot button medical issues.'});
      this.meta.updateTag({name: 'keywords', content: 'therightdoctors, one more thing, Best cardiologist, top cardiac surgeon, best hospitals in India, TheRightDoctors, Stemi India lucknow 2018, Emcure csi tv, CSI 2017, CSI 2018, WCCICC 2017, Cardiac Prevent, Wccpci 2016, the right doctors'});


      this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.one_catagory = params['catagory'];
      this.isvalid = this.one_catagory;
      // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      //updates
    });
    this.get_one_more('one-more-thing');
  }

  get_one_more(slug) {
    console.log('get catagory calling');
    this.cat_service.get_single_catagory(slug).subscribe(
      data => {
        this.one_catagory = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet : ', this.one_catagory);
        this.sources = new Array<Object>();
        /*this.isvalid = catagory ;*/
        this.sources.push({
          src: this.DS.bypassSecurityTrustResourceUrl(this.one_catagory[0]['video_url']),
          type: 'video/mp4'
        });
        for (var i = 1; i < this.one_catagory.length; i++) {
          this.video_list.push(this.one_catagory[i]);
        }
        console.log(this.video_list);
      }
    );
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
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

  nextVideo() {
    this.inc++;
    console.log('in next video');
    if (this.video_list[this.inc]['video_url']) {
      console.log('next video url having');
      console.log(this.location.path());
      this.location.replaceState(this.video_list[this.inc]['category'] + '/' + this.video_list[this.inc]['slug']);
      this.single_article = this.video_list[this.inc];
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

  loveit(loveit, like_slug) {
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






