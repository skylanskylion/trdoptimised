import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastMailComponent } from './podcast-mail.component';

describe('PodcastMailComponent', () => {
  let component: PodcastMailComponent;
  let fixture: ComponentFixture<PodcastMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
