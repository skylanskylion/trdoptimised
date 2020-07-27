import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormCovidComponent } from './registration-form-covid.component';

describe('RegistrationFormCovidComponent', () => {
  let component: RegistrationFormCovidComponent;
  let fixture: ComponentFixture<RegistrationFormCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFormCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
