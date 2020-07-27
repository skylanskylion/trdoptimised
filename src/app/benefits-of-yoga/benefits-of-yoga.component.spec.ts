import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BenefitsOfYogaComponent} from './benefits-of-yoga.component';

describe('BenefitsOfYogaComponent', () => {
  let component: BenefitsOfYogaComponent;
  let fixture: ComponentFixture<BenefitsOfYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitsOfYogaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsOfYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
