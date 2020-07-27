import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {HeroProfileComponent} from "../dynamic/hero-profile.component";
import {AdItem} from "../dynamic/ad-item";
import {ArticleService} from "../article.service";
import {DOCUMENT, DomSanitizer, Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    single_article: any;
    load_data: any;
    gus: any;
    Shorturl: any;
    sing_art: any ;
    sing_art_sub: any;
    sing_art_sub_p: any;
    sing_art_sub_h: any;
    sources : Array<Object>=[];
    slug: any;
    category: any;
    blog_list: any;
  constructor(private _renderer2: Renderer2,private service: ArticleService,@Inject(DOCUMENT) private _document,private DS:DomSanitizer,private titleService: Title,
              private meta: Meta,private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
      this.route.params.subscribe(params => {
          this.slug = params['slug'];
          this.category = params['category'];
      });
    this.get_single_blog(this.slug,this.category);
  }
    createRange1(number)
    {
        var items : number[] = [];
        for(var  i=0; i<= number ;i++)
        {
            items.push(i);
        }
        return items;
    }
    get_single_blog(slug, catagory) {
        console.log('get one blog calling');
        this.service.get_single_video(slug, catagory).subscribe(
            data => {
                if(data['success'])
                {
                    this.load_data = true;
                    if(data['data']['guest3'].length > 0 || data['data']['guest4'].length > 0){
                        this.gus = true;
                    }
                }
                this.single_article = data['data'];
                console.log('single articles',this.single_article);
                this.service.get_short_url('https://therightdoctors.com/' + this.single_article['category'] + '/' + this.single_article['slug']).subscribe(data=>{
                    console.log('short Url responce from database');
                    this.Shorturl = data['hash'];
                });
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
                if(this.single_article['image_url1'] === 'false')
                {
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
                this.sing_art_sub = this.single_article['transcript_list'][0]['question'].replace('<b>','').split('<b>');
                this.sing_art_sub_h = this.single_article['transcript_list'][0]['answer'].replace('<b>','').split('<b>');
                console.log("single sub heading transcript", this.sing_art_sub);
                console.log("single paragraphs", this.sing_art_sub_p);
                console.log("single highlights", this.sing_art_sub_h);
                console.log("single art= ",this.sing_art);
                this.sources = new Array<Object>();
                /*this.isvalid = catagory ;*/
                this.sources.push({
                    src: this.DS.bypassSecurityTrustResourceUrl(this.single_article['video_url']),
                    type: "video/mp4"
                });

                console.log('I CANT SEE DATA HERE in single componenet NUT i: ', this.single_article);


                this.titleService.setTitle(this.single_article['headline'] +  ' | ' + this.single_article['sub_headline'] + ' | TheRightDoctors');
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
                    name: 'twitter:player',
                    content: this.single_article['video_url']});
                this.meta.updateTag({name: 'twitter:player:stream', content: this.single_article['video_url']});
                this.get_next_blog(this.single_article['category'], this.single_article['event']);
            }
        );

    }
    get_next_blog(category, event) {
        this.service.get_next_video(category, event).subscribe(
            data => {
                if (data['success']) {
                    this.blog_list = data['data'];
                    console.log('blog list top articles');
                    console.log(this.blog_list);
                }
            });
    }
}
