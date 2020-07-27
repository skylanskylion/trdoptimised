import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlastWordSingleComponent } from './eventlast-word-single.component';

describe('EventlastWordSingleComponent', () => {
  let component: EventlastWordSingleComponent;
  let fixture: ComponentFixture<EventlastWordSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlastWordSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlastWordSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
