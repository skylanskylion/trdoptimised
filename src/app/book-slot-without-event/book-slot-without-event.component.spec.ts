import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSlotWithoutEventComponent } from './book-slot-without-event.component';

describe('BookSlotWithoutEventComponent', () => {
  let component: BookSlotWithoutEventComponent;
  let fixture: ComponentFixture<BookSlotWithoutEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSlotWithoutEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSlotWithoutEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
