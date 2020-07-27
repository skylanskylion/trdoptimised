import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailerToDocsComponent } from './send-mailer-to-docs.component';

describe('SendMailerToDocsComponent', () => {
  let component: SendMailerToDocsComponent;
  let fixture: ComponentFixture<SendMailerToDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMailerToDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMailerToDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
