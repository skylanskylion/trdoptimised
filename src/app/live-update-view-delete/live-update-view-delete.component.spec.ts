import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUpdateViewDeleteComponent } from './live-update-view-delete.component';

describe('LiveUpdateViewDeleteComponent', () => {
  let component: LiveUpdateViewDeleteComponent;
  let fixture: ComponentFixture<LiveUpdateViewDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveUpdateViewDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveUpdateViewDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
