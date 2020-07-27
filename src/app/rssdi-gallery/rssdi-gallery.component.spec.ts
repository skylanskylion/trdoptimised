import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssdiGalleryComponent } from './rssdi-gallery.component';

describe('RssdiGalleryComponent', () => {
  let component: RssdiGalleryComponent;
  let fixture: ComponentFixture<RssdiGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssdiGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssdiGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
