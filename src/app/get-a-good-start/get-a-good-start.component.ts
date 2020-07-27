import {Component, OnInit} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';

@Component({
  selector: 'app-get-a-good-start',
  templateUrl: './get-a-good-start.component.html',
  styleUrls: ['./get-a-good-start.component.css']
})
export class GetAGoodStartComponent implements OnInit {

  yoga: any;
  str: any;
  conv: object[] = [];

  constructor(private CatagoryService: CatagoryServiceService) {
  }

  ngOnInit() {
    this.get_get_a_good_start();
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  get_get_a_good_start() {
    console.log('get catagory calling');
    this.CatagoryService.get_get_a_good_start().subscribe(
      data => {
        this.str = 'Get a good start';
        for (var i = 0; i < data['data'].length; i++) {
          if (data['data'][i]['alt'] == this.str) {
            this.conv.push(data['data'][i]);
          }
        }
        console.log('I CANT SEE DATA HERE in single componenet : ', this.conv);
      }
    );
  }


}
