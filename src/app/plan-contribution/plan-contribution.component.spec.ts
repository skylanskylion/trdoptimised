import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanContributionComponent } from './plan-contribution.component';

describe('PlanContributionComponent', () => {
  let component: PlanContributionComponent;
  let fixture: ComponentFixture<PlanContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
