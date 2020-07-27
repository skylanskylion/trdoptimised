import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLastWordWithoutEventComponent } from './the-last-word-without-event.component';

describe('TheLastWordWithoutEventComponent', () => {
  let component: TheLastWordWithoutEventComponent;
  let fixture: ComponentFixture<TheLastWordWithoutEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheLastWordWithoutEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheLastWordWithoutEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
