import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiconSlotBookingComponent } from './esicon-slot-booking.component';

describe('EsiconSlotBookingComponent', () => {
  let component: EsiconSlotBookingComponent;
  let fixture: ComponentFixture<EsiconSlotBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsiconSlotBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiconSlotBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
