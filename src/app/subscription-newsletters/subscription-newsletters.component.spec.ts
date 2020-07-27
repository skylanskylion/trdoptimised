import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionNewslettersComponent } from './subscription-newsletters.component';

describe('SubscriptionNewslettersComponent', () => {
  let component: SubscriptionNewslettersComponent;
  let fixture: ComponentFixture<SubscriptionNewslettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionNewslettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionNewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
