import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSurveyComponent } from './event-survey.component';

describe('EventSurveyComponent', () => {
  let component: EventSurveyComponent;
  let fixture: ComponentFixture<EventSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
