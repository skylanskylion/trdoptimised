import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookSlotWithoutEventComponent } from './edit-book-slot-without-event.component';

describe('EditBookSlotWithoutEventComponent', () => {
  let component: EditBookSlotWithoutEventComponent;
  let fixture: ComponentFixture<EditBookSlotWithoutEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBookSlotWithoutEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookSlotWithoutEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
