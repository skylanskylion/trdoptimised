import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleYogaOfWccpc2Component } from './single-yoga-of-wccpc2.component';

describe('SingleYogaOfWccpc2Component', () => {
  let component: SingleYogaOfWccpc2Component;
  let fixture: ComponentFixture<SingleYogaOfWccpc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleYogaOfWccpc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleYogaOfWccpc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
