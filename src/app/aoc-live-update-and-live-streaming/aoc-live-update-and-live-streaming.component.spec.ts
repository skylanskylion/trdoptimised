import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AocLiveUpdateAndLiveStreamingComponent } from './aoc-live-update-and-live-streaming.component';

describe('AocLiveUpdateAndLiveStreamingComponent', () => {
  let component: AocLiveUpdateAndLiveStreamingComponent;
  let fixture: ComponentFixture<AocLiveUpdateAndLiveStreamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AocLiveUpdateAndLiveStreamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AocLiveUpdateAndLiveStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
