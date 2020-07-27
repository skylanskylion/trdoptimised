import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordAutoRegistrationOfInviteesComponent } from './reset-password-auto-registration-of-invitees.component';

describe('ResetPasswordAutoRegistrationOfInviteesComponent', () => {
  let component: ResetPasswordAutoRegistrationOfInviteesComponent;
  let fixture: ComponentFixture<ResetPasswordAutoRegistrationOfInviteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordAutoRegistrationOfInviteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordAutoRegistrationOfInviteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
