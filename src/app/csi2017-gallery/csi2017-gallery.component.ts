import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csi2017-gallery',
  templateUrl: './csi2017-gallery.component.html',
  styleUrls: ['./csi2017-gallery.component.css']
})
export class Csi2017GalleryComponent implements OnInit {

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
