import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-category-all',
  templateUrl: './category-all.component.html',
  styleUrls: ['./category-all.component.css']
})
export class CategoryAllComponent implements OnInit {
  csinic: any;
  wccpci: any;
  cardic: any;
  emcure: any;
  apvic: any;
  csicon: any;
  wcchd: any;
  aicog:any;
  ihj: any;
  csitv:any;
  wccicc:any;
  ias: any;
  c_three:any;
  stemi: any;
  category_heading: any;
  cat: any;
  loading: boolean = false;
  slug: any;

  constructor(private article: ArticleService, private route: ActivatedRoute, private router: Router, private titleservice: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.loading = true;
      this.titleservice.setTitle('Category TheRightDoctors');

      this.meta.updateTag({name: 'description', content:  'TheRightDoctors.com One more thing interview speakers '});
      this.meta.updateTag({name: 'keywords', content: 'therightdoctors, stemi india 2018, emcure aicog tv 2018, bhubaneswar, wcce jaipur 2017, csicon kolkata 2017, wccicc mumbai 2017,' +
              ' csicon kochi 2017, wccpci mount abu 2018, c3 florida 2018, apvic new delhi 2016, csinic hyderabad 2016, revolution talk, ihj, csi cardiac prevent new delhi 2015 wcchd mumbai, ias hyderaba 2014  ' +
              'TheRightDoctors'
      });
    this.route.params.subscribe(params => {
      this.get_csicnic(params['category']);
      this.get_wccpci(params['category']);
      this.get_cardic(params['category']);
      this.get_emcure(params['category']);
      this.get_apvic(params['category']);
      this.get_csicon(params['category']);
      this.get_ihj(params['category']);
      this.get_stemi_india(params['category']);
      this.get_aicog(params['category']);
      this.get_wccicc(params['category']);
      this.get_csitv(params['category']);
      this.get_c_three(params['category']);
      this.get_ias(params['category']);
      this.get_wcchd(params['category']);
      this.cat = params['category'];
      this.slug = params['slug'];
      if (params['category'] == 'the-interview') {
        this.category_heading = 'The-Interview';
      }
      if (params['category'] == 'in-conversation') {
        this.category_heading = 'In-Conversation';
      }
      if(params['category']=='the-speakers'){
        this.category_heading ='The-Speakers';
      }
    });
    //console.log(this.emcure['data'].length / 4);
  }

  get_csicnic(category) {
    this.loading = true;
    this.article.csicnic(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.csinic = data;
      });
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 0; i <= number - 1; i++) {
      items.push(i);
    }
    return items;
  }

  Range(number) {
    var items: number[] = [];
    for (var i = 0; i <= number - 1; i++) {
      items.push(i);
    }
    return items;
  }

  get_wccpci(category) {
    this.loading = true;
    this.article.wccpci(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.wccpci = data;
      });
  }

  get_cardic(category) {
    this.loading = true;
    this.article.cardic(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.cardic = data;
      });
  }

  get_emcure(category) {
    this.loading = true;
    this.article.emcure(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.emcure = data;
        console.log('Emcure Category Videos Displaying here ', this.emcure);
        console.log('Emcure Category Videos Displaying here ', this.emcure['data'][0]);
      });
  }

  get_apvic(category) {
    this.loading = true;
    this.article.apvic(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.apvic = data;
      });
  }

  get_csicon(category) {
    this.loading = true;
    this.article.csicon(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.csicon = data;
      });
  }

  get_wcchd(category) {
    this.loading = true;
    this.article.wcchd(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.wcchd = data;
      });
  }

  get_ihj(category) {
    this.loading = true;
    this.article.ihj(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.ihj = data;
      });
  }

  get_ias(category) {
    this.loading = true;
    this.article.ias(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.ias = data;
      });
  }

   get_stemi_india(category){
     this.loading = true;
     this.article.stemi_india(category).subscribe(
       data => {
         this.loading = false;
         console.log('all categoryies videos ', data, category);
         this.stemi = data;
       });
   }


  get_aicog(category){
    console.log('aicog');
    this.loading = true;
    this.article.aicog(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.aicog = data;
        console.log('length'+this.aicog.length);
        console.log('aicog'+this.aicog);
      });
  }

  get_wccicc(category){
    console.log('aicog');
    this.loading = true;
    this.article.wccicc(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.wccicc = data;
      });
  }

  get_csitv(category){
    console.log('aicog');
    this.loading = true;
    this.article.csitv(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.csitv = data;
      });
  }

  get_c_three(category){
    console.log('aicog');
    this.loading = true;
    this.article.c_three(category).subscribe(
      data => {
        this.loading = false;
        console.log('all categoryies videos ', data, category);
        this.c_three = data;
      });
  }

}
