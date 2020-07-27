import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-event-branded',
  templateUrl: './post-event-branded.component.html',
  styleUrls: ['./post-event-branded.component.css']
})
export class PostEventBrandedComponent implements OnInit {

  constructor( private meta: Meta,
    private _formBuilder: FormBuilder, private titleService: Title) { }

  ngOnInit() {

    this.titleService.setTitle('Post Event Branded App| TheRightDoctors');
     this.meta.updateTag({name: 'description', content: 'Post Event Branded App'});
     this.meta.updateTag({name: 'keywords', content: 'Post Event Branded App, TheRightDoctors'});
     /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
     this.meta.updateTag({
         property: 'vr:canonical',
         content: 'https://therightdoctors.com/post-event-branded-app'
     });
     this.meta.updateTag({property: 'og:title', content: 'Post Event Branded App TheRightDoctors'});
     this.meta.updateTag({property: 'og:description', content:  'Post Event Branded App TheRightDoctors'});
     this.meta.updateTag({
         property: 'og:url',
         content: 'https://therightdoctors.com/post-event-branded-app'
     });
     this.meta.updateTag({name: 'twitter:title', content: 'Post Event Branded App TheRightDoctors'});
     this.meta.updateTag({name: 'twitter:description', content: 'Post Event Branded App TheRightDoctors'});

     this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Post-Event-Branded-App/Slide1.PNG'});
     this.meta.updateTag({property: 'og:image:secure_url', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Post-Event-Branded-App/Slide1.PNG'});
     this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Post-Event-Branded-App/Slide1.PNG'});

     /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
     
     this.meta.updateTag({
         name: 'twitter:url',
         content: 'https://therightdoctors.com/post-event-branded-app'});
     this.meta.updateTag({name: 'twitter:text:description', content: 'Post Event Branded App TheRightDoctors'});
     
  }
  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}
