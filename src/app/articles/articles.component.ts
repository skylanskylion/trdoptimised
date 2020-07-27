import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface Element {
  admin_note: string;
  is_live: boolean;
  title: string;
  headline: string;
  sub_headline: string;
  slug: string;
  video_url: string;
  total_views: number;
  similar_topic: string;
  guest1_img_url: string;
  category: string;
  event: string;
}

export class ExpansionOverviewExample {
  panelOpenState: boolean = false;
}


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  model: any = {};

  displayedColumns: any;
  dataSource: any;
  list: any;
  // list: object[] = [];
  t: any;
  model1: any = {};

  doc_name: any;
  doc_speciality: any;
  doc_designation: any;
  e_slug: any;
  editform: any;
  slug: any;
  articles: any;
  flag;
  check = 'false';
  articless: Array<any>;

  constructor(private article: ArticleService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    /*this.list_table() ;*/

    if ((localStorage.getItem('articles')) != 'true') {
      var username = window.prompt('Enter your username', '');
      var password = window.prompt('Enter your password', '');
      var user1 = 'articles';
      var pass1 = 'trd123!!!';

      if (username == user1 && password == pass1) {
        alert('Success');
        this.flag = 0;
        localStorage.setItem('articles', 'false');
      }
      else {
        // localStorage.setItem('doctor','false');
        this.flag = 1;
        this.router.navigate(['notfound']); // works well
        return;
      }
      if (this.flag == 0) {

        this.route.params.subscribe(params => {
          this.t = params['type'];
          this.article.table_data().subscribe(
            data => {
              this.articles = data['data'];
              console.log(this.articles);


              const ELEMENT_DATA: Element[] = this.articles;
              console.log('Element', ELEMENT_DATA);

              this.displayedColumns = ['headline', 'sub_headline', 'slug', 'category', 'event'];

              // this.dataSource = ELEMENT_DATA;

              this.dataSource = new MatTableDataSource(ELEMENT_DATA);
              this.dataSource.paginator = this.paginator;

            });
        });


      }
    }

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }

  create() {
    this.model.event = 'csi-2017-23';
    this.model.slug = 'devidas-23';
    console.log(this.model);
    const temp_data = this.model;
    this.articles_create(temp_data);
  }


  articles_create(data) {
    this.article.articles_create(data).subscribe(
      data => {
        console.log(data);
        this.articles = data;
        this.check = 'true';
        if (this.check == 'true') {
          alert('Success');
        }
      });

  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  /*list_table(){
    this.article.list_table().subscribe(
      data => {
        console.log("Here",data['data']);
        this.articless=data['data'] ;
        console.log("Here Am I",this.articless[0].slug) ;
      });
    /!*console.log("Here Am I",this.articles['data']) ;*!/
  }*/
  displayform() {
    this.e_slug = this.model1.e_slug;
    this.article.displayform(this.e_slug).subscribe(
      data => {
        console.log(data['data']);
        this.model = data['data'];
        this.check = 'true';
        if (this.check == 'true') {
          alert('Success');
        }
      });
    //console.log(this.editform) ;
  }

  update_edit() {
    // this.title = this.model.title ;
    // console.log(this.editform) ;
    /* this.model.slug= "dr-ashwini-bhalerao-gandhi-hepatitis-pregnancy";
     this.model.category = "the-interview" ;
     this.model.event = "aicog-2018" ;*/
    console.log('update form');
    console.log(this.model.slug);
    this.article.update_edit(this.model, this.model.slug).subscribe(
      data => {
        console.log(data['data']);
        this.editform = data['data'];
        this.check = 'true';
        if (this.check == 'true') {
          alert('Success');
        }
      });
    //console.log(this.editform) ;
  }


  deleteform() {
    // this.title = this.model.title ;
    this.slug = this.model.slug;

    this.article.deleteform(this.slug).subscribe(
      data => {
        console.log(data['data']);
        this.check = 'true';
        if (this.check == 'true') {
          alert('Success');
        }
        //this.editform = data['data'] ;
      });
    //console.log(this.editform) ;
  }
}
