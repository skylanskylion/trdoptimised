import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrdRegistrationFormComponent } from './trd-registration-form.component';

describe('TrdRegistrationFormComponent', () => {
  let component: TrdRegistrationFormComponent;
  let fixture: ComponentFixture<TrdRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrdRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrdRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
