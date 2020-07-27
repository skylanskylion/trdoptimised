import {Component, OnInit} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';

@Component({
  selector: 'app-homemade-remedies',
  templateUrl: './homemade-remedies.component.html',
  styleUrls: ['./homemade-remedies.component.css']
})
export class HomemadeRemediesComponent implements OnInit {

  yoga: any;
  str: any;
  conv: object[] = [];

  constructor(private CatagoryService: CatagoryServiceService) {
  }

  ngOnInit() {
    this.snack_of_the_day();
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  snack_of_the_day() {
    console.log('get catagory calling');
    this.CatagoryService.get_get_a_good_start().subscribe(
      data => {
        this.str = 'HomeMade Remedies';
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
