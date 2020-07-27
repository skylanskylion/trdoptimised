import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailForInterviewVideoEditComponent } from './send-email-for-interview-video-edit.component';

describe('SendEmailForInterviewVideoEditComponent', () => {
  let component: SendEmailForInterviewVideoEditComponent;
  let fixture: ComponentFixture<SendEmailForInterviewVideoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendEmailForInterviewVideoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailForInterviewVideoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
