import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionLoginComponent } from './subscription-login.component';

describe('SubscriptionLoginComponent', () => {
  let component: SubscriptionLoginComponent;
  let fixture: ComponentFixture<SubscriptionLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
