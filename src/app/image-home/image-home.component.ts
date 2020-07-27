import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-home',
  templateUrl: './image-home.component.html',
  styleUrls: ['./image-home.component.css']
})
export class ImageHomeComponent implements OnInit {
  @Input() photos: any;
  @Input() config: any;
  public imagesUrl;

  constructor() {
  }

  ngOnInit() {
    this.imagesUrl = [
      '/assets/new-home-page/single/imagess/80-medium.jpg',
      '/assets/new-home-page/single/imagess/81-medium.jpg',
      '/assets/new-home-page/single/imagess/77-medium.jpg',
      '/assets/new-home-page/single/imagess/71-medium.jpg',
      '/assets/new-home-page/single/imagess/56-medium.jpg',
    ];
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
}
