import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassContributionComponent } from './reset-pass-contribution.component';

describe('ResetPassContributionComponent', () => {
  let component: ResetPassContributionComponent;
  let fixture: ComponentFixture<ResetPassContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPassContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
