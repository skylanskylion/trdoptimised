import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionLandingPageComponent } from './subscription-landing-page.component';

describe('SubscriptionLandingPageComponent', () => {
  let component: SubscriptionLandingPageComponent;
  let fixture: ComponentFixture<SubscriptionLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
