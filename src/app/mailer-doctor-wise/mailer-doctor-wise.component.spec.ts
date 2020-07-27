import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailerDoctorWiseComponent } from './mailer-doctor-wise.component';

describe('MailerDoctorWiseComponent', () => {
  let component: MailerDoctorWiseComponent;
  let fixture: ComponentFixture<MailerDoctorWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailerDoctorWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailerDoctorWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
