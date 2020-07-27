import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionBillingDetailsComponent } from './subscription-billing-details.component';

describe('SubscriptionBillingDetailsComponent', () => {
  let component: SubscriptionBillingDetailsComponent;
  let fixture: ComponentFixture<SubscriptionBillingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionBillingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionBillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
