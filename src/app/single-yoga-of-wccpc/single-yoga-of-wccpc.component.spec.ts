import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleYogaOfWccpcComponent } from './single-yoga-of-wccpc.component';

describe('SingleYogaOfWccpcComponent', () => {
  let component: SingleYogaOfWccpcComponent;
  let fixture: ComponentFixture<SingleYogaOfWccpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleYogaOfWccpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleYogaOfWccpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
