import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauticUserDashboardComponent } from './mautic-user-dashboard.component';

describe('MauticUserDashboardComponent', () => {
  let component: MauticUserDashboardComponent;
  let fixture: ComponentFixture<MauticUserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauticUserDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauticUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
