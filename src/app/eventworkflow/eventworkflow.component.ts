import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-eventworkflow',
  templateUrl: './eventworkflow.component.html',
  styleUrls: ['./eventworkflow.component.css']
})
export class EventworkflowComponent implements OnInit {

  event: 'tv-studio-workflow';
  constructor(private route: ActivatedRoute, private meta: Meta,
  private _formBuilder: FormBuilder, private titleService: Title) { }
  ngOnInit() {
          console.log('if condition');
     this.titleService.setTitle('TheRightDoctors: Workflow of Branded TV studio');
     this.meta.updateTag({name: 'description', content: 'TheRightDoctors: Workflow of Branded TV studio'});
     this.meta.updateTag({name: 'keywords', content: 'Presentation,Workflow of Branded TV studio,TheRightDoctors'});
     /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
     this.meta.updateTag({
         property: 'vr:canonical',
         content: 'https://therightdoctors.com/'+ this.event
     });
     this.meta.updateTag({property: 'og:title', content: 'TheRightDoctors: Workflow of Branded TV studio'});
     this.meta.updateTag({property: 'og:description', content: 'A behind the scenes look'});
     this.meta.updateTag({
         property: 'og:url',
         content: 'https://therightdoctors.com/' + this.event
     });
     this.meta.updateTag({name: 'twitter:title', content: 'TheRightDoctors: Workflow of Branded TV studio'});
     this.meta.updateTag({name: 'twitter:description', content: 'A behind the scenes look'});
   
     this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/TV-Studio-Workflow.jpg'});
    this.meta.updateTag({property: 'og:image:secure_url', content:'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/TV-Studio-Workflow.jpg'});
    this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/TV-Studio-Workflow.jpg'});
    this.meta.updateTag({
     name: 'twitter:url',
     content: 'https://therightdoctors.com/'+ this.event});
   this.meta.updateTag({name: 'twitter:text:description', content: 'A behind the scenes look'});
   
     }

}
