import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-event',
  templateUrl: './presentation-event.component.html',
  styleUrls: ['./presentation-event.component.css']
})
export class PresentationEventComponent implements OnInit {
 pdfSrc="https://storage.googleapis.com/web-assets/presentations/Knowledge%20Partner%20Presentation17.pdf";
  constructor() { }

  ngOnInit() {
  }

}
