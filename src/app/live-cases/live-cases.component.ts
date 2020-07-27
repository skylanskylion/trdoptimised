import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute} from '@angular/router';
import {CatagoryServiceService} from '../catagory-service.service';

@Component({
  selector: 'app-live-cases',
  templateUrl: './live-cases.component.html',
  styleUrls: ['./live-cases.component.css']
})
export class LiveCasesComponent implements OnInit {
  event: 'csinic-2016';
  article: any;
  arr: any = [];
  conv: object[] = [];

  constructor(private route: ActivatedRoute, private service: CatagoryServiceService, private serviceh: ArticleService) {
  }

  ngOnInit() {
    this.live_cases(this.event);
  }

  live_cases(even) {

    this.service.live_cases(this.event).subscribe(
      data1 => {
        this.article = data1['data'];
        console.log('Data data data', data1['data']);
        for (var i = 0; i < data1['data'].length; i++) {
          this.conv.push(data1['data'][i]);
        }
        this.arr = this.conv;

        console.log('Conv printing here ', this.conv.length);
      }
    );
  }

}


