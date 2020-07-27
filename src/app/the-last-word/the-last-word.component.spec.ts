import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TheLastWordComponent} from './the-last-word.component';

describe('TheLastWordComponent', () => {
  let component: TheLastWordComponent;
  let fixture: ComponentFixture<TheLastWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TheLastWordComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheLastWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
