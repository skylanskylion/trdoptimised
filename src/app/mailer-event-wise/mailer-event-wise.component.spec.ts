import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailerEventWiseComponent } from './mailer-event-wise.component';

describe('MailerEventWiseComponent', () => {
  let component: MailerEventWiseComponent;
  let fixture: ComponentFixture<MailerEventWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailerEventWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailerEventWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
