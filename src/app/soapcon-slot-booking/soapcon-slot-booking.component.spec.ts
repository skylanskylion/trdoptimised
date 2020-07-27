import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapconSlotBookingComponent } from './soapcon-slot-booking.component';

describe('SoapconSlotBookingComponent', () => {
  let component: SoapconSlotBookingComponent;
  let fixture: ComponentFixture<SoapconSlotBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoapconSlotBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapconSlotBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
