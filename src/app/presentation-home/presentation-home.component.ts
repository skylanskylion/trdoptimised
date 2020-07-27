import {Component, Input, OnInit} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';

@Component({
  selector: 'app-presentation-home',
  templateUrl: './presentation-home.component.html',
  styleUrls: ['./presentation-home.component.css']
})
export class PresentationHomeComponent implements OnInit {
  @Input() presentations: any;
  public imagesUrl;
  total_art: any;
  articles: any;
  conv: object[] = [];

  constructor( private service: CatagoryServiceService) {
  }

  ngOnInit() {
    this.presentation_all('wccpci-2016');
    this.imagesUrl = [
      '/assets/new-home-page/single/imagess/04-large.jpg',
      '/assets/new-home-page/single/imagess/03-large.jpg',
      '/assets/new-home-page/single/imagess/05-large.jpg',
    ];
  }
  presentation_all(event) {
    // console.log(this.event);
    this.service.get_presentation_all(event).subscribe(
        data1 => {
            this.total_art = data1;
            this.articles = data1['data'];
            console.log('articles data ', this.articles);
            console.log('Data data data', data1['data']);
          
                for (var i = 0; i < data1['data'].length; i++) {
                    this.conv.push(data1['data'][i]);
                }
            
            console.log('Conv printing here ', this.conv);
        }
    );
}

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
}
