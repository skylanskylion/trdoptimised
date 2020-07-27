import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-conversation-home',
  templateUrl: './conversation-home.component.html',
  styles: []
})
export class ConversationHomeComponent implements OnInit {

  @Input() in_conversation: any;

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
