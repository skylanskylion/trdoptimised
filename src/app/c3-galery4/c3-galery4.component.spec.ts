import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3Galery4Component } from './c3-galery4.component';

describe('C3Galery4Component', () => {
  let component: C3Galery4Component;
  let fixture: ComponentFixture<C3Galery4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3Galery4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3Galery4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
