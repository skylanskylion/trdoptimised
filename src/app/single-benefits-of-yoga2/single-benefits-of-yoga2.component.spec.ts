import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBenefitsOfYoga2Component } from './single-benefits-of-yoga2.component';

describe('SingleBenefitsOfYoga2Component', () => {
  let component: SingleBenefitsOfYoga2Component;
  let fixture: ComponentFixture<SingleBenefitsOfYoga2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBenefitsOfYoga2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBenefitsOfYoga2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
