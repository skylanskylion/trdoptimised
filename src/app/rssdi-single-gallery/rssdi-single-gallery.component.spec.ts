import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssdiSingleGalleryComponent } from './rssdi-single-gallery.component';

describe('RssdiSingleGalleryComponent', () => {
  let component: RssdiSingleGalleryComponent;
  let fixture: ComponentFixture<RssdiSingleGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssdiSingleGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssdiSingleGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
