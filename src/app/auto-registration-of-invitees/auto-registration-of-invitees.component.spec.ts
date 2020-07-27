import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoRegistrationOfInviteesComponent } from './auto-registration-of-invitees.component';

describe('AutoRegistrationOfInviteesComponent', () => {
  let component: AutoRegistrationOfInviteesComponent;
  let fixture: ComponentFixture<AutoRegistrationOfInviteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoRegistrationOfInviteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoRegistrationOfInviteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
