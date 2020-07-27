import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauticUserLoginComponent } from './mautic-user-login.component';

describe('MauticUserLoginComponent', () => {
  let component: MauticUserLoginComponent;
  let fixture: ComponentFixture<MauticUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauticUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauticUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
