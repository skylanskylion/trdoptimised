import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../article.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-single-podcast',
  templateUrl: './single-podcast.component.html',
  styleUrls: ['./single-podcast.component.css']
})
export class SinglePodcastComponent implements OnInit {
    single_podcast: any;
    Shorturl:any;
    sing_podcast:any;
    event:any;
    slug:any;
  constructor(private service:UserServiceService,private route:ActivatedRoute,private aservice:ArticleService,private titleService: Title,
              private meta: Meta) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.slug = params['slug'];
          this.event = params['event'];
      });
      console.log('event',this.event);
      console.log('slug',this.slug);
    this.podcast(this.event,this.slug);

  }

  podcast(event,slug) {
    this.service.single_podcast(event,slug).subscribe(
        data=>{
          if(data['success']){
            this.single_podcast = data['data'];
          }
        console.log('single-podcast data',this.single_podcast);
            console.log("transcript=",this.single_podcast['transcript']);
            this.sing_podcast = this.single_podcast['transcript'].replace('<b>','').split('<b>');
            console.log("single art= ",this.sing_podcast);
            this.aservice.get_short_url('https://therightdoctors.com/' + this.single_podcast['category'] + '/' + this.single_podcast['slug']).subscribe(data=>{
                console.log('short Url responce from database');
                this.Shorturl = data['hash'];
            });


            this.titleService.setTitle('Podcast: '+this.single_podcast['sub_headline'] + ' | TheRightDoctors');
            this.meta.updateTag({name: 'description', content: this.single_podcast['sub_headline']+ ' ' + this.single_podcast['headline'] + 'TheRightDoctors'});
            this.meta.updateTag({name: 'keywords', content: this.single_podcast['sub_headline'] + '' +this.single_podcast['seo_keywords']});
            /*this.meta.updateTag({name: 'rel', href: this.single_podcast['image_url']});*/
            this.meta.updateTag({
                property: 'vr:canonical',
                content: 'https://therightdoctors.com/' +'podcast/'+ this.single_podcast['slug']
            });
            this.meta.updateTag({property: 'og:title', content: 'Podcast: '+this.single_podcast['sub_headline']});
            this.meta.updateTag({property: 'og:description', content: this.single_podcast['headline']});
            this.meta.updateTag({
                property: 'og:url',
                content: 'https://therightdoctors.com/' +'podcast/'+this.single_podcast['slug']
            });
            this.meta.updateTag({property: 'og:image', content: this.single_podcast['image_url']});
            this.meta.updateTag({property: 'og:image:secure_url', content: this.single_podcast['image_url']});

            this.meta.updateTag({name: 'twitter:title', content: 'Podcast: '+this.single_podcast['sub_headline'] + ':' +this.single_podcast['headline']});
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

    createRange(number)
    {
      var items : number[] = [];
      for(var  i=1; i<= number ;i++)
      {
        items.push(i);
      }
      return items;
    }

}
