import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUpdatesMainDashboardComponent } from './live-updates-main-dashboard.component';

describe('LiveUpdatesMainDashboardComponent', () => {
  let component: LiveUpdatesMainDashboardComponent;
  let fixture: ComponentFixture<LiveUpdatesMainDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveUpdatesMainDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveUpdatesMainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
