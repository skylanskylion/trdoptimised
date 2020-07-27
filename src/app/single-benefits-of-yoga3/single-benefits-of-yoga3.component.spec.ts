import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBenefitsOfYoga3Component } from './single-benefits-of-yoga3.component';

describe('SingleBenefitsOfYoga3Component', () => {
  let component: SingleBenefitsOfYoga3Component;
  let fixture: ComponentFixture<SingleBenefitsOfYoga3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBenefitsOfYoga3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBenefitsOfYoga3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
