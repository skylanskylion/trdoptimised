import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamingDashboardComponent } from './live-streaming-dashboard.component';

describe('LiveStreamingDashboardComponent', () => {
  let component: LiveStreamingDashboardComponent;
  let fixture: ComponentFixture<LiveStreamingDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStreamingDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStreamingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
