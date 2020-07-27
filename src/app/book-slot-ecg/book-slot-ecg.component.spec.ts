import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSlotEcgComponent } from './book-slot-ecg.component';

describe('BookSlotEcgComponent', () => {
  let component: BookSlotEcgComponent;
  let fixture: ComponentFixture<BookSlotEcgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSlotEcgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSlotEcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
