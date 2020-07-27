import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatSort, MatTableDataSource} from '@angular/material';


export interface Element {
  Id: number;
  title: string,
  Headline: string,
  Slug: string,
  description: string,
  doctor_name: string,
  specialisation: string,
  hospital: string,
  type: string,
  identifier: string,
  event: string,
  seo_description: string,
  seo_keywords: string,
  URL: string,
  Alt: string,
  Similar_Topics: string,
  Total_Views: string,
  Designation: string,
  Thumbnail_url: string,
  Bio: string,
  Tags: string,
  People: string,
  Slides: string,
  Created_at: string,
  Updated_at: string,
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})


export class ImagesComponent implements OnInit {
  model: any = {};
  model2: any = {};
  articles: any;
  slug: any;
  e_slug: any;
  model1: any = {};
  editform: any;
  check = 'false';
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: any;
  dataSource: any;
  list: any;
  // list: object[] = [];
  t: any;
  panelOpenState: boolean = false;

  constructor(private article: ArticleService, private route: ActivatedRoute, private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {

    if ((localStorage.getItem('images')) != 'true') {
      var username = window.prompt('Enter your username', '');
      var password = window.prompt('Enter your password', '');
      var user1 = 'images';
      var pass1 = 'trd123!!!';
      if (username == user1 && password == pass1) {
        alert('Success');
        localStorage.setItem('images', 'false');
      }
      else {
        //localStorage.setItem('isauthenticated','false');
        this.router.navigate(['notfound']); // works well
      }
    }

    this.article.table_data_images().subscribe(
      data => {
        //console.log(data['data']);
        this.articles = data['data'];
        console.log('data:', this.articles);
        const ELEMENT_DATA: Element[] = this.articles;
        console.log('Element', ELEMENT_DATA);

        this.displayedColumns = ['Id', 'Title', 'Headline', 'Slug', 'description', 'doctor_name', 'specialisation', 'hospital', 'type', 'identifier', 'event', 'seo_description',
          'seo_keywords', 'URL', 'Alt', 'Similar_Topics', 'Total_Views', 'Designation', 'Thumbnail_url', 'Bio', 'Tags', 'People',
          'Slides', 'Created_at', 'Updated_at'];

        // this.dataSource = ELEMENT_DATA;

        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      });
  }

  create() {
    console.log(this.model);
    const temp_data = this.model;
    this.article.images_create(temp_data).subscribe(
      data => {
        console.log(data);
        this.articles = data;
        this.check = 'true';
        if (data.json()['success']) {
          alert('Success');
        }
      });
  }

  deleteform() {
    // this.title = this.model.title ;
    this.slug = this.model._id;

    this.article.deleteimageform(this.slug).subscribe(
      data => {
        console.log(data['data']);
        //this.editform = data['data'] ;
        this.check = 'true';
        if (this.check == 'true') {
          alert('Success');
        }
      });
    //console.log(this.editform) ;
  }

  displayform() {
    console.log(this.model1._id);
    this.e_slug = this.model1._id;
    this.article.displayimageform(this.model1._id).subscribe(
      data => {
        console.log(data['data']);
        this.model2 = data['data'];
      });
    //console.log(this.editform) ;
  }

  createRange(number) {
    const item: number[] = [];
    for (let i = 0; i < number; i++) {
      item.push(i);
    }
    return item;

  }

  update_edit() {
    console.log('update form');
    console.log(this.model2._id);
    this.article.update_image_edit(this.model2, this.model2._id).subscribe(
      data => {
        console.log(data['data']);
        this.editform = data['data'];
        this.check = 'true';
        if (this.check == 'true') {
          alert('Success');
        }
      });
  }
}
