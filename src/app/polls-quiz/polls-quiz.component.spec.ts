import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsQuizComponent } from './polls-quiz.component';

describe('PollsQuizComponent', () => {
  let component: PollsQuizComponent;
  let fixture: ComponentFixture<PollsQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
