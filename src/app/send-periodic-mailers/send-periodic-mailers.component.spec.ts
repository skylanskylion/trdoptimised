import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPeriodicMailersComponent } from './send-periodic-mailers.component';

describe('SendPeriodicMailersComponent', () => {
  let component: SendPeriodicMailersComponent;
  let fixture: ComponentFixture<SendPeriodicMailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPeriodicMailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPeriodicMailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
