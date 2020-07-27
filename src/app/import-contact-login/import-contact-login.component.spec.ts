import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportContactLoginComponent } from './import-contact-login.component';

describe('ImportContactLoginComponent', () => {
  let component: ImportContactLoginComponent;
  let fixture: ComponentFixture<ImportContactLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportContactLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportContactLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
