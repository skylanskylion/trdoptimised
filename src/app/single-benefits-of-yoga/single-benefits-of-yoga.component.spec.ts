import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleBenefitsOfYogaComponent} from './single-benefits-of-yoga.component';

describe('SingleBenefitsOfYogaComponent', () => {
  let component: SingleBenefitsOfYogaComponent;
  let fixture: ComponentFixture<SingleBenefitsOfYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBenefitsOfYogaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBenefitsOfYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
