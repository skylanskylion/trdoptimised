import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wccpci-gallery',
  templateUrl: './wccpci-gallery.component.html',
  styleUrls: ['./wccpci-gallery.component.css']
})
export class WccpciGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    Range(number) {
        var items: number[] = [];
        for (var i = 0; i <= number - 1; i++) {
            items.push(i);
        }
        return items;
    }
    createRangeImages(number) {
        var items: number[] = [];
        for( var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    }

}
