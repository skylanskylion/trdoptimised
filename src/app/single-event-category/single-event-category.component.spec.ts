import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleEventCategoryComponent} from './single-event-category.component';

describe('SingleEventCategoryComponent', () => {
  let component: SingleEventCategoryComponent;
  let fixture: ComponentFixture<SingleEventCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleEventCategoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEventCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
