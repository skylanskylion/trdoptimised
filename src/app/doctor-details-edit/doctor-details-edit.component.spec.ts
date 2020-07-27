import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DoctorDetailsEditComponent} from './doctor-details-edit.component';

describe('DoctorDetailsEditComponent', () => {
  let component: DoctorDetailsEditComponent;
  let fixture: ComponentFixture<DoctorDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorDetailsEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
