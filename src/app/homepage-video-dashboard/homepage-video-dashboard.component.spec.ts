import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageVideoDashboardComponent } from './homepage-video-dashboard.component';

describe('HomepageVideoDashboardComponent', () => {
  let component: HomepageVideoDashboardComponent;
  let fixture: ComponentFixture<HomepageVideoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageVideoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageVideoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
