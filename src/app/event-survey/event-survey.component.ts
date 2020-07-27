import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-survey',
  templateUrl: './event-survey.component.html',
  styleUrls: ['./event-survey.component.css']
})
export class EventSurveyComponent implements OnInit {
    seasons = ['yes' , 'No']
  constructor() { }

  ngOnInit() {
  }

}
