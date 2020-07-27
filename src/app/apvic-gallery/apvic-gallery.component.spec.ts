import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApvicGalleryComponent } from './apvic-gallery.component';

describe('ApvicGalleryComponent', () => {
  let component: ApvicGalleryComponent;
  let fixture: ComponentFixture<ApvicGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApvicGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApvicGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
