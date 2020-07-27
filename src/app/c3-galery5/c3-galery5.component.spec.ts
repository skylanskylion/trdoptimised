import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3Galery5Component } from './c3-galery5.component';

describe('C3Galery5Component', () => {
  let component: C3Galery5Component;
  let fixture: ComponentFixture<C3Galery5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3Galery5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3Galery5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
