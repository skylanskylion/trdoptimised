import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSalesforceContactsComponent } from './import-salesforce-contacts.component';

describe('ImportSalesforceContactsComponent', () => {
  let component: ImportSalesforceContactsComponent;
  let fixture: ComponentFixture<ImportSalesforceContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportSalesforceContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportSalesforceContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
