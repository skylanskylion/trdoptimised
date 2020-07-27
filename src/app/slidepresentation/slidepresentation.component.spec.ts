import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidepresentationComponent } from './slidepresentation.component';

describe('SlidepresentationComponent', () => {
  let component: SlidepresentationComponent;
  let fixture: ComponentFixture<SlidepresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidepresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
