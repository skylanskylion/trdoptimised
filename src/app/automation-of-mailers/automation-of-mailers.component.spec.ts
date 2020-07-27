import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationOfMailersComponent } from './automation-of-mailers.component';

describe('AutomationOfMailersComponent', () => {
  let component: AutomationOfMailersComponent;
  let fixture: ComponentFixture<AutomationOfMailersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomationOfMailersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationOfMailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
