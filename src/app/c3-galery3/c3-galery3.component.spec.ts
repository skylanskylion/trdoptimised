import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3Galery3Component } from './c3-galery3.component';

describe('C3Galery3Component', () => {
  let component: C3Galery3Component;
  let fixture: ComponentFixture<C3Galery3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3Galery3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3Galery3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
