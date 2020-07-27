import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBenefitsOfYoga1Component } from './single-benefits-of-yoga1.component';

describe('SingleBenefitsOfYoga1Component', () => {
  let component: SingleBenefitsOfYoga1Component;
  let fixture: ComponentFixture<SingleBenefitsOfYoga1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBenefitsOfYoga1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBenefitsOfYoga1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
