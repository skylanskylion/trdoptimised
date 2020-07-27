import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface Element {
  doctor_name: string;
  designation: string;
  hospital: string;
  number: string;
  email: string;
  slug: string;
  image_url: string;
  doc_personal_website: string;
  doc_official_website: string;
}

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {


  model: any = {};
  check = 'false';
  articles: any;
  slug: any;
  panelOpenState: boolean = false;
  displayedColumns: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private article: ArticleService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    if ((localStorage.getItem('doctor')) != 'true') {
      var username = window.prompt('Enter your username', '');
      var password = window.prompt('Enter your password', '');
      var user1 = 'doctor';
      var pass1 = 'trd123!!!';
      if (username == user1 && password == pass1) {
        alert('Success');
        localStorage.setItem('doctor', 'false');
      }
      else {
        // localStorage.setItem('doctor','false');
        this.router.navigate(['notfound']); // works well
      }
    }
    this.article.table_data_doctor_info().subscribe(
      data => {
        console.log('data:', data['data']);
        this.articles = data['data'];
        const ELEMENT_DATA: Element[] = this.articles;
        console.log('Element', ELEMENT_DATA);
        this.displayedColumns = ['edit', 'doctor_name', 'designation', 'hospital', 'number', 'email', 'slug', 'image_url', 'doc_personal_website', 'doc_official_website'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;

      });


  }

  /* create()
   {
          this.model.email="r131089@gmail.com";
          this.model.slug="naresh-naresh";
          console.log(this.model) ;
          const temp_data=this.model ;
   }*/
  create() {
    //this.model.slug = "aaa-aa-aa" ;
    console.log(this.model);
    const temp_data = this.model;
    this.article.doctorinfo(temp_data).subscribe(
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
    this.slug = this.model.e_slug;
    console.log('hiiii');
    console.log(this.model.e_slug);
    this.article.doctor_deleteform(this.slug).subscribe(
      data => {
        console.log(data['data']);
        this.check = 'true';
        if (this.check == 'true') {
          alert('Success');
        }
      }
    );
  }

  createRangof(number) {
    const item: number[] = [];
    for (let i = 0; i < number; i++) {
      item.push(i);
    }
    return item;

  }


}


