import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUpdateFormComponent } from './live-update-form.component';

describe('LiveUpdateFormComponent', () => {
  let component: LiveUpdateFormComponent;
  let fixture: ComponentFixture<LiveUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
