import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleYogaOfWccpc1Component } from './single-yoga-of-wccpc1.component';

describe('SingleYogaOfWccpc1Component', () => {
  let component: SingleYogaOfWccpc1Component;
  let fixture: ComponentFixture<SingleYogaOfWccpc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleYogaOfWccpc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleYogaOfWccpc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
