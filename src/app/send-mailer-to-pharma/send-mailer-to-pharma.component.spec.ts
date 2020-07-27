import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailerToPharmaComponent } from './send-mailer-to-pharma.component';

describe('SendMailerToPharmaComponent', () => {
  let component: SendMailerToPharmaComponent;
  let fixture: ComponentFixture<SendMailerToPharmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMailerToPharmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMailerToPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
