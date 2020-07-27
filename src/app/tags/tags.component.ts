import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  new_tag: string;
  tag: any;
  articles: any = {};

  constructor(private router:Router,private route: ActivatedRoute,public service: ArticleService) { }

  ngOnInit() {
    this.new_tag='';
    this.route.params.subscribe(params => {
      console.log(params)
      this.tag = params['tag'];
    });
    console.log('this is heaven ', this.tag)
    this.get_all_articles(this.tag);

  }
  get_all_articles(tag) {
    this.service.all_tags(tag).subscribe(
        data => {
          console.log('articles dataccccccccccccccccccccccccccc', data);
          this.articles = data['data'];
          // console.log('name',this.articles[0]['doc_fname']) ;
          // console.log('articles', this.articles);
        }
    )
    if(this.new_tag!=''){
      this.tag=this.new_tag;
    }
  }

}

