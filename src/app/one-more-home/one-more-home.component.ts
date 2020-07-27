import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-one-more-home',
  templateUrl: './one-more-home.component.html',
  styles: []
})
export class OneMoreHomeComponent implements OnInit {
  @Input() onemore: any;
  loading: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.loading = false;
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      this.loading = true;
      items.push(i);
    }
    this.loading = false;
    return items;
  }
}
