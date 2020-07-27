import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastSpecialComponent } from './podcast-special.component';

describe('PodcastSpecialComponent', () => {
  let component: PodcastSpecialComponent;
  let fixture: ComponentFixture<PodcastSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
