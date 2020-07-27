import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLiveUpdateDashboardComponent } from './login-live-update-dashboard.component';

describe('LoginLiveUpdateDashboardComponent', () => {
  let component: LoginLiveUpdateDashboardComponent;
  let fixture: ComponentFixture<LoginLiveUpdateDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLiveUpdateDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLiveUpdateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
