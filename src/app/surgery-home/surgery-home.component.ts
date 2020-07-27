import {Component, Input, OnInit} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';


@Component({
  selector: 'app-surgery-home',
  templateUrl: './surgery-home.component.html',
  styles: []
})
export class SurgeryHomeComponent implements OnInit {
  revolution: any;

  @Input() surgery_data: any;

  constructor(private service: CatagoryServiceService) {
  }

  ngOnInit() {
    this.get_catagory('revolution-talk')
  } 
  
  
  get_catagory(slug) {
    console.log('get catagory calling');
    this.service.Revolution_Talk().subscribe(
      data => {
        this.revolution = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet : ', this.revolution);
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
