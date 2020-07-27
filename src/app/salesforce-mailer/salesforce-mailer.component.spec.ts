import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforceMailerComponent } from './salesforce-mailer.component';

describe('SalesforceMailerComponent', () => {
  let component: SalesforceMailerComponent;
  let fixture: ComponentFixture<SalesforceMailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesforceMailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesforceMailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
