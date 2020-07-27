import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUpdateTopstoriesDashboardComponent } from './live-update-topstories-dashboard.component';

describe('LiveUpdateTopstoriesDashboardComponent', () => {
  let component: LiveUpdateTopstoriesDashboardComponent;
  let fixture: ComponentFixture<LiveUpdateTopstoriesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveUpdateTopstoriesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveUpdateTopstoriesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
