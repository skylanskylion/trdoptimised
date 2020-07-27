import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSliderComponent } from './presentation-slider.component';

describe('PresentationSliderComponent', () => {
  let component: PresentationSliderComponent;
  let fixture: ComponentFixture<PresentationSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
