import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPostComponent } from './sales-post.component';

describe('SalesPostComponent', () => {
  let component: SalesPostComponent;
  let fixture: ComponentFixture<SalesPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
