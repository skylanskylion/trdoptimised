import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePodcastComponent } from './single-podcast.component';

describe('SinglePodcastComponent', () => {
  let component: SinglePodcastComponent;
  let fixture: ComponentFixture<SinglePodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
