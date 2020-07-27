import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CatagoryServiceService} from '../catagory-service.service';
import {ArticleService} from '../article.service';
import {PerfectScrollbarComponent, PerfectScrollbarConfigInterface, PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';
import {VgAPI} from 'videogular2/core';
import {Meta, Title} from '@angular/platform-browser';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  /*template: '<div> <h2> Hello {{name}}</h2> <button (click)="CallFunction1()">Call Function 1</button> <button (click)="CallFunction2()">Call Function 2</button> </div>',*/
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, AfterViewInit {
  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent) componentScroll: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;
  slug: string;
  single_article: any;
  articles: any;
  seo_des_one: any;
  doctor_name_one: any;
  specialisation_one: any;
  url_one: any;
  title_one: any;
  seo_key_one: any;
  hospital_one: any;
  slug_one: any;
  video_one: any;
  api: VgAPI;
  headline_one: any;
  headline_two: any;
  name: string;
  video_list: any = [];
  inc: number = 0;
  slugn: any = {};
  temp: any;
  i: any;
  sources: Array<Object>;
  currentItem: IMedia = this.video_list[this.inc];

  constructor(private route: ActivatedRoute, private titleService: Title, private meta: Meta, private service: CatagoryServiceService, private serviceh: ArticleService) {
    this.name = 'Angular2';
  }

  ngAfterViewInit() {
    // console.log('Directive geometry', this.directiveScroll.geometry());

    // console.log('Component geometry', this.componentScroll.directiveRef.geometry());
  }

  onScrollToXY(x: number, y: number) {
    this.directiveScroll.scrollTo(x, y, 500);

    this.componentScroll.directiveRef.scrollTo(x, y, 500);
  }

  onScrollToTop() {
    this.directiveScroll.scrollToTop();

    this.componentScroll.directiveRef.scrollToTop();
  }

  onScrollToLeft() {
    this.directiveScroll.scrollToLeft();

    this.componentScroll.directiveRef.scrollToLeft();
  }

  onScrollToRight() {
    this.directiveScroll.scrollToRight();

    this.componentScroll.directiveRef.scrollToRight();
  }

  onScrollToBottom() {
    this.directiveScroll.scrollToBottom();
    this.componentScroll.directiveRef.scrollToBottom();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.titleService.setTitle('Live | TheRighDoctors');
      if (params['slug']) {
        console.log('dajhsdsd');
        console.log(params['slug']);
        this.get_single_video(params['slug']);
      }
      else {
        console.log('jajkjas');
        this.live_home();
        this.get_next_video();
        // In a real app: dispatch action to load the details here.
      }
    });

  }

  /*CallFunction1() {
    slider.myExtObject.func1();

  }

  CallFunction2() {
    slider.myExtObject.func2();
  }*/
  createRange(number) {
    /*console .log(number);*/
    var items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  get_next_video() {
    console.log('get next video');
    this.service.get_next_live().subscribe(
      data => {
        this.video_list = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet next video : ', this.video_list);
      }
    );
  }


  get_single_video(slug_name) {
    console.log('get one video calling single video');
    this.service.get_live_category().subscribe(
      data => {
        this.articles = data['data'];
        console.log('I CANT SEE DATA HERE get single: ', this.articles);
      });
    if (slug_name == 'home') {
      slug_name = this.articles[0]['slug'];
      console.log('slug is ' + slug_name);
    }
    this.serviceh.single_video_page(slug_name).subscribe(
      data1 => {
        this.single_article = data1['data'];
        console.log('I CANT SEE DATA HERE in single componenet : ', this.single_article);

        if (slug_name == this.single_article['slug']) {
          console.log('condition true get single video ');
          this.seo_des_one = this.single_article['seo_description'];
          console.log('single seo_des' + this.seo_des_one);
          this.doctor_name_one = this.single_article['sub_headline'];
          this.specialisation_one = this.single_article['speciality'];
          this.url_one = this.single_article['image_url'];
          this.title_one = this.single_article['title'];
          this.seo_key_one = this.single_article['seo_keywords'];
          this.hospital_one = this.single_article['hospital'];
          this.slug_one = this.single_article['slug'];
          console.log('slugone ' + this.slug_one);
          this.video_one = this.single_article['video_url'];
          this.headline_one = this.single_article['headline'];
          this.headline_two = this.single_article['headline2'];
        }
        else {
          console.log('false condition get single video ');
          this.seo_des_one = this.articles[0]['seo_description'];
          this.doctor_name_one = this.articles[0]['sub_headline'];
          this.specialisation_one = this.articles[0]['speciality'];
          this.url_one = this.articles[0]['image_url'];
          this.title_one = this.articles[0]['title'];
          this.seo_key_one = this.articles[0]['seo_keywords'];
          this.hospital_one = this.articles[0]['hospital'];
          this.slug_one = this.articles[0]['slug'];
          this.video_one = this.articles[0]['video_url'];
          this.headline_one = this.articles[0]['headline'];
          this.headline_two = this.articles[0]['headline2'];
        }
          this.meta.updateTag({name: 'description', content:  ' TheRightDoctors ' + ' ' + this.doctor_name_one + ' ' + this.headline_one});
          this.meta.updateTag({name: 'keywords', content: this.seo_key_one});

          this.meta.updateTag({
              property: 'vr:canonical',
              content: 'https://therightdoctors.com/' + this.slug_one });
          this.meta.updateTag({property: 'og:title', content: this.doctor_name_one});
          this.meta.updateTag({property: 'og:description', content: this.headline_one});
          this.meta.updateTag({
              property: 'og:url',
              content: 'https://therightdoctors.com/'+this.slug_one });
          this.meta.updateTag({property: 'og:image', content: this.url_one});
          this.meta.updateTag({property: 'og:image:secure_url', content: this.url_one});

          this.meta.updateTag({name: 'twitter:title', content: this.doctor_name_one + ':' +this.headline_one});
          this.meta.updateTag({name: 'twitter:description', content: this.headline_two});
          /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
          this.meta.updateTag({name: 'twitter:image', content: this.url_one});
          this.meta.updateTag({
              name: 'twitter:player',
              content: this.video_one});
          this.meta.updateTag({name: 'twitter:player:stream', content: this.video_one});

        this.get_next_video();
        this.sources = new Array<Object>();
          /*this.isvalid = catagory ;*/
          this.sources.push({
              src: this.single_article['video_url'],
              type: 'video/mp4'
          });

      }
    );
  }

  live_home() {
    let slug1: string;
    let sg: string;
    console.log('get one video calling live home');
    this.service.get_live_category().subscribe(
      data => {
        this.articles = data['data'];
        // console.log('I CANT SEE DATA HERE : ', this.articles);
        slug1 = this.articles[0]['slug'];
        // console.log('hghgjhsdesaws ' + this.articles[0]['slug']);
        this.serviceh.single_video_page(this.articles[0]['slug']).subscribe(
          data1 => {
            this.single_article = data1['data'];
            console.log('I CANT SEE DATA HERE in single componenet : ', this.single_article);

            if (this.articles[0]['slug'] == this.single_article['slug']) {
              console.log('true live');

              this.seo_des_one = this.single_article['seo_description'];
              this.doctor_name_one = this.single_article['sub_headline'];
              this.specialisation_one = this.single_article['speciality'];
              this.url_one = this.single_article['image_url'];
              this.title_one = this.single_article['title'];
              this.seo_key_one = this.single_article['seo_keywords'];
              this.hospital_one = this.single_article['hospital'];
              this.slug_one = this.single_article['slug'];
              this.video_one = this.single_article['video_url'];
              this.headline_one = this.single_article['headline'];
              this.headline_two = this.single_article['headline2'];
            }
            else {
              console.log('false  live   \'');
              this.seo_des_one = this.articles[0]['seo_description'];
              this.doctor_name_one = this.articles[0]['sub_headline'];
              this.specialisation_one = this.articles[0]['speciality'];
              this.url_one = this.articles[0]['image_url'];
              this.title_one = this.articles[0]['title'];
              this.seo_key_one = this.articles[0]['seo_keywords'];
              this.hospital_one = this.articles[0]['hospital'];
              this.slug_one = this.articles[0]['slug'];
              this.video_one = this.articles[0]['video_url'];
              this.headline_one = this.articles[0]['headline'];
              this.headline_two = this.articles[0]['headline2'];
            }
            this.sources = new Array<Object>();
            /*this.isvalid = catagory ;*/
            this.sources.push({
              src: this.single_article['video_url'],
              type: 'video/mp4'
            });

          }
        );
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
    this.api.play();
  }

  sourcess() {

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
}
