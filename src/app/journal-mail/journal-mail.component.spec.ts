import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalMailComponent } from './journal-mail.component';

describe('JournalMailComponent', () => {
  let component: JournalMailComponent;
  let fixture: ComponentFixture<JournalMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
