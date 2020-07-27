import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slidepresentation',
  templateUrl: './slidepresentation.component.html',
  styleUrls: ['./slidepresentation.component.css']
})
export class SlidepresentationComponent implements OnInit {
  public imagesUrls;
  current: any;
  n: any;
  @ViewChild("slideshow") slideshow: any;
  constructor() { }

  ngOnInit() {
    this.imagesUrls = [
      '../assets/img/icon_4.png',
      '../assets/img/Slide3.JPG',
      '../assets/img/R.png'
    ];
    this.current = this.slideshow.getRightSideIndex()+1;
  }
  check(){
  }
  onPrevious(){
    if(this.current!=1 && this.current<=this.imagesUrls.length){
      this.current = this.current-1;
    } else {
      this.current = this.imagesUrls.length;
    }
    this.slideshow.onSlide(-1);
  }
  onNext(){
    this.current = this.slideshow.getRightSideIndex()+1;
    this.slideshow.onSlide(1);
  }

}
