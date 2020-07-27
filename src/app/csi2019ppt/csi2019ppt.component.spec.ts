import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csi2019pptComponent } from './csi2019ppt.component';

describe('Csi2019pptComponent', () => {
  let component: Csi2019pptComponent;
  let fixture: ComponentFixture<Csi2019pptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csi2019pptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csi2019pptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
