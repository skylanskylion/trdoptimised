import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AocMumbaiComponent } from './aoc-mumbai.component';

describe('AocMumbaiComponent', () => {
  let component: AocMumbaiComponent;
  let fixture: ComponentFixture<AocMumbaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AocMumbaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AocMumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
