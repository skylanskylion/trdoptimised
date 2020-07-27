import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GetAGoodStartComponent} from './get-a-good-start.component';

describe('GetAGoodStartComponent', () => {
  let component: GetAGoodStartComponent;
  let fixture: ComponentFixture<GetAGoodStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GetAGoodStartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAGoodStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
