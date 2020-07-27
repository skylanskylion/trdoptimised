import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IagesComponent } from './iages.component';

describe('IagesComponent', () => {
  let component: IagesComponent;
  let fixture: ComponentFixture<IagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
