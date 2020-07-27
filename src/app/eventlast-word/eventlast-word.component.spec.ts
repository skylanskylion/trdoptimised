import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlastWordComponent } from './eventlast-word.component';

describe('EventlastWordComponent', () => {
  let component: EventlastWordComponent;
  let fixture: ComponentFixture<EventlastWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlastWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlastWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
