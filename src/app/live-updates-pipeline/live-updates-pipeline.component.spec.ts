import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUpdatesPipelineComponent } from './live-updates-pipeline.component';

describe('LiveUpdatesPipelineComponent', () => {
  let component: LiveUpdatesPipelineComponent;
  let fixture: ComponentFixture<LiveUpdatesPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveUpdatesPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveUpdatesPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
