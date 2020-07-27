import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrHkChopraComponent} from './dr-hk-chopra.component';

describe('DrHkChopraComponent', () => {
  let component: DrHkChopraComponent;
  let fixture: ComponentFixture<DrHkChopraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrHkChopraComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrHkChopraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
