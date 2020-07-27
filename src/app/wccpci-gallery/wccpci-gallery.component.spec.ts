import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WccpciGalleryComponent } from './wccpci-gallery.component';

describe('WccpciGalleryComponent', () => {
  let component: WccpciGalleryComponent;
  let fixture: ComponentFixture<WccpciGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccpciGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccpciGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
