import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrManishVermaComponent} from './dr-manish-verma.component';

describe('DrManishVermaComponent', () => {
  let component: DrManishVermaComponent;
  let fixture: ComponentFixture<DrManishVermaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrManishVermaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrManishVermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
