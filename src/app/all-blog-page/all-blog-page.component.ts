import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-all-blog-page',
  templateUrl: './all-blog-page.component.html',
  styleUrls: ['./all-blog-page.component.css']
})
export class AllBlogPageComponent implements OnInit {
event: any;
  category: any;
  constructor(private articleService: ArticleService) { }
blog_data: any;
  ngOnInit() {
    this.event = "blog";
    this.category = "blog";
    this.get_all_blogpage(this.event, this.category)
  }

  get_all_blogpage(event, category) {
    this.articleService.get_single_event_category(event,category).subscribe(
        data => {
      if(data['success']) {
        this.blog_data = data['data'];
        console.log('blog data', this.blog_data);
      }
    });
  }
}
