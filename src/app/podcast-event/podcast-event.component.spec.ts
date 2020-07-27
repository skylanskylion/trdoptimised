import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastEventComponent } from './podcast-event.component';

describe('PodcastEventComponent', () => {
  let component: PodcastEventComponent;
  let fixture: ComponentFixture<PodcastEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
