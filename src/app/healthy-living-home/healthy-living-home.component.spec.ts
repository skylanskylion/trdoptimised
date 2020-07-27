import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HealthyLivingHomeComponent} from './healthy-living-home.component';

describe('HealthyLivingHomeComponent', () => {
  let component: HealthyLivingHomeComponent;
  let fixture: ComponentFixture<HealthyLivingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HealthyLivingHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyLivingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
