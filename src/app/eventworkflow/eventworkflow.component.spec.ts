import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventworkflowComponent } from './eventworkflow.component';

describe('EventworkflowComponent', () => {
  let component: EventworkflowComponent;
  let fixture: ComponentFixture<EventworkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventworkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
