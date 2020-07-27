import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csi2017GalleryComponent } from './csi2017-gallery.component';

describe('Csi2017GalleryComponent', () => {
  let component: Csi2017GalleryComponent;
  let fixture: ComponentFixture<Csi2017GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csi2017GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csi2017GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
