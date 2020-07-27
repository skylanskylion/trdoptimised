import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apvic-gallery',
  templateUrl: './apvic-gallery.component.html',
  styleUrls: ['./apvic-gallery.component.css']
})
export class ApvicGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    createRangeImages(number) {
        var items: number[] = [];
        for( var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    }

}
