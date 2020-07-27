import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLiveUpdatesComponent } from './login-live-updates.component';

describe('LoginLiveUpdatesComponent', () => {
  let component: LoginLiveUpdatesComponent;
  let fixture: ComponentFixture<LoginLiveUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLiveUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLiveUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
