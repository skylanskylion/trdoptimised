import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUpdatesAocComponent } from './live-updates-aoc.component';

describe('LiveUpdatesAocComponent', () => {
  let component: LiveUpdatesAocComponent;
  let fixture: ComponentFixture<LiveUpdatesAocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveUpdatesAocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveUpdatesAocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
