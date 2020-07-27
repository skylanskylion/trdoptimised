import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionLoginPageComponent } from './subscription-login-page.component';

describe('SubscriptionLoginPageComponent', () => {
  let component: SubscriptionLoginPageComponent;
  let fixture: ComponentFixture<SubscriptionLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
