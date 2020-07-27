import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csicon2019EditSlotComponent } from './csicon2019-edit-slot.component';

describe('Csicon2019EditSlotComponent', () => {
  let component: Csicon2019EditSlotComponent;
  let fixture: ComponentFixture<Csicon2019EditSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csicon2019EditSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csicon2019EditSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
