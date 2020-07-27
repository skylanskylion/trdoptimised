import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomemadeRemediesComponent} from './homemade-remedies.component';

describe('HomemadeRemediesComponent', () => {
  let component: HomemadeRemediesComponent;
  let fixture: ComponentFixture<HomemadeRemediesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomemadeRemediesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemadeRemediesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
