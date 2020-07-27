import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEsiconSlotBookingComponent } from './edit-esicon-slot-booking.component';

describe('EditEsiconSlotBookingComponent', () => {
  let component: EditEsiconSlotBookingComponent;
  let fixture: ComponentFixture<EditEsiconSlotBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEsiconSlotBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEsiconSlotBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
