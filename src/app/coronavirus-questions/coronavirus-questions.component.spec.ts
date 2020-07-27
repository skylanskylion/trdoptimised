import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronavirusQuestionsComponent } from './coronavirus-questions.component';

describe('CoronavirusQuestionsComponent', () => {
  let component: CoronavirusQuestionsComponent;
  let fixture: ComponentFixture<CoronavirusQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronavirusQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronavirusQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
