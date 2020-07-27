import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsletterMailerComponent } from './edit-newsletter-mailer.component';

describe('EditNewsletterMailerComponent', () => {
  let component: EditNewsletterMailerComponent;
  let fixture: ComponentFixture<EditNewsletterMailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsletterMailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsletterMailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
