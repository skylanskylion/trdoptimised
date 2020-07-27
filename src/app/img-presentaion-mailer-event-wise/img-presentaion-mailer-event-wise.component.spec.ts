import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPresentaionMailerEventWiseComponent } from './img-presentaion-mailer-event-wise.component';

describe('ImgPresentaionMailerEventWiseComponent', () => {
  let component: ImgPresentaionMailerEventWiseComponent;
  let fixture: ComponentFixture<ImgPresentaionMailerEventWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPresentaionMailerEventWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPresentaionMailerEventWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
