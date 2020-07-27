import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csicon2019SlotBookingComponent } from './csicon2019-slot-booking.component';

describe('Csicon2019SlotBookingComponent', () => {
  let component: Csicon2019SlotBookingComponent;
  let fixture: ComponentFixture<Csicon2019SlotBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csicon2019SlotBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csicon2019SlotBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
