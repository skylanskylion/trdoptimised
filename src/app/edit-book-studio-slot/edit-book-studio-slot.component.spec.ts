import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookStudioSlotComponent } from './edit-book-studio-slot.component';

describe('EditBookStudioSlotComponent', () => {
  let component: EditBookStudioSlotComponent;
  let fixture: ComponentFixture<EditBookStudioSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBookStudioSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookStudioSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
