import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-doctor-details-edit',
  templateUrl: './doctor-details-edit.component.html',
  styleUrls: ['./doctor-details-edit.component.css']
})
export class DoctorDetailsEditComponent implements OnInit {
  model: any = {};
  e_slug: any;
  edit: any;
  articles: any;

  constructor(private article: ArticleService, private route: ActivatedRoute, router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.titleService.setTitle(params['slug'] + '|TheRighDoctors');
      if (params['slug']) {
        console.log(params['slug']);
        this.e_slug = params['slug'];
        this.edit_form(this.e_slug);
      }
    });
  }

  edit_form(slug) {
    this.article.edit_doctor_details(slug).subscribe(data => {
      console.log(data);
      this.model = data['data'];
      //console.log("new",this.edit.slug);
    });

  }

  update_dotor_details_edit() {
    this.model.slug = this.e_slug;
    console.log(this.model.slug);
    console.log('hiiii');
    this.article.update_dotor_details_edit(this.model, this.model.slug).subscribe(
      data => {
        console.log('after update ', data['data']);
      }
    );
  }

}
