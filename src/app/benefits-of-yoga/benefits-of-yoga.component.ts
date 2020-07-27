import {Component, OnInit} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';

@Component({
  selector: 'app-benefits-of-yoga',
  templateUrl: './benefits-of-yoga.component.html',
  styleUrls: ['./benefits-of-yoga.component.css']
})
export class BenefitsOfYogaComponent implements OnInit {
  yoga: any;
  str: any;
  conv: object[] = [];

  constructor(private CatagoryService: CatagoryServiceService) {
  }

  ngOnInit() {
    this.get_benefits_of_yoga();

  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  get_benefits_of_yoga() {
    console.log('get catagory calling');
    this.CatagoryService.get_benefits_of_yoga().subscribe(
      data => {
        this.str = 'Benefits Of Yoga';
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
