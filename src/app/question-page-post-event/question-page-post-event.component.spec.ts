import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPagePostEventComponent } from './question-page-post-event.component';

describe('QuestionPagePostEventComponent', () => {
  let component: QuestionPagePostEventComponent;
  let fixture: ComponentFixture<QuestionPagePostEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPagePostEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPagePostEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
