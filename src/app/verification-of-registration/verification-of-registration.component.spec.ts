import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationOfRegistrationComponent } from './verification-of-registration.component';

describe('VerificationOfRegistrationComponent', () => {
  let component: VerificationOfRegistrationComponent;
  let fixture: ComponentFixture<VerificationOfRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationOfRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationOfRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
