import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SnackOfTheDayComponent} from './snack-of-the-day.component';

describe('SnackOfTheDayComponent', () => {
  let component: SnackOfTheDayComponent;
  let fixture: ComponentFixture<SnackOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackOfTheDayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
