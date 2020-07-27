import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInContributionComponent } from './log-in-contribution.component';

describe('LogInContributionComponent', () => {
  let component: LogInContributionComponent;
  let fixture: ComponentFixture<LogInContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
