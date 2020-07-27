import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrRishiJainComponent} from './dr-rishi-jain.component';

describe('DrRishiJainComponent', () => {
  let component: DrRishiJainComponent;
  let fixture: ComponentFixture<DrRishiJainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrRishiJainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrRishiJainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
