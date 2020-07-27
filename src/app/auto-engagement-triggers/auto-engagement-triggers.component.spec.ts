import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoEngagementTriggersComponent } from './auto-engagement-triggers.component';

describe('AutoEngagementTriggersComponent', () => {
  let component: AutoEngagementTriggersComponent;
  let fixture: ComponentFixture<AutoEngagementTriggersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoEngagementTriggersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoEngagementTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
