import {Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';
import {ArticleService} from '../article.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
import {VgAPI} from 'videogular2/core';

@Component({
  selector: 'app-the-speakers',
  templateUrl: './the-speakers.component.html',
  styleUrls: ['./the-speakers.component.css']
})
export class TheSpeakersComponent implements OnInit {
  @ViewChild('video') video: any;
  catagory: any;
  model: any = {};
  isvalid: any;
  slug: any;
  inc: number;
  video_list: any = [];
  single_article: any;
  isbrowser: boolean;
  preload: string = 'auto';
  api: VgAPI;
  sources: Array<Object> = [];
  sing_art: any;

  constructor(private service: CatagoryServiceService,private titleService: Title, private services: ArticleService, private route: ActivatedRoute, private router: Router,
              private location: Location, private DS: DomSanitizer, @Inject(PLATFORM_ID) private platformId:Object, private meta: Meta) {
  }

  ngOnInit() {
    this.titleService.setTitle('Speakers | TheRighDoctors');
      this.meta.updateTag({name: 'description', content:  'Listen to experts who take a deep dive on a chosen topic'});
      this.meta.updateTag({name: 'keywords', content: 'therightdoctors, the speakers, Best cardiologist, top cardiac surgeon, best hospitals in India, ' +
              'top 10 world class doctors, super specialty and cancer hospital, medical services in cardiology, neurology, nephrology, orthopedic, knee and hip replacement, bone marrow and heart transplant, ' +
              'gastro, urology, neuro surgery, gene therapy steam cells, diabetic treatment, kidney and organ transplant, TheRightDoctors '});

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
    this.get_catagory('the-speakers');


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
      this.location.replaceState(this.video_list[this.inc]['category'] + '/' + this.video_list[this.inc]['slug']);
      this.single_article = this.video_list[this.inc];
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
    console.log('get catagory calling');
    this.service.get_single_catagory(slug).subscribe(
      data => {
        this.catagory = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet : ', this.catagory);
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
    console.log('love it function');
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
