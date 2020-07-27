import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPageLastMinuteComponent } from './question-page-last-minute.component';

describe('QuestionPageLastMinuteComponent', () => {
  let component: QuestionPageLastMinuteComponent;
  let fixture: ComponentFixture<QuestionPageLastMinuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPageLastMinuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPageLastMinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
