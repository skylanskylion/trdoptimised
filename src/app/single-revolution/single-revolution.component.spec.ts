import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleRevolutionComponent} from './single-revolution.component';

describe('SingleRevolutionComponent', () => {
  let component: SingleRevolutionComponent;
  let fixture: ComponentFixture<SingleRevolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleRevolutionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
