import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionAccountDetailsComponent } from './subscription-account-details.component';

describe('SubscriptionAccountDetailsComponent', () => {
  let component: SubscriptionAccountDetailsComponent;
  let fixture: ComponentFixture<SubscriptionAccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionAccountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
