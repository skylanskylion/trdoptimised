import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGetComponent } from './sales-get.component';

describe('SalesGetComponent', () => {
  let component: SalesGetComponent;
  let fixture: ComponentFixture<SalesGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
