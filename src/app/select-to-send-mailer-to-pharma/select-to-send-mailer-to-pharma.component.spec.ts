import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectToSendMailerToPharmaComponent } from './select-to-send-mailer-to-pharma.component';

describe('SelectToSendMailerToPharmaComponent', () => {
  let component: SelectToSendMailerToPharmaComponent;
  let fixture: ComponentFixture<SelectToSendMailerToPharmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectToSendMailerToPharmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectToSendMailerToPharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
