import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleYogaOfWccpc3Component } from './single-yoga-of-wccpc3.component';

describe('SingleYogaOfWccpc3Component', () => {
  let component: SingleYogaOfWccpc3Component;
  let fixture: ComponentFixture<SingleYogaOfWccpc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleYogaOfWccpc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleYogaOfWccpc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
