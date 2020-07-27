import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSubscriptionComponent } from './faq-subscription.component';

describe('FaqSubscriptionComponent', () => {
  let component: FaqSubscriptionComponent;
  let fixture: ComponentFixture<FaqSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
