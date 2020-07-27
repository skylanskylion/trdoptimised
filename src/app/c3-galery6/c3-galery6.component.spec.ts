import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3Galery6Component } from './c3-galery6.component';

describe('C3Galery6Component', () => {
  let component: C3Galery6Component;
  let fixture: ComponentFixture<C3Galery6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3Galery6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3Galery6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
