import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailForTranscriptComponent } from './send-email-for-transcript.component';

describe('SendEmailForTranscriptComponent', () => {
  let component: SendEmailForTranscriptComponent;
  let fixture: ComponentFixture<SendEmailForTranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendEmailForTranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailForTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
