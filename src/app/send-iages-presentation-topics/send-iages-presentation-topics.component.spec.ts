import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendIagesPresentationTopicsComponent } from './send-iages-presentation-topics.component';

describe('SendIagesPresentationTopicsComponent', () => {
  let component: SendIagesPresentationTopicsComponent;
  let fixture: ComponentFixture<SendIagesPresentationTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendIagesPresentationTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendIagesPresentationTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
