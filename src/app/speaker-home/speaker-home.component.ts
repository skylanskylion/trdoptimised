import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-speaker-home',
  templateUrl: './speaker-home.component.html',
  styles: []
})
export class SpeakerHomeComponent implements OnInit {
  @Input() spk_data;
  any;

  constructor() {
  }

  ngOnInit() {
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
}
