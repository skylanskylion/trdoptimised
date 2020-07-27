import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageTheLastWordWithoutEventComponent } from './single-page-the-last-word-without-event.component';

describe('SinglePageTheLastWordWithoutEventComponent', () => {
  let component: SinglePageTheLastWordWithoutEventComponent;
  let fixture: ComponentFixture<SinglePageTheLastWordWithoutEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePageTheLastWordWithoutEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageTheLastWordWithoutEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
