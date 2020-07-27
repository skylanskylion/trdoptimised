import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionsFaqComponent } from './ask-questions-faq.component';

describe('AskQuestionsFaqComponent', () => {
  let component: AskQuestionsFaqComponent;
  let fixture: ComponentFixture<AskQuestionsFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskQuestionsFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionsFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
